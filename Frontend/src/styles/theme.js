export const theme = {
  page: {
    minHeight: "100vh",
    width: "100vw",              // ✅ REQUIRED
    background: "#0f0b1f",
    color: "#f5f5f5",
    padding: "40px",
    boxSizing: "border-box",     // ✅ PREVENT OVERFLOW
    fontFamily: "Arial, sans-serif",
  },

  card: {
    background: "#1a1333",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "30px",
    boxShadow: "0 0 15px rgba(156,39,176,0.3)",
  },

  heading: {
    color: "#ffd54f",
    marginBottom: "15px",
  },

  button: {
    background: "#9c27b0",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
  },
};
