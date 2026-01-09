import { useNavigate } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import { theme } from "../styles/theme";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={theme.page}>
      {/* HERO SECTION */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        <h1
          style={{
            color: "#ffd54f",
            fontSize: "clamp(28px, 5vw, 42px)",
            marginBottom: "10px",
          }}
        >
          🔮 Arcane Tarot Academy
        </h1>

        <p
          style={{
            fontSize: "clamp(14px, 2.5vw, 18px)",
            color: "#ddd",
            marginBottom: "30px",
          }}
        >
          Your Journey into Tarot Reading
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <button style={theme.button} onClick={() => navigate("/login")}>
            🔓 Unlock Paid Content
          </button>

          <button
            style={{
              ...theme.button,
              background: "#ffd54f",
              color: "#000",
            }}
            onClick={() =>
              window.open("https://wa.me/917385861346", "_blank")
            }
          >
            📩 Contact on WhatsApp
          </button>
        </div>
      </div>

      {/* SAMPLE VIDEOS (PUBLIC PREVIEW) */}
      {/* 
        TODO (AFTER BILLING):
        - Replace local video URLs with:
          • Firebase Storage signed URLs OR
          • Vimeo private videos (domain locked)
        - These videos should remain preview-only
      */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          marginBottom: "60px",
        }}
      >
        <div style={theme.card}>
          <h3 style={theme.heading}>Tarot Basics (Preview)</h3>

          <VideoPlayer
            videoId="home-preview-1"
            videoUrl="/videos/testvideo.mp4"
          />

          <p style={{ marginTop: "10px", color: "#ccc" }}>
            Learn tarot reading from scratch in simple language.
          </p>
        </div>

        <div style={theme.card}>
          <h3 style={theme.heading}>Major Arcana (Preview)</h3>

          <VideoPlayer
            videoId="home-preview-2"
            videoUrl="/videos/testvideo.mp4"
          />

          <p style={{ marginTop: "10px", color: "#ccc" }}>
            Understand the spiritual journey behind Major Arcana cards.
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.2)",
          paddingTop: "20px",
          textAlign: "center",
          color: "#ccc",
          fontSize: "14px",
        }}
      >
        <p>
          📧 Email:{" "}
          <span style={{ color: "#ffd54f" }}>
            arcanetarotacademy@gmail.com
          </span>
        </p>

        <p>
          📞 Contact:{" "}
          <span style={{ color: "#ffd54f" }}>
            +91 9XXXXXXXXX
          </span>
        </p>

        <p style={{ marginTop: "10px", fontSize: "12px", color: "#888" }}>
          © {new Date().getFullYear()} Arcane Tarot Academy. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Home;
