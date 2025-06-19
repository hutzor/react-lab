import { useState, useRef } from 'react';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function handleClick() {
    const video = videoRef.current;
    if (video) {
      const nextIsPlaying = !isPlaying;
      setIsPlaying(nextIsPlaying);
      if (nextIsPlaying) {
        video.play().catch((error) => {
          console.error('Failed to play video:', error);
          setIsPlaying(false);
        });
      } else {
        video.pause();
      }
    }
  }

  return (
    <>
      <button onClick={handleClick}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <video
        width="250"
        ref={videoRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        controls
      >
        <source
          src="flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}