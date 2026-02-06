# from fastapi import FastAPI
# from pydantic import BaseModel
# import random

# app = FastAPI(title="Fog Node")

# class Route(BaseModel):
#     start: str
#     end: str

# @app.post("/process")
# def process_route(route: Route):
#     traffic_levels = ["Light", "Moderate", "Heavy"]
#     traffic = random.choice(traffic_levels)
#     return {
#         "fog_node": "Fog Node 1",
#         "from": route.start,
#         "to": route.end,
#         "traffic": traffic,
#         "suggested_route": f"{route.start} → Junction 3 → {route.end}"
#     }





# from fastapi import FastAPI
# from pydantic import BaseModel
# import os
# import httpx
# import random

# app = FastAPI(title="Fog Node (Real-Time Traffic)")

# # MUST be loaded from environment variable
# GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")

# class Route(BaseModel):
#     start: str
#     end: str


# async def get_live_traffic(start: str, end: str):
#     """
#     Calls Google Directions API and returns REAL route + REAL traffic.
#     """
#     if not GOOGLE_API_KEY:
#         return None

#     url = "https://maps.googleapis.com/maps/api/directions/json"

#     params = {
#         "origin": start,
#         "destination": end,
#         "departure_time": "now",
#         "key": GOOGLE_API_KEY,
#     }

#     async with httpx.AsyncClient() as client:
#         response = await client.get(url, params=params)
#         data = response.json()

#     if data.get("status") != "OK":
#         return None

#     route = data["routes"][0]
#     leg = route["legs"][0]

#     # Extract numeric values
#     duration_value = leg.get("duration", {}).get("value")
#     duration_in_traffic_value = leg.get("duration_in_traffic", {}).get("value")

#     # Compute score
#     if duration_value and duration_in_traffic_value:
#         ratio = duration_in_traffic_value / duration_value
#         if ratio <= 1.10:
#             score = 3
#         elif ratio <= 1.40:
#             score = 2
#         else:
#             score = 1
#     else:
#         score = random.choice([1, 2, 3])

#     return {
#         "summary": route.get("summary"),
#         "distance": leg["distance"]["text"],
#         "duration_normal": leg["duration"]["text"],
#         "duration_in_traffic": leg.get("duration_in_traffic", {}).get("text"),

#         "duration_value": duration_value,
#         "duration_in_traffic_value": duration_in_traffic_value,

#         "start_coords": leg["start_location"],
#         "end_coords": leg["end_location"],
#         "polyline": route["overview_polyline"]["points"],
#         "score": score
#     }


# @app.post("/process")
# async def process_route(route: Route):

#     live = await get_live_traffic(route.start, route.end)

#     if live:
#         return {
#             "fog_node": "Fog Node 1",
#             "from": route.start,
#             "to": route.end,
#             "source": "google",
#             **live
#         }

#     # fallback if Google fails
#     traffic = random.choice(["Light", "Moderate", "Heavy"])
#     fallback_scores = {"Light": 3, "Moderate": 2, "Heavy": 1}

#     return {
#         "fog_node": "Fog Node 1",
#         "from": route.start,
#         "to": route.end,
#         "source": "simulated",
#         "traffic": traffic,
#         "score": fallback_scores[traffic],
#         "polyline": None,
#         "start_coords": None,
#         "end_coords": None,
#         "error": "Google API failed."
#     }




# 






# from fastapi import FastAPI
# from pydantic import BaseModel
# import os
# import httpx
# import random

# app = FastAPI(title="Fog Node (ORS Traffic)")

# # Load ORS API key from environment variable
# ORS_API_KEY = os.getenv("ORS_API_KEY")

# class Route(BaseModel):
#     start: str
#     end: str

# # ---------------------------------------------------------
# # FUNCTION — Call ORS Directions API
# # ---------------------------------------------------------
# async def get_live_route(start: str, end: str):
#     """
#     Calls ORS Directions API and returns real route information.
#     """
#     if not ORS_API_KEY:
#         return None
    
#     url = "https://api.openrouteservice.org/v2/directions/driving-car"
#     headers = {
#         "Authorization": ORS_API_KEY,
#         "Content-Type": "application/json"
#     }
#     body = {
#         "coordinates": [],  # to be filled after geocoding
#     }
    
#     # Step 1: Geocode start + end with ORS Geocoding
#     geo_url = "https://api.openrouteservice.org/geocode/search"
    
#     async with httpx.AsyncClient() as client:
#         try:
#             # Geocode start
#             gs = await client.get(geo_url, params={"api_key": ORS_API_KEY, "text": start})
#             geos = gs.json()
#             if "features" not in geos or len(geos["features"]) == 0:
#                 return None
#             start_coord = geos["features"][0]["geometry"]["coordinates"]
            
#             # Geocode end
#             ge = await client.get(geo_url, params={"api_key": ORS_API_KEY, "text": end})
#             geoe = ge.json()
#             if "features" not in geoe or len(geoe["features"]) == 0:
#                 return None
#             end_coord = geoe["features"][0]["geometry"]["coordinates"]
            
#             # insert coordinates in correct order
#             body["coordinates"] = [start_coord, end_coord]
            
#             # Step 2: Request Directions
#             dr = await client.post(url, headers=headers, json=body)
#             data = dr.json()
#         except Exception as e:
#             print(f"ORS API Error: {e}")
#             return None
    
#     if "routes" not in data:
#         return None
    
#     route = data["routes"][0]
#     summary = route["summary"]
#     distance_km = summary["distance"] / 1000
#     duration_min = summary["duration"] / 60
    
#     # ---- Traffic score estimation (ORS has no live traffic) ----
#     # The formula assigns longer duration = heavier traffic
#     if duration_min <= 15:
#         score = 3
#         traffic = "Light"
#     elif duration_min <= 30:
#         score = 2
#         traffic = "Moderate"
#     else:
#         score = 1
#         traffic = "Heavy"
    
#     # Generate suggested route description
#     suggested_route = f"{start} → Highway Route → {end}"
    
#     return {
#         "distance_km": round(distance_km, 2),
#         "duration_min": round(duration_min, 2),
#         "traffic": traffic,
#         "score": score,
#         "suggested_route": suggested_route,
#         "start_coords": {"lng": start_coord[0], "lat": start_coord[1]},
#         "end_coords": {"lng": end_coord[0], "lat": end_coord[1]},
#         "polyline": route["geometry"],  # ORS returns encoded polyline
#     }

# # ---------------------------------------------------------
# # MAIN API — /process
# # ---------------------------------------------------------
# @app.post("/process")
# async def process_route(route: Route):
#     real = await get_live_route(route.start, route.end)
    
#     if real:
#         return {
#             "fog_node": "Fog Node 1",
#             "from": route.start,
#             "to": route.end,
#             "source": "ORS",
#             **real
#         }
    
#     # Fallback if ORS fails
#     traffic = random.choice(["Light", "Moderate", "Heavy"])
#     scores = {"Light": 3, "Moderate": 2, "Heavy": 1}
    
#     return {
#         "fog_node": "Fog Node 1",
#         "from": route.start,
#         "to": route.end,
#         "source": "simulated",
#         "traffic": traffic,
#         "score": scores[traffic],
#         "suggested_route": f"{route.start} → Junction 3 → {route.end}",
#         "distance_km": None,
#         "duration_min": None,
#         "polyline": None,
#         "start_coords": None,
#         "end_coords": None,
#         "error": "ORS API failed."
#     }






# from fastapi import FastAPI
# from pydantic import BaseModel
# import os
# import httpx
# import random

# app = FastAPI(title="Fog Node (ORS Traffic)")

# # Load ORS API key from environment variable
# ORS_API_KEY = os.getenv("ORS_API_KEY")

# class Route(BaseModel):
#     start: str
#     end: str

# # ---------------------------------------------------------
# # FUNCTION — Call ORS Directions API
# # ---------------------------------------------------------
# async def get_live_route(start: str, end: str):
#     """
#     Calls ORS Directions API and returns real route information.
#     """
#     if not ORS_API_KEY:
#         print("ERROR: ORS_API_KEY not set in environment variables")
#         return None
    
#     print(f"Attempting to get route from {start} to {end}")
    
#     url = "https://api.openrouteservice.org/v2/directions/driving-car"
#     headers = {
#         "Authorization": ORS_API_KEY,
#         "Content-Type": "application/json"
#     }
#     body = {
#         "coordinates": [],  # to be filled after geocoding
#     }
    
#     # Step 1: Geocode start + end with ORS Geocoding
#     geo_url = "https://api.openrouteservice.org/geocode/search"
    
#     async with httpx.AsyncClient(timeout=30.0) as client:
#         try:
#             # Geocode start
#             print(f"Geocoding start: {start}")
#             gs = await client.get(geo_url, params={"api_key": ORS_API_KEY, "text": start})
            
#             if gs.status_code != 200:
#                 print(f"Geocoding start failed with status {gs.status_code}: {gs.text}")
#                 return None
                
#             geos = gs.json()
#             if "features" not in geos or len(geos["features"]) == 0:
#                 print(f"No geocoding results found for start: {start}")
#                 return None
#             start_coord = geos["features"][0]["geometry"]["coordinates"]
#             print(f"Start coordinates: {start_coord}")
            
#             # Geocode end
#             print(f"Geocoding end: {end}")
#             ge = await client.get(geo_url, params={"api_key": ORS_API_KEY, "text": end})
            
#             if ge.status_code != 200:
#                 print(f"Geocoding end failed with status {ge.status_code}: {ge.text}")
#                 return None
                
#             geoe = ge.json()
#             if "features" not in geoe or len(geoe["features"]) == 0:
#                 print(f"No geocoding results found for end: {end}")
#                 return None
#             end_coord = geoe["features"][0]["geometry"]["coordinates"]
#             print(f"End coordinates: {end_coord}")
            
#             # insert coordinates in correct order
#             body["coordinates"] = [start_coord, end_coord]
            
#             # Step 2: Request Directions
#             print("Requesting directions...")
#             dr = await client.post(url, headers=headers, json=body)
            
#             if dr.status_code != 200:
#                 print(f"Directions API failed with status {dr.status_code}: {dr.text}")
#                 return None
                
#             data = dr.json()
#             print("Directions received successfully")
            
#         except Exception as e:
#             print(f"ORS API Error: {str(e)}")
#             return None
    
#     if "routes" not in data:
#         return None
    
#     route = data["routes"][0]
#     summary = route["summary"]
#     distance_km = summary["distance"] / 1000
#     duration_min = summary["duration"] / 60
    
#     # ---- Traffic score estimation (ORS has no live traffic) ----
#     # The formula assigns longer duration = heavier traffic
#     if duration_min <= 15:
#         score = 3
#         traffic = "Light"
#     elif duration_min <= 30:
#         score = 2
#         traffic = "Moderate"
#     else:
#         score = 1
#         traffic = "Heavy"
    
#     # Generate suggested route description - for now use simple format
#     # ORS doesn't provide easy waypoint extraction, so we'll use distance-based description
#     if distance_km < 500:
#         suggested_route = f"{start} → Direct Route → {end}"
#     elif distance_km < 1000:
#         suggested_route = f"{start} → NH Route → {end}"
#     else:
#         suggested_route = f"{start} → NH Highway → Junction Point → {end}"
    
#     # ⭐ CRITICAL: Return the ENCODED polyline from ORS (it's already encoded!)
#     encoded_polyline = route["geometry"]
    
#     print(f"Route found: {distance_km:.2f}km, {duration_min:.2f}min, Traffic: {traffic}")
#     print(f"Polyline length: {len(encoded_polyline)} characters")
    
#     return {
#         "distance_km": round(distance_km, 2),
#         "duration_min": round(duration_min, 2),
#         "traffic": traffic,
#         "score": score,
#         "suggested_route": suggested_route,
#         "start_coords": {"lng": start_coord[0], "lat": start_coord[1]},
#         "end_coords": {"lng": end_coord[0], "lat": end_coord[1]},
#         "polyline": encoded_polyline,  # Already encoded by ORS
#     }

# # ---------------------------------------------------------
# # MAIN API — /process
# # ---------------------------------------------------------
# @app.post("/process")
# async def process_route(route: Route):
#     print(f"\n=== Processing route: {route.start} → {route.end} ===")
    
#     real = await get_live_route(route.start, route.end)
    
#     if real:
#         print("✓ ORS route retrieved successfully")
#         return {
#             "fog_node": "Fog Node 1",
#             "from": route.start,
#             "to": route.end,
#             "source": "ORS",
#             **real
#         }
    
#     # Fallback if ORS fails
#     print("✗ ORS failed, using simulated fallback")
#     traffic = random.choice(["Light", "Moderate", "Heavy"])
#     scores = {"Light": 3, "Moderate": 2, "Heavy": 1}
    
#     return {
#         "fog_node": "Fog Node 1",
#         "from": route.start,
#         "to": route.end,
#         "source": "simulated",
#         "traffic": traffic,
#         "score": scores[traffic],
#         "suggested_route": f"{route.start} → Junction 3 → {route.end}",
#         "distance_km": None,
#         "duration_min": None,
#         "polyline": None,
#         "start_coords": None,
#         "end_coords": None,
#         "error": "ORS API failed."
#     }






from fastapi import FastAPI
from pydantic import BaseModel
import os
import httpx
import random

app = FastAPI(title="Fog Node (ORS Traffic)")

# Load ORS API key from environment variable
ORS_API_KEY = os.getenv("ORS_API_KEY")

class Route(BaseModel):
    start: str
    end: str

# ---------------------------------------------------------
# FUNCTION — Call ORS Directions API
# ---------------------------------------------------------
async def get_live_route(start: str, end: str):
    """
    Calls ORS Directions API and returns real route information.
    """
    if not ORS_API_KEY:
        print("ERROR: ORS_API_KEY not set in environment variables")
        return None
    
    print(f"Attempting to get route from {start} to {end}")
    
    url = "https://api.openrouteservice.org/v2/directions/driving-car"
    headers = {
        "Authorization": ORS_API_KEY,
        "Content-Type": "application/json"
    }
    body = {
        "coordinates": [],  # to be filled after geocoding
    }
    
    # Step 1: Geocode start + end with ORS Geocoding
    geo_url = "https://api.openrouteservice.org/geocode/search"
    
    async with httpx.AsyncClient(timeout=30.0) as client:
        try:
            # Geocode start
            print(f"Geocoding start: {start}")
            gs = await client.get(geo_url, params={"api_key": ORS_API_KEY, "text": start})
            
            if gs.status_code != 200:
                print(f"Geocoding start failed with status {gs.status_code}: {gs.text}")
                return None
                
            geos = gs.json()
            if "features" not in geos or len(geos["features"]) == 0:
                print(f"No geocoding results found for start: {start}")
                return None
            start_coord = geos["features"][0]["geometry"]["coordinates"]
            print(f"Start coordinates: {start_coord}")
            
            # Geocode end
            print(f"Geocoding end: {end}")
            ge = await client.get(geo_url, params={"api_key": ORS_API_KEY, "text": end})
            
            if ge.status_code != 200:
                print(f"Geocoding end failed with status {ge.status_code}: {ge.text}")
                return None
                
            geoe = ge.json()
            if "features" not in geoe or len(geoe["features"]) == 0:
                print(f"No geocoding results found for end: {end}")
                return None
            end_coord = geoe["features"][0]["geometry"]["coordinates"]
            print(f"End coordinates: {end_coord}")
            
            # insert coordinates in correct order
            body["coordinates"] = [start_coord, end_coord]
            
            # Step 2: Request Directions
            print("Requesting directions...")
            dr = await client.post(url, headers=headers, json=body)
            
            if dr.status_code != 200:
                print(f"Directions API failed with status {dr.status_code}: {dr.text}")
                return None
                
            data = dr.json()
            print("Directions received successfully")
            
        except Exception as e:
            print(f"ORS API Error: {str(e)}")
            return None
    
    if "routes" not in data:
        return None
    
    route = data["routes"][0]
    summary = route["summary"]
    distance_km = summary["distance"] / 1000
    duration_min = summary["duration"] / 60
    
    # ---- Traffic metrics calculation ----
    # Calculate speed based on distance and duration
    speed_kmh = (distance_km / duration_min) * 60 if duration_min > 0 else 0
    
    # Normalize speed to 0-100 scale (assuming max speed is 100 km/h)
    speed_normalized = min(speed_kmh, 100)
    
    # ---- Traffic score and congestion estimation ----
    # The formula assigns longer duration = heavier traffic
    if duration_min <= 15:
        score = 3
        traffic = "Light"
        congestion = random.randint(10, 30)  # 10-30% congestion
        delay = random.randint(2, 8)  # 2-8 minutes delay
    elif duration_min <= 30:
        score = 2
        traffic = "Moderate"
        congestion = random.randint(40, 70)  # 40-70% congestion
        delay = random.randint(10, 20)  # 10-20 minutes delay
    else:
        score = 1
        traffic = "Heavy"
        congestion = random.randint(75, 95)  # 75-95% congestion
        delay = random.randint(25, 45)  # 25-45 minutes delay
    
    # Normalize delay to 0-100 scale (assuming max delay is 60 minutes)
    delay_normalized = min((delay / 60) * 100, 100)
    
    # Generate suggested route description
    if distance_km < 500:
        suggested_route = f"{start} → Direct Route → {end}"
    elif distance_km < 1000:
        suggested_route = f"{start} → NH Route → {end}"
    else:
        suggested_route = f"{start} → NH Highway → Junction Point → {end}"
    
    # ⭐ CRITICAL: Return the ENCODED polyline from ORS (it's already encoded!)
    encoded_polyline = route["geometry"]
    
    print(f"Route found: {distance_km:.2f}km, {duration_min:.2f}min, Traffic: {traffic}")
    print(f"Speed: {speed_kmh:.2f} km/h, Congestion: {congestion}%, Delay: {delay} min")
    print(f"Polyline length: {len(encoded_polyline)} characters")
    
    return {
        "distance_km": round(distance_km, 2),
        "duration_min": round(duration_min, 2),
        "traffic": traffic,
        "score": score,
        "suggested_route": suggested_route,
        "start_coords": {"lng": start_coord[0], "lat": start_coord[1]},
        "end_coords": {"lng": end_coord[0], "lat": end_coord[1]},
        "polyline": encoded_polyline,  # Already encoded by ORS
        # New fields for frontend bar chart
        "speed": round(speed_normalized, 2),
        "congestion": congestion,
        "delay": round(delay_normalized, 2),
    }

# ---------------------------------------------------------
# MAIN API — /process
# ---------------------------------------------------------
@app.post("/process")
async def process_route(route: Route):
    print(f"\n=== Processing route: {route.start} → {route.end} ===")
    
    real = await get_live_route(route.start, route.end)
    
    if real:
        print("✓ ORS route retrieved successfully")
        return {
            "fog_node": "Fog Node 1",
            "from": route.start,
            "to": route.end,
            "source": "ORS",
            **real
        }
    
    # Fallback if ORS fails
    print("✗ ORS failed, using simulated fallback")
    traffic = random.choice(["Light", "Moderate", "Heavy"])
    scores = {"Light": 3, "Moderate": 2, "Heavy": 1}
    
    # Simulated metrics for fallback
    if traffic == "Light":
        speed = random.randint(60, 80)
        congestion = random.randint(10, 30)
        delay = random.randint(5, 15)
    elif traffic == "Moderate":
        speed = random.randint(40, 60)
        congestion = random.randint(40, 70)
        delay = random.randint(20, 35)
    else:  # Heavy
        speed = random.randint(20, 40)
        congestion = random.randint(75, 95)
        delay = random.randint(40, 60)
    
    return {
        "fog_node": "Fog Node 1",
        "from": route.start,
        "to": route.end,
        "source": "simulated",
        "traffic": traffic,
        "score": scores[traffic],
        "suggested_route": f"{route.start} → Junction 3 → {route.end}",
        "distance_km": None,
        "duration_min": None,
        "polyline": None,
        "start_coords": None,
        "end_coords": None,
        "speed": speed,
        "congestion": congestion,
        "delay": (delay / 60) * 100,  # Normalize to 0-100 scale
        "error": "ORS API failed."
    }