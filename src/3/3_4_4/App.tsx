import { useState } from 'react';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const hasNext = index < images.length - 1;

  function handleClick() {
    setIndex(hasNext ? index + 1 : 0);
    setLoading(true);
  }

  function handleLoad() {
    setLoading(false);
  }

  const image = images[index];

  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <h3>
        Image {index + 1} of {images.length}
      </h3>
      {loading && <p>Loading...</p>}
      <img
        src={image.src}
        onLoad={handleLoad}
        style={{ display: loading ? 'none' : 'block' }}
        alt={image.place}
      />
      {!loading && <p>{image.place}</p>}
    </>
  );
}

const images = [
  { place: 'Penang, Malaysia', src: 'FJeJR8M.jpg' },
  { place: 'Lisbon, Portugal', src: 'dB2LRbj.jpg' },
  { place: 'Bilbao, Spain', src: 'z08o2TS.jpg' },
  { place: 'Valparaíso, Chile', src: 'Y3utgTi.jpg' },
  { place: 'Schwyz, Switzerland', src: 'JBbMpWY.jpg' },
  { place: 'Prague, Czechia', src: 'QwUKKmF.jpg' },
  { place: 'Ljubljana, Slovenia', src: '3aIiwfm.jpg' }
];
