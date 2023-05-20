import { useState } from "react";
import images from "../constants/images";
import styles from "../styles";

import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
	{
		id: "home",
		title: "Home",
	},
	{
		id: "aboutus",
		title: "About Us",
	},
	{
		id: "menu",
		title: "Menu",
	},
	{
		id: "chef",
		title: "Chef",
	},
	{
		id: "gallery",
		title: "Gallery",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

type Props = {};

function Navbar({}: Props) {
	const [toggled, setToggled] = useState(false);

	return (
		<nav className={`${styles.flexBetweenCenter} md:px-14 py-5 px-10`}>
			<a
				href=""
				className="w-[199px] h-[57px]"
			>
				<img
					src={images.gericht}
					alt="logo"
					className="w-[100%] h-[100%] object-contain"
				/>
			</a>

			<div className={`w-full flex-row items-center justify-around hidden md:flex`}>
				<ul className={`${styles.flexBetweenCenter} list-none`}>
					{navLinks.map((navLink, index) => (
						<li
							key={navLink.id}
							className={`${styles.navLink} ${index === navLinks.length - 1 ? "mr-0" : "mr-7"}`}
						>
							<a href={`#${navLink.id}`}>{navLink.title}</a>
						</li>
					))}
				</ul>

				<div className={`${styles.flexBetweenCenter}`}>
					<div className={`${styles.flexBetweenCenter}`}>
						<a className={`${styles.navLink}`}>Log in</a>
						<span className="font-open-sans font-normal text-white mx-2">/</span>
						<a className={`${styles.navLink}`}>Registration</a>
					</div>

					<div className="bg-grey h-[28px] w-[1px] mx-6">|</div>

					<a className={`${styles.navLink}`}>Book Table</a>
				</div>
			</div>

			<div className="md:hidden block relative">
				<a
					href="#"
					className={`${styles.navLink}`}
					onClick={() => setToggled(!toggled)}
				>
					{toggled ? (
						<FaTimes className="w-[40px] h-[40px]" />
					) : (
						<FaBars className="w-[40px] h-[40px]" />
					)}
				</a>

				{toggled && (
					<ul
						className={`flex flex-col justify-center list-none absolute bg-black top-16 -right-6 w-[280px] p-4 rounded-[8px]`}
					>
						{navLinks.map((navLink) => (
							<li
								key={navLink.id}
								className={`${styles.navLinkMenu} mb-5`}
							>
								<a href={`#${navLink.id}`}>{navLink.title}</a>
							</li>
						))}

						<li className={`${styles.navLinkMenu} mb-5`}>Log in</li>
						<li className={`${styles.navLinkMenu} mb-5`}>Registration</li>
						<li className={`${styles.navLinkMenu}`}>Book Table</li>
					</ul>
				)}
			</div>
		</nav>
	);
}
export default Navbar;
