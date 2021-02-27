import "./styles.scss";

import searchIcon from '../../assets/icons/searchIcon.svg'

export default function Search(){
    return(
        <div className="search-container">
            <img src={searchIcon} alt="search" />
            <input placeholder="Pesquisar cards..." />
        </div>
    )
}