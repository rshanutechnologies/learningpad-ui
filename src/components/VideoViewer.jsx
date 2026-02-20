import "./VideoViewer.css";

function VideoViewer({ videoFile }) {
  return (
    <div className="video-container">
      <video
        src={videoFile}
        controls
        autoPlay={false}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "12px"
        }}
      />
    </div>
  );
}

export default VideoViewer;
