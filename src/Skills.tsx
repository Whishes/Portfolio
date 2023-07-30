import db from "./db.json";
import Skill from "./Skill";

const Skills = () => {
  interface TestObject {
    name: string;
    number: number;
  }
  const exObject: Object = {
    name: "20",
    number: 10,
  };

  function test(object: TestObject, id: string) {
    const { name, number } = object;
  }

  console.log(test("Sam", "Ken"));

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
