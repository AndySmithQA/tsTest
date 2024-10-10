type IncrementButtonProps = {
  increment: () => void;
};

export default function IncrementButton({ increment }: IncrementButtonProps) {
    return (
      <button onClick={increment}>
        Increment the counter!
      </button>
    )
  }
  