interface UserKeyIconProps {
  width: number;
  height: number;
}

function UserKeyIcon({ width, height }: UserKeyIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <title>User Key</title>
      <path
        d="M16.405 20.231a1.25 1.25 0 110-1.768 1.251 1.251 0 010 1.768z"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.048 17.942l4.305-4.295a.5.5 0 00.147-.354V12a.5.5 0 00-.5-.5h-1.3a.5.5 0 00-.344.137l-4.429 4.184a4 4 0 102.122 2.121zM9 16.5H.5a8.719 8.719 0 01.7-3.322c.49-.981 2.539-1.661 5.111-2.613.695-.258.581-2.074.273-2.413a5.127 5.127 0 01-1.34-3.978A3.354 3.354 0 018.5.5a3.354 3.354 0 013.256 3.674 5.127 5.127 0 01-1.336 3.978c-.308.339-.422 2.155.273 2.413 2.572.952 4.621 1.632 5.111 2.613"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default UserKeyIcon;
