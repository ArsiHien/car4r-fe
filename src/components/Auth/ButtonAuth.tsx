interface iProps {
  txtVal?: string;
  classNameAdd?: string;
  handleClick?: () => void;
}
const ButtonAuth: React.FC<iProps> = ({
  txtVal,
  classNameAdd,
  handleClick,
}) => {
  return (
    <button
      className={`${classNameAdd} border-gradient w-5/6 text-lg pt-5 pb-5 rounded-full`}
      onClick={handleClick}
    >
      {txtVal}
    </button>
  );
};

export default ButtonAuth;
