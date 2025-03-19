import { type TestimonialItem } from "../types/configDataTypes";

import BowTiedFocus from "@images/testimonials/BowTiedFocus.jpg";
import TravisB from "@images/testimonials/travis-b.png";
import Connor from "@images/testimonials/connor.webp";
import Aniket from "@images/testimonials/aniket_p.jpg";
import David from "@images/testimonials/david-g-davedev.png";
import Damiano from "@images/testimonials/damiano.jpg";
import Chuck from "@images/testimonials/chuck.jpg";
import Brandon from "@images/testimonials/brandon.jpg";


export const testimonialData: TestimonialItem[] = [
	{
		avatar: Chuck,
		name: "Chuck G",
		title: "Analytics Manager",
		testimonial: `Chris consistently delivers creative solutions, thorough research, and reliable execution. His professionalism shines through in all interactions and deliverables. As an analytics leader, I'd gladly work with him professionally and recommend him for analytics and data science roles.`,
	},

	{
		avatar: Brandon,
		name: "Brandon B",
		title: "Strategic Sales Leader",
		testimonial: `I have worked with Chris on multiple projects in the past. He was very easy to work with and was always putting in more work then was asked of him. In addition, he would always show up on time to meetings, take great notes and be well prepared. Chris not only puts in high quality work but he is someone that you can trust to get the job done! `,
	},

	{
		avatar: David,
		name: "David G",
		title: "CTO",
		testimonial: `Chris has a rare mix of technical skill and business insight. He quickly understood my goals and gave actionable recommendations.`,
	},

	{
		avatar: TravisB,
		name: "Travis B",
		title: "Python Developer",
		testimonial: `Chris makes complex topics easy to understand. His ability to break down technical problems and explain solutions is unmatched.`,
	},

	{
		avatar: Aniket,
		name: "Aniket P",
		title: "Data Scientist",
		testimonial: `Chris is detail-oriented and always remembers key discussions. His ability to recall specifics and provide tailored advice is impressive.`,
	},

	{
		avatar: BowTiedFocus,
		name: "BowTiedFocus",
		title: "DB Administrator",
		testimonial: `Chris is the go-to guy for solving tough problems. His fact-finding approach saves time and leads to real solutions.`,
	},
];

export default testimonialData;
