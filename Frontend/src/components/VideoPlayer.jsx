import { useEffect, useRef, useState } from "react";

function VideoPlayer({ videoId, videoUrl }) {
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // Resume video (DEV: localStorage)
  useEffect(() => {
    const savedTime = localStorage.getItem(videoId);
    if (savedTime && videoRef.current) {
      videoRef.current.currentTime = Number(savedTime);
    }
  }, [videoId]);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;

    localStorage.setItem(videoId, video.currentTime);
    setProgress((video.currentTime / video.duration) * 100);
  };

  return (
    <div>
      <video
        ref={videoRef}
        controls
        preload="metadata"
        controlsList="nodownload noplaybackrate"
        disablePictureInPicture
        onTimeUpdate={handleTimeUpdate}
        style={{
          width: "100%",
          borderRadius: "10px",
          background: "#000",
        }}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Progress Bar */}
      <div
        style={{
          height: "6px",
          background: "#333",
          borderRadius: "4px",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "#9c27b0",
            borderRadius: "4px",
          }}
        />
      </div>

      {/* 
        TODO (AFTER BILLING):
        - Replace localStorage with Firestore progress tracking
        - Store progress per user per video
        - Use Firebase Storage or Vimeo private URLs
      */}
    </div>
  );
}

export default VideoPlayer;
