import React from "react";
import { useNavigate } from "react-router-dom";
import { BiPowerOff } from "react-icons/bi";
import axios from "axios";
import { logoutRoute } from "../../utils/APIRoutes";
import styles from "./styles.module.scss";

export default function Logout() {
  const navigate = useNavigate();

  async function handleClick() {
    const id = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    )._id;
    const data = await axios.get(`${logoutRoute}/${id}`);
    if (data.status === 200) {
      localStorage.clear();
      navigate("/login");
    }
  }

  return (
    <div onClick={handleClick} className={styles.container}>
      <BiPowerOff />
    </div>
  );
}
