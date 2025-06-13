export interface Story {
  id: string;
  label: string;
}

const stories: Story[] = [];

export default function Wrapper() {
  return <StoryTray stories={stories} />;
}

function StoryTray({ stories }: { stories: Story[] }) {
  // Формируем новый массив для рендера.
  const trayStories: Story[] = [
    ...stories,
    { id: 'create', label: 'Create Story' }, 
  ];

  return (
    <ul>
      {trayStories.map((story) => (
        <li key={story.id}>{story.label}</li>
      ))}
    </ul>
  );
}
