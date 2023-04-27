import logo from '../../assets/LOGO.png'
import './footer.css'

export default function Footer() {
	return (
		<footer className='footer'>
			<img src={logo} alt="Kasa" />
			<p className='copyright'>© 2020 Kasa. All rights reserved</p>
		</footer>
	)
}