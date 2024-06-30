import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import styles from "./styles.module.scss";
import "./styles.module.scss";

export default function ChatInput({ handleSendMsg }) {
  const [msg, setMsg] = useState("");

  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };

  return (
    <div className={styles.container}>
      <form
        className={styles.inputContainer}
        onSubmit={(event) => sendChat(event)}
      >
        <input
          type="text"
          placeholder="type your message here"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
        />
        <button type="submit">
          <IoMdSend />
        </button>
      </form>
    </div>
  );
}
