const Or = ({ classNameAdd = "" }) => {
  return (
    <div className={`${classNameAdd} flex w-5/6 items-center justify-center`}>
      <div className="flex-grow border-b border-b-blue-300"></div>
      OR
      <div className="flex-grow border-b border-b-blue-300"></div>
    </div>
  );
};

export default Or;
