import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Chris Blogs",
	// Your website's title and description (meta fields)
	title:
		"Chris Blogs - a standout portfolio and blog",
	description:
	"📊 Analytics. 🌐 Web. 🎺 Music. 🏬 Markets.",
	// Your information for blog post purposes
	author: {
		name: "Chris Rotunno",
		email: "chrisrotunno@icloud.com",
		twitter: "Cosmic_Themes",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/siteOG.png",
		alt: "Cosmic Themes logo",
	},
};

export default siteData;
