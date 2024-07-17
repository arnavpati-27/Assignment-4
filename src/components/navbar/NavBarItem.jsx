import './Navbar.css'

export const NavBarItem = ({title}) => {
    return (
        <li className="navbar-menu-item"><button className="item-box">{title}</button></li>
    )
}