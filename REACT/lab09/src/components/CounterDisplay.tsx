interface CounterDisplayProps {
    count: number;
}

export default function CounterDisplay({ count }: CounterDisplayProps) {
    return <h1>{count}</h1>
}
  