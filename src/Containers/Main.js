import React from "react";
import FeaturedCards from "./FeaturedCards";
import "../styles/Main.scss";

export default function Main() {
	return (
		<main className="Main">
			<FeaturedCards />
			<section className="about">
				<h1>ABOUT CARTOON NETWORK</h1>
				<p>
					Cartoon Network (Canada) is the destination for kids and families
					seeking hilarious animation. Cartoon Network is the funny and
					unexpected brand that stands out from the pack in a way that kids can
					relate.
				</p>
			</section>
			<section className="contact">
				<h1>CONTACT US</h1>
				<p>
					We want to hear from you! To share your feedback, please email us at
					<a href="mailto:info@cartoonnetwork.ca"> info@cartoonnetwork.ca</a>
				</p>
			</section>
		</main>
	);
}
