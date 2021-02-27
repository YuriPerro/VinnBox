import "./styles.scss";

import sideBarIcon from "../../assets/icons/sideBarIcon.svg";
import homeIcon from "../../assets/icons/homeIcon.svg";
import plusIcon from "../../assets/icons/plusIcon.svg";
import logoutIcon from "../../assets/icons/logoutIcon.svg";

export default function SideBar(props) {
  const { openModal } = props;
  return (
    <div className="sidebar-container">
      <input type="image" src={sideBarIcon} alt="menu" />
      <input type="image" src={homeIcon} alt="home" />
      <input type="image" src={plusIcon} onClick={openModal} alt="plus" />
      <div className="container-bottom">
        <input type="image" src={logoutIcon} alt="logout" />
        <div className="line-bottom" />
        <h3>VB</h3>
      </div>
    </div>
  );
}
