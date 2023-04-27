import Navigation from '../navigation/nav.js';
import Logo from '../../assets/logo_kasa.png'
import './header.css'

export default function Header() {
	return (
		<header className='header'>
			<img src={Logo} alt="kasa, location d'appartements" />
			<Navigation />
		</header>
	)
}