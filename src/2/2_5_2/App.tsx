import { getFinalState } from './processQueue';

export type Que = number | ((n: number) => number);

function increment(n: number) {
  return n + 1;
}
increment.toString = () => 'n => n+1';

export default function App() {
  return (
    <>
      <TestCase
        baseState={0}
        queue={[1, 1, 1]}
        expected={1}
      />
      <hr />
      <TestCase
        baseState={0}
        queue={[increment, increment, increment]}
        expected={3}
      />
      <hr />
      <TestCase
        baseState={0}
        queue={[5, increment]}
        expected={6}
      />
      <hr />
      <TestCase
        baseState={0}
        queue={[5, increment, 42]}
        expected={42}
      />
    </>
  );
}

function TestCase(
  { baseState, queue, expected }: {
    baseState: number;
    queue: Que[];
    expected: number;
  }) {
  const actual = getFinalState(baseState, queue);
  return (
    <>
      <p>Base state: <b>{baseState}</b></p>
      <p>Queue: <b>[{queue.join(', ')}]</b></p>
      <p>Expected result: <b>{expected}</b></p>
      <p style={{ color: actual === expected ? 'green' : 'red' }}>
        Your result: <b>{actual}</b>
        ({actual === expected ? 'correct' : 'wrong'})
      </p>
    </>
  );
}
