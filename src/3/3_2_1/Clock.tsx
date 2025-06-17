export default function Clock({ time, color }: { time: string; color: string }) {
  return (
    <h1 style={{ color }}>
      {time}
    </h1>
  );
}
