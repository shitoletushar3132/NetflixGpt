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

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(20),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="p-2 border w-full h-full border-black bg-slate-100 rounded-t-lg overflow-x-hidden overflow-y-scroll .scrollbar-custom flex flex-col-reverse">
        {chatMessages.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full p-2 border border-black rounded-b-lg flex items-center"
        onSubmit={(e) => {
          e.preventDefault();
          setLiveMessage("");
          dispatch(
            addMessage({ name: "Tushar shitole", message: liveMessage })
          );
        }}
      >
        <input
          type="text"
          className="w-full border border-gray-400 px-2 outline-none text-gray-600 py-1 rounded-lg"
          placeholder="chat..."
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="border mx-2 border-gray-400 bg-green-200 rounded-full px-4  text-lg">
          📩
        </button>
      </form>
    </>
  );
};

export default LiveChat;
