import data from "../constants/data";
import images from "../constants/images";
import styles from "../styles";
import Button from "../component/Button";
import MenuItem from "../component/MenuItem";
import SubHeading from "../component/SubHeading";

type Props = {};
function TodaySpecial({}: Props) {
	return (
		<section
			id="special"
			className="flex flex-col items-center md:py-24 py-20"
		>
			<div className="flex flex-col items-center">
				<SubHeading
					title="Menu that fits you palatte"
					containerStyles={`flex flex-col items-center`}
				/>
				<h2 className={`${styles.heading2} my-3`}>Today’s Special</h2>
			</div>

			{/* Menu */}
			<div className="w-full sm:px-20 flex flex-col md:flex-row justify-center items-center">
				{/* Wine and Beer */}
				<div className="w-full md:w-auto px-20 md:px-0 flex flex-1 flex-col items-center">
					<h3 className="font-cormorant-upright font-semibold text-white text-[45px] leading-[58.5px] tracking-[0.04em] mb-6">
						Wine & Beer
					</h3>
					<ul className="list-none w-full">
						{data.wines.map((wine) => (
							<li
								key={wine.title}
								className="my-6"
							>
								<MenuItem {...wine} />
							</li>
						))}
					</ul>
				</div>

				{/* Menu Img */}
				<div className="w-[444px] flex-1 px-10 hidden md:block">
					<img
						src={images.menu}
						alt="menu"
						className="w-[100%] h-[100%] object-contain"
					/>
				</div>

				{/* Cocktails */}
				<div className="w-full md:w-auto px-20 md:px-0 flex flex-1 flex-col items-center">
					<h3 className="font-cormorant-upright font-semibold text-white text-[45px] leading-[58.5px] tracking-[0.04em] mb-6">
						Cocktails
					</h3>
					<ul className="list-none w-full">
						{data.cocktails.map((cocktail) => (
							<li
								key={cocktail.title}
								className="my-6 "
							>
								<MenuItem {...cocktail} />
							</li>
						))}
					</ul>
				</div>
			</div>

			<Button styles="mt-8">View More</Button>
		</section>
	);
}
export default TodaySpecial;
