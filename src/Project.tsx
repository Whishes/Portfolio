import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import project_1 from "./images/project_1.png";
import project_2 from "./images/project_2.png";
import project_3 from "./images/project_3.png";
import project_4 from "./images/project_4.png";

const Project = ({
  pid,
  name,
  demo_link,
  github_link,
  img_link,
  description,
  languages,
}: {
  pid: number;
  name: string;
  demo_link: string;
  github_link: string;
  img_link: string;
  description: string;
  languages: string;
}) => {
  return (
    <div className="individual-project">
      <h3 className="project-heading">{name}</h3>
      <a href={demo_link}>
        <img
          className="project-img"
          src={`images/project_${pid}.png`}
          alt={name + " screenshot"}
        />
      </a>
      <h4>{languages}</h4>
      <p className="project-paragraph">{description}</p>
      <ul className="links">
        {/* render and heroku is incredibly expensive for more than 1 instance of posgresSQL */}
        {pid === 1 && (
          <li className="li-item">
            <a className="project-link" href={demo_link}>
              <CgWebsite />
              Project Demo
            </a>
          </li>
        )}
        <li className="li-item">
          <a className="project-link" href={github_link}>
            <BsGithub />
            Github
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Project;
