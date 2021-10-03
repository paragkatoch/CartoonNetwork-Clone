import React from "react";
import "../styles/FeaturedCard.scss";

export default function FeaturedCard(props) {
	return (
		<div className="featuredCard">
			<a href="/">
				<img src={props.img} alt="featured 1" />
				<div className="tile">
					<p className="title">{props.title}</p>
					<p className="info">{props.info}</p>
				</div>
			</a>
		</div>
	);
}
