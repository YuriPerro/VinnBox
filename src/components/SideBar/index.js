import "./styles.scss";
import { Link } from "wouter";

import sideBarIcon from "../../assets/icons/sideBarIcon.svg";
import homeIcon from "../../assets/icons/homeIcon.svg";
import plusIcon from "../../assets/icons/plusIcon.svg";
import logoutIcon from "../../assets/icons/logoutIcon.svg";
import { useState } from "react";

export default function SideBar(props) {
  const { openModal } = props;
  const [size, setSize] = useState(80)

  return (
    <div className="sidebar-container">
      <input type="image" src={sideBarIcon} alt="menu" />
      <input type="image" src={homeIcon} alt="home" />
      <input type="image" src={plusIcon} onClick={openModal} alt="plus" />
      <div className="container-bottom">
        <Link href="/login">
          <input type="image" src={logoutIcon} alt="logout" />
        </Link>
        <div className="line-bottom" />
        <h3>VB</h3>
      </div>
    </div>
  );
}
