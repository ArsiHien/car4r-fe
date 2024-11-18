import React from "react";

interface IAvatarProps {
  imageUrl?: string;
  size?: string;
}

export const Avatar: React.FC<IAvatarProps> = ({
  imageUrl,
  size = "w-12 h-12",
}) => {
  return (
    <div
      className={`${size} rounded-full overflow-hidden bg-gray-200 flex items-center justify-center`}
    >
      <img
        src={imageUrl || "../../src/assets/avatar.png"}
        className="object-cover w-full h-full"
      />
    </div>
  );
};
