import { type TestimonialItem } from "../types/configDataTypes";

import BowTiedFocus from "@images/testimonials/BowTiedFocus.jpg";
import TravisB from "@images/testimonials/travis-b.png";
import Connor from "@images/testimonials/connor.webp";
import Aniket from "@images/testimonials/aniket_p.jpg";
import David from "@images/testimonials/david-g-davedev.png";
import Damiano from "@images/testimonials/damiano.jpg";

export const testimonialData: TestimonialItem[] = [
	{
		avatar: Connor,
		name: "Connor D",
		title: "JS Developer",
		testimonial: `Chris has an incredible ability to listen and retain details. He remembered key project challenges and followed up with solutions that actually worked.`,
	},

	{
		avatar: Damiano,
		name: "Damiano L",
		title: "Python Developer",
		testimonial: `Chris doesn’t just answer questions—he asks the right ones. His problem-solving approach gets straight to the root of an issue.`,
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
