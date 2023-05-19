import images from "../constants/images";
import styles from "../styles";
import SubHeading from "../component/SubHeading";

type Props = {};
function Chef({}: Props) {
	return (
		<section
			id="chef"
			className={`${styles.flexCenter} md:flex-row flex-col md:py-24 py-20`}
		>
			<div className="w-[665px] mb-10 md:mb-0">
				<img
					src={images.chef}
					alt="chef"
					className="w-[100%] h-[100%] object-contain"
				/>
			</div>

			<div className="mx-16">
				<SubHeading
					title="Chef’s Word"
					containerStyles="my-6"
				/>

				<h2 className={`${styles.heading2}`}>What We Believe in</h2>

				<div className="relative my-16">
					<div className="w-[47px] h-[40px] absolute -top-4">
						<img
							src={images.quote}
							alt="quote"
							className="w-[100%] h-[100%] object-contain"
						/>
					</div>
					<p className={`${styles.paragraph}  indent-16`}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .auctor sit iaculis
						in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue
						ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit
						nunc.
					</p>
				</div>

				<div className="my-6">
					<h5 className="font-cormorant-upright font-normal text-[32px] leading-[41.6px] tracking-[0.04em] text-golden mb-2">
						Kevin Luo
					</h5>
					<p className={`${styles.paragraph}`}>Chef & Founder</p>
				</div>

				<div className="w-[235px] h-[83px] my-8">
					<img
						src={images.sign}
						alt="signature"
            className="w-[100%] h-[100%] object-contain"
					/>
				</div>
			</div>
		</section>
	);
}
export default Chef;
