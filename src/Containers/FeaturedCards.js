import React from "react";
import FeaturedCard from "../Components/FeaturedCard";
import "../styles/FeaturedCards.scss";

const featuredData = [
	{
		title: "BEN 10",
		info: "Weekdays 3:30pm ET/PT",
		img: "/assets/featureImage1.jpg",
	},
	{
		title: "Ok. K.O! Let's Be Heroes",
		info: "Weekdays 3:30pm ET/PT",
		img: "/assets/featureImage2.jpg",
	},
];
const restFeaturedData = [
	{
		title: "Steven Universe",
		info: "Weekends 11:30am ET/PT",
		img: "/assets/featureImage3.jpg",
	},
	{
		title: "We Bare Bears",
		info: "Weekdays 6:00pm ET/PT",
		img: "/assets/featureImage4.jpg",
	},
	{
		title: "The Powerpuff Girls",
		info: "Every day at 7:00am ET/PT",
		img: "/assets/featureImage5.jpg",
	},
	{
		title: "The Regular Show",
		info: "Weekends 7:30pm ET/PT",
		img: "/assets/featureImage6.jpg",
	},
	{
		title: "Adventure Time",
		info: "Weekends NOON ET/PT",
		img: "/assets/featureImage7.jpg",
	},
	{
		title: "Apple and Onion",
		info: "Weekends 1:30pm ET/PT",
		img: "/assets/featureImage8.jpg",
	},
	{
		title: "The Amazing World of Gumball",
		info: "Weekdays 7:00pm ET/PT",
		img: "/assets/featureImage9.jpg",
	},
];

export default function FeaturedCards() {
	return (
		<>
			<div className="FeaturedCards">
				<h1>FEATURED</h1>
				<div className="cards">
					{featuredData.map((data) => {
						return <FeaturedCard {...data} />;
					})}
				</div>
				<div className="cards-rest">
					{restFeaturedData.map((data) => {
						return <FeaturedCard {...data} />;
					})}
				</div>
			</div>
		</>
	);
}
