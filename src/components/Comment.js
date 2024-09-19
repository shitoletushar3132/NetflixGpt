import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="m-1 p-2 inline-flex items-center gap-3 border min-w-[50%] rounded-lg">
      <FaUserCircle size={30} />
      <div>
        <p className="font-semibold">@{name}</p>
        <p className="text-wrap">{text}</p>
      </div>
    </div>
  );
};

export default Comment;
