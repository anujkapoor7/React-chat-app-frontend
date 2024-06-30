import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.png";
import styles from "./styles.module.scss";
import clsx from "clsx";

export default function Contacts({ contacts, changeChat }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);

  useEffect(() => {
    async function fetchData() {
      const data = await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      );
      setCurrentUserName(data.username);
      setCurrentUserImage(data.avatarImage);
    }

    fetchData();
  }, []);

  function changeCurrentChat(index, contact) {
    setCurrentSelected(index);
    changeChat(contact);
  }

  return (
    <>
      {currentUserImage && currentUserImage && (
        <div className={styles.container}>
          <div className={styles.brand}>
            <img src={Logo} alt="logo" />
            <h3>Slack 2.0</h3>
          </div>
          <div className={styles.contacts}>
            {contacts.map((contact, index) => {
              return (
                <div
                  key={contact._id}
                  className={clsx(styles.contact, {
                    [styles.selected]: currentSelected === index,
                  })}
                  onClick={() => changeCurrentChat(index, contact)}
                >
                  <div className={styles.avatar}>
                    <img
                      src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                      alt=""
                    />
                  </div>
                  <div className={styles.username}>
                    <h3>{contact.username}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.currentUser}>
            <div className={styles.avatar}>
              <img
                src={`data:image/svg+xml;base64,${currentUserImage}`}
                alt="avatar"
              />
            </div>
            <div className={styles.username}>
              <h2>{currentUserName}</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
