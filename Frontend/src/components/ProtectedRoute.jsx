import { Navigate } from "react-router-dom";

/*
 🚧 DEV MODE PROTECTED ROUTE

 TODO (AFTER BILLING + FIRESTORE):
 1. Get current user from Firebase Auth
 2. Fetch user role from Firestore (users/{uid})
 3. If adminOnly === true and role !== "admin" → block
 4. If user.active === false → block
 5. If course expired → block
*/

function ProtectedRoute({ children, adminOnly = false }) {
  // 🚧 DEV TEMP LOGIC
  const email = localStorage.getItem("dev_email");

  // ❌ Not logged in
  if (!email) {
    return <Navigate to="/login" replace />;
  }

  // ❌ Admin-only protection
  if (adminOnly && email !== "admin@tarot.com") {
    return <Navigate to="/dashboard" replace />;
  }

  // ✅ Access allowed
  return children;
}

export default ProtectedRoute;
