type ResetButtonProps = {
  reset: () => void;
};

export default function ResetButton({ reset }: ResetButtonProps) {
    return (
      <button onClick={reset}>
        Reset to 0
      </button>
    )
  }
  