import React, { useRef } from "react";
import "../styles/Nav.scss";

export default function Nav() {
	const hoverToggler = (event) => {
		event.target.classList.toggle("hover");
	};

	const navRef = useRef();

	const navToggler = (event) => {
		navRef.current.classList.toggle("hide");
	};

	return (
		<div className="nav_container">
			<div className="navButton">
				<button onClick={navToggler}>
					<i class="fa fa-bars fa-2x"></i>
					<p>Menu</p>
				</button>
			</div>

			<div className="nav_menu_side " ref={navRef}>
				<header>
					<button class="nav_menu_side_close" onClick={navToggler}>
						<i class="fa fa-times fa-2x"></i>
					</button>
				</header>

				<ul className="nav_menu_side-items">
					<li id="active">
						<a href="/">HOME</a>
					</li>
					<li onMouseEnter={hoverToggler} onMouseLeave={hoverToggler}>
						<a href="/">SCHEDULE</a>
					</li>
					<li onMouseEnter={hoverToggler} onMouseLeave={hoverToggler}>
						<a href="/">WHERE TO WATCH</a>
					</li>
					<li onMouseEnter={hoverToggler} onMouseLeave={hoverToggler}>
						<a href="/">CONTESTS</a>
					</li>
				</ul>
			</div>

			<ul className="nav_menu_head">
				<li id="active">
					<a href="/">HOME</a>
				</li>
				<li onMouseEnter={hoverToggler} onMouseLeave={hoverToggler}>
					<a href="/">SCHEDULE</a>
				</li>
				<li onMouseEnter={hoverToggler} onMouseLeave={hoverToggler}>
					<a href="/">WHERE TO WATCH</a>
				</li>
				<li onMouseEnter={hoverToggler} onMouseLeave={hoverToggler}>
					<a href="/">CONTESTS</a>
				</li>
			</ul>
		</div>
	);
}
