import { useState, useRef, useEffect } from 'react';

export default function CatFriends() {
  const [index, setIndex] = useState(0);
  const imageRefs = useRef([]);

  useEffect(() => {
    imageRefs.current = imageRefs.current.slice(0, catList.length);
  }, []);

  useEffect(() => {
    if (imageRefs.current[index]) {
      imageRefs.current[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [index]);

  function handleNextClick() {
    setIndex(index < catList.length - 1 ? index + 1 : 0);
  }

  return (
    <>
      <nav>
        <button onClick={handleNextClick}>Next</button>
      </nav>
      <div>
        <ul>
          {catList.map((cat, i) => (
            <li key={cat.id}>
              <img
                ref={(el) => (imageRefs.current[i] = el)}
                className={index === i ? 'active' : ''}
                src={cat.imageUrl}
                alt={`Cat #${cat.id}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: `cat${i}.jpg`,
  });
}