import { ArrowForward } from "react-ionicons";
import book from "../../assets/images/book.png";

const Contact = () => {
	return (
		<div className="w-full flex md:flex-row flex-col items-start justify-between md:px-40 px-5 bg-[#f5f8fa] relative md:py-28 py-20">
			<div className="flex w-full justify-center flex-col gap-2">
				<div className="font-bold text-[#263640] text-[25px] max-w-[650px] md:mt-4">
					Book an appointment Now!
				</div>
				<p className="leading-7 text-[#929a9f] max-w-[550px] mt-2 text-justify">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi soluta, dolor
					eaque consectetur ullam pariatur, itaque adipisci beatae molestiae repudiandae
					corrupti eos, odio neque perspiciatis ratione dignissimos voluptas
				</p>
				<div className="flex items-center gap-3 bg-[#ff9900] px-5 w-fit h-[40px] justify-center cursor-pointer mt-5">
					<span className="font-medium text-white text-[15px]">Book an Appointment</span>
					<ArrowForward color="#fff" />
				</div>
			</div>
			<img
				src={book}
				alt="book"
				className="shadow-xl md:mt-[-180px] mt-16"
			/>
		</div>
	);
};

export default Contact;
