import React from "react";

interface IAvatarProps {
  imageUrl?: string;
  classNameAdd?: string;
}

export const Avatar: React.FC<IAvatarProps> = ({ imageUrl, classNameAdd }) => {
  return (
    <div
      className={`${classNameAdd} rounded-full overflow-hidden bg-gray-200 flex items-center justify-center`}
    >
      <img
        src={imageUrl || "../../src/assets/avatar.png"}
        className="object-cover w-full h-full"
      />
    </div>
  );
};
