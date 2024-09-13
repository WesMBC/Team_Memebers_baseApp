import {Link} from 'react-router-dom'

const Content = () => {
    return(
    <nav className="navbar navbar-expand-lg nvbar-dar bg-light justify-content-center">
        <ul className="navbar-nav  mb-2 mb-lg-0 ">
            <li className="nav-item ">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item ">
                <Link className="nav-link" to="GroupedTeamMembers">Teams</Link>
            </li>
        </ul>
    </nav>

    ) 
}

export default Content
