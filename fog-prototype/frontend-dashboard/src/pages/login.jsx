// import { useState } from "react";

// export default function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Login clicked:", username, password);
//   };

//   return (
//     <div style={styles.container}>
//       <form onSubmit={handleSubmit} style={styles.card}>
//         <h2>Fog Gateway Login</h2>

//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//           style={styles.input}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           style={styles.input}
//         />

//         {error && <p style={styles.error}>{error}</p>}

//         <button type="submit" style={styles.button}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     height: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     background: "#0f172a",
//   },
//   card: {
//     background: "#020617",
//     padding: "30px",
//     borderRadius: "10px",
//     width: "300px",
//     color: "#22c55e",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     margin: "10px 0",
//     borderRadius: "5px",
//     border: "1px solid #22c55e",
//     background: "transparent",
//     color: "white",
//   },
//   button: {
//     width: "100%",
//     padding: "10px",
//     marginTop: "10px",
//     background: "#22c55e",
//     border: "none",
//     borderRadius: "5px",
//     fontWeight: "bold",
//     cursor: "pointer",
//   },
//   error: {
//     color: "red",
//     fontSize: "12px",
//   },
// };





// import { useState } from "react";

// export default function Login({ onLogin }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");
    
//     console.log("Login attempt:", { username, password }); // Debug log
    
//     // Simple authentication - replace with your API call
//     if (username.trim() === "admin" && password.trim() === "admin") {
//       console.log("Login successful!"); // Debug log
//       onLogin(true);
//     } else {
//       console.log("Login failed"); // Debug log
//       setError("Invalid credentials");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <form onSubmit={handleSubmit} style={styles.card}>
//         <h2 style={styles.title}>🚦 Fog Gateway Login</h2>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//           style={styles.input}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           style={styles.input}
//         />
//         {error && <p style={styles.error}>{error}</p>}
//         <button type="submit" style={styles.button}>
//           Login
//         </button>
//         <p style={styles.hint}>Hint: admin / admin</p>
//       </form>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     height: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     background: "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1419 100%)",
//   },
//   card: {
//     background: "rgba(26, 31, 58, 0.9)",
//     backdropFilter: "blur(20px)",
//     padding: "40px",
//     borderRadius: "12px",
//     width: "350px",
//     border: "1px solid rgba(37, 99, 235, 0.3)",
//     boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
//   },
//   title: {
//     color: "#00ff88",
//     textAlign: "center",
//     marginBottom: "30px",
//     fontSize: "24px",
//     fontWeight: "700",
//     textShadow: "0 0 20px rgba(0, 255, 136, 0.3)",
//   },
//   input: {
//     width: "100%",
//     padding: "12px",
//     margin: "10px 0",
//     borderRadius: "6px",
//     border: "1px solid #2563eb",
//     background: "rgba(10, 14, 39, 0.6)",
//     color: "#e0e0e0",
//     fontSize: "14px",
//     boxSizing: "border-box",
//     transition: "border-color 0.3s ease",
//   },
//   button: {
//     width: "100%",
//     padding: "12px",
//     marginTop: "20px",
//     background: "linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)",
//     border: "none",
//     borderRadius: "6px",
//     fontWeight: "bold",
//     cursor: "pointer",
//     color: "#0a0e27",
//     fontSize: "16px",
//     textTransform: "uppercase",
//     letterSpacing: "1px",
//     boxShadow: "0 4px 20px rgba(0, 255, 136, 0.4)",
//     transition: "transform 0.2s ease",
//   },
//   error: {
//     color: "#ef4444",
//     fontSize: "12px",
//     marginTop: "8px",
//     textAlign: "center",
//   },
//   hint: {
//     color: "#9ca3af",
//     fontSize: "11px",
//     marginTop: "15px",
//     textAlign: "center",
//   },
// };


import { useState } from "react";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    
    console.log("Login attempt:", { username, password });
    
    if (username.trim() === "admin" && password.trim() === "admin") {
      console.log("Login successful!");
      onLogin(true);
    } else {
      console.log("Login failed");
      setError("Invalid credentials");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.card}>
        <h2 style={styles.title}>🚦 Fog Gateway Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button}>
          LOGIN
        </button>
        <p style={styles.hint}>Hint: admin / admin</p>
      </form>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1419 100%)",
    margin: 0,
    padding: 0,
    position: "fixed",
    top: 0,
    left: 0,
  },
  card: {
    background: "rgba(26, 31, 58, 0.9)",
    backdropFilter: "blur(20px)",
    padding: "40px",
    borderRadius: "12px",
    width: "400px",
    maxWidth: "90%",
    border: "1px solid rgba(37, 99, 235, 0.3)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
  },
  title: {
    color: "#00ff88",
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "24px",
    fontWeight: "700",
    textShadow: "0 0 20px rgba(0, 255, 136, 0.3)",
  },
  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid #2563eb",
    background: "rgba(10, 14, 39, 0.6)",
    color: "#e0e0e0",
    fontSize: "14px",
    boxSizing: "border-box",
    transition: "border-color 0.3s ease",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "12px",
    marginTop: "20px",
    background: "linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer",
    color: "#0a0e27",
    fontSize: "16px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    boxShadow: "0 4px 20px rgba(0, 255, 136, 0.4)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  error: {
    color: "#ef4444",
    fontSize: "12px",
    marginTop: "8px",
    textAlign: "center",
  },
  hint: {
    color: "#9ca3af",
    fontSize: "11px",
    marginTop: "15px",
    textAlign: "center",
  },
};