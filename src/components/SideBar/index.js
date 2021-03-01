import "./styles.scss";
import { Link } from "wouter";

import { useLocation } from "wouter";
import sideBarIcon from "../../assets/icons/sideBarIcon.svg";
import homeIcon from "../../assets/icons/homeIcon.svg";
import plusIcon from "../../assets/icons/plusIcon.svg";
import logoutIcon from "../../assets/icons/logoutIcon.svg";
import VinnBoxLogo from "../../assets/images/VINNBOX-BRANCA.png";

export default function SideBar(props) {
  const { openModal } = props;
  const [location, setLocation] = useLocation();

  return (
    <div className="sidebar-container">
      <input type="image" src={sideBarIcon} alt="menu" />
      <input
        type="image"
        src={homeIcon}
        alt="home"
        className={location === "/home" ? "active" : ""}
        onClick={() => setLocation("/home")}
      />
      <input type="image" src={plusIcon} onClick={openModal} alt="plus" />

      <div className="container-bottom">
        <Link href="/login">
          <input type="image" src={logoutIcon} alt="logout" />
        </Link>
        <div className="line-bottom" />

        <img src={VinnBoxLogo} width={70} height={40} alt="logo" />
      </div>
    </div>
  );
}
