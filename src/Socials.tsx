import db from "./db.json";
import Social from "./Social";

const ContactMe = () => {
	const socials = db.socials;
	return (
		<section className="content-section purple" id="contact-section">
			<h2 className="heading" aria-label="Contact Me">
				My Socials
			</h2>
			<ul className="links">
				{socials.map((element) => {
					return (
						<Social key={element.id} name={element.name} link={element.link} />
					);
				})}
			</ul>
		</section>
	);
};

export default ContactMe;
