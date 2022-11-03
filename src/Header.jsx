import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";
import pdf from "../src/resume.pdf";

const Header = () => {
	return (
		<header className="header darkmode">
			<h1 className="header-heading main-heading">
				Hi, I'm
				<br />
				Nicholas Cruickshank
			</h1>
			<h2 className="header-heading sub-heading">
				A web developer
				<br />
				based in Melbourne
			</h2>
			<a className="cv-heading" href={pdf} download="resume.pdf">
				<BsChevronDoubleRight />
				My CV
				<BsChevronDoubleLeft />
			</a>
			<p className="tag-heading">Start scrolling for more!</p>
		</header>
	);
};

export default Header;
