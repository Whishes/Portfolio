import { BsChevronDoubleRight } from "react-icons/bs";

const Skill = ({ skillName }: { skillName: string }) => {
	return (
		<li className="li-item">
			<BsChevronDoubleRight />
			{skillName}
		</li>
	);
};

export default Skill;
