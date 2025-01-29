import UserAvatar from "./UserAvatar";
import withBorder from "./withBorder";

const UserWithBorder = withBorder(UserAvatar);
const GameResult = () => {
  const imageUrl =
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="flex gap-4 items-center">
      <UserAvatar imageUrl={imageUrl} />
      <UserWithBorder imageUrl={imageUrl} />
      <UserAvatar imageUrl={imageUrl} />
    </div>
  );
};

export default GameResult;
