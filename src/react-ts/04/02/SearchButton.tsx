type OnClick = {
  onClick: () => void;
}

export default function SearchButton({ onClick }: OnClick) {
  return (
    <button onClick={onClick}>
      Search
    </button>
  );
}
