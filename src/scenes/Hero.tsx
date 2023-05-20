import images from "../constants/images";
import styles from "../styles";
import Button from "../component/Button";
import SubHeading from "../component/SubHeading";

type Props = {};

function Hero({}: Props) {
	return (
		<section
			id="home"
			className="flex md:flex-row flex-col items-center px-10 xl:py-20 py-10"
		>
			<ul className="flex flex-row list-none h-[100%] md:-rotate-90">
				<li className="font-open-sans font-normal text-white leading-[31.5px] text-[18px] tracking-[0.04em] mr-4">
					#Bar
				</li>
				<li className="font-open-sans font-normal text-white leading-[31.5px] text-[18px] tracking-[0.04em]">
					#Gericht
				</li>
			</ul>

			<div className={`${styles.flexBetweenCenter} w-full flex-col md:flex-row`}>
				<div className="basis-3/6">
					<SubHeading title="Chase the new Flavour" />
					<h1 className="font-bold font-cormorant-upright text-[90px] leading-[117px] tracking-[0.04em] capitalize text-golden my-10 ">
						The Key To fine Dining
					</h1>
					<p className={`${styles.paragraph} mb-10`}>
						Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis
						quam scelerisque sapien. Et, penatibus aliquam amet tellus
					</p>

					<Button styles="">Explore Menu</Button>
				</div>

				<div className="basis-3/6 md:w-[619px] md:h-[688px] my-12 px-10">
					<img
						src={images.welcome}
						alt="welcome"
						className="w-[100%] h-[100%] object-contain"
					/>
				</div>
			</div>
		</section>
	);
}
export default Hero;
