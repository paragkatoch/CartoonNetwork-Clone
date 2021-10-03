import React from "react";
import FeaturedCard from "../Components/FeaturedCard";
import "../styles/FeaturedCards.scss";

const featuredData = [
	{
		title: "BEN 10",
		info: "Weekdays 3:30pm ET/PT",
		img: "https://assets.digicorus.corusdigitaldev.com/wp-content/uploads/sites/19/2018/06/04133345/CartoonNetwork_Ben10_462x386.jpg",
	},
	{
		title: "Ok. K.O! Let's Be Heroes",
		info: "Weekdays 3:30pm ET/PT",
		img: "https://assets.digicorus.corusdigitaldev.com/wp-content/uploads/sites/19/2018/05/29200714/CartoonNetwork_OKKO_462x386.jpg",
	},
];

const restFeaturedData = [
	{
		title: "Steven Universe",
		info: "Weekends 11:30am ET/PT",
		img: "https://assets.digicorus.corusdigitaldev.com/wp-content/uploads/sites/19/2018/05/29200734/CartoonNetwork_StevenUniverse_462x386.jpg",
	},
	{
		title: "We Bare Bears",
		info: "Weekdays 6:00pm ET/PT",
		img: "https://assets.digicorus.corusdigitaldev.com/wp-content/uploads/sites/19/2018/06/04142757/CartoonNetwork_WeBareBears_462x3861.jpg",
	},
	{
		title: "The Powerpuff Girls",
		info: "Every day at 7:00am ET/PT",
		img: "https://assets.digicorus.corusdigitaldev.com/wp-content/uploads/sites/19/2018/05/29200805/CartoonNetwork_ThePowerPuffGirls_462x386.jpg",
	},
	{
		title: "The Regular Show",
		info: "Weekends 7:30pm ET/PT",
		img: "https://assets.digicorus.corusdigitaldev.com/wp-content/uploads/sites/19/2018/05/29200826/CartoonNetwork_TheRegularShow_462x386.jpg",
	},
	{
		title: "Adventure Time",
		info: "Weekends NOON ET/PT",
		img: "https://assets.digicorus.corusdigitaldev.com/wp-content/uploads/sites/19/2018/05/29200850/CartoonNetwork_AdventureTime_462x386.jpg",
	},
	{
		title: "Apple and Onion",
		info: "Weekends 1:30pm ET/PT",
		img: "https://assets.digicorus.corusdigitaldev.com/wp-content/uploads/sites/19/2020/10/01130736/AppleAndOnion.jpg",
	},
	{
		title: "The Amazing World of Gumball",
		info: "Weekdays 7:00pm ET/PT",
		img: "https://assets.digicorus.corusdigitaldev.com/wp-content/uploads/sites/19/2020/10/01130745/AWOG.jpg",
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
