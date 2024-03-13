import { Link } from "react-router-dom"
import "./navbar.scss"
export default function navbar() {
    return (
        <nav className="navigation" >
            <ul className="navigationUl">
                <Link className="navigationLi" to={"/"}>
                    <i className="fa-solid fa-house"></i>
                    <span>Home</span>
                </Link>
                <Link className="navigationLi">
                    <i className="fa-solid fa-building"></i>
                    <span>Company Infor</span>
                </Link>
                <Link className="navigationLi">
                    <i className="fa-solid fa-medal"></i>
                    <span>Golden Page</span>
                </Link>
                <Link className="navigationLi" to={'/helpdesk'} >
                <i className="fa-solid fa-hand-holding-hand"></i>
                    <span>Helpdesk</span>
                </Link>
                <Link className="navigationLi" >
                <i className="fa-solid fa-photo-film"></i>
                    <span>Calofic's Media</span>
                </Link>
                <Link className="navigationLi">
                <i className="fa-solid fa-user"></i>
                    <span>Profile</span>
                </Link>

            </ul>
        </nav>


    )
}