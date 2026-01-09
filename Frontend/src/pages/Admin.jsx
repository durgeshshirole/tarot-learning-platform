import { useEffect, useState } from "react";
import { theme } from "../styles/theme";

function Admin() {
  // -----------------------------
  // DEV STATE (NO FIREBASE YET)
  // -----------------------------
  const [users, setUsers] = useState([]);

  // Add User form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // ✅ NEW
  const [duration, setDuration] = useState(6);

  // -----------------------------
  // SAMPLE USERS (DEV MODE)
  // -----------------------------
  useEffect(() => {
    setUsers([
      {
        id: "1",
        name: "Anita Sharma",
        email: "anita@gmail.com",
        active: true,
        courseStart: "2024-10-01",
        duration: 6,
      },
      {
        id: "2",
        name: "Rahul Mehta",
        email: "rahul@gmail.com",
        active: false,
        courseStart: "2024-08-15",
        duration: 6,
      },
    ]);

    /*
    TODO (AFTER BILLING):
    - Fetch users from Firestore
    */
  }, []);

  // -----------------------------
  // ADD USER (DEV)
  // -----------------------------
  const addUser = () => {
    if (!name || !email || !password) {
      alert("Name, Email and Password required");
      return;
    }

    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      active: true,
      courseStart: new Date().toISOString().slice(0, 10),
      duration,
    };

    setUsers((prev) => [...prev, newUser]);

    // reset form
    setName("");
    setEmail("");
    setPassword("");
    setDuration(6);

    /*
    TODO (AFTER BILLING):
    1. createUserWithEmailAndPassword(auth, email, password)
    2. setDoc(doc(db, "users", uid), {
         name,
         email,
         role: "student",
         active: true,
         courseStart: serverTimestamp(),
         duration
       })
    3. Share credentials via WhatsApp manually
    */
  };

  // -----------------------------
  // TOGGLE USER STATUS
  // -----------------------------
  const toggleUserStatus = (id) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, active: !u.active } : u
      )
    );
  };

  // -----------------------------
  // DELETE USER
  // -----------------------------
  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <div style={theme.page}>
      <h2 style={theme.heading}>🔐 Admin Panel</h2>

      {/* ---------------- ADD USER ---------------- */}
      <div style={theme.card}>
        <h3 style={theme.heading}>➕ Add New Student</h3>

        <input
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={input}
        />

        <input
          placeholder="Student Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={input}
        />

        {/* ✅ PASSWORD FIELD */}
        <input
          type="password"
          placeholder="Temporary Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={input}
        />

        <select
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          style={input}
        >
          <option value={3}>3 Months</option>
          <option value={6}>6 Months</option>
          <option value={12}>12 Months</option>
        </select>

        <button style={theme.button} onClick={addUser}>
          Add User
        </button>
      </div>

      {/* ---------------- USERS TABLE ---------------- */}
      <div style={theme.card}>
        <h3 style={theme.heading}>Registered Students</h3>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", color: "#fff" }}>
            <thead>
              <tr>
                <th style={th}>Name</th>
                <th style={th}>Email</th>
                <th style={th}>Start Date</th>
                <th style={th}>Status</th>
                <th style={th}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td style={td}>{u.name}</td>
                  <td style={td}>{u.email}</td>
                  <td style={td}>{u.courseStart}</td>
                  <td style={td}>{u.active ? "Active" : "Disabled"}</td>
                  <td style={td}>
                    <button
                      style={{ ...theme.button, marginRight: "8px" }}
                      onClick={() => toggleUserStatus(u.id)}
                    >
                      {u.active ? "Disable" : "Activate"}
                    </button>

                    <button
                      style={{ ...theme.button, background: "#e53935" }}
                      onClick={() => deleteUser(u.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ---------------- NOTES ---------------- */}
      <div style={theme.card}>
        <h3 style={theme.heading}>ℹ️ Admin Notes</h3>
        <ul style={{ color: "#ccc" }}>
          <li>Users are added manually after payment.</li>
          <li>Password is temporary and shared via WhatsApp.</li>
          <li>Inactive users cannot access dashboard.</li>
          <li>Default course duration is 6 months.</li>
        </ul>
      </div>
    </div>
  );
}

// ---------------- STYLES ----------------
const input = {
  width: "100%",
  padding: "10px",
  marginBottom: "12px",
  borderRadius: "8px",
  border: "none",
};

const th = { textAlign: "left", padding: "10px" };
const td = { padding: "10px" };

export default Admin;
