interface UserAddIconProps {
  width: number;
  height: number;
}

function UserAddIcon({ width, height }: UserAddIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <title>User Add</title>
      <path
        d="M11.5 17.5a6 6 0 1012 0 6 6 0 10-12 0zM17.5 14.5v6M20.5 17.5h-6M9 16.5H.5a8.719 8.719 0 01.7-3.322c.49-.981 2.539-1.661 5.111-2.613.695-.258.581-2.074.273-2.413a5.127 5.127 0 01-1.34-3.978A3.354 3.354 0 018.5.5a3.354 3.354 0 013.256 3.674 5.127 5.127 0 01-1.336 3.978c-.308.339-.422 2.155.273 2.413l1.307.481"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default UserAddIcon;
