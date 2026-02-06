// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App



// import React, { useState } from "react";
// import { Button, TextField, Typography, Card } from "@mui/material";

// export default function App() {
//   const [start, setStart] = useState("");
//   const [end, setEnd] = useState("");
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const getRoute = async () => {
//     setLoading(true);
//     setResult(null);
//     try {
//       const res = await fetch("http://127.0.0.1:8000/api/v1/route", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ start, end })
//       });
//       const data = await res.json();
//       setResult(data);
//     } catch (err) {
//       setResult({ error: "Gateway not reachable. Make sure gateway and fog node are running." });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
//       <Typography variant="h4" gutterBottom>🚦 Fog Route Demo</Typography>

//       <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12 }}>
//         <TextField label="From" value={start} onChange={(e) => setStart(e.target.value)} />
//         <TextField label="To" value={end} onChange={(e) => setEnd(e.target.value)} />
//         <Button variant="contained" onClick={getRoute} disabled={loading || !start || !end}>
//           {loading ? "Finding..." : "Get Route"}
//         </Button>
//       </div>

//       {result && (
//         <Card style={{ padding: 16 }}>
//           {result.error ? (
//             <Typography color="error">{result.error}</Typography>
//           ) : (
//             <>
//               <Typography variant="h6">Selected Route</Typography>
//               <Typography><strong>From:</strong> {result.from}</Typography>
//               <Typography><strong>To:</strong> {result.to}</Typography>
//               <Typography><strong>Chosen Node:</strong> {result.selected?.fog_node}</Typography>
//               <Typography><strong>Route:</strong> {result.selected?.suggested_route}</Typography>
//               <Typography><strong>Traffic:</strong> {result.selected?.traffic}</Typography>

//               <Typography style={{ marginTop: 12, fontSize: 13 }}>All candidates (debug):</Typography>
//               <pre style={{ whiteSpace: "pre-wrap", fontSize: 12 }}>{JSON.stringify(result.candidates, null, 2)}</pre>
//             </>
//           )}
//         </Card>
//       )}
//     </div>
//   );
// }







// import React, { useState } from "react";
// import { Button, TextField, Typography, Card } from "@mui/material";

// export default function App() {
//   const [start, setStart] = useState("");
//   const [end, setEnd] = useState("");
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const getRoute = async () => {
//     setLoading(true);
//     setResult(null);
//     try {
//       const res = await fetch("http://127.0.0.1:8000/api/v1/route", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ start, end })
//       });
//       const data = await res.json();
//       setResult(data);
//     } catch (err) {
//       setResult({ error: "Gateway not reachable. Make sure gateway and fog node are running." });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ 
//       minHeight: "100vh",
//       background: "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1419 100%)",
//       padding: 24
//     }}>
//       <div style={{ 
//         maxWidth: 900, 
//         margin: "0 auto",
//         paddingTop: 40
//       }}>
//         <Typography 
//           variant="h4" 
//           gutterBottom
//           style={{
//             color: "#00ff88",
//             fontWeight: 700,
//             textShadow: "0 0 20px rgba(0, 255, 136, 0.3)",
//             marginBottom: 32,
//             letterSpacing: 1
//           }}
//         >
//           🚦 Fog Route Demo
//         </Typography>

//         <div style={{ 
//           display: "flex", 
//           gap: 12, 
//           alignItems: "center", 
//           marginBottom: 24,
//           flexWrap: "wrap"
//         }}>
//           <TextField 
//             label="From" 
//             value={start} 
//             onChange={(e) => setStart(e.target.value)}
//             sx={{
//               flex: 1,
//               minWidth: 200,
//               '& .MuiOutlinedInput-root': {
//                 color: '#e0e0e0',
//                 backgroundColor: 'rgba(26, 31, 58, 0.6)',
//                 backdropFilter: 'blur(10px)',
//                 '& fieldset': {
//                   borderColor: '#2563eb',
//                 },
//                 '&:hover fieldset': {
//                   borderColor: '#3b82f6',
//                 },
//                 '&.Mui-focused fieldset': {
//                   borderColor: '#00ff88',
//                   borderWidth: 2,
//                 },
//               },
//               '& .MuiInputLabel-root': {
//                 color: '#9ca3af',
//               },
//               '& .MuiInputLabel-root.Mui-focused': {
//                 color: '#00ff88',
//               },
//             }}
//           />
//           <TextField 
//             label="To" 
//             value={end} 
//             onChange={(e) => setEnd(e.target.value)}
//             sx={{
//               flex: 1,
//               minWidth: 200,
//               '& .MuiOutlinedInput-root': {
//                 color: '#e0e0e0',
//                 backgroundColor: 'rgba(26, 31, 58, 0.6)',
//                 backdropFilter: 'blur(10px)',
//                 '& fieldset': {
//                   borderColor: '#2563eb',
//                 },
//                 '&:hover fieldset': {
//                   borderColor: '#3b82f6',
//                 },
//                 '&.Mui-focused fieldset': {
//                   borderColor: '#00ff88',
//                   borderWidth: 2,
//                 },
//               },
//               '& .MuiInputLabel-root': {
//                 color: '#9ca3af',
//               },
//               '& .MuiInputLabel-root.Mui-focused': {
//                 color: '#00ff88',
//               },
//             }}
//           />
//           <Button 
//             variant="contained" 
//             onClick={getRoute} 
//             disabled={loading || !start || !end}
//             style={{
//               background: loading || !start || !end 
//                 ? 'rgba(100, 100, 100, 0.3)' 
//                 : 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)',
//               color: loading || !start || !end ? '#666' : '#0a0e27',
//               fontWeight: 600,
//               padding: "12px 28px",
//               boxShadow: loading || !start || !end 
//                 ? 'none' 
//                 : '0 4px 20px rgba(0, 255, 136, 0.4)',
//               border: 'none',
//               transition: 'all 0.3s ease',
//               textTransform: 'uppercase',
//               letterSpacing: 1
//             }}
//           >
//             {loading ? "Finding..." : "Get Route"}
//           </Button>
//         </div>

//         {result && (
//           <Card style={{ 
//             padding: 24,
//             background: 'rgba(26, 31, 58, 0.8)',
//             backdropFilter: 'blur(20px)',
//             border: '1px solid rgba(37, 99, 235, 0.3)',
//             borderRadius: 12,
//             boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
//           }}>
//             {result.error ? (
//               <Typography 
//                 style={{
//                   color: "#ff4444",
//                   fontWeight: 500,
//                   padding: 8
//                 }}
//               >
//                 {result.error}
//               </Typography>
//             ) : (
//               <>
//                 <Typography 
//                   variant="h6"
//                   style={{
//                     color: '#00ff88',
//                     fontWeight: 600,
//                     marginBottom: 16,
//                     borderBottom: '2px solid rgba(0, 255, 136, 0.2)',
//                     paddingBottom: 8
//                   }}
//                 >
//                   Selected Route
//                 </Typography>
//                 <Typography style={{ color: '#e0e0e0', marginBottom: 8 }}>
//                   <strong style={{ color: '#3b82f6' }}>From:</strong> {result.from}
//                 </Typography>
//                 <Typography style={{ color: '#e0e0e0', marginBottom: 8 }}>
//                   <strong style={{ color: '#3b82f6' }}>To:</strong> {result.to}
//                 </Typography>
//                 <Typography style={{ color: '#e0e0e0', marginBottom: 8 }}>
//                   <strong style={{ color: '#3b82f6' }}>Chosen Node:</strong> {result.selected?.fog_node}
//                 </Typography>
//                 <Typography style={{ color: '#e0e0e0', marginBottom: 8 }}>
//                   <strong style={{ color: '#3b82f6' }}>Route:</strong> {result.selected?.suggested_route}
//                 </Typography>
//                 <Typography style={{ color: '#e0e0e0', marginBottom: 16 }}>
//                   <strong style={{ color: '#3b82f6' }}>Traffic:</strong> {result.selected?.traffic}
//                 </Typography>
//                 <Typography style={{ 
//                   marginTop: 20, 
//                   fontSize: 13,
//                   color: '#9ca3af',
//                   fontWeight: 500,
//                   marginBottom: 8
//                 }}>
//                   All candidates (debug):
//                 </Typography>
//                 <pre style={{ 
//                   whiteSpace: "pre-wrap", 
//                   fontSize: 12,
//                   backgroundColor: 'rgba(10, 14, 39, 0.6)',
//                   padding: 16,
//                   borderRadius: 8,
//                   color: '#00ff88',
//                   border: '1px solid rgba(0, 255, 136, 0.2)',
//                   overflowX: 'auto',
//                   fontFamily: 'monospace'
//                 }}>
//                   {JSON.stringify(result.candidates, null, 2)}
//                 </pre>
//               </>
//             )}
//           </Card>
//         )}
//       </div>
//     </div>
//   );
// }








// import React, { useState } from "react";
// import { Button, TextField, Typography, Card } from "@mui/material";

// export default function App() {
//   const [start, setStart] = useState("");
//   const [end, setEnd] = useState("");
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const getRoute = async () => {
//     setLoading(true);
//     setResult(null);
//     try {
//       const res = await fetch("http://127.0.0.1:8000/api/v1/route", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ start, end })
//       });
//       const data = await res.json();
//       setResult(data);
//     } catch (err) {
//       setResult({ error: "Gateway not reachable. Make sure gateway and fog node are running." });
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Apply background to body
//   React.useEffect(() => {
//     document.body.style.margin = '0';
//     document.body.style.padding = '0';
//     document.body.style.background = 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1419 100%)';
//     document.body.style.minHeight = '100vh';
//     document.documentElement.style.margin = '0';
//     document.documentElement.style.padding = '0';
    
//     return () => {
//       document.body.style.background = '';
//       document.body.style.minHeight = '';
//     };
//   }, []);

//   return (
//     <div style={{ 
//       minHeight: "100vh",
//       width: "100%",
//       padding: 24,
//       margin: 0
//     }}>
//       <div style={{ 
//         maxWidth: 700, 
//         margin: "0 auto",
//         paddingTop: 40,
//         paddingBottom: 40
//       }}>
//         <Typography 
//           variant="h4" 
//           gutterBottom
//           style={{
//             color: "#00ff88",
//             fontWeight: 700,
//             textShadow: "0 0 20px rgba(0, 255, 136, 0.3)",
//             marginBottom: 32,
//             letterSpacing: 1
//           }}
//         >
//           🚦 Fog Route Demo
//         </Typography>

//         <div style={{ 
//           display: "flex", 
//           gap: 12, 
//           alignItems: "center", 
//           marginBottom: 24,
//           flexWrap: "wrap"
//         }}>
//           <TextField 
//             label="From" 
//             value={start} 
//             onChange={(e) => setStart(e.target.value)}
//             size="small"
//             sx={{
//               flex: 1,
//               minWidth: 150,
//               '& .MuiOutlinedInput-root': {
//                 color: '#e0e0e0',
//                 backgroundColor: 'rgba(26, 31, 58, 0.6)',
//                 backdropFilter: 'blur(10px)',
//                 '& fieldset': {
//                   borderColor: '#2563eb',
//                 },
//                 '&:hover fieldset': {
//                   borderColor: '#3b82f6',
//                 },
//                 '&.Mui-focused fieldset': {
//                   borderColor: '#00ff88',
//                   borderWidth: 2,
//                 },
//               },
//               '& .MuiInputLabel-root': {
//                 color: '#9ca3af',
//               },
//               '& .MuiInputLabel-root.Mui-focused': {
//                 color: '#00ff88',
//               },
//             }}
//           />
//           <TextField 
//             label="To" 
//             value={end} 
//             onChange={(e) => setEnd(e.target.value)}
//             size="small"
//             sx={{
//               flex: 1,
//               minWidth: 150,
//               '& .MuiOutlinedInput-root': {
//                 color: '#e0e0e0',
//                 backgroundColor: 'rgba(26, 31, 58, 0.6)',
//                 backdropFilter: 'blur(10px)',
//                 '& fieldset': {
//                   borderColor: '#2563eb',
//                 },
//                 '&:hover fieldset': {
//                   borderColor: '#3b82f6',
//                 },
//                 '&.Mui-focused fieldset': {
//                   borderColor: '#00ff88',
//                   borderWidth: 2,
//                 },
//               },
//               '& .MuiInputLabel-root': {
//                 color: '#9ca3af',
//               },
//               '& .MuiInputLabel-root.Mui-focused': {
//                 color: '#00ff88',
//               },
//             }}
//           />
//           <Button 
//             variant="contained" 
//             onClick={getRoute} 
//             disabled={loading || !start || !end}
//             size="small"
//             style={{
//               background: loading || !start || !end 
//                 ? 'rgba(100, 100, 100, 0.3)' 
//                 : 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)',
//               color: loading || !start || !end ? '#666' : '#0a0e27',
//               fontWeight: 600,
//               padding: "8px 20px",
//               boxShadow: loading || !start || !end 
//                 ? 'none' 
//                 : '0 4px 20px rgba(0, 255, 136, 0.4)',
//               border: 'none',
//               transition: 'all 0.3s ease',
//               textTransform: 'uppercase',
//               letterSpacing: 1
//             }}
//           >
//             {loading ? "Finding..." : "Get Route"}
//           </Button>
//         </div>

//         {result && (
//           <Card style={{ 
//             padding: 24,
//             background: 'rgba(26, 31, 58, 0.8)',
//             backdropFilter: 'blur(20px)',
//             border: '1px solid rgba(37, 99, 235, 0.3)',
//             borderRadius: 12,
//             boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
//           }}>
//             {result.error ? (
//               <Typography 
//                 style={{
//                   color: "#ff4444",
//                   fontWeight: 500,
//                   padding: 8
//                 }}
//               >
//                 {result.error}
//               </Typography>
//             ) : (
//               <>
//                 <Typography 
//                   variant="h6"
//                   style={{
//                     color: '#00ff88',
//                     fontWeight: 600,
//                     marginBottom: 16,
//                     borderBottom: '2px solid rgba(0, 255, 136, 0.2)',
//                     paddingBottom: 8
//                   }}
//                 >
//                   Selected Route
//                 </Typography>
//                 <Typography style={{ color: '#e0e0e0', marginBottom: 8 }}>
//                   <strong style={{ color: '#3b82f6' }}>From:</strong> {result.from}
//                 </Typography>
//                 <Typography style={{ color: '#e0e0e0', marginBottom: 8 }}>
//                   <strong style={{ color: '#3b82f6' }}>To:</strong> {result.to}
//                 </Typography>
//                 <Typography style={{ color: '#e0e0e0', marginBottom: 8 }}>
//                   <strong style={{ color: '#3b82f6' }}>Chosen Node:</strong> {result.selected?.fog_node}
//                 </Typography>
//                 <Typography style={{ color: '#e0e0e0', marginBottom: 8 }}>
//                   <strong style={{ color: '#3b82f6' }}>Route:</strong> {result.selected?.suggested_route}
//                 </Typography>
//                 <Typography style={{ color: '#e0e0e0', marginBottom: 16 }}>
//                   <strong style={{ color: '#3b82f6' }}>Traffic:</strong> {result.selected?.traffic}
//                 </Typography>
//                 <Typography style={{ 
//                   marginTop: 20, 
//                   fontSize: 13,
//                   color: '#9ca3af',
//                   fontWeight: 500,
//                   marginBottom: 8
//                 }}>
//                   All candidates (debug):
//                 </Typography>
//                 <pre style={{ 
//                   whiteSpace: "pre-wrap", 
//                   fontSize: 12,
//                   backgroundColor: 'rgba(10, 14, 39, 0.6)',
//                   padding: 16,
//                   borderRadius: 8,
//                   color: '#00ff88',
//                   border: '1px solid rgba(0, 255, 136, 0.2)',
//                   overflowX: 'auto',
//                   fontFamily: 'monospace'
//                 }}>
//                   {JSON.stringify(result.candidates, null, 2)}
//                 </pre>
//               </>
//             )}
//           </Card>
//         )}
//       </div>
//     </div>
//   );
// }




// 




// import React, { useState, useEffect } from "react";
// import { Button, TextField, Typography, Card } from "@mui/material";

// // Leaflet + React-Leaflet
// import { MapContainer, TileLayer, Marker, Polyline, useMap } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

// // Vite-friendly imports for marker images
// import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
// import markerIcon from "leaflet/dist/images/marker-icon.png";
// import markerShadow from "leaflet/dist/images/marker-shadow.png";

// // Configure default marker icons
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: markerIcon2x,
//   iconUrl: markerIcon,
//   shadowUrl: markerShadow,
// });

// // ⭐ POLYLINE DECODER - Decodes ORS encoded polyline
// function decodePolyline(encoded) {
//   if (!encoded) return [];
  
//   const poly = [];
//   let index = 0, len = encoded.length;
//   let lat = 0, lng = 0;

//   while (index < len) {
//     let b, shift = 0, result = 0;
//     do {
//       b = encoded.charCodeAt(index++) - 63;
//       result |= (b & 0x1f) << shift;
//       shift += 5;
//     } while (b >= 0x20);
//     const dlat = ((result & 1) ? ~(result >> 1) : (result >> 1));
//     lat += dlat;

//     shift = 0;
//     result = 0;
//     do {
//       b = encoded.charCodeAt(index++) - 63;
//       result |= (b & 0x1f) << shift;
//       shift += 5;
//     } while (b >= 0x20);
//     const dlng = ((result & 1) ? ~(result >> 1) : (result >> 1));
//     lng += dlng;

//     poly.push([lat / 1e5, lng / 1e5]);
//   }
//   return poly;
// }

// export default function App() {
//   const [start, setStart] = useState("");
//   const [end, setEnd] = useState("");
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const [coords, setCoords] = useState({ start: null, end: null });
//   const [polylinePoints, setPolylinePoints] = useState([]);

//   const getRoute = async () => {
//     setLoading(true);
//     setResult(null);
//     setCoords({ start: null, end: null });
//     setPolylinePoints([]);

//     try {
//       const res = await fetch("http://127.0.0.1:8000/api/v1/route", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ start, end }),
//       });

//       const data = await res.json();
//       setResult(data);

//       // Update start/end markers
//       if (data && data.coords) {
//         setCoords({
//           start: data.coords.start || null,
//           end: data.coords.end || null,
//         });
//       }

//       // ⭐ DECODE the polyline from backend
//       if (data && data.polyline) {
//         const decoded = decodePolyline(data.polyline);
//         setPolylinePoints(decoded);
//         console.log("Decoded polyline points:", decoded.length);
//       }
//     } catch (err) {
//       console.error("Gateway fetch failed:", err);
//       setResult({
//         error:
//           "Gateway not reachable. Make sure gateway and fog node are running.",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Background styling
//   useEffect(() => {
//     document.body.style.margin = "0";
//     document.body.style.padding = "0";
//     document.body.style.background =
//       "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1419 100%)";
//     document.body.style.minHeight = "100vh";
//     document.documentElement.style.margin = "0";
//     document.documentElement.style.padding = "0";
    
//     return () => {
//       document.body.style.background = "";
//       document.body.style.minHeight = "";
//     };
//   }, []);

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         width: "100%",
//         padding: 24,
//         margin: 0,
//       }}
//     >
//       <div
//         style={{
//           maxWidth: 700,
//           margin: "0 auto",
//           paddingTop: 40,
//           paddingBottom: 40,
//           position: "relative",
//           zIndex: 10,
//         }}
//       >
//         <Typography
//           variant="h4"
//           gutterBottom
//           style={{
//             color: "#00ff88",
//             fontWeight: 700,
//             textShadow: "0 0 20px rgba(0, 255, 136, 0.3)",
//             marginBottom: 32,
//             letterSpacing: 1,
//             textAlign: "center",
//           }}
//         >
//           🚦 Fog Route Demo
//         </Typography>

//         <div
//           style={{
//             display: "flex",
//             gap: 12,
//             alignItems: "center",
//             marginBottom: 24,
//             flexWrap: "wrap",
//           }}
//         >
//           <TextField
//             label="From"
//             value={start}
//             onChange={(e) => setStart(e.target.value)}
//             size="small"
//             sx={{
//               flex: 1,
//               minWidth: 150,
//               "& .MuiOutlinedInput-root": {
//                 color: "#e0e0e0",
//                 backgroundColor: "rgba(26, 31, 58, 0.6)",
//                 backdropFilter: "blur(10px)",
//                 "& fieldset": {
//                   borderColor: "#2563eb",
//                 },
//                 "&:hover fieldset": {
//                   borderColor: "#3b82f6",
//                 },
//                 "&.Mui-focused fieldset": {
//                   borderColor: "#00ff88",
//                   borderWidth: 2,
//                 },
//               },
//               "& .MuiInputLabel-root": {
//                 color: "#9ca3af",
//               },
//               "& .MuiInputLabel-root.Mui-focused": {
//                 color: "#00ff88",
//               },
//             }}
//           />
//           <TextField
//             label="To"
//             value={end}
//             onChange={(e) => setEnd(e.target.value)}
//             size="small"
//             sx={{
//               flex: 1,
//               minWidth: 150,
//               "& .MuiOutlinedInput-root": {
//                 color: "#e0e0e0",
//                 backgroundColor: "rgba(26, 31, 58, 0.6)",
//                 backdropFilter: "blur(10px)",
//                 "& fieldset": {
//                   borderColor: "#2563eb",
//                 },
//                 "&:hover fieldset": {
//                   borderColor: "#3b82f6",
//                 },
//                 "&.Mui-focused fieldset": {
//                   borderColor: "#00ff88",
//                   borderWidth: 2,
//                 },
//               },
//               "& .MuiInputLabel-root": {
//                 color: "#9ca3af",
//               },
//               "& .MuiInputLabel-root.Mui-focused": {
//                 color: "#00ff88",
//               },
//             }}
//           />
//           <Button
//             variant="contained"
//             onClick={getRoute}
//             disabled={loading || !start || !end}
//             size="small"
//             style={{
//               background:
//                 loading || !start || !end
//                   ? "rgba(100, 100, 100, 0.3)"
//                   : "linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)",
//               color: loading || !start || !end ? "#666" : "#0a0e27",
//               fontWeight: 600,
//               padding: "8px 20px",
//               boxShadow:
//                 loading || !start || !end
//                   ? "none"
//                   : "0 4px 20px rgba(0, 255, 136, 0.4)",
//               border: "none",
//               transition: "all 0.3s ease",
//               textTransform: "uppercase",
//               letterSpacing: 1,
//             }}
//           >
//             {loading ? "Finding..." : "Get Route"}
//           </Button>
//         </div>

//         {result && (
//           <Card
//             style={{
//               padding: 24,
//               background: "rgba(26, 31, 58, 0.8)",
//               backdropFilter: "blur(20px)",
//               border: "1px solid rgba(37, 99, 235, 0.3)",
//               borderRadius: 12,
//               boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
//               marginBottom: 24,
//             }}
//           >
//             {result.error ? (
//               <Typography
//                 style={{
//                   color: "#ff4444",
//                   fontWeight: 500,
//                   padding: 8,
//                 }}
//               >
//                 {result.error}
//               </Typography>
//             ) : (
//               <>
//                 <Typography
//                   variant="h6"
//                   style={{
//                     color: "#00ff88",
//                     fontWeight: 600,
//                     marginBottom: 16,
//                     borderBottom: "2px solid rgba(0, 255, 136, 0.2)",
//                     paddingBottom: 8,
//                   }}
//                 >
//                   Selected Route
//                 </Typography>
//                 <Typography style={{ color: "#e0e0e0", marginBottom: 8 }}>
//                   <strong style={{ color: "#3b82f6" }}>From:</strong> {result.from}
//                 </Typography>
//                 <Typography style={{ color: "#e0e0e0", marginBottom: 8 }}>
//                   <strong style={{ color: "#3b82f6" }}>To:</strong> {result.to}
//                 </Typography>
//                 <Typography style={{ color: "#e0e0e0", marginBottom: 8 }}>
//                   <strong style={{ color: "#3b82f6" }}>Chosen Node:</strong> {result.selected?.fog_node}
//                 </Typography>
//                 <Typography style={{ color: "#e0e0e0", marginBottom: 8 }}>
//                   <strong style={{ color: "#3b82f6" }}>Route:</strong> {result.selected?.suggested_route}
//                 </Typography>
//                 <Typography style={{ color: "#e0e0e0", marginBottom: 16 }}>
//                   <strong style={{ color: "#3b82f6" }}>Traffic:</strong> {result.selected?.traffic}
//                 </Typography>
//                 {/* Traffic Comparison Bar Chart */}
//                 {result.candidates && result.candidates.length > 0 && (
//                   <>
//                     <Typography
//                       style={{
//                         marginTop: 20,
//                         fontSize: 13,
//                         color: "#9ca3af",
//                         fontWeight: 500,
//                         marginBottom: 12,
//                       }}
//                     >
//                       Traffic Score Comparison:
//                     </Typography>
//                     <div style={{ marginTop: 12 }}>
//                       {result.candidates.map((candidate, idx) => (
//                         <div key={idx} style={{ marginBottom: 12 }}>
//                           <div style={{ 
//                             display: 'flex', 
//                             justifyContent: 'space-between',
//                             marginBottom: 4,
//                             color: '#e0e0e0',
//                             fontSize: 12
//                           }}>
//                             <span>{candidate.fog_node}</span>
//                             <span>{candidate.traffic}</span>
//                           </div>
//                           <div style={{
//                             width: '100%',
//                             height: 20,
//                             backgroundColor: 'rgba(10, 14, 39, 0.6)',
//                             borderRadius: 4,
//                             overflow: 'hidden',
//                             border: '1px solid rgba(37, 99, 235, 0.3)'
//                           }}>
//                             <div style={{
//                               width: `${(candidate.score / 3) * 100}%`,
//                               height: '100%',
//                               background: candidate.score === 3 
//                                 ? 'linear-gradient(90deg, #00ff88, #00cc6a)'
//                                 : candidate.score === 2
//                                 ? 'linear-gradient(90deg, #fbbf24, #f59e0b)'
//                                 : 'linear-gradient(90deg, #ef4444, #dc2626)',
//                               transition: 'width 0.3s ease'
//                             }}></div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </>
//                 )}
//               </>
//             )}
//           </Card>
//         )}

//         {/* Map Section - Always visible after route is fetched */}
//         {result && !result.error && polylinePoints.length > 0 && (
//           <div
//             style={{
//               height: "600px",
//               width: "100%",
//               borderRadius: 12,
//               overflow: "hidden",
//               boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
//               border: "1px solid rgba(37, 99, 235, 0.3)",
//               marginTop: 24,
//             }}
//           >
//             <MapContainer
//               center={coords.start || [22, 79]}
//               zoom={5}
//               style={{ height: "100%", width: "100%" }}
//               key={polylinePoints.length} // Force re-render when route changes
//             >
//               <TileLayer
//                 attribution="&copy; OpenStreetMap contributors"
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               />

//               {/* Auto-fit to route */}
//               <Recenter points={polylinePoints} />

//               {/* Start & End markers */}
//               {coords.start && <Marker position={coords.start} />}
//               {coords.end && <Marker position={coords.end} />}

//               {/* Real ORS Route */}
//               <Polyline 
//                 positions={polylinePoints} 
//                 color="#00ff88" 
//                 weight={5}
//                 opacity={0.8}
//               />
//             </MapContainer>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// // Auto zoom/fit map to polyline
// function Recenter({ points }) {
//   const map = useMap();
//   useEffect(() => {
//     if (!points || points.length === 0) return;
//     map.fitBounds(points, { padding: [60, 60] });
//   }, [points, map]);
//   return null;
// }










// import React, { useState, useEffect } from "react";
// import { Button, TextField, Typography, Card } from "@mui/material";

// // Leaflet + React-Leaflet
// import { MapContainer, TileLayer, Marker, Polyline, useMap } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

// // Vite-friendly imports for marker images
// import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
// import markerIcon from "leaflet/dist/images/marker-icon.png";
// import markerShadow from "leaflet/dist/images/marker-shadow.png";

// // Configure default marker icons
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: markerIcon2x,
//   iconUrl: markerIcon,
//   shadowUrl: markerShadow,
// });

// // ⭐ POLYLINE DECODER - Decodes ORS encoded polyline
// function decodePolyline(encoded) {
//   if (!encoded) return [];
  
//   const poly = [];
//   let index = 0, len = encoded.length;
//   let lat = 0, lng = 0;

//   while (index < len) {
//     let b, shift = 0, result = 0;
//     do {
//       b = encoded.charCodeAt(index++) - 63;
//       result |= (b & 0x1f) << shift;
//       shift += 5;
//     } while (b >= 0x20);
//     const dlat = ((result & 1) ? ~(result >> 1) : (result >> 1));
//     lat += dlat;

//     shift = 0;
//     result = 0;
//     do {
//       b = encoded.charCodeAt(index++) - 63;
//       result |= (b & 0x1f) << shift;
//       shift += 5;
//     } while (b >= 0x20);
//     const dlng = ((result & 1) ? ~(result >> 1) : (result >> 1));
//     lng += dlng;

//     poly.push([lat / 1e5, lng / 1e5]);
//   }
//   return poly;
// }

// export default function App() {
//   const [start, setStart] = useState("");
//   const [end, setEnd] = useState("");
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const [coords, setCoords] = useState({ start: null, end: null });
//   const [polylinePoints, setPolylinePoints] = useState([]);

//   const getRoute = async () => {
//     setLoading(true);
//     setResult(null);
//     setCoords({ start: null, end: null });
//     setPolylinePoints([]);

//     try {
//       const res = await fetch("http://127.0.0.1:8000/api/v1/route", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ start, end }),
//       });

//       const data = await res.json();
//       setResult(data);

//       // Update start/end markers
//       if (data && data.coords) {
//         setCoords({
//           start: data.coords.start || null,
//           end: data.coords.end || null,
//         });
//       }

//       // ⭐ DECODE the polyline from backend
//       if (data && data.polyline) {
//         const decoded = decodePolyline(data.polyline);
//         setPolylinePoints(decoded);
//         console.log("Decoded polyline points:", decoded.length);
//       }
//     } catch (err) {
//       console.error("Gateway fetch failed:", err);
//       setResult({
//         error:
//           "Gateway not reachable. Make sure gateway and fog node are running.",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Background styling
//   useEffect(() => {
//     document.body.style.margin = "0";
//     document.body.style.padding = "0";
//     document.body.style.background =
//       "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1419 100%)";
//     document.body.style.minHeight = "100vh";
//     document.documentElement.style.margin = "0";
//     document.documentElement.style.padding = "0";
    
//     return () => {
//       document.body.style.background = "";
//       document.body.style.minHeight = "";
//     };
//   }, []);

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         width: "100%",
//         padding: 24,
//         margin: 0,
//         display: "flex",
//         gap: 24,
//       }}
//     >
//       {/* Left Statistics Panel */}
//       {result && !result.error && (
//         <div
//           style={{
//             width: 350,
//             paddingTop: 40,
//             flexShrink: 0,
//           }}
//         >
//           <Card
//             style={{
//               padding: 24,
//               background: "rgba(26, 31, 58, 0.8)",
//               backdropFilter: "blur(20px)",
//               border: "1px solid rgba(37, 99, 235, 0.3)",
//               borderRadius: 12,
//               boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
//               marginBottom: 24,
//               position: "sticky",
//               top: 40,
//             }}
//           >
//             <Typography
//               variant="h6"
//               style={{
//                 color: "#00ff88",
//                 fontWeight: 600,
//                 marginBottom: 20,
//                 borderBottom: "2px solid rgba(0, 255, 136, 0.2)",
//                 paddingBottom: 8,
//               }}
//             >
//               📊 Route Statistics
//             </Typography>

//             {/* Key Metrics */}
//             <div style={{ marginBottom: 24 }}>
//               <div style={{ 
//                 background: "rgba(37, 99, 235, 0.1)", 
//                 padding: 16, 
//                 borderRadius: 8,
//                 marginBottom: 12,
//                 border: "1px solid rgba(59, 130, 246, 0.3)"
//               }}>
//                 <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 4 }}>
//                   Total Fog Nodes
//                 </div>
//                 <div style={{ fontSize: 28, fontWeight: 700, color: "#3b82f6" }}>
//                   {result.candidates?.length || 0}
//                 </div>
//               </div>

//               <div style={{ 
//                 background: "rgba(0, 255, 136, 0.1)", 
//                 padding: 16, 
//                 borderRadius: 8,
//                 border: "1px solid rgba(0, 255, 136, 0.3)"
//               }}>
//                 <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 4 }}>
//                   Selected Node
//                 </div>
//                 <div style={{ fontSize: 20, fontWeight: 600, color: "#00ff88" }}>
//                   {result.selected?.fog_node}
//                 </div>
//               </div>
//             </div>

//             {/* Traffic Distribution Chart */}
//             {result.candidates && result.candidates.length > 0 && (
//               <>
//                 <Typography
//                   style={{
//                     fontSize: 14,
//                     color: "#e0e0e0",
//                     fontWeight: 600,
//                     marginBottom: 16,
//                     marginTop: 24,
//                   }}
//                 >
//                   Traffic Distribution
//                 </Typography>
                
//                 {result.candidates.map((candidate, idx) => {
//                   const trafficValue = 
//                     candidate.traffic === "Light" ? 33 :
//                     candidate.traffic === "Moderate" ? 66 :
//                     candidate.traffic === "Heavy" ? 100 : 50;
                  
//                   return (
//                     <div key={idx} style={{ marginBottom: 16 }}>
//                       <div style={{ 
//                         display: 'flex', 
//                         justifyContent: 'space-between',
//                         marginBottom: 6,
//                         fontSize: 12
//                       }}>
//                         <span style={{ 
//                           color: candidate.fog_node === result.selected?.fog_node 
//                             ? '#00ff88' 
//                             : '#e0e0e0',
//                           fontWeight: candidate.fog_node === result.selected?.fog_node 
//                             ? 600 
//                             : 400
//                         }}>
//                           {candidate.fog_node}
//                         </span>
//                         <span style={{ 
//                           color: candidate.traffic === "Light" ? '#00ff88' :
//                                  candidate.traffic === "Moderate" ? '#fbbf24' :
//                                  '#ef4444',
//                           fontWeight: 600
//                         }}>
//                           {candidate.traffic}
//                         </span>
//                       </div>
//                       <div style={{
//                         width: '100%',
//                         height: 24,
//                         backgroundColor: 'rgba(10, 14, 39, 0.8)',
//                         borderRadius: 6,
//                         overflow: 'hidden',
//                         border: candidate.fog_node === result.selected?.fog_node
//                           ? '2px solid #00ff88'
//                           : '1px solid rgba(37, 99, 235, 0.3)',
//                         position: 'relative'
//                       }}>
//                         <div style={{
//                           width: `${trafficValue}%`,
//                           height: '100%',
//                           background: candidate.traffic === "Light"
//                             ? 'linear-gradient(90deg, #00ff88, #00cc6a)'
//                             : candidate.traffic === "Moderate"
//                             ? 'linear-gradient(90deg, #fbbf24, #f59e0b)'
//                             : 'linear-gradient(90deg, #ef4444, #dc2626)',
//                           transition: 'width 0.5s ease',
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'flex-end',
//                           paddingRight: 8
//                         }}>
//                           <span style={{
//                             fontSize: 10,
//                             fontWeight: 600,
//                             color: '#fff',
//                             textShadow: '0 1px 2px rgba(0,0,0,0.5)'
//                           }}>
//                             {trafficValue}%
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}

//                 {/* Traffic Legend */}
//                 <div style={{ 
//                   marginTop: 20, 
//                   padding: 12,
//                   background: 'rgba(10, 14, 39, 0.4)',
//                   borderRadius: 8,
//                   border: '1px solid rgba(37, 99, 235, 0.2)'
//                 }}>
//                   <div style={{ fontSize: 11, color: '#9ca3af', marginBottom: 8 }}>
//                     Traffic Levels:
//                   </div>
//                   <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
//                     <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
//                       <div style={{ 
//                         width: 12, 
//                         height: 12, 
//                         borderRadius: 2,
//                         background: 'linear-gradient(90deg, #00ff88, #00cc6a)'
//                       }}></div>
//                       <span style={{ fontSize: 11, color: '#e0e0e0' }}>Light (0-33%)</span>
//                     </div>
//                     <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
//                       <div style={{ 
//                         width: 12, 
//                         height: 12, 
//                         borderRadius: 2,
//                         background: 'linear-gradient(90deg, #fbbf24, #f59e0b)'
//                       }}></div>
//                       <span style={{ fontSize: 11, color: '#e0e0e0' }}>Moderate (34-66%)</span>
//                     </div>
//                     <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
//                       <div style={{ 
//                         width: 12, 
//                         height: 12, 
//                         borderRadius: 2,
//                         background: 'linear-gradient(90deg, #ef4444, #dc2626)'
//                       }}></div>
//                       <span style={{ fontSize: 11, color: '#e0e0e0' }}>Heavy (67-100%)</span>
//                     </div>
//                   </div>
//                 </div>
//               </>
//             )}
//           </Card>
//         </div>
//       )}

//       <div
//         style={{
//           flex: 1,
//           maxWidth: result && !result.error ? undefined : 700,
//           margin: result && !result.error ? 0 : "0 auto",
//           paddingTop: 40,
//           paddingBottom: 40,
//           position: "relative",
//           zIndex: 10,
//         }}
//       >
//         <Typography
//           variant="h4"
//           gutterBottom
//           style={{
//             color: "#00ff88",
//             fontWeight: 700,
//             textShadow: "0 0 20px rgba(0, 255, 136, 0.3)",
//             marginBottom: 32,
//             letterSpacing: 1,
//             textAlign: "center",
//           }}
//         >
//           🚦 Fog Route Demo
//         </Typography>

//         <div
//           style={{
//             display: "flex",
//             gap: 12,
//             alignItems: "center",
//             marginBottom: 24,
//             flexWrap: "wrap",
//           }}
//         >
//           <TextField
//             label="From"
//             value={start}
//             onChange={(e) => setStart(e.target.value)}
//             size="small"
//             sx={{
//               flex: 1,
//               minWidth: 150,
//               "& .MuiOutlinedInput-root": {
//                 color: "#e0e0e0",
//                 backgroundColor: "rgba(26, 31, 58, 0.6)",
//                 backdropFilter: "blur(10px)",
//                 "& fieldset": {
//                   borderColor: "#2563eb",
//                 },
//                 "&:hover fieldset": {
//                   borderColor: "#3b82f6",
//                 },
//                 "&.Mui-focused fieldset": {
//                   borderColor: "#00ff88",
//                   borderWidth: 2,
//                 },
//               },
//               "& .MuiInputLabel-root": {
//                 color: "#9ca3af",
//               },
//               "& .MuiInputLabel-root.Mui-focused": {
//                 color: "#00ff88",
//               },
//             }}
//           />
//           <TextField
//             label="To"
//             value={end}
//             onChange={(e) => setEnd(e.target.value)}
//             size="small"
//             sx={{
//               flex: 1,
//               minWidth: 150,
//               "& .MuiOutlinedInput-root": {
//                 color: "#e0e0e0",
//                 backgroundColor: "rgba(26, 31, 58, 0.6)",
//                 backdropFilter: "blur(10px)",
//                 "& fieldset": {
//                   borderColor: "#2563eb",
//                 },
//                 "&:hover fieldset": {
//                   borderColor: "#3b82f6",
//                 },
//                 "&.Mui-focused fieldset": {
//                   borderColor: "#00ff88",
//                   borderWidth: 2,
//                 },
//               },
//               "& .MuiInputLabel-root": {
//                 color: "#9ca3af",
//               },
//               "& .MuiInputLabel-root.Mui-focused": {
//                 color: "#00ff88",
//               },
//             }}
//           />
//           <Button
//             variant="contained"
//             onClick={getRoute}
//             disabled={loading || !start || !end}
//             size="small"
//             style={{
//               background:
//                 loading || !start || !end
//                   ? "rgba(100, 100, 100, 0.3)"
//                   : "linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)",
//               color: loading || !start || !end ? "#666" : "#0a0e27",
//               fontWeight: 600,
//               padding: "8px 20px",
//               boxShadow:
//                 loading || !start || !end
//                   ? "none"
//                   : "0 4px 20px rgba(0, 255, 136, 0.4)",
//               border: "none",
//               transition: "all 0.3s ease",
//               textTransform: "uppercase",
//               letterSpacing: 1,
//             }}
//           >
//             {loading ? "Finding..." : "Get Route"}
//           </Button>
//         </div>

//         {result && (
//           <Card
//             style={{
//               padding: 24,
//               background: "rgba(26, 31, 58, 0.8)",
//               backdropFilter: "blur(20px)",
//               border: "1px solid rgba(37, 99, 235, 0.3)",
//               borderRadius: 12,
//               boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
//               marginBottom: 24,
//             }}
//           >
//             {result.error ? (
//               <Typography
//                 style={{
//                   color: "#ff4444",
//                   fontWeight: 500,
//                   padding: 8,
//                 }}
//               >
//                 {result.error}
//               </Typography>
//             ) : (
//               <>
//                 <Typography
//                   variant="h6"
//                   style={{
//                     color: "#00ff88",
//                     fontWeight: 600,
//                     marginBottom: 16,
//                     borderBottom: "2px solid rgba(0, 255, 136, 0.2)",
//                     paddingBottom: 8,
//                   }}
//                 >
//                   Selected Route
//                 </Typography>
//                 <Typography style={{ color: "#e0e0e0", marginBottom: 8 }}>
//                   <strong style={{ color: "#3b82f6" }}>From:</strong> {result.from}
//                 </Typography>
//                 <Typography style={{ color: "#e0e0e0", marginBottom: 8 }}>
//                   <strong style={{ color: "#3b82f6" }}>To:</strong> {result.to}
//                 </Typography>
//                 <Typography style={{ color: "#e0e0e0", marginBottom: 8 }}>
//                   <strong style={{ color: "#3b82f6" }}>Chosen Node:</strong> {result.selected?.fog_node}
//                 </Typography>
//                 <Typography style={{ color: "#e0e0e0", marginBottom: 8 }}>
//                   <strong style={{ color: "#3b82f6" }}>Route:</strong> {result.selected?.suggested_route}
//                 </Typography>
//                 <Typography style={{ color: "#e0e0e0", marginBottom: 16 }}>
//                   <strong style={{ color: "#3b82f6" }}>Traffic:</strong> {result.selected?.traffic}
//                 </Typography>
//                 {/* Traffic Comparison Bar Chart */}
//                 {result.candidates && result.candidates.length > 0 && (
//                   <>
//                     <Typography
//                       style={{
//                         marginTop: 20,
//                         fontSize: 13,
//                         color: "#9ca3af",
//                         fontWeight: 500,
//                         marginBottom: 12,
//                       }}
//                     >
//                       Traffic Score Comparison:
//                     </Typography>
//                     <div style={{ marginTop: 12 }}>
//                       {result.candidates.map((candidate, idx) => (
//                         <div key={idx} style={{ marginBottom: 12 }}>
//                           <div style={{ 
//                             display: 'flex', 
//                             justifyContent: 'space-between',
//                             marginBottom: 4,
//                             color: '#e0e0e0',
//                             fontSize: 12
//                           }}>
//                             <span>{candidate.fog_node}</span>
//                             <span>{candidate.traffic}</span>
//                           </div>
//                           <div style={{
//                             width: '100%',
//                             height: 20,
//                             backgroundColor: 'rgba(10, 14, 39, 0.6)',
//                             borderRadius: 4,
//                             overflow: 'hidden',
//                             border: '1px solid rgba(37, 99, 235, 0.3)'
//                           }}>
//                             <div style={{
//                               width: `${(candidate.score / 3) * 100}%`,
//                               height: '100%',
//                               background: candidate.score === 3 
//                                 ? 'linear-gradient(90deg, #00ff88, #00cc6a)'
//                                 : candidate.score === 2
//                                 ? 'linear-gradient(90deg, #fbbf24, #f59e0b)'
//                                 : 'linear-gradient(90deg, #ef4444, #dc2626)',
//                               transition: 'width 0.3s ease'
//                             }}></div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </>
//                 )}
//               </>
//             )}
//           </Card>
//         )}

//         {/* Map Section - Always visible after route is fetched */}
//         {result && !result.error && polylinePoints.length > 0 && (
//           <div
//             style={{
//               height: "600px",
//               width: "100%",
//               borderRadius: 12,
//               overflow: "hidden",
//               boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
//               border: "1px solid rgba(37, 99, 235, 0.3)",
//               marginTop: 24,
//             }}
//           >
//             <MapContainer
//               center={coords.start || [22, 79]}
//               zoom={5}
//               style={{ height: "100%", width: "100%" }}
//               key={polylinePoints.length} // Force re-render when route changes
//             >
//               <TileLayer
//                 attribution="&copy; OpenStreetMap contributors"
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               />

//               {/* Auto-fit to route */}
//               <Recenter points={polylinePoints} />

//               {/* Start & End markers */}
//               {coords.start && <Marker position={coords.start} />}
//               {coords.end && <Marker position={coords.end} />}

//               {/* Real ORS Route */}
//               <Polyline 
//                 positions={polylinePoints} 
//                 color="#00ff88" 
//                 weight={5}
//                 opacity={0.8}
//               />
//             </MapContainer>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// // Auto zoom/fit map to polyline
// function Recenter({ points }) {
//   const map = useMap();
//   useEffect(() => {
//     if (!points || points.length === 0) return;
//     map.fitBounds(points, { padding: [60, 60] });
//   }, [points, map]);
//   return null;
// }






















































// import React, { useState, useEffect } from "react";
// import { Button, TextField, Typography, Card } from "@mui/material";

// // Leaflet + React-Leaflet
// import { MapContainer, TileLayer, Marker, Polyline, useMap } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

// // Vite-friendly imports for marker images
// import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
// import markerIcon from "leaflet/dist/images/marker-icon.png";
// import markerShadow from "leaflet/dist/images/marker-shadow.png";

// // Configure default marker icons
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: markerIcon2x,
//   iconUrl: markerIcon,
//   shadowUrl: markerShadow,
// });

// // ⭐ POLYLINE DECODER - Decodes ORS encoded polyline
// function decodePolyline(encoded) {
//   if (!encoded) return [];
  
//   const poly = [];
//   let index = 0, len = encoded.length;
//   let lat = 0, lng = 0;

//   while (index < len) {
//     let b, shift = 0, result = 0;
//     do {
//       b = encoded.charCodeAt(index++) - 63;
//       result |= (b & 0x1f) << shift;
//       shift += 5;
//     } while (b >= 0x20);
//     const dlat = ((result & 1) ? ~(result >> 1) : (result >> 1));
//     lat += dlat;

//     shift = 0;
//     result = 0;
//     do {
//       b = encoded.charCodeAt(index++) - 63;
//       result |= (b & 0x1f) << shift;
//       shift += 5;
//     } while (b >= 0x20);
//     const dlng = ((result & 1) ? ~(result >> 1) : (result >> 1));
//     lng += dlng;

//     poly.push([lat / 1e5, lng / 1e5]);
//   }
//   return poly;
// }

// export default function App() {
//   const [start, setStart] = useState("");
//   const [end, setEnd] = useState("");
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const [coords, setCoords] = useState({ start: null, end: null });
//   const [polylinePoints, setPolylinePoints] = useState([]);

//   const getRoute = async () => {
//     setLoading(true);
//     setResult(null);
//     setCoords({ start: null, end: null });
//     setPolylinePoints([]);

//     try {
//       const res = await fetch("http://127.0.0.1:8000/api/v1/route", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ start, end }),
//       });

//       const data = await res.json();
//       setResult(data);

//       // Update start/end markers
//       if (data && data.coords) {
//         setCoords({
//           start: data.coords.start || null,
//           end: data.coords.end || null,
//         });
//       }

//       // ⭐ DECODE the polyline from backend
//       if (data && data.polyline) {
//         const decoded = decodePolyline(data.polyline);
//         setPolylinePoints(decoded);
//         console.log("Decoded polyline points:", decoded.length);
//       }
//     } catch (err) {
//       console.error("Gateway fetch failed:", err);
//       setResult({
//         error:
//           "Gateway not reachable. Make sure gateway and fog node are running.",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Background styling
//   useEffect(() => {
//     document.body.style.margin = "0";
//     document.body.style.padding = "0";
//     document.body.style.background =
//       "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1419 100%)";
//     document.body.style.minHeight = "100vh";
//     document.documentElement.style.margin = "0";
//     document.documentElement.style.padding = "0";
    
//     return () => {
//       document.body.style.background = "";
//       document.body.style.minHeight = "";
//     };
//   }, []);

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         width: "100%",
//         padding: 24,
//         margin: 0,
//         display: "flex",
//         gap: 24,
//       }}
//     >
//       {/* Left Statistics Panel */}
//       {result && !result.error && (
//         <div
//           style={{
//             width: 350,
//             paddingTop: 40,
//             flexShrink: 0,
//           }}
//         >
//           <Card
//             style={{
//               padding: 24,
//               background: "rgba(26, 31, 58, 0.8)",
//               backdropFilter: "blur(20px)",
//               border: "1px solid rgba(37, 99, 235, 0.3)",
//               borderRadius: 12,
//               boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
//               marginBottom: 24,
//               position: "sticky",
//               top: 40,
//             }}
//           >
//             <Typography
//               variant="h6"
//               style={{
//                 color: "#00ff88",
//                 fontWeight: 600,
//                 marginBottom: 20,
//                 borderBottom: "2px solid rgba(0, 255, 136, 0.2)",
//                 paddingBottom: 8,
//               }}
//             >
//               📊 Route Statistics
//             </Typography>

//             {/* Key Metrics */}
//             <div style={{ marginBottom: 24 }}>
//               <div style={{ 
//                 background: "rgba(37, 99, 235, 0.1)", 
//                 padding: 16, 
//                 borderRadius: 8,
//                 marginBottom: 12,
//                 border: "1px solid rgba(59, 130, 246, 0.3)"
//               }}>
//                 <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 4 }}>
//                   Total Fog Nodes
//                 </div>
//                 <div style={{ fontSize: 28, fontWeight: 700, color: "#3b82f6" }}>
//                   {result.candidates?.length || 0}
//                 </div>
//               </div>

//               <div style={{ 
//                 background: "rgba(0, 255, 136, 0.1)", 
//                 padding: 16, 
//                 borderRadius: 8,
//                 border: "1px solid rgba(0, 255, 136, 0.3)"
//               }}>
//                 <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 4 }}>
//                   Selected Node
//                 </div>
//                 <div style={{ fontSize: 20, fontWeight: 600, color: "#00ff88" }}>
//                   {result.selected?.fog_node}
//                 </div>
//               </div>
//             </div>

//             {/* Traffic Analysis Bar Chart */}
//             {result.candidates && result.candidates.length > 0 && (
//               <>
//                 <Typography
//                   style={{
//                     fontSize: 14,
//                     color: "#e0e0e0",
//                     fontWeight: 600,
//                     marginBottom: 20,
//                     marginTop: 24,
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: 8
//                   }}
//                 >
//                   📊 Traffic Analysis by Segment
//                 </Typography>
                
//                 {/* Bar Chart */}
//                 <div style={{
//                   background: 'rgba(10, 14, 39, 0.4)',
//                   borderRadius: 8,
//                   padding: '20px 16px',
//                   border: '1px solid rgba(37, 99, 235, 0.2)',
//                   position: 'relative'
//                 }}>
//                   {/* Y-axis labels and grid */}
//                   <div style={{ position: 'relative', height: 200 }}>
//                     {/* Grid lines */}
//                     {[100, 75, 50, 25, 0].map((val, i) => (
//                       <div key={val} style={{
//                         position: 'absolute',
//                         left: 30,
//                         right: 0,
//                         top: `${i * 25}%`,
//                         borderTop: '1px dotted rgba(156, 163, 175, 0.2)',
//                         display: 'flex',
//                         alignItems: 'center'
//                       }}>
//                         <span style={{
//                           position: 'absolute',
//                           left: -30,
//                           fontSize: 10,
//                           color: '#9ca3af',
//                           width: 25,
//                           textAlign: 'right'
//                         }}>
//                           {val}
//                         </span>
//                       </div>
//                     ))}
                    
//                     {/* Bars */}
//                     <div style={{
//                       position: 'absolute',
//                       left: 35,
//                       right: 0,
//                       top: 0,
//                       bottom: 0,
//                       display: 'flex',
//                       alignItems: 'flex-end',
//                       justifyContent: 'space-around',
//                       gap: 4
//                     }}>
//                       {result.candidates.map((candidate, idx) => {
//                         // Use real data from backend
//                         const speed = candidate.speed || 0; // Speed in km/h
//                         const congestion = candidate.congestion || 0; // Congestion percentage
//                         const delay = candidate.delay || 0; // Delay in minutes
                        
//                         return (
//                           <div key={idx} style={{
//                             flex: 1,
//                             display: 'flex',
//                             flexDirection: 'column',
//                             alignItems: 'center',
//                             gap: 3,
//                             minWidth: 0
//                           }}>
//                             {/* Bars group */}
//                             <div style={{
//                               width: '100%',
//                               display: 'flex',
//                               alignItems: 'flex-end',
//                               justifyContent: 'center',
//                               gap: 2,
//                               height: 180
//                             }}>
//                               {/* Speed bar (blue) */}
//                               <div style={{
//                                 width: '28%',
//                                 height: `${speed}%`,
//                                 background: 'linear-gradient(180deg, #60a5fa, #3b82f6)',
//                                 borderRadius: '3px 3px 0 0',
//                                 minHeight: 4,
//                                 transition: 'height 0.5s ease'
//                               }}></div>
                              
//                               {/* Congestion bar (red) */}
//                               <div style={{
//                                 width: '28%',
//                                 height: `${congestion}%`,
//                                 background: 'linear-gradient(180deg, #f87171, #ef4444)',
//                                 borderRadius: '3px 3px 0 0',
//                                 minHeight: 4,
//                                 transition: 'height 0.5s ease'
//                               }}></div>
                              
//                               {/* Delay bar (orange) */}
//                               <div style={{
//                                 width: '28%',
//                                 height: `${delay}%`,
//                                 background: 'linear-gradient(180deg, #fbbf24, #f59e0b)',
//                                 borderRadius: '3px 3px 0 0',
//                                 minHeight: 4,
//                                 transition: 'height 0.5s ease'
//                               }}></div>
//                             </div>
                            
//                             {/* Label */}
//                             <div style={{
//                               fontSize: 9,
//                               color: candidate.fog_node === result.selected?.fog_node 
//                                 ? '#00ff88' 
//                                 : '#9ca3af',
//                               fontWeight: candidate.fog_node === result.selected?.fog_node 
//                                 ? 600 
//                                 : 400,
//                               textAlign: 'center',
//                               marginTop: 4,
//                               whiteSpace: 'nowrap',
//                               overflow: 'hidden',
//                               textOverflow: 'ellipsis',
//                               width: '100%'
//                             }}>
//                               {candidate.fog_node.replace('Fog Node ', 'N')}
//                             </div>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </div>
                  
//                   {/* Legend */}
//                   <div style={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     gap: 12,
//                     marginTop: 16,
//                     paddingTop: 12,
//                     borderTop: '1px solid rgba(37, 99, 235, 0.2)',
//                     flexWrap: 'wrap'
//                   }}>
//                     <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
//                       <div style={{
//                         width: 12,
//                         height: 12,
//                         background: 'linear-gradient(180deg, #60a5fa, #3b82f6)',
//                         borderRadius: 2
//                       }}></div>
//                       <span style={{ fontSize: 10, color: '#9ca3af' }}>Speed (km/h)</span>
//                     </div>
//                     <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
//                       <div style={{
//                         width: 12,
//                         height: 12,
//                         background: 'linear-gradient(180deg, #f87171, #ef4444)',
//                         borderRadius: 2
//                       }}></div>
//                       <span style={{ fontSize: 10, color: '#9ca3af' }}>Congestion (%)</span>
//                     </div>
//                     <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
//                       <div style={{
//                         width: 12,
//                         height: 12,
//                         background: 'linear-gradient(180deg, #fbbf24, #f59e0b)',
//                         borderRadius: 2
//                       }}></div>
//                       <span style={{ fontSize: 10, color: '#9ca3af' }}>Delay (min)</span>
//                     </div>
//                   </div>
//                 </div>
//               </>
//             )}
//           </Card>
//         </div>
//       )}

//       <div
//         style={{
//           flex: 1,
//           maxWidth: result && !result.error ? undefined : 700,
//           margin: result && !result.error ? 0 : "0 auto",
//           paddingTop: 40,
//           paddingBottom: 40,
//           position: "relative",
//           zIndex: 10,
//         }}
//       >
//         <Typography
//           variant="h4"
//           gutterBottom
//           style={{
//             color: "#00ff88",
//             fontWeight: 700,
//             textShadow: "0 0 20px rgba(0, 255, 136, 0.3)",
//             marginBottom: 32,
//             letterSpacing: 1,
//             textAlign: "center",
//           }}
//         >
//           🚦 Traffic Route Demo
//         </Typography>

//         <div
//           style={{
//             display: "flex",
//             gap: 12,
//             alignItems: "center",
//             marginBottom: 24,
//             flexWrap: "wrap",
//           }}
//         >
//           <TextField
//             label="From"
//             value={start}
//             onChange={(e) => setStart(e.target.value)}
//             size="small"
//             sx={{
//               flex: 1,
//               minWidth: 150,
//               "& .MuiOutlinedInput-root": {
//                 color: "#e0e0e0",
//                 backgroundColor: "rgba(26, 31, 58, 0.6)",
//                 backdropFilter: "blur(10px)",
//                 "& fieldset": {
//                   borderColor: "#2563eb",
//                 },
//                 "&:hover fieldset": {
//                   borderColor: "#3b82f6",
//                 },
//                 "&.Mui-focused fieldset": {
//                   borderColor: "#00ff88",
//                   borderWidth: 2,
//                 },
//               },
//               "& .MuiInputLabel-root": {
//                 color: "#9ca3af",
//               },
//               "& .MuiInputLabel-root.Mui-focused": {
//                 color: "#00ff88",
//               },
//             }}
//           />
//           <TextField
//             label="To"
//             value={end}
//             onChange={(e) => setEnd(e.target.value)}
//             size="small"
//             sx={{
//               flex: 1,
//               minWidth: 150,
//               "& .MuiOutlinedInput-root": {
//                 color: "#e0e0e0",
//                 backgroundColor: "rgba(26, 31, 58, 0.6)",
//                 backdropFilter: "blur(10px)",
//                 "& fieldset": {
//                   borderColor: "#2563eb",
//                 },
//                 "&:hover fieldset": {
//                   borderColor: "#3b82f6",
//                 },
//                 "&.Mui-focused fieldset": {
//                   borderColor: "#00ff88",
//                   borderWidth: 2,
//                 },
//               },
//               "& .MuiInputLabel-root": {
//                 color: "#9ca3af",
//               },
//               "& .MuiInputLabel-root.Mui-focused": {
//                 color: "#00ff88",
//               },
//             }}
//           />
//           <Button
//             variant="contained"
//             onClick={getRoute}
//             disabled={loading || !start || !end}
//             size="small"
//             style={{
//               background:
//                 loading || !start || !end
//                   ? "rgba(100, 100, 100, 0.3)"
//                   : "linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)",
//               color: loading || !start || !end ? "#666" : "#0a0e27",
//               fontWeight: 600,
//               padding: "8px 20px",
//               boxShadow:
//                 loading || !start || !end
//                   ? "none"
//                   : "0 4px 20px rgba(0, 255, 136, 0.4)",
//               border: "none",
//               transition: "all 0.3s ease",
//               textTransform: "uppercase",
//               letterSpacing: 1,
//             }}
//           >
//             {loading ? "Finding..." : "Get Route"}
//           </Button>
//         </div>

//         {result && (
//           <Card
//             style={{
//               padding: 24,
//               background: "rgba(26, 31, 58, 0.8)",
//               backdropFilter: "blur(20px)",
//               border: "1px solid rgba(37, 99, 235, 0.3)",
//               borderRadius: 12,
//               boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
//               marginBottom: 24,
//             }}
//           >
//             {result.error ? (
//               <Typography
//                 style={{
//                   color: "#ff4444",
//                   fontWeight: 500,
//                   padding: 8,
//                 }}
//               >
//                 {result.error}
//               </Typography>
//             ) : (
//               <>
//                 <Typography
//                   variant="h6"
//                   style={{
//                     color: "#00ff88",
//                     fontWeight: 600,
//                     marginBottom: 16,
//                     borderBottom: "2px solid rgba(0, 255, 136, 0.2)",
//                     paddingBottom: 8,
//                   }}
//                 >
//                   Selected Route
//                 </Typography>
//                 <Typography style={{ color: "#e0e0e0", marginBottom: 8 }}>
//                   <strong style={{ color: "#3b82f6" }}>From:</strong> {result.from}
//                 </Typography>
//                 <Typography style={{ color: "#e0e0e0", marginBottom: 8 }}>
//                   <strong style={{ color: "#3b82f6" }}>To:</strong> {result.to}
//                 </Typography>
//                 <Typography style={{ color: "#e0e0e0", marginBottom: 8 }}>
//                   <strong style={{ color: "#3b82f6" }}>Chosen Node:</strong> {result.selected?.fog_node}
//                 </Typography>
//                 <Typography style={{ color: "#e0e0e0", marginBottom: 8 }}>
//                   <strong style={{ color: "#3b82f6" }}>Route:</strong> {result.selected?.suggested_route}
//                 </Typography>
//                 <Typography style={{ color: "#e0e0e0", marginBottom: 16 }}>
//                   <strong style={{ color: "#3b82f6" }}>Traffic:</strong> {result.selected?.traffic}
//                 </Typography>
//                 {/* Traffic Comparison Bar Chart */}
//                 {result.candidates && result.candidates.length > 0 && (
//                   <>
//                     <Typography
//                       style={{
//                         marginTop: 20,
//                         fontSize: 13,
//                         color: "#9ca3af",
//                         fontWeight: 500,
//                         marginBottom: 12,
//                       }}
//                     >
//                       Traffic Score Comparison:
//                     </Typography>
//                     <div style={{ marginTop: 12 }}>
//                       {result.candidates.map((candidate, idx) => (
//                         <div key={idx} style={{ marginBottom: 12 }}>
//                           <div style={{ 
//                             display: 'flex', 
//                             justifyContent: 'space-between',
//                             marginBottom: 4,
//                             color: '#e0e0e0',
//                             fontSize: 12
//                           }}>
//                             <span>{candidate.fog_node}</span>
//                             <span>{candidate.traffic}</span>
//                           </div>
//                           <div style={{
//                             width: '100%',
//                             height: 20,
//                             backgroundColor: 'rgba(10, 14, 39, 0.6)',
//                             borderRadius: 4,
//                             overflow: 'hidden',
//                             border: '1px solid rgba(37, 99, 235, 0.3)'
//                           }}>
//                             <div style={{
//                               width: `${(candidate.score / 3) * 100}%`,
//                               height: '100%',
//                               background: candidate.score === 3 
//                                 ? 'linear-gradient(90deg, #00ff88, #00cc6a)'
//                                 : candidate.score === 2
//                                 ? 'linear-gradient(90deg, #fbbf24, #f59e0b)'
//                                 : 'linear-gradient(90deg, #ef4444, #dc2626)',
//                               transition: 'width 0.3s ease'
//                             }}></div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </>
//                 )}
//               </>
//             )}
//           </Card>
//         )}

//         {/* Map Section - Always visible after route is fetched */}
//         {result && !result.error && polylinePoints.length > 0 && (
//           <div
//             style={{
//               height: "600px",
//               width: "100%",
//               borderRadius: 12,
//               overflow: "hidden",
//               boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
//               border: "1px solid rgba(37, 99, 235, 0.3)",
//               marginTop: 24,
//             }}
//           >
//             <MapContainer
//               center={coords.start || [22, 79]}
//               zoom={5}
//               style={{ height: "100%", width: "100%" }}
//               key={polylinePoints.length} // Force re-render when route changes
//             >
//               <TileLayer
//                 attribution="&copy; OpenStreetMap contributors"
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               />

//               {/* Auto-fit to route */}
//               <Recenter points={polylinePoints} />

//               {/* Start & End markers */}
//               {coords.start && <Marker position={coords.start} />}
//               {coords.end && <Marker position={coords.end} />}

//               {/* Real ORS Route */}
//               <Polyline 
//                 positions={polylinePoints} 
//                 color="#00ff88" 
//                 weight={5}
//                 opacity={0.8}
//               />
//             </MapContainer>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// // Auto zoom/fit map to polyline
// function Recenter({ points }) {
//   const map = useMap();
//   useEffect(() => {
//     if (!points || points.length === 0) return;
//     map.fitBounds(points, { padding: [60, 60] });
//   }, [points, map]);
//   return null;
// }





















// import React, { useState, useEffect } from "react";
// import { Button, TextField, Typography, Card } from "@mui/material";

// // Leaflet + React-Leaflet
// import { MapContainer, TileLayer, Marker, Polyline, useMap } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

// // Vite-friendly imports for marker images
// import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
// import markerIcon from "leaflet/dist/images/marker-icon.png";
// import markerShadow from "leaflet/dist/images/marker-shadow.png";

// // Configure default marker icons
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: markerIcon2x,
//   iconUrl: markerIcon,
//   shadowUrl: markerShadow,
// });

// // ⭐ POLYLINE DECODER - Decodes ORS encoded polyline
// function decodePolyline(encoded) {
//   if (!encoded) return [];
  
//   const poly = [];
//   let index = 0, len = encoded.length;
//   let lat = 0, lng = 0;

//   while (index < len) {
//     let b, shift = 0, result = 0;
//     do {
//       b = encoded.charCodeAt(index++) - 63;
//       result |= (b & 0x1f) << shift;
//       shift += 5;
//     } while (b >= 0x20);
//     const dlat = ((result & 1) ? ~(result >> 1) : (result >> 1));
//     lat += dlat;

//     shift = 0;
//     result = 0;
//     do {
//       b = encoded.charCodeAt(index++) - 63;
//       result |= (b & 0x1f) << shift;
//       shift += 5;
//     } while (b >= 0x20);
//     const dlng = ((result & 1) ? ~(result >> 1) : (result >> 1));
//     lng += dlng;

//     poly.push([lat / 1e5, lng / 1e5]);
//   }
//   return poly;
// }

// export default function App() {
//   const [start, setStart] = useState("");
//   const [end, setEnd] = useState("");
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [gettingLocation, setGettingLocation] = useState(false);

//   const [coords, setCoords] = useState({ start: null, end: null });
//   const [polylinePoints, setPolylinePoints] = useState([]);

//   // Get current location and reverse geocode to city name
//   const getCurrentLocation = async () => {
//     setGettingLocation(true);
//     try {
//       // Get user's coordinates
//       const position = await new Promise((resolve, reject) => {
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//       });

//       const { latitude, longitude } = position.coords;
//       console.log(`Current location: ${latitude}, ${longitude}`);

//       // Reverse geocode to get city name using OpenStreetMap Nominatim
//       const response = await fetch(
//         `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
//       );
//       const data = await response.json();
      
//       // Extract city name from address
//       const city = data.address?.city || 
//                    data.address?.town || 
//                    data.address?.village || 
//                    data.address?.county || 
//                    data.display_name.split(',')[0];
      
//       setStart(city);
//       console.log(`Location set to: ${city}`);
//     } catch (error) {
//       console.error("Error getting location:", error);
//       alert("Could not get your location. Please check location permissions.");
//     } finally {
//       setGettingLocation(false);
//     }
//   };

//   const getRoute = async () => {
//     setLoading(true);
//     setResult(null);
//     setCoords({ start: null, end: null });
//     setPolylinePoints([]);

//     try {
//       const res = await fetch("http://127.0.0.1:8000/api/v1/route", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ start, end }),
//       });

//       const data = await res.json();
//       setResult(data);

//       // Update start/end markers
//       if (data && data.coords) {
//         setCoords({
//           start: data.coords.start || null,
//           end: data.coords.end || null,
//         });
//       }

//       // ⭐ DECODE the polyline from backend
//       if (data && data.polyline) {
//         const decoded = decodePolyline(data.polyline);
//         setPolylinePoints(decoded);
//         console.log("Decoded polyline points:", decoded.length);
//       }
//     } catch (err) {
//       console.error("Gateway fetch failed:", err);
//       setResult({
//         error:
//           "Gateway not reachable. Make sure gateway and fog node are running.",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Background styling
//   useEffect(() => {
//     document.body.style.margin = "0";
//     document.body.style.padding = "0";
//     document.body.style.background =
//       "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1419 100%)";
//     document.body.style.minHeight = "100vh";
//     document.documentElement.style.margin = "0";
//     document.documentElement.style.padding = "0";
    
//     return () => {
//       document.body.style.background = "";
//       document.body.style.minHeight = "";
//     };
//   }, []);

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         width: "100%",
//         padding: 24,
//         margin: 0,
//         display: "flex",
//         gap: 24,
//       }}
//     >
//       {/* Left Statistics Panel */}
//       {result && !result.error && (
//         <div
//           style={{
//             width: 350,
//             paddingTop: 40,
//             flexShrink: 0,
//           }}
//         >
//           <Card
//             style={{
//               padding: 24,
//               background: "rgba(26, 31, 58, 0.8)",
//               backdropFilter: "blur(20px)",
//               border: "1px solid rgba(37, 99, 235, 0.3)",
//               borderRadius: 12,
//               boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
//               marginBottom: 24,
//               position: "sticky",
//               top: 40,
//             }}
//           >
//             <Typography
//               variant="h6"
//               style={{
//                 color: "#00ff88",
//                 fontWeight: 600,
//                 marginBottom: 20,
//                 borderBottom: "2px solid rgba(0, 255, 136, 0.2)",
//                 paddingBottom: 8,
//               }}
//             >
//               📊 Route Statistics
//             </Typography>

//             {/* Key Metrics */}
//             <div style={{ marginBottom: 24 }}>
//               <div style={{ 
//                 background: "rgba(37, 99, 235, 0.1)", 
//                 padding: 16, 
//                 borderRadius: 8,
//                 marginBottom: 12,
//                 border: "1px solid rgba(59, 130, 246, 0.3)"
//               }}>
//                 <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 4 }}>
//                   Total Fog Nodes
//                 </div>
//                 <div style={{ fontSize: 28, fontWeight: 700, color: "#3b82f6" }}>
//                   {result.candidates?.length || 0}
//                 </div>
//               </div>

//               <div style={{ 
//                 background: "rgba(0, 255, 136, 0.1)", 
//                 padding: 16, 
//                 borderRadius: 8,
//                 border: "1px solid rgba(0, 255, 136, 0.3)"
//               }}>
//                 <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 4 }}>
//                   Selected Node
//                 </div>
//                 <div style={{ fontSize: 20, fontWeight: 600, color: "#00ff88" }}>
//                   {result.selected?.fog_node}
//                 </div>
//               </div>
//             </div>

//             {/* Traffic Analysis Bar Chart */}
//             {result.candidates && result.candidates.length > 0 && (
//               <>
//                 <Typography
//                   style={{
//                     fontSize: 14,
//                     color: "#e0e0e0",
//                     fontWeight: 600,
//                     marginBottom: 20,
//                     marginTop: 24,
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: 8
//                   }}
//                 >
//                   📊 Traffic Analysis by Segment
//                 </Typography>
                
//                 {/* Bar Chart */}
//                 <div style={{
//                   background: 'rgba(10, 14, 39, 0.4)',
//                   borderRadius: 8,
//                   padding: '20px 16px',
//                   border: '1px solid rgba(37, 99, 235, 0.2)',
//                   position: 'relative'
//                 }}>
//                   {/* Y-axis labels and grid */}
//                   <div style={{ position: 'relative', height: 200 }}>
//                     {/* Grid lines */}
//                     {[100, 75, 50, 25, 0].map((val, i) => (
//                       <div key={val} style={{
//                         position: 'absolute',
//                         left: 30,
//                         right: 0,
//                         top: `${i * 25}%`,
//                         borderTop: '1px dotted rgba(156, 163, 175, 0.2)',
//                         display: 'flex',
//                         alignItems: 'center'
//                       }}>
//                         <span style={{
//                           position: 'absolute',
//                           left: -30,
//                           fontSize: 10,
//                           color: '#9ca3af',
//                           width: 25,
//                           textAlign: 'right'
//                         }}>
//                           {val}
//                         </span>
//                       </div>
//                     ))}
                    
//                     {/* Bars */}
//                     <div style={{
//                       position: 'absolute',
//                       left: 35,
//                       right: 0,
//                       top: 0,
//                       bottom: 0,
//                       display: 'flex',
//                       alignItems: 'flex-end',
//                       justifyContent: 'space-around',
//                       gap: 4
//                     }}>
//                       {result.candidates.map((candidate, idx) => {
//                         // Use real data from backend
//                         const speed = candidate.speed || 0; // Speed in km/h
//                         const congestion = candidate.congestion || 0; // Congestion percentage
//                         const delay = candidate.delay || 0; // Delay in minutes
                        
//                         return (
//                           <div key={idx} style={{
//                             flex: 1,
//                             display: 'flex',
//                             flexDirection: 'column',
//                             alignItems: 'center',
//                             gap: 3,
//                             minWidth: 0
//                           }}>
//                             {/* Bars group */}
//                             <div style={{
//                               width: '100%',
//                               display: 'flex',
//                               alignItems: 'flex-end',
//                               justifyContent: 'center',
//                               gap: 2,
//                               height: 180
//                             }}>
//                               {/* Speed bar (blue) */}
//                               <div style={{
//                                 width: '28%',
//                                 height: `${speed}%`,
//                                 background: 'linear-gradient(180deg, #60a5fa, #3b82f6)',
//                                 borderRadius: '3px 3px 0 0',
//                                 minHeight: 4,
//                                 transition: 'height 0.5s ease'
//                               }}></div>
                              
//                               {/* Congestion bar (red) */}
//                               <div style={{
//                                 width: '28%',
//                                 height: `${congestion}%`,
//                                 background: 'linear-gradient(180deg, #f87171, #ef4444)',
//                                 borderRadius: '3px 3px 0 0',
//                                 minHeight: 4,
//                                 transition: 'height 0.5s ease'
//                               }}></div>
                              
//                               {/* Delay bar (orange) */}
//                               <div style={{
//                                 width: '28%',
//                                 height: `${delay}%`,
//                                 background: 'linear-gradient(180deg, #fbbf24, #f59e0b)',
//                                 borderRadius: '3px 3px 0 0',
//                                 minHeight: 4,
//                                 transition: 'height 0.5s ease'
//                               }}></div>
//                             </div>
                            
//                             {/* Label */}
//                             <div style={{
//                               fontSize: 9,
//                               color: candidate.fog_node === result.selected?.fog_node 
//                                 ? '#00ff88' 
//                                 : '#9ca3af',
//                               fontWeight: candidate.fog_node === result.selected?.fog_node 
//                                 ? 600 
//                                 : 400,
//                               textAlign: 'center',
//                               marginTop: 4,
//                               whiteSpace: 'nowrap',
//                               overflow: 'hidden',
//                               textOverflow: 'ellipsis',
//                               width: '100%'
//                             }}>
//                               {candidate.fog_node.replace('Fog Node ', 'N')}
//                             </div>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </div>
                  
//                   {/* Legend */}
//                   <div style={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     gap: 12,
//                     marginTop: 16,
//                     paddingTop: 12,
//                     borderTop: '1px solid rgba(37, 99, 235, 0.2)',
//                     flexWrap: 'wrap'
//                   }}>
//                     <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
//                       <div style={{
//                         width: 12,
//                         height: 12,
//                         background: 'linear-gradient(180deg, #60a5fa, #3b82f6)',
//                         borderRadius: 2
//                       }}></div>
//                       <span style={{ fontSize: 10, color: '#9ca3af' }}>Speed (km/h)</span>
//                     </div>
//                     <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
//                       <div style={{
//                         width: 12,
//                         height: 12,
//                         background: 'linear-gradient(180deg, #f87171, #ef4444)',
//                         borderRadius: 2
//                       }}></div>
//                       <span style={{ fontSize: 10, color: '#9ca3af' }}>Congestion (%)</span>
//                     </div>
//                     <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
//                       <div style={{
//                         width: 12,
//                         height: 12,
//                         background: 'linear-gradient(180deg, #fbbf24, #f59e0b)',
//                         borderRadius: 2
//                       }}></div>
//                       <span style={{ fontSize: 10, color: '#9ca3af' }}>Delay (min)</span>
//                     </div>
//                   </div>
//                 </div>
//               </>
//             )}
//           </Card>
//         </div>
//       )}

//       <div
//         style={{
//           flex: 1,
//           maxWidth: result && !result.error ? undefined : 700,
//           margin: result && !result.error ? 0 : "0 auto",
//           paddingTop: 40,
//           paddingBottom: 40,
//           position: "relative",
//           zIndex: 10,
//         }}
//       >
//         <Typography
//           variant="h4"
//           gutterBottom
//           style={{
//             color: "#00ff88",
//             fontWeight: 700,
//             textShadow: "0 0 20px rgba(0, 255, 136, 0.3)",
//             marginBottom: 32,
//             letterSpacing: 1,
//             textAlign: "center",
//           }}
//         >
//           🚦 Traffic Route Demo
//         </Typography>

//         <div
//           style={{
//             display: "flex",
//             gap: 12,
//             alignItems: "center",
//             marginBottom: 24,
//             flexWrap: "wrap",
//           }}
//         >
//           <TextField
//             label="From"
//             value={start}
//             onChange={(e) => setStart(e.target.value)}
//             size="small"
//             sx={{
//               flex: 1,
//               minWidth: 150,
//               "& .MuiOutlinedInput-root": {
//                 color: "#e0e0e0",
//                 backgroundColor: "rgba(26, 31, 58, 0.6)",
//                 backdropFilter: "blur(10px)",
//                 "& fieldset": {
//                   borderColor: "#2563eb",
//                 },
//                 "&:hover fieldset": {
//                   borderColor: "#3b82f6",
//                 },
//                 "&.Mui-focused fieldset": {
//                   borderColor: "#00ff88",
//                   borderWidth: 2,
//                 },
//               },
//               "& .MuiInputLabel-root": {
//                 color: "#9ca3af",
//               },
//               "& .MuiInputLabel-root.Mui-focused": {
//                 color: "#00ff88",
//               },
//             }}
//             InputProps={{
//               endAdornment: (
//                 <button
//                   onClick={getCurrentLocation}
//                   disabled={gettingLocation}
//                   style={{
//                     background: "transparent",
//                     border: "none",
//                     cursor: gettingLocation ? "wait" : "pointer",
//                     padding: 4,
//                     display: "flex",
//                     alignItems: "center",
//                     color: "#00ff88",
//                     fontSize: 18,
//                   }}
//                   title="Use current location"
//                 >
//                   {gettingLocation ? "⏳" : "📍"}
//                 </button>
//               ),
//             }}
//           />
//           <TextField
//             label="To"
//             value={end}
//             onChange={(e) => setEnd(e.target.value)}
//             size="small"
//             sx={{
//               flex: 1,
//               minWidth: 150,
//               "& .MuiOutlinedInput-root": {
//                 color: "#e0e0e0",
//                 backgroundColor: "rgba(26, 31, 58, 0.6)",
//                 backdropFilter: "blur(10px)",
//                 "& fieldset": {
//                   borderColor: "#2563eb",
//                 },
//                 "&:hover fieldset": {
//                   borderColor: "#3b82f6",
//                 },
//                 "&.Mui-focused fieldset": {
//                   borderColor: "#00ff88",
//                   borderWidth: 2,
//                 },
//               },
//               "& .MuiInputLabel-root": {
//                 color: "#9ca3af",
//               },
//               "& .MuiInputLabel-root.Mui-focused": {
//                 color: "#00ff88",
//               },
//             }}
//           />
//           <Button
//             variant="contained"
//             onClick={getRoute}
//             disabled={loading || !start || !end}
//             size="small"
//             style={{
//               background:
//                 loading || !start || !end
//                   ? "rgba(100, 100, 100, 0.3)"
//                   : "linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)",
//               color: loading || !start || !end ? "#666" : "#0a0e27",
//               fontWeight: 600,
//               padding: "8px 20px",
//               boxShadow:
//                 loading || !start || !end
//                   ? "none"
//                   : "0 4px 20px rgba(0, 255, 136, 0.4)",
//               border: "none",
//               transition: "all 0.3s ease",
//               textTransform: "uppercase",
//               letterSpacing: 1,
//             }}
//           >
//             {loading ? "Finding..." : "Get Route"}
//           </Button>
//         </div>

//         {result && (
//           <Card
//             style={{
//               padding: 24,
//               background: "rgba(26, 31, 58, 0.8)",
//               backdropFilter: "blur(20px)",
//               border: "1px solid rgba(37, 99, 235, 0.3)",
//               borderRadius: 12,
//               boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
//               marginBottom: 24,
//             }}
//           >
//             {result.error ? (
//               <Typography
//                 style={{
//                   color: "#ff4444",
//                   fontWeight: 500,
//                   padding: 8,
//                 }}
//               >
//                 {result.error}
//               </Typography>
//             ) : (
//               <>
//                 <Typography
//                   variant="h6"
//                   style={{
//                     color: "#00ff88",
//                     fontWeight: 600,
//                     marginBottom: 16,
//                     borderBottom: "2px solid rgba(0, 255, 136, 0.2)",
//                     paddingBottom: 8,
//                   }}
//                 >
//                   Selected Route
//                 </Typography>
//                 <Typography style={{ color: "#e0e0e0", marginBottom: 8 }}>
//                   <strong style={{ color: "#3b82f6" }}>From:</strong> {result.from}
//                 </Typography>
//                 <Typography style={{ color: "#e0e0e0", marginBottom: 8 }}>
//                   <strong style={{ color: "#3b82f6" }}>To:</strong> {result.to}
//                 </Typography>
//                 <Typography style={{ color: "#e0e0e0", marginBottom: 8 }}>
//                   <strong style={{ color: "#3b82f6" }}>Chosen Node:</strong> {result.selected?.fog_node}
//                 </Typography>
//                 <Typography style={{ color: "#e0e0e0", marginBottom: 8 }}>
//                   <strong style={{ color: "#3b82f6" }}>Route:</strong> {result.selected?.suggested_route}
//                 </Typography>
//                 <Typography style={{ color: "#e0e0e0", marginBottom: 16 }}>
//                   <strong style={{ color: "#3b82f6" }}>Traffic:</strong> {result.selected?.traffic}
//                 </Typography>
//                 {/* Traffic Comparison Bar Chart */}
//                 {result.candidates && result.candidates.length > 0 && (
//                   <>
//                     <Typography
//                       style={{
//                         marginTop: 20,
//                         fontSize: 13,
//                         color: "#9ca3af",
//                         fontWeight: 500,
//                         marginBottom: 12,
//                       }}
//                     >
//                       Traffic Score Comparison:
//                     </Typography>
//                     <div style={{ marginTop: 12 }}>
//                       {result.candidates.map((candidate, idx) => (
//                         <div key={idx} style={{ marginBottom: 12 }}>
//                           <div style={{ 
//                             display: 'flex', 
//                             justifyContent: 'space-between',
//                             marginBottom: 4,
//                             color: '#e0e0e0',
//                             fontSize: 12
//                           }}>
//                             <span>{candidate.fog_node}</span>
//                             <span>{candidate.traffic}</span>
//                           </div>
//                           <div style={{
//                             width: '100%',
//                             height: 20,
//                             backgroundColor: 'rgba(10, 14, 39, 0.6)',
//                             borderRadius: 4,
//                             overflow: 'hidden',
//                             border: '1px solid rgba(37, 99, 235, 0.3)'
//                           }}>
//                             <div style={{
//                               width: `${(candidate.score / 3) * 100}%`,
//                               height: '100%',
//                               background: candidate.score === 3 
//                                 ? 'linear-gradient(90deg, #00ff88, #00cc6a)'
//                                 : candidate.score === 2
//                                 ? 'linear-gradient(90deg, #fbbf24, #f59e0b)'
//                                 : 'linear-gradient(90deg, #ef4444, #dc2626)',
//                               transition: 'width 0.3s ease'
//                             }}></div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </>
//                 )}
//               </>
//             )}
//           </Card>
//         )}

//         {/* Map Section - Always visible after route is fetched */}
//         {result && !result.error && polylinePoints.length > 0 && (
//           <div
//             style={{
//               height: "600px",
//               width: "100%",
//               borderRadius: 12,
//               overflow: "hidden",
//               boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
//               border: "1px solid rgba(37, 99, 235, 0.3)",
//               marginTop: 24,
//             }}
//           >
//             <MapContainer
//               center={coords.start || [22, 79]}
//               zoom={5}
//               style={{ height: "100%", width: "100%" }}
//               key={polylinePoints.length} // Force re-render when route changes
//             >
//               <TileLayer
//                 attribution="&copy; OpenStreetMap contributors"
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               />

//               {/* Auto-fit to route */}
//               <Recenter points={polylinePoints} />

//               {/* Start & End markers */}
//               {coords.start && <Marker position={coords.start} />}
//               {coords.end && <Marker position={coords.end} />}

//               {/* Real ORS Route */}
//               <Polyline 
//                 positions={polylinePoints} 
//                 color="#00ff88" 
//                 weight={5}
//                 opacity={0.8}
//               />
//             </MapContainer>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// // Auto zoom/fit map to polyline
// function Recenter({ points }) {
//   const map = useMap();
//   useEffect(() => {
//     if (!points || points.length === 0) return;
//     map.fitBounds(points, { padding: [60, 60] });
//   }, [points, map]);
//   return null;
// }




import React, { useState, useEffect } from "react";
import { Button, TextField, Typography, Card } from "@mui/material";
import Login from "./pages/login";

// Leaflet + React-Leaflet
import { MapContainer, TileLayer, Marker, Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Vite-friendly imports for marker images
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Configure default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// ⭐ POLYLINE DECODER
function decodePolyline(encoded) {
  if (!encoded) return [];
  
  const poly = [];
  let index = 0, len = encoded.length;
  let lat = 0, lng = 0;

  while (index < len) {
    let b, shift = 0, result = 0;
    do {
      b = encoded.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);
    const dlat = ((result & 1) ? ~(result >> 1) : (result >> 1));
    lat += dlat;

    shift = 0;
    result = 0;
    do {
      b = encoded.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);
    const dlng = ((result & 1) ? ~(result >> 1) : (result >> 1));
    lng += dlng;

    poly.push([lat / 1e5, lng / 1e5]);
  }
  return poly;
}

// Auto zoom/fit map to polyline
function Recenter({ points }) {
  const map = useMap();
  useEffect(() => {
    if (!points || points.length === 0) return;
    map.fitBounds(points, { padding: [60, 60] });
  }, [points, map]);
  return null;
}

export default function App() {
  // ✅ ALL HOOKS MUST BE DECLARED AT THE TOP - BEFORE ANY CONDITIONAL RETURNS
  
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Main app state
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [gettingLocation, setGettingLocation] = useState(false);
  const [coords, setCoords] = useState({ start: null, end: null });
  const [polylinePoints, setPolylinePoints] = useState([]);

  // Background styling effect
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.background =
      "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1419 100%)";
    document.body.style.minHeight = "100vh";
    document.documentElement.style.margin = "0";
    document.documentElement.style.padding = "0";
    
    return () => {
      document.body.style.background = "";
      document.body.style.minHeight = "";
    };
  }, []);

  // Event handlers
  const handleLogin = (success) => {
    console.log("handleLogin called with:", success);
    if (success) {
      setIsAuthenticated(true);
      console.log("Authentication set to true - Dashboard should now be visible!");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setResult(null);
  };

  const getCurrentLocation = async () => {
    setGettingLocation(true);
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const { latitude, longitude } = position.coords;
      console.log(`Current location: ${latitude}, ${longitude}`);

      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );
      const data = await response.json();
      
      const city = data.address?.city || 
                   data.address?.town || 
                   data.address?.village || 
                   data.address?.county || 
                   data.display_name.split(',')[0];
      
      setStart(city);
      console.log(`Location set to: ${city}`);
    } catch (error) {
      console.error("Error getting location:", error);
      alert("Could not get your location. Please check location permissions.");
    } finally {
      setGettingLocation(false);
    }
  };

  const getRoute = async () => {
    setLoading(true);
    setResult(null);
    setCoords({ start: null, end: null });
    setPolylinePoints([]);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/v1/route", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ start, end }),
      });

      const data = await res.json();
      setResult(data);

      if (data && data.coords) {
        setCoords({
          start: data.coords.start || null,
          end: data.coords.end || null,
        });
      }

      if (data && data.polyline) {
        const decoded = decodePolyline(data.polyline);
        setPolylinePoints(decoded);
        console.log("Decoded polyline points:", decoded.length);
      }
    } catch (err) {
      console.error("Gateway fetch failed:", err);
      setResult({
        error:
          "Gateway not reachable. Make sure gateway and fog node are running.",
      });
    } finally {
      setLoading(false);
    }
  };

  console.log("Current auth state:", isAuthenticated);

  // ✅ NOW we can do conditional returns - ALL HOOKS ARE ALREADY DECLARED ABOVE
  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  // Dashboard render
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        padding: 24,
        margin: 0,
        display: "flex",
        gap: 24,
      }}
    >
      {/* Logout Button */}
      <button
        onClick={handleLogout}
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          padding: "8px 16px",
          background: "rgba(239, 68, 68, 0.8)",
          border: "1px solid #ef4444",
          borderRadius: 6,
          color: "white",
          cursor: "pointer",
          fontWeight: 600,
          fontSize: 14,
          zIndex: 1000,
          backdropFilter: "blur(10px)",
          transition: "all 0.3s ease",
        }}
      >
        Logout
      </button>

      {/* Left Statistics Panel */}
      {result && !result.error && (
        <div
          style={{
            width: 350,
            paddingTop: 40,
            flexShrink: 0,
          }}
        >
          <Card
            style={{
              padding: 24,
              background: "rgba(26, 31, 58, 0.8)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(37, 99, 235, 0.3)",
              borderRadius: 12,
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
              marginBottom: 24,
              position: "sticky",
              top: 40,
            }}
          >
            <Typography
              variant="h6"
              style={{
                color: "#00ff88",
                fontWeight: 600,
                marginBottom: 20,
                borderBottom: "2px solid rgba(0, 255, 136, 0.2)",
                paddingBottom: 8,
              }}
            >
              📊 Route Statistics
            </Typography>

            <div style={{ marginBottom: 24 }}>
              <div style={{ 
                background: "rgba(37, 99, 235, 0.1)", 
                padding: 16, 
                borderRadius: 8,
                marginBottom: 12,
                border: "1px solid rgba(59, 130, 246, 0.3)"
              }}>
                <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 4 }}>
                  Total Fog Nodes
                </div>
                <div style={{ fontSize: 28, fontWeight: 700, color: "#3b82f6" }}>
                  {result.candidates?.length || 0}
                </div>
              </div>

              <div style={{ 
                background: "rgba(0, 255, 136, 0.1)", 
                padding: 16, 
                borderRadius: 8,
                border: "1px solid rgba(0, 255, 136, 0.3)"
              }}>
                <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 4 }}>
                  Selected Node
                </div>
                <div style={{ fontSize: 20, fontWeight: 600, color: "#00ff88" }}>
                  {result.selected?.fog_node}
                </div>
              </div>
            </div>

            {result.candidates && result.candidates.length > 0 && (
              <>
                <Typography
                  style={{
                    fontSize: 14,
                    color: "#e0e0e0",
                    fontWeight: 600,
                    marginBottom: 20,
                    marginTop: 24,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8
                  }}
                >
                  📊 Traffic Analysis by Segment
                </Typography>
                
                <div style={{
                  background: 'rgba(10, 14, 39, 0.4)',
                  borderRadius: 8,
                  padding: '20px 16px',
                  border: '1px solid rgba(37, 99, 235, 0.2)',
                  position: 'relative'
                }}>
                  <div style={{ position: 'relative', height: 200 }}>
                    {[100, 75, 50, 25, 0].map((val, i) => (
                      <div key={val} style={{
                        position: 'absolute',
                        left: 30,
                        right: 0,
                        top: `${i * 25}%`,
                        borderTop: '1px dotted rgba(156, 163, 175, 0.2)',
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: -30,
                          fontSize: 10,
                          color: '#9ca3af',
                          width: 25,
                          textAlign: 'right'
                        }}>
                          {val}
                        </span>
                      </div>
                    ))}
                    
                    <div style={{
                      position: 'absolute',
                      left: 35,
                      right: 0,
                      top: 0,
                      bottom: 0,
                      display: 'flex',
                      alignItems: 'flex-end',
                      justifyContent: 'space-around',
                      gap: 4
                    }}>
                      {result.candidates.map((candidate, idx) => {
                        const speed = candidate.speed || 0;
                        const congestion = candidate.congestion || 0;
                        const delay = candidate.delay || 0;
                        
                        return (
                          <div key={idx} style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 3,
                            minWidth: 0
                          }}>
                            <div style={{
                              width: '100%',
                              display: 'flex',
                              alignItems: 'flex-end',
                              justifyContent: 'center',
                              gap: 2,
                              height: 180
                            }}>
                              <div style={{
                                width: '28%',
                                height: `${speed}%`,
                                background: 'linear-gradient(180deg, #60a5fa, #3b82f6)',
                                borderRadius: '3px 3px 0 0',
                                minHeight: 4,
                                transition: 'height 0.5s ease'
                              }}></div>
                              
                              <div style={{
                                width: '28%',
                                height: `${congestion}%`,
                                background: 'linear-gradient(180deg, #f87171, #ef4444)',
                                borderRadius: '3px 3px 0 0',
                                minHeight: 4,
                                transition: 'height 0.5s ease'
                              }}></div>
                              
                              <div style={{
                                width: '28%',
                                height: `${delay}%`,
                                background: 'linear-gradient(180deg, #fbbf24, #f59e0b)',
                                borderRadius: '3px 3px 0 0',
                                minHeight: 4,
                                transition: 'height 0.5s ease'
                              }}></div>
                            </div>
                            
                            <div style={{
                              fontSize: 9,
                              color: candidate.fog_node === result.selected?.fog_node 
                                ? '#00ff88' 
                                : '#9ca3af',
                              fontWeight: candidate.fog_node === result.selected?.fog_node 
                                ? 600 
                                : 400,
                              textAlign: 'center',
                              marginTop: 4,
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              width: '100%'
                            }}>
                              {candidate.fog_node.replace('Fog Node ', 'N')}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 12,
                    marginTop: 16,
                    paddingTop: 12,
                    borderTop: '1px solid rgba(37, 99, 235, 0.2)',
                    flexWrap: 'wrap'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <div style={{
                        width: 12,
                        height: 12,
                        background: 'linear-gradient(180deg, #60a5fa, #3b82f6)',
                        borderRadius: 2
                      }}></div>
                      <span style={{ fontSize: 10, color: '#9ca3af' }}>Speed (km/h)</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <div style={{
                        width: 12,
                        height: 12,
                        background: 'linear-gradient(180deg, #f87171, #ef4444)',
                        borderRadius: 2
                      }}></div>
                      <span style={{ fontSize: 10, color: '#9ca3af' }}>Congestion (%)</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <div style={{
                        width: 12,
                        height: 12,
                        background: 'linear-gradient(180deg, #fbbf24, #f59e0b)',
                        borderRadius: 2
                      }}></div>
                      <span style={{ fontSize: 10, color: '#9ca3af' }}>Delay (min)</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </Card>
        </div>
      )}

      <div
        style={{
          flex: 1,
          maxWidth: result && !result.error ? undefined : 700,
          margin: result && !result.error ? 0 : "0 auto",
          paddingTop: 40,
          paddingBottom: 40,
          position: "relative",
          zIndex: 10,
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          style={{
            color: "#00ff88",
            fontWeight: 700,
            textShadow: "0 0 20px rgba(0, 255, 136, 0.3)",
            marginBottom: 32,
            letterSpacing: 1,
            textAlign: "center",
          }}
        >
          🚦 Traffic Route Demo
        </Typography>

        {!result && (
          <Card
            style={{
              padding: 32,
              background: "rgba(26, 31, 58, 0.8)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(37, 99, 235, 0.3)",
              borderRadius: 12,
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
              marginBottom: 24,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 48, marginBottom: 16 }}>👋</div>
            <Typography
              variant="h5"
              style={{
                color: "#00ff88",
                fontWeight: 600,
                marginBottom: 16,
              }}
            >
              Welcome to Traffic Route Demo!
            </Typography>
            <Typography
              style={{
                color: "#9ca3af",
                fontSize: 14,
                lineHeight: 1.6,
              }}
            >
              Enter your starting point and destination below to find the optimal route.
              Our fog computing network will analyze traffic conditions in real-time
              and suggest the best path for you.
            </Typography>
          </Card>
        )}

        <div
          style={{
            display: "flex",
            gap: 12,
            alignItems: "center",
            marginBottom: 24,
            flexWrap: "wrap",
          }}
        >
          <TextField
            label="From"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            size="small"
            sx={{
              flex: 1,
              minWidth: 150,
              "& .MuiOutlinedInput-root": {
                color: "#e0e0e0",
                backgroundColor: "rgba(26, 31, 58, 0.6)",
                backdropFilter: "blur(10px)",
                "& fieldset": {
                  borderColor: "#2563eb",
                },
                "&:hover fieldset": {
                  borderColor: "#3b82f6",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#00ff88",
                  borderWidth: 2,
                },
              },
              "& .MuiInputLabel-root": {
                color: "#9ca3af",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#00ff88",
              },
            }}
            InputProps={{
              endAdornment: (
                <button
                  onClick={getCurrentLocation}
                  disabled={gettingLocation}
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: gettingLocation ? "wait" : "pointer",
                    padding: 4,
                    display: "flex",
                    alignItems: "center",
                    color: "#00ff88",
                    fontSize: 18,
                  }}
                  title="Use current location"
                >
                  {gettingLocation ? "⏳" : "📍"}
                </button>
              ),
            }}
          />
          <TextField
            label="To"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            size="small"
            sx={{
              flex: 1,
              minWidth: 150,
              "& .MuiOutlinedInput-root": {
                color: "#e0e0e0",
                backgroundColor: "rgba(26, 31, 58, 0.6)",
                backdropFilter: "blur(10px)",
                "& fieldset": {
                  borderColor: "#2563eb",
                },
                "&:hover fieldset": {
                  borderColor: "#3b82f6",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#00ff88",
                  borderWidth: 2,
                },
              },
              "& .MuiInputLabel-root": {
                color: "#9ca3af",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#00ff88",
              },
            }}
          />
          <Button
            variant="contained"
            onClick={getRoute}
            disabled={loading || !start || !end}
            size="small"
            style={{
              background:
                loading || !start || !end
                  ? "rgba(100, 100, 100, 0.3)"
                  : "linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)",
              color: loading || !start || !end ? "#666" : "#0a0e27",
              fontWeight: 600,
              padding: "8px 20px",
              boxShadow:
                loading || !start || !end
                  ? "none"
                  : "0 4px 20px rgba(0, 255, 136, 0.4)",
              border: "none",
              transition: "all 0.3s ease",
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            {loading ? "Finding..." : "Get Route"}
          </Button>
        </div>

        {result && (
          <Card
            style={{
              padding: 24,
              background: "rgba(26, 31, 58, 0.8)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(37, 99, 235, 0.3)",
              borderRadius: 12,
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
              marginBottom: 24,
            }}
          >
            {result.error ? (
              <Typography
                style={{
                  color: "#ff4444",
                  fontWeight: 500,
                  padding: 8,
                }}
              >
                {result.error}
              </Typography>
            ) : (
              <>
                <Typography
                  variant="h6"
                  style={{
                    color: "#00ff88",
                    fontWeight: 600,
                    marginBottom: 16,
                    borderBottom: "2px solid rgba(0, 255, 136, 0.2)",
                    paddingBottom: 8,
                  }}
                >
                  Selected Route
                </Typography>
                <Typography style={{ color: "#e0e0e0", marginBottom: 8 }}>
                  <strong style={{ color: "#3b82f6" }}>From:</strong> {result.from}
                </Typography>
                <Typography style={{ color: "#e0e0e0", marginBottom: 8 }}>
                  <strong style={{ color: "#3b82f6" }}>To:</strong> {result.to}
                </Typography>
                <Typography style={{ color: "#e0e0e0", marginBottom: 8 }}>
                  <strong style={{ color: "#3b82f6" }}>Chosen Node:</strong> {result.selected?.fog_node}
                </Typography>
                <Typography style={{ color: "#e0e0e0", marginBottom: 8 }}>
                  <strong style={{ color: "#3b82f6" }}>Route:</strong> {result.selected?.suggested_route}
                </Typography>
                <Typography style={{ color: "#e0e0e0", marginBottom: 16 }}>
                  <strong style={{ color: "#3b82f6" }}>Traffic:</strong> {result.selected?.traffic}
                </Typography>
                {result.candidates && result.candidates.length > 0 && (
                  <>
                    <Typography
                      style={{
                        marginTop: 20,
                        fontSize: 13,
                        color: "#9ca3af",
                        fontWeight: 500,
                        marginBottom: 12,
                      }}
                    >
                      Traffic Score Comparison:
                    </Typography>
                    <div style={{ marginTop: 12 }}>
                      {result.candidates.map((candidate, idx) => (
                        <div key={idx} style={{ marginBottom: 12 }}>
                          <div style={{ 
                            display: 'flex', 
                            justifyContent: 'space-between',
                            marginBottom: 4,
                            color: '#e0e0e0',
                            fontSize: 12
                          }}>
                            <span>{candidate.fog_node}</span>
                            <span>{candidate.traffic}</span>
                          </div>
                          <div style={{
                            width: '100%',
                            height: 20,
                            backgroundColor: 'rgba(10, 14, 39, 0.6)',
                            borderRadius: 4,
                            overflow: 'hidden',
                            border: '1px solid rgba(37, 99, 235, 0.3)'
                          }}>
                            <div style={{
                              width: `${(candidate.score / 3) * 100}%`,
                              height: '100%',
                              background: candidate.score === 3 
                                ? 'linear-gradient(90deg, #00ff88, #00cc6a)'
                                : candidate.score === 2
                                ? 'linear-gradient(90deg, #fbbf24, #f59e0b)'
                                : 'linear-gradient(90deg, #ef4444, #dc2626)',
                              transition: 'width 0.3s ease'
                            }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </>
            )}
          </Card>
        )}

        {result && !result.error && polylinePoints.length > 0 && (
          <div
            style={{
              height: "600px",
              width: "100%",
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
              border: "1px solid rgba(37, 99, 235, 0.3)",
              marginTop: 24,
            }}
          >
            <MapContainer
              center={coords.start || [22, 79]}
              zoom={5}
              style={{ height: "100%", width: "100%" }}
              key={polylinePoints.length}
            >
              <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <Recenter points={polylinePoints} />

              {coords.start && <Marker position={coords.start} />}
              {coords.end && <Marker position={coords.end} />}

              <Polyline 
                positions={polylinePoints} 
                color="#00ff88" 
                weight={5}
                opacity={0.8}
              />
            </MapContainer>
          </div>
        )}
      </div>
    </div>
  );
}