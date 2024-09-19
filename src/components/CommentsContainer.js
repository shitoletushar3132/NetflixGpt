import React from "react";
import Comment from "./Comment";

const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Vicky shitole",
      text: "hello how are you guys ",
      replies: [
        {
          name: "Vicky shitole",
          text: "hello how are you guys ",
          replies: [
            {
              name: "Vicky shitole",
              text: "hello how are you guys ",
              replies: [],
            },
          ],
        },
        {
          name: "Vicky shitole",
          text: "hello how are you guys ",
          replies: [
            {
              name: "Vicky shitole",
              text: "hello how are you guys ",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Vicky shitole",
      text: "hello how are you guys ",
      replies: [
        {
          name: "Vicky shitole",
          text: "hello how are you guys ",
          replies: [
            {
              name: "Vicky shitole",
              text: "hello how are you guys ",
              replies: [],
            },
          ],
        },
        {
          name: "Vicky shitole",
          text: "hello how are you guys ",
          replies: [
            {
              name: "Vicky shitole",
              text: "hello how are you guys ",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Vicky shitole",
      text: "hello how are you guys ",
      replies: [
        {
          name: "Vicky shitole",
          text: "hello how are you guys ",
          replies: [
            {
              name: "Vicky shitole",
              text: "hello how are you guys ",
              replies: [],
            },
          ],
        },
        {
          name: "Vicky shitole",
          text: "hello how are you guys ",
          replies: [
            {
              name: "Vicky shitole",
              text: "hello how are you guys ",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Vicky shitole",
      text: "hello how are you guys ",
      replies: [
        {
          name: "Vicky shitole",
          text: "hello how are you guys ",
          replies: [
            {
              name: "Vicky shitole",
              text: "hello how are you guys ",
              replies: [],
            },
          ],
        },
        {
          name: "Vicky shitole",
          text: "hello how are you guys ",
          replies: [
            {
              name: "Vicky shitole",
              text: "hello how are you guys ",
              replies: [],
            },
          ],
        },
      ],
    },
  ];

  const CommentList = ({ comments }) => {
    return comments.map((comment, index) => (
      <div key={index}>
        <Comment data={comment} />
        {comment.replies.length > 0 && (
          <div className="ml-6 pl-5 border-l-2 border-gray-400">
            <CommentList comments={comment.replies} />
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="mx-4 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
