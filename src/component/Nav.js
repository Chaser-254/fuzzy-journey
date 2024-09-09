import { NavLink } from "react-router-dom";

const Nav = ({ setdisplay }) => {
    return (
        <nav className="nav" id="nav" style={{ display: setdisplay }}>
        <ul>
            <li>
                <NavLink to="" className="a">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="skills" className="a">
                    Skills
                </NavLink>
            </li>
            <li>
                <NavLink to="Bio" className="a">
                    About Me
                </NavLink>
            </li>
            <li>
                <NavLink to="contact" className="a">
                    Lets Connect
                </NavLink>
            </li>
        </ul>
    </nav>
    );
};

export default Nav;