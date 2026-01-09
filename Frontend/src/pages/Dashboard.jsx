import VideoPlayer from "../components/VideoPlayer";
import { theme } from "../styles/theme";

/*
🚧 DEV MODE DASHBOARD

TODO (AFTER BILLING):
- Fetch videos from Firestore
- Track progress per user
- Block expired users
*/

function Dashboard() {
  const sampleVideo = "/videos/testvideo.mp4";

  const topics = [
    "Tarot Basics",
    "Major Arcana – Part 1",
    "Major Arcana – Part 2",
    "Minor Arcana – Cups",
    "Minor Arcana – Pentacles",
    "Minor Arcana – Swords",
    "Minor Arcana – Wands",
    "Card Spreads",
    "Reading Techniques",
    "Live Reading Demo",
  ];

  return (
    <div style={theme.page}>
      <h2 style={theme.heading}>🔮 Tarot Learning Dashboard</h2>

      {/* ✅ RESPONSIVE GRID */}
      <div style={gridStyle}>
        {topics.map((title, index) => (
          <div style={theme.card} key={index}>
            <h3 style={theme.heading}>{title}</h3>

            <VideoPlayer
              videoId={`video-${index + 1}`}
              videoUrl={sampleVideo}
            />

            <p style={{ marginTop: "12px", color: "#ccc" }}>
              📄{" "}
              <span style={{ color: "#ffd54f", cursor: "pointer" }}>
                View Notes (PDF)
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ✅ GRID STYLE */
const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "24px",
};

export default Dashboard;
