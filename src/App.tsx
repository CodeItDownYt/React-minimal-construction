import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";

const App = () => {
	return (
		<div className="w-full h-full flex flex-col relative box-border">
			<Header />
			<Services />
			<Blog />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
