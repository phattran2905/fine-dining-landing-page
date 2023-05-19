import images from "../constants/images";
import styles from "../styles";
import Button from "./Button";

type Props = {};
function About({}: Props) {
	return (
		<section
			id="#about"
			className="w-full bg-blur-black flex flex-row justify-center items-center bg-no-repeat bg-cover"
		>
			<div className={`${styles.flexCenter} flex-col md:flex-row relative w-full md:py-24 px-10`}>
				<img
					src={images.G}
					alt="knife"
					className="absolute w-[391px] hidden md:block"
				/>

				<div className="z-[2] flex flex-col items-start md:items-end mb-12 md:mb-0">
					<div className="flex flex-col md:items-end">
						<h2 className={`${styles.heading2} md:text-right`}>About Us</h2>
						<div className="w-[40px]">
							<img
								src={images.spoon}
								alt="spoon"
								className="w-[100%] h-[100%] rotate-0 md:rotate-180"
							/>
						</div>
					</div>

					<p className={`${styles.paragraph}  md:text-right my-6`}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing
						ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
					</p>

					<Button styles="">Know More</Button>
				</div>

				<div className="w-[84px] h-[703px] mx-20 z-[10] hidden md:block">
					<img
						src={images.knife}
						alt="knife"
						className="w-[100%] h-[100%] object-contain "
					/>
				</div>

				<div className="z-[2] flex flex-col items-start mb-12 md:mb-0">
					<div className="flex flex-col md:items-start">
						<h2 className={`${styles.heading2} text-left`}>Our History</h2>
						<div className="w-[40px]">
							<img
								src={images.spoon}
								alt="spoon"
								className="w-[100%] h-[100%]"
							/>
						</div>
					</div>
					<p className={`${styles.paragraph} md:text-left my-6`}>
						Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi
						volutpat habitasse interdum mi aliquam In sed odio nec aliquet.
					</p>
					<Button styles="">Know More</Button>
				</div>
			</div>
		</section>
	);
}
export default About;
