import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Social = ({ name, link }: { name: string; link: string }) => {
	const icon = () => {
		if (name === "LinkedIn") {
			return <BsLinkedin />;
		} else if (name === "Email") {
			return <AiOutlineMail />;
		} else if (name === "Github") {
			return <BsGithub />;
		} else {
			return;
		}
	};
	return (
		<li className="li-item">
			{icon()}
			<a className="project-link" href={link}>
				{name}
			</a>
		</li>
	);
};

export default Social;
