import logoWhite from "../../assets/images/logoWhite.png";
const Footer = () => {
	const navLinks = [
		{ title: "Home", path: "/", active: true },
		{ title: "Services", path: "/", active: false },
		{ title: "Products", path: "/", active: false },
		{ title: "Newsletter", path: "/", active: false },
		{ title: "About", path: "/", active: false },
	];
	return (
		<div className="w-full bg-[#263640] md:px-40 px-5 py-10 flex md:flex-row flex-col md:gap-0 gap-8 items-center justify-between">
			<img
				src={logoWhite}
				alt="logo"
			/>
			<div className="flex items-center gap-5">
				{navLinks.map((link) => {
					return <span className="font-semibold text-white cursor-pointer">{link.title}</span>;
				})}
			</div>
		</div>
	);
};

export default Footer;
