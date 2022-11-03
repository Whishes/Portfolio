import db from "./db.json";
import Skill from "./Skill";

const Skills = () => {
	return (
		<section className="content-section darkmode" id="skills-section">
			<h2 className="heading" aria-label="Skills">
				My Skills
			</h2>
			<ul className="links">
				{db.skills.map((skill) => {
					return <Skill key={skill.id} skillName={skill.name} />;
				})}
			</ul>
		</section>
	);
};

export default Skills;
