# from fastapi import FastAPI
# from pydantic import BaseModel
# from fastapi.middleware.cors import CORSMiddleware
# import os
# import asyncio
# import httpx

# app = FastAPI(title="Fog Gateway")

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# class RouteReq(BaseModel):
#     start: str
#     end: str

# FOG_NODES = os.environ.get(
#     "FOG_NODES",
#     "http://127.0.0.1:8001/process"
# ).split(",")

# async def call_node(client: httpx.AsyncClient, url: str, payload: dict):
#     try:
#         resp = await client.post(url, json=payload, timeout=5.0)
#         resp.raise_for_status()
#         return resp.json()
#     except Exception:
#         return None

# @app.post("/api/v1/route")
# async def get_route(req: RouteReq):
#     payload = req.dict()
#     async with httpx.AsyncClient() as client:
#         tasks = [call_node(client, node.strip(), payload) for node in FOG_NODES]
#         responses = await asyncio.gather(*tasks, return_exceptions=False)

#     responses = [r for r in responses if r]

#     if not responses:
#         return {"error": "No fog nodes responded", "routes": []}

#     score_map = {"Light": 3, "Moderate": 2, "Heavy": 1}
#     for r in responses:
#         r["score"] = score_map.get(r.get("traffic", ""), 0)

#     best = max(responses, key=lambda x: x.get("score", 0))
#     return {"from": req.start, "to": req.end, "selected": best, "candidates": responses}




# # gateway/app/main.py
# from fastapi import FastAPI
# from pydantic import BaseModel
# from fastapi.middleware.cors import CORSMiddleware
# import os
# import asyncio
# import httpx
# from typing import Optional

# app = FastAPI(title="Fog Gateway (with geocoding)")

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# class RouteReq(BaseModel):
#     start: str
#     end: str

# # comma-separated list of fog node process endpoints
# FOG_NODES = os.environ.get(
#     "FOG_NODES",
#     "http://127.0.0.1:8001/process"
# ).split(",")

# async def call_node(client: httpx.AsyncClient, url: str, payload: dict):
#     try:
#         r = await client.post(url, json=payload, timeout=5.0)
#         r.raise_for_status()
#         return r.json()
#     except Exception:
#         return None

# async def geocode_place(place: str) -> Optional[list]:
#     """
#     Use Nominatim to geocode a place name into [lat, lon].
#     Returns None if no result.
#     """
#     if not place:
#         return None
#     url = "https://nominatim.openstreetmap.org/search"
#     params = {"format": "json", "q": place, "limit": 1}
#     # IMPORTANT: include a contactable User-Agent per Nominatim policy
#     headers = {"User-Agent": "FogRouteDemo/1.0 (your-email@domain.com)"}
#     try:
#         async with httpx.AsyncClient() as client:
#             resp = await client.get(url, params=params, headers=headers, timeout=10.0)
#             resp.raise_for_status()
#             data = resp.json()
#             if data and len(data) > 0:
#                 lat = float(data[0]["lat"])
#                 lon = float(data[0]["lon"])
#                 return [lat, lon]
#     except Exception:
#         return None
#     return None

# @app.post("/api/v1/route")
# async def get_route(req: RouteReq):
#     payload = req.dict()

#     # 1) contact fog nodes concurrently
#     async with httpx.AsyncClient() as client:
#         tasks = [call_node(client, node.strip(), payload) for node in FOG_NODES]
#         responses = await asyncio.gather(*tasks, return_exceptions=False)

#     responses = [r for r in responses if r]

#     if not responses:
#         return {"error": "No fog nodes responded", "routes": [], "coords": {}}

#     # add score to responses
#     score_map = {"Light": 3, "Moderate": 2, "Heavy": 1}
#     for r in responses:
#         r["score"] = score_map.get(r.get("traffic", ""), 0)

#     best = max(responses, key=lambda x: x.get("score", 0))

#     # 2) geocode start and end server-side (parallel)
#     start_coord, end_coord = await asyncio.gather(
#         geocode_place(req.start), geocode_place(req.end)
#     )

#     result = {
#         "from": req.start,
#         "to": req.end,
#         "selected": best,
#         "candidates": responses,
#         "coords": {
#             "start": start_coord,  # [lat, lon] or None
#             "end": end_coord
#         }
#     }
#     return result



# from fastapi import FastAPI
# from pydantic import BaseModel
# from fastapi.middleware.cors import CORSMiddleware
# import os
# import asyncio
# import httpx

# app = FastAPI(title="Fog Gateway")

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# class RouteReq(BaseModel):
#     start: str
#     end: str

# FOG_NODES = os.environ.get(
#     "FOG_NODES",
#     "http://127.0.0.1:8001/process"
# ).split(",")


# async def call_node(client, url, payload):
#     try:
#         r = await client.post(url, json=payload, timeout=10)
#         return r.json()
#     except:
#         return None


# @app.post("/api/v1/route")
# async def get_route(req: RouteReq):

#     payload = req.dict()

#     async with httpx.AsyncClient() as client:
#         tasks = [call_node(client, node.strip(), payload) for node in FOG_NODES]
#         results = await asyncio.gather(*tasks)

#     # remove failed nodes
#     results = [r for r in results if r]

#     if not results:
#         return {"error": "No fog node responded"}

#     # ensure score exists
#     for r in results:
#         r["score"] = r.get("score", 0)

#     best = max(results, key=lambda x: x["score"])

#     coords = {
#         "start": None,
#         "end": None
#     }

#     if best.get("start_coords"):
#         coords["start"] = [best["start_coords"]["lat"], best["start_coords"]["lng"]]

#     if best.get("end_coords"):
#         coords["end"] = [best["end_coords"]["lat"], best["end_coords"]["lng"]]

#     return {
#         "from": req.start,
#         "to": req.end,
#         "selected": best,
#         "candidates": results,
#         "coords": coords,
#         "polyline": best.get("polyline")
#     }





# 



# from fastapi import FastAPI
# from pydantic import BaseModel
# from fastapi.middleware.cors import CORSMiddleware
# import os
# import asyncio
# import httpx

# app = FastAPI(title="Fog Gateway")

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# class RouteReq(BaseModel):
#     start: str
#     end: str

# FOG_NODES = os.environ.get(
#     "FOG_NODES",
#     "http://127.0.0.1:8001/process"
# ).split(",")

# async def call_node(client, url, payload):
#     """Call a fog node and return its response"""
#     try:
#         r = await client.post(url, json=payload, timeout=15)  # ⭐ Changed to 15
#         if r.status_code == 200:  # ⭐ Added status check
#             return r.json()
#         else:
#             print(f"Node {url} returned status {r.status_code}")  # ⭐ Added logging
#             return None
#     except Exception as e:
#         print(f"Failed to call {url}: {e}")
#         return None

# @app.post("/api/v1/route")
# async def get_route(req: RouteReq):
#     payload = req.dict()
    
#     print(f"Gateway received request: {req.start} → {req.end}")  # ⭐ Added logging
    
#     # Call all fog nodes concurrently
#     async with httpx.AsyncClient() as client:
#         tasks = [call_node(client, node.strip(), payload) for node in FOG_NODES]
#         results = await asyncio.gather(*tasks)
    
#     # Filter nodes that responded
#     results = [r for r in results if r]
    
#     if not results:
#         print("ERROR: No fog nodes responded")  # ⭐ Added logging
#         return {"error": "No fog node responded"}
    
#     print(f"Received {len(results)} responses from fog nodes")  # ⭐ Added logging
    
#     # Ensure all results have required fields
#     for r in results:
#         r["score"] = r.get("score", 0)
#         r["fog_node"] = r.get("fog_node", "Unknown Node")
#         r["traffic"] = r.get("traffic", "Unknown")
#         # Ensure suggested_route exists
#         if "suggested_route" not in r or not r["suggested_route"]:
#             r["suggested_route"] = f"{req.start} → {req.end}"
    
#     # Select best fog node based on score
#     best = max(results, key=lambda x: x["score"])
    
#     print(f"Selected node: {best.get('fog_node')} with score {best.get('score')}")  # ⭐ Added logging
    
#     # Extract coordinates for mapping
#     coords = {"start": None, "end": None}
#     if best.get("start_coords"):
#         coords["start"] = [best["start_coords"]["lat"], best["start_coords"]["lng"]]
#         print(f"Start coords: {coords['start']}")  # ⭐ Added logging
#     if best.get("end_coords"):
#         coords["end"] = [best["end_coords"]["lat"], best["end_coords"]["lng"]]
#         print(f"End coords: {coords['end']}")  # ⭐ Added logging
    
#     # Check if polyline exists
#     polyline = best.get("polyline")
#     if polyline:
#         print(f"Polyline found, length: {len(polyline)} characters")  # ⭐ Added logging
#     else:
#         print("WARNING: No polyline data in response")  # ⭐ Added logging
    
#     return {
#         "from": req.start,
#         "to": req.end,
#         "selected": best,
#         "candidates": results,
#         "coords": coords,
#         "polyline": polyline  # ⭐ Using variable instead of direct get
#     }

# @app.get("/health")
# async def health_check():
#     """Health check endpoint"""
#     return {"status": "healthy", "fog_nodes": FOG_NODES}

# @app.get("/")  # ⭐ Added root endpoint
# async def root():
#     """Root endpoint"""
#     return {
#         "message": "Fog Gateway API",
#         "endpoints": {
#             "route": "POST /api/v1/route",
#             "health": "GET /health"
#         }
#     }





# from fastapi import FastAPI
# from pydantic import BaseModel
# from fastapi.middleware.cors import CORSMiddleware
# import os
# import asyncio
# import httpx

# app = FastAPI(title="Fog Gateway")

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# class RouteReq(BaseModel):
#     start: str
#     end: str

# FOG_NODES = os.environ.get(
#     "FOG_NODES",
#     "http://127.0.0.1:8001/process"
# ).split(",")

# async def call_node(client, url, payload):
#     """Call a fog node and return its response"""
#     try:
#         r = await client.post(url, json=payload, timeout=15)
#         if r.status_code == 200:
#             return r.json()
#         else:
#             print(f"Node {url} returned status {r.status_code}")
#             return None
#     except Exception as e:
#         print(f"Failed to call {url}: {e}")
#         return None

# @app.post("/api/v1/route")
# async def get_route(req: RouteReq):
#     payload = req.dict()
    
#     print(f"Gateway received request: {req.start} → {req.end}")
    
#     # Call all fog nodes concurrently
#     async with httpx.AsyncClient() as client:
#         tasks = [call_node(client, node.strip(), payload) for node in FOG_NODES]
#         results = await asyncio.gather(*tasks)
    
#     # Filter nodes that responded
#     results = [r for r in results if r]
    
#     if not results:
#         print("ERROR: No fog nodes responded")
#         return {"error": "No fog node responded"}
    
#     print(f"Received {len(results)} responses from fog nodes")
    
#     # Ensure all results have required fields including new metrics
#     for r in results:
#         r["score"] = r.get("score", 0)
#         r["fog_node"] = r.get("fog_node", "Unknown Node")
#         r["traffic"] = r.get("traffic", "Unknown")
        
#         # Ensure suggested_route exists
#         if "suggested_route" not in r or not r["suggested_route"]:
#             r["suggested_route"] = f"{req.start} → {req.end}"
        
#         # ⭐ NEW: Ensure traffic metrics exist with defaults
#         r["speed"] = r.get("speed", 0)
#         r["congestion"] = r.get("congestion", 0)
#         r["delay"] = r.get("delay", 0)
        
#         print(f"Node {r['fog_node']}: Speed={r['speed']}, Congestion={r['congestion']}, Delay={r['delay']}")
    
#     # Select best fog node based on score
#     best = max(results, key=lambda x: x["score"])
    
#     print(f"Selected node: {best.get('fog_node')} with score {best.get('score')}")
#     print(f"  → Speed: {best.get('speed')} km/h")
#     print(f"  → Congestion: {best.get('congestion')}%")
#     print(f"  → Delay: {best.get('delay')}%")
    
#     # Extract coordinates for mapping
#     coords = {"start": None, "end": None}
#     if best.get("start_coords"):
#         coords["start"] = [best["start_coords"]["lat"], best["start_coords"]["lng"]]
#         print(f"Start coords: {coords['start']}")
#     if best.get("end_coords"):
#         coords["end"] = [best["end_coords"]["lat"], best["end_coords"]["lng"]]
#         print(f"End coords: {coords['end']}")
    
#     # Check if polyline exists
#     polyline = best.get("polyline")
#     if polyline:
#         print(f"Polyline found, length: {len(polyline)} characters")
#     else:
#         print("WARNING: No polyline data in response")
    
#     return {
#         "from": req.start,
#         "to": req.end,
#         "selected": best,
#         "candidates": results,
#         "coords": coords,
#         "polyline": polyline
#     }

# @app.get("/health")
# async def health_check():
#     """Health check endpoint"""
#     return {
#         "status": "healthy", 
#         "fog_nodes": FOG_NODES,
#         "metrics_enabled": ["speed", "congestion", "delay"]
#     }

# @app.get("/")
# async def root():
#     """Root endpoint"""
#     return {
#         "message": "Fog Gateway API",
#         "version": "2.0",
#         "features": ["real-time routing", "traffic metrics", "multi-fog node support"],
#         "endpoints": {
#             "route": "POST /api/v1/route",
#             "health": "GET /health"
#         }
#     }








# from fastapi import FastAPI, Depends, HTTPException, status
# from fastapi.middleware.cors import CORSMiddleware
# from fastapi.security import OAuth2PasswordBearer
# from pydantic import BaseModel
# from jose import jwt, JWTError
# from datetime import datetime, timedelta
# import os
# import asyncio
# import httpx

# # ======================
# # APP CONFIG
# # ======================
# app = FastAPI(title="Fog Gateway with Login")

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # ======================
# # AUTH CONFIG
# # ======================
# SECRET_KEY = "demo-secret-key-change-later"
# ALGORITHM = "HS256"
# ACCESS_TOKEN_EXPIRE_MINUTES = 60

# oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

# # ======================
# # DUMMY USERS (NO DB)
# # ======================
# USERS = {
#     "admin": {
#         "username": "admin",
#         "password": "admin123",
#         "role": "admin"
#     },
#     "student": {
#         "username": "student",
#         "password": "student123",
#         "role": "user"
#     }
# }

# # ======================
# # MODELS
# # ======================
# class LoginRequest(BaseModel):
#     username: str
#     password: str

# class TokenResponse(BaseModel):
#     access_token: str
#     token_type: str

# class RouteReq(BaseModel):
#     start: str
#     end: str

# # ======================
# # JWT HELPERS
# # ======================
# def create_access_token(data: dict, expires_delta: timedelta | None = None):
#     to_encode = data.copy()
#     expire = datetime.utcnow() + (expires_delta or timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
#     to_encode.update({"exp": expire})
#     return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

# def get_current_user(token: str = Depends(oauth2_scheme)):
#     try:
#         payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
#         username = payload.get("sub")
#         if username not in USERS:
#             raise HTTPException(status_code=401, detail="Invalid user")
#         return USERS[username]
#     except JWTError:
#         raise HTTPException(
#             status_code=status.HTTP_401_UNAUTHORIZED,
#             detail="Invalid or expired token",
#         )

# # ======================
# # LOGIN API
# # ======================
# @app.post("/login", response_model=TokenResponse)
# async def login(data: LoginRequest):
#     user = USERS.get(data.username)
#     if not user or user["password"] != data.password:
#         raise HTTPException(status_code=401, detail="Invalid credentials")

#     token = create_access_token({"sub": data.username})
#     return {
#         "access_token": token,
#         "token_type": "bearer"
#     }

# # ======================
# # FOG NODE CONFIG
# # ======================
# FOG_NODES = os.environ.get(
#     "FOG_NODES",
#     "http://127.0.0.1:8001/process"
# ).split(",")

# async def call_node(client, url, payload):
#     try:
#         r = await client.post(url, json=payload, timeout=15)
#         if r.status_code == 200:
#             return r.json()
#         return None
#     except Exception:
#         return None

# # ======================
# # PROTECTED ROUTE API
# # ======================
# @app.post("/api/v1/route")
# async def get_route(req: RouteReq, user=Depends(get_current_user)):
#     payload = req.dict()

#     async with httpx.AsyncClient() as client:
#         tasks = [call_node(client, node.strip(), payload) for node in FOG_NODES]
#         results = await asyncio.gather(*tasks)

#     results = [r for r in results if r]

#     if not results:
#         return {"error": "No fog node responded"}

#     for r in results:
#         r["score"] = r.get("score", 0)
#         r["fog_node"] = r.get("fog_node", "Unknown")
#         r["traffic"] = r.get("traffic", "Unknown")

#     best = max(results, key=lambda x: x["score"])

#     coords = {"start": None, "end": None}
#     if best.get("start_coords"):
#         coords["start"] = [best["start_coords"]["lat"], best["start_coords"]["lng"]]
#     if best.get("end_coords"):
#         coords["end"] = [best["end_coords"]["lat"], best["end_coords"]["lng"]]

#     return {
#         "user": user["username"],
#         "from": req.start,
#         "to": req.end,
#         "selected": best,
#         "candidates": results,
#         "coords": coords,
#         "polyline": best.get("polyline")
#     }

# # ======================
# # HEALTH & ROOT
# # ======================
# @app.get("/health")
# async def health():
#     return {
#         "status": "healthy",
#         "fog_nodes": FOG_NODES
#     }

# @app.get("/")
# async def root():
#     return {
#         "message": "Fog Gateway API with JWT Login",
#         "login": "POST /login",
#         "route": "POST /api/v1/route (protected)"
#     }







# from fastapi import FastAPI, Depends, HTTPException, status
# from fastapi.middleware.cors import CORSMiddleware
# from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
# from pydantic import BaseModel
# from jose import jwt, JWTError
# from datetime import datetime, timedelta
# import os
# import asyncio
# import httpx

# # ======================
# # APP CONFIG
# # ======================
# app = FastAPI(title="Fog Gateway with JWT Login")

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # ======================
# # AUTH CONFIG
# # ======================
# SECRET_KEY = "demo-secret-key-change-later"
# ALGORITHM = "HS256"
# ACCESS_TOKEN_EXPIRE_MINUTES = 60

# oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

# # ======================
# # DUMMY USERS (NO DB)
# # ======================
# USERS = {
#     "admin": {
#         "username": "admin",
#         "password": "admin123",
#         "role": "admin"
#     },
#     "student": {
#         "username": "student",
#         "password": "student123",
#         "role": "user"
#     }
# }

# # ======================
# # MODELS
# # ======================
# class TokenResponse(BaseModel):
#     access_token: str
#     token_type: str

# class RouteReq(BaseModel):
#     start: str
#     end: str

# # ======================
# # JWT HELPERS
# # ======================
# def create_access_token(data: dict, expires_delta: timedelta | None = None):
#     to_encode = data.copy()
#     expire = datetime.utcnow() + (
#         expires_delta or timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
#     )
#     to_encode.update({"exp": expire})
#     return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

# def get_current_user(token: str = Depends(oauth2_scheme)):
#     try:
#         payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
#         username = payload.get("sub")
#         if username not in USERS:
#             raise HTTPException(status_code=401, detail="Invalid user")
#         return USERS[username]
#     except JWTError:
#         raise HTTPException(
#             status_code=status.HTTP_401_UNAUTHORIZED,
#             detail="Invalid or expired token",
#         )

# # ======================
# # LOGIN API (FIXED)
# # ======================
# @app.post("/login", response_model=TokenResponse)
# async def login(form_data: OAuth2PasswordRequestForm = Depends()):
#     user = USERS.get(form_data.username)
#     if not user or user["password"] != form_data.password:
#         raise HTTPException(status_code=401, detail="Invalid credentials")

#     token = create_access_token({"sub": form_data.username})
#     return {
#         "access_token": token,
#         "token_type": "bearer"
#     }

# # ======================
# # FOG NODE CONFIG
# # ======================
# FOG_NODES = os.environ.get(
#     "FOG_NODES",
#     "http://127.0.0.1:8001/process"
# ).split(",")

# async def call_node(client, url, payload):
#     try:
#         r = await client.post(url, json=payload, timeout=15)
#         if r.status_code == 200:
#             return r.json()
#         return None
#     except Exception:
#         return None

# # ======================
# # PROTECTED ROUTE API
# # ======================
# @app.post("/api/v1/route")
# async def get_route(req: RouteReq, user=Depends(get_current_user)):
#     payload = req.dict()

#     async with httpx.AsyncClient() as client:
#         tasks = [call_node(client, node.strip(), payload) for node in FOG_NODES]
#         results = await asyncio.gather(*tasks)

#     results = [r for r in results if r]

#     if not results:
#         return {"error": "No fog node responded"}

#     for r in results:
#         r["score"] = r.get("score", 0)
#         r["fog_node"] = r.get("fog_node", "Unknown")
#         r["traffic"] = r.get("traffic", "Unknown")

#     best = max(results, key=lambda x: x["score"])

#     coords = {"start": None, "end": None}
#     if best.get("start_coords"):
#         coords["start"] = [
#             best["start_coords"]["lat"],
#             best["start_coords"]["lng"]
#         ]
#     if best.get("end_coords"):
#         coords["end"] = [
#             best["end_coords"]["lat"],
#             best["end_coords"]["lng"]
#         ]

#     return {
#         "user": user["username"],
#         "from": req.start,
#         "to": req.end,
#         "selected": best,
#         "candidates": results,
#         "coords": coords,
#         "polyline": best.get("polyline")
#     }

# # ======================
# # HEALTH & ROOT
# # ======================
# @app.get("/health")
# async def health():
#     return {
#         "status": "healthy",
#         "fog_nodes": FOG_NODES
#     }

# @app.get("/")
# async def root():
#     return {
#         "message": "Fog Gateway API with JWT Login",
#         "login": "POST /login",
#         "route": "POST /api/v1/route (protected)"
#     }







from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from jose import jwt, JWTError
from datetime import datetime, timedelta
import os
import asyncio
import httpx

# ======================
# APP CONFIG
# ======================
app = FastAPI(title="Fog Gateway with JWT Login")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# ======================
# AUTH CONFIG
# ======================
SECRET_KEY = "demo-secret-key-change-later"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

# ======================
# DUMMY USERS (NO DB)
# ======================
USERS = {
    "admin": {
        "username": "admin",
        "password": "admin123",
        "role": "admin"
    },
    "student": {
        "username": "student",
        "password": "student123",
        "role": "user"
    }
}

# ======================
# MODELS
# ======================
class TokenResponse(BaseModel):
    access_token: str
    token_type: str

class RouteReq(BaseModel):
    start: str
    end: str

# ======================
# JWT HELPERS
# ======================
def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    expire = datetime.utcnow() + (
        expires_delta or timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    )
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username = payload.get("sub")
        if username not in USERS:
            raise HTTPException(status_code=401, detail="Invalid user")
        return USERS[username]
    except JWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or expired token",
        )

# ======================
# LOGIN API (FIXED)
# ======================
@app.post("/login", response_model=TokenResponse)
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    user = USERS.get(form_data.username)
    if not user or user["password"] != form_data.password:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = create_access_token({"sub": form_data.username})
    return {
        "access_token": token,
        "token_type": "bearer"
    }

# ======================
# FOG NODE CONFIG
# ======================
FOG_NODES = os.environ.get(
    "FOG_NODES",
    "http://127.0.0.1:8001/process"
).split(",")

async def call_node(client, url, payload):
    try:
        print(f"📡 Calling fog node: {url}")
        r = await client.post(url, json=payload, timeout=15)
        print(f"✅ Response status: {r.status_code}")
        if r.status_code == 200:
            data = r.json()
            print(f"✅ Data received: {data.get('fog_node', 'Unknown')}")
            return data
        return None
    except Exception as e:
        print(f"❌ Fog node call failed: {e}")
        return None

# ======================
# ROUTE API (NO AUTH REQUIRED - OPTION 1)
# ======================
@app.post("/api/v1/route")
async def get_route(req: RouteReq):
    """
    Route endpoint WITHOUT authentication requirement.
    Use this for testing/demo purposes.
    """
    print(f"\n🚀 Route request: {req.start} → {req.end}")
    print(f"📍 Fog nodes: {FOG_NODES}")
    
    payload = req.dict()

    async with httpx.AsyncClient() as client:
        tasks = [call_node(client, node.strip(), payload) for node in FOG_NODES]
        results = await asyncio.gather(*tasks)

    results = [r for r in results if r]
    print(f"📊 Valid responses: {len(results)}")

    if not results:
        print("❌ No fog node responded")
        return {"error": "No fog node responded"}

    for r in results:
        r["score"] = r.get("score", 0)
        r["fog_node"] = r.get("fog_node", "Unknown")
        r["traffic"] = r.get("traffic", "Unknown")

    best = max(results, key=lambda x: x["score"])
    print(f"✅ Best route: {best.get('fog_node')} (score: {best.get('score')})")

    coords = {"start": None, "end": None}
    if best.get("start_coords"):
        coords["start"] = [
            best["start_coords"]["lat"],
            best["start_coords"]["lng"]
        ]
    if best.get("end_coords"):
        coords["end"] = [
            best["end_coords"]["lat"],
            best["end_coords"]["lng"]
        ]

    return {
        "from": req.start,
        "to": req.end,
        "selected": best,
        "candidates": results,
        "coords": coords,
        "polyline": best.get("polyline")
    }

# ======================
# PROTECTED ROUTE API (WITH AUTH - OPTION 2)
# ======================
@app.post("/api/v1/route-protected")
async def get_route_protected(req: RouteReq, user=Depends(get_current_user)):
    """
    Route endpoint WITH authentication requirement.
    Use this if you want to require login for route requests.
    """
    print(f"\n🚀 Route request from user: {user['username']}")
    print(f"📍 Route: {req.start} → {req.end}")
    
    payload = req.dict()

    async with httpx.AsyncClient() as client:
        tasks = [call_node(client, node.strip(), payload) for node in FOG_NODES]
        results = await asyncio.gather(*tasks)

    results = [r for r in results if r]

    if not results:
        return {"error": "No fog node responded"}

    for r in results:
        r["score"] = r.get("score", 0)
        r["fog_node"] = r.get("fog_node", "Unknown")
        r["traffic"] = r.get("traffic", "Unknown")

    best = max(results, key=lambda x: x["score"])

    coords = {"start": None, "end": None}
    if best.get("start_coords"):
        coords["start"] = [
            best["start_coords"]["lat"],
            best["start_coords"]["lng"]
        ]
    if best.get("end_coords"):
        coords["end"] = [
            best["end_coords"]["lat"],
            best["end_coords"]["lng"]
        ]

    return {
        "user": user["username"],
        "from": req.start,
        "to": req.end,
        "selected": best,
        "candidates": results,
        "coords": coords,
        "polyline": best.get("polyline")
    }

# ======================
# HEALTH & ROOT
# ======================
@app.get("/health")
async def health():
    return {
        "status": "healthy",
        "fog_nodes": FOG_NODES
    }

@app.get("/")
async def root():
    return {
        "message": "Fog Gateway API with JWT Login",
        "login": "POST /login",
        "route": "POST /api/v1/route (public)",
        "route_protected": "POST /api/v1/route-protected (requires JWT)"
    }