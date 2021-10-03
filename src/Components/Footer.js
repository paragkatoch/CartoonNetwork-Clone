import React from "react";
import "../styles/Footer.scss";

export default function Footer() {
	return (
		<footer className="footer">
			<section className="top">
				<ul>
					<li>
						<a href="/">About Us</a>
					</li>
					<li>
						<a href="/">Privacy Policy</a>
					</li>
					<li>
						<a href="/">Terms of Use</a>
					</li>
					<li>
						<a href="/">Advertising Standard Terms</a>
					</li>
					<li>
						<a href="/">Subscribe to Channel</a>
					</li>
				</ul>

				<div className="copyright">
					<p>
						&copy; 2021 Corus Entertainment Inc. All rights reserved. Corus
						Television.
					</p>
				</div>
			</section>
			<section className="bottom">
				<section className="left">
					<a href="/">
						<img
							src="https://www.cartoonnetwork.ca/wp-content/themes/digi-theme/assets/icons/corus-logo.svg"
							alt=""
						/>
					</a>
				</section>
				<section className="right">
					<p>Other Corus Kids Websites</p>
					<ul>
						<li>
							<a href="/" className="disney-channel">
								<img
									src="https://www.cartoonnetwork.ca/wp-content/themes/digi-theme/assets/icons/disney-channel.svg"
									alt=""
								/>
							</a>
						</li>
						<li>
							<a href="/" className="disney-junior">
								<img
									src="https://www.cartoonnetwork.ca/wp-content/themes/digi-theme/assets/icons/disney-junior.svg"
									alt=""
								/>
							</a>
						</li>
						<li>
							<a href="/" className="teletoon">
								<img
									src="https://www.cartoonnetwork.ca/wp-content/themes/digi-theme/assets/icons/teletoon.svg"
									alt=""
								/>
							</a>
						</li>
						<li>
							<a href="/" className="ytv">
								<img
									src="https://www.cartoonnetwork.ca/wp-content/themes/digi-theme/assets/icons/ytv.svg"
									alt=""
								/>
							</a>
						</li>
						<li>
							<a href="/" className="treehouse">
								<img
									src="https://www.cartoonnetwork.ca/wp-content/themes/digi-theme/assets/icons/treehouse.svg"
									alt=""
								/>
							</a>
						</li>
					</ul>
				</section>
			</section>
		</footer>
	);
}
