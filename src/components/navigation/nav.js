import { Link } from 'react-router-dom'
import './nav.css'

export default function Navbar() {

    return (
        <nav className='navigation'>
            <ul className='nav_in'>
                <li className= 'nav_click'>
                    <Link  to='/'>
                        Accueil
                    </Link>
                </li>
                <li className= 'nav_click'>
                    <Link  to='/Apropos/'>
                        A propos
                    </Link>
                </li>
            </ul>
        </nav>
    )
}