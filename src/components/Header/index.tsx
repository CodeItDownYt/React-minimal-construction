import { ArrowForward } from "react-ionicons";
import Navbar from "../Navbar";
import header from "../../assets/images/header.png";

const Header = () => {
	return (
		<div className="w-full md:mt-16 mt-7 md:h-[80vh] h-auto md:px-40 px-5 relative">
			<Navbar />
			<div className="w-full md:mt-48 mt-20 flex md:flex-row flex-col items-start justify-between">
				<div className="flex flex-col md:w-auto w-full">
					<span className="font-medium text-[#929a9f] text-[18px]">
						welcome to our website!
					</span>
					<div className="font-bold text-[#263640] text-[42px] md:max-w-[650px] mt-4">
						Quality is our number one priority here
					</div>
					<p className="font-normal text-[#929a9f] md:max-w-[450px] leading-7 mt-4">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime repudiandae
						sapiente facilis, enim adipisci doloribus facere consequatur error labore iure
						nam.
					</p>
					<div className="flex items-center gap-3 bg-[#ff9900] w-[209px] h-[40px] justify-center cursor-pointer mt-10">
						<span className="text-white font-medium text-[15px]">Contact</span>
						<ArrowForward color="#fff" />
					</div>
				</div>
				<div className="relative">
					<img
						src={header}
						alt="header"
						className="md:mt-[-130px] mt-16 md:mb-0 mb-16 shadow-xl z-50"
					/>
					<div className="absolute left-[-50px] top-[60px] w-[450px] bg-[#f5f8fa] h-[570px] z-[-1]"></div>
				</div>
			</div>
		</div>
	);
};

export default Header;
