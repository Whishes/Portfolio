import db from "./db.json";
import Project from "./Project";

const Projects = () => {
	const projects = db.projects;
	return (
		<section
			className="content-section grid-project purple"
			id="projects-section"
		>
			<h2 className="heading grid-heading" aria-label="Projects">
				My Projects
			</h2>
			{projects
				.sort((a, b) => b.id - a.id)
				.map((project) => {
					return (
						<Project
							key={project.id}
							pid={project.id}
							name={project.name}
							demo_link={project.demo_link}
							github_link={project.github_link}
							img_link={project.img_link}
							description={project.description}
							languages={project.languages}
						/>
					);
				})}
		</section>
	);
};

export default Projects;
