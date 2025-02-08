import { type FaqItem } from "../types/configDataTypes";

// replace this data with whatever you want in your FAQ section
export const faqData: FaqItem[] = [
	{
		question: "What services do you offer?",
		answer: `Full-stack web development, data analytics consulting, music recording and production `,
	},
	{
		question: "Where are meetings held?",
		answer: `	I can meet in-person in the Nashville area or meet on Zoom or Teams. I can also travel, but flight and lodging costs will be billed.`,
	},
	{
		question: 'What are descriptive, predictive and prescriptive analytics?',
		answer: `Descriptive analytics looks backward to tell you what happened, while predictive analytics forecasts future trends based on past data. Prescriptive analytics goes one step further by recommending specific actions to take.`,
	},
	{
		question: 'What tool do you use for dashboards?',
		answer: `Tableau.`,
	},
	{
		question: 'Do you offer student or military discount?',
		answer: `Yes. 10% off.`,
	},
	{
		question: 'Why should I hire you?',
		answer: `I have 10+ years of industry experience combined with technical agility and a pair of masters degrees.`,
	},
	{
		question: "Why Astro?",
		answer: `I use Astro for all my website development. Astro is an excellent framework for content-focused websites, with a great developer
      experience. `,
	},
	{
		question: "Are you available for full-time hire?",
		answer: `Yes. Negotiable depending on salary, bonus, and growth factors.`,
	},
	{
		question: "Something else?",
		answer: `Contact me directly and I'll respond within 48 hours.`,
	},
];

export default faqData;
