import Logo from '../../assets/logo.jpeg';

export default function Navbar() {
  return (
    <header className="container flex items-center justify-between h-16 px-4 mx-auto rounded-md bg-gray-50 drop-shadow-[0px_3px_9px_#69696930]">
		  <img src={Logo} alt="Logo" className="w-30 h-12" />
			<div className="items-center hidden space-x-8 lg:flex">
				<div className="space-x-4">
					{/* <a rel="noopener noreferrer" href="/">Home</a> */}
					<a rel="noopener noreferrer" href="#about-us">About Us</a>
					<a rel="noopener noreferrer" href="#testimonial">Testimonials</a>
					<a rel="noopener noreferrer" href="#coach">Coaches</a>
				</div>
				<button className="px-4 py-2 rounded-md bg-yellow-300 text-gray-700">Sign up</button>
			</div>
			<button className="flex items-center justify-center p-2 lg:hidden">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-900">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
				</svg>
			</button>
		</header>
  )
}
