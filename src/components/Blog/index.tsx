import { ArrowForward } from "react-ionicons";

const Blog = () => {
	const blogs = [
		{
			title: "The course of the disease is very important for the people",
			desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime repudiandae sapiente facilis.",
		},
		{
			title: "New special laws for constructors and their employes",
			desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime repudiandae sapiente facilis.",
		},
		{
			title: "Best materials for buildings in 2024",
			desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime repudiandae sapiente facilis.",
		},
	];
	return (
		<div className="w-full md:px-40 px-5 relative pt-20 md:pb-36 pb-20">
			<div className="flex flex-col gap-2 md:mt-[500px]">
				<div className="font-bold text-[#263640] text-[25px] md:max-w-[650px] max-w-full md:mt-4">
					What's happening in out Newspaper
				</div>
				<p className="text-[#929a9f] max-w-[550px] leading-7 mt-2 text-justify">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi soluta, dolor
					eaque consectetur ullam pariatur, itaque adipisci beatae molestiae repudiandae
					corrupti eos, odio neque perspiciatis ratione dignissimos voluptas
				</p>
			</div>
			<div className="flex flex-col w-full gap-3 mt-16">
				<span className="text-[#263640] font-bold text-[20px]">Our Latest Posts</span>
				<div className="flex md:flex-row flex-col md:gap-0 gap-16 w-full items-center justify-between">
					{blogs.map((blog) => {
						return (
							<div
								key={blog.title}
								className="flex flex-col gap-3 max-w-[300px] z-50"
							>
								<span className="font-semibold text-[#263640] text-[17px] mt-3">
									{blog.title}
								</span>
								<p className="leading-6 text-[#929a9f]">{blog.desc}</p>
								<div className="flex items-center gap-3 justify-start cursor-pointer mt-3">
									<span className="font-medium text-[#ff9900] text-[15px]">
										Continue reading
									</span>
									<ArrowForward color="#ff9900" />
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Blog;
