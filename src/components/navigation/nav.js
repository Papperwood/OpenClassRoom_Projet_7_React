import { Link } from 'react-router-dom'
import './nav.css'

export default function Navbar() {

    return (
        <nav className='navigation'>
            <ul className='nav_in'>
                <li className= 'nav_click'>
                    <Link  to='/Home/'>
                        Accueil
                    </Link>
                </li>
                <li className= 'nav_click'>
                    <Link  to='/A propos/'>
                        A propos
                    </Link>
                </li>
            </ul>
        </nav>
    )
}