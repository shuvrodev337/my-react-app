type TImageUrlPropsType = {
  imageUrl: string;
};
const UserAvatar = ({ imageUrl }: TImageUrlPropsType) => {
  return (
    <div className="size-10 rounded-full object-contain overflow-hidden">
      <img src={imageUrl} alt="" />
    </div>
  );
};

export default UserAvatar;
