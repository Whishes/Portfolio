import "./App.css";
import Header from "./Header";
import Projects from "./Projects";
import Skills from "./Skills";
import Socials from "./Socials";

function App() {
	return (
		<>
			<Header />

			<main>
				<svg
					className="svg purple"
					viewBox="0 0 100 100"
					height="65"
					width="100%"
					preserveAspectRatio="none"
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
				>
					<path
						className="darkmode"
						d="M 0 0 L 50 100 L 100 0 z"
						fill="none"
						stroke="none"
					></path>
				</svg>

				<Projects />

				<svg
					className="svg darkmode"
					viewBox="0 0 100 100"
					height="65"
					width="100%"
					preserveAspectRatio="none"
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
				>
					<path
						className="purple"
						d="M 0 0 L 50 100 L 100 0 z"
						fill="red"
						stroke="nones"
					></path>
				</svg>

				<Skills />

				<svg
					className="svg purple"
					viewBox="0 0 100 100"
					height="65"
					width="100%"
					preserveAspectRatio="none"
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
				>
					<path
						className="darkmode"
						d="M 0 0 L 50 100 L 100 0 z"
						fill="red"
						stroke="none"
					></path>
				</svg>

				<Socials />
			</main>
		</>
	);
}

export default App;
