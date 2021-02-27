import "./styles.scss";

import sideBarIcon from '../../assets/icons/sideBarIcon.svg'
import homeIcon from '../../assets/icons/homeIcon.svg'
import plusIcon from '../../assets/icons/plusIcon.svg'
import logoutIcon from '../../assets/icons/logoutIcon.svg'

export default function SideBar() {
    return (
        <div className="container">
            <input
                type="image"
                src={sideBarIcon}
            />
            <input
                type="image"
                src={homeIcon}
            />
            <input
                type="image"
                src={plusIcon}
            />
            <div className="container-bottom">
                <input type="image" src={logoutIcon} />
                <div className="line-bottom" />
                <h3>VB</h3>
            </div>
        </div>
    )
}