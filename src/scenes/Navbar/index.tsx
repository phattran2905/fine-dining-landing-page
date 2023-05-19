import { useState } from "react";
import images from "../../constants/images";
import styles from "../../styles";

import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
	{
		id: "home",
		title: "Home",
	},
	{
		id: "pages",
		title: "Pages",
	},
	{
		id: "contactus",
		title: "Contact Us",
	},
	{
		id: "blog",
		title: "Blog",
	},
	{
		id: "landing",
		title: "Landing",
	},
];

type Props = {};

function Navbar({}: Props) {
	const navLinkStyles =
		"font-open-sans text-white font-normal text-[16px] leading-[28px] cursor-pointer hover:text-golden hover:underline";

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
							className={`${navLinkStyles} ${index === navLinks.length - 1 ? "mr-0" : "mr-7"}`}
						>
							<a href={`#${navLink.id}`}>{navLink.title}</a>
						</li>
					))}
				</ul>

				<div className={`${styles.flexBetweenCenter}`}>
					<div className={`${styles.flexBetweenCenter}`}>
						<a className={`${navLinkStyles}`}>Log in</a>
						<span className="font-open-sans font-normal text-white mx-2">/</span>
						<a className={`${navLinkStyles}`}>Registration</a>
					</div>

					<div className="bg-grey h-[28px] w-[1px] mx-6">|</div>

					<a className={`${navLinkStyles}`}>Book Table</a>
				</div>
			</div>

			<div className="md:hidden block relative">
				<a
					href="#"
					className={`${navLinkStyles}`}
					onClick={() => setToggled(!toggled)}
				>
					{toggled ? (
						<FaTimes className="w-[40px] h-[40px]" />
					) : (
						<FaBars className="w-[40px] h-[40px]" />
					)}
				</a>

				{toggled && (
					<>
						<ul
							className={`flex flex-col justify-center list-none absolute bg-black top-16 -right-6 w-[280px] p-4 rounded-[8px]`}
						>
							{navLinks.map((navLink) => (
								<li
									key={navLink.id}
									className={`font-open-sans text-white font-normal text-[24px] px-10 py-4 leading-[28px] cursor-pointer hover:text-golden hover:underline mb-5`}
								>
									<a href={`#${navLink.id}`}>{navLink.title}</a>
								</li>
							))}

							<li
								className={`font-open-sans text-white font-normal text-[24px] px-10 py-4 leading-[28px] cursor-pointer hover:text-golden hover:underline mb-5`}
							>
								Log in
							</li>
							<li
								className={`font-open-sans text-white font-normal text-[24px] px-10 py-4 leading-[28px] cursor-pointer hover:text-golden hover:underline mb-5`}
							>
								Registration
							</li>
							<li
								className={`font-open-sans text-white font-normal text-[24px] px-10 py-4 leading-[28px] cursor-pointer hover:text-golden hover:underline`}
							>
								Book Table
							</li>
						</ul>
					</>
				)}
			</div>
		</nav>
	);
}
export default Navbar;
