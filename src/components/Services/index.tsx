import service1 from "../../assets/images/service1.png";
import service2 from "../../assets/images/service2.png";
import service3 from "../../assets/images/service3.png";
import about from "../../assets/images/about.png";
import { ArrowForward } from "react-ionicons";

const Services = () => {
	const services = [
		{
			title: "Experienced team with great leadership skills",
			image: service1,
			desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime repudiandae sapiente facilis.",
		},
		{
			title: "Experienced team with great leadership skills",
			image: service2,
			desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime repudiandae sapiente facilis.",
		},
		{
			title: "Experienced team with great leadership skills",
			image: service3,
			desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime repudiandae sapiente facilis.",
		},
	];

	return (
		<div className="w-full md:px-40 px-5 bg-[#f5f8fa] relative z-[-1] pt-20 md:pb-[300px] pb-20">
			<div className="flex flex-col gap-2">
				<div className="text-[#263640] md:text-left text-center font-bold text-[25px] max-w-[650px] mt-2">
					Top Services with cheap prices
				</div>
				<p className="font-normal text-[#929a9f] max-w-[550px] leading-7 mt-4 md:text-justify text-center">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi soluta, dolor
					eaque consectetur ullam pariatur, itaque adipisci beatae molestiae repudiandae
					corrupti eos, odio neque perspiciatis ratione dignissimos voluptas
				</p>
			</div>
			<div className="w-full flex md:flex-row flex-col items-center justify-between md:gap-8 gap-16 mt-24 z-50">
				{services.map((service, index: number) => {
					return (
						<div
							key={index}
							className="flex flex-col gap-3 max-w-[300px] z-50"
						>
							<img
								src={service.image}
								alt={service.title}
								className="shadow-lg"
							/>
							<span className="font-semibold text-[#263640] text-[17px] mt-3">
								{service.title}
							</span>
							<p className="text-[#929a9f] leading-7"> {service.desc} </p>
							<a
								href="#"
								className="text-[#ff9900] font-medium z-50"
							>
								Learn More
							</a>
						</div>
					);
				})}
			</div>
			<div className="md:absolute md:mt-0 mt-16 bottom-[-380px] bg-[#263640] md:p-24 p-8 md:w-[70%] w-full md:h-[600px] z-[100] shadow-xl">
				<img
					src={about}
					alt="about"
					className="md:absolute md:block hidden right-[-250px] top-[80px] shadow-xl"
				/>
				<div className="flex flex-col">
					<span className="font-medium text-[#929a9f] text-[18px]">
						About us and our Story
					</span>
					<div className="text-white font-bold text-[42px] max-w-[650px] mt-4">
						Graduate engineer Martin Taylor founded his engineering office in 1971.
					</div>
					<p className="text-white font-normal max-w-[450px] leading-7 mt-4">
						He ran it as the solo owner for almost 30 years. In 1998, son Alex Taylor joined
						his father as deputy. Graduate engineer Alex Taylor has been the managing and the
						director since 2006
					</p>
					<span className="w-[60%] h-[1px] bg-gray-500 mt-6"></span>
					<div className="flex items-center gap-3 w-[209px] h-[40px] justify-start cursor-pointer mt-6">
						<span className="text-white font-medium text-[15px]">Continue reading</span>
						<ArrowForward color="#fff" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
