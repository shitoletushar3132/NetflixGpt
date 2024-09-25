import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/chatSlice";
import {
  generateRandomMessage,
  generateRandomName,
} from "../helper/randamName";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessage] = useState("");

  // Simulate receiving random messages every 1.5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(20),
        })
      );
    }, 1500);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (liveMessage.trim() === "") return;

    dispatch(addMessage({ name: "Tushar Shitole", message: liveMessage }));
    setLiveMessage("");
  };

  return (
    <>
      {/* Chat Messages Container */}
      <div className="p-2 border w-full h-[250px] md:h-[500px] border-black bg-slate-100 rounded-t-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>

      {/* Input Section */}
      <form
        className="w-full p-2 border border-black rounded-b-lg flex items-center bg-white"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="w-full border border-gray-400 px-2 py-1 outline-none text-gray-600 rounded-lg"
          placeholder="Type a message..."
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button
          type="submit"
          className="ml-2 bg-green-200 border border-gray-400 px-4 py-1 rounded-full text-lg hover:bg-green-300"
        >
          📩
        </button>
      </form>
    </>
  );
};

export default LiveChat;
