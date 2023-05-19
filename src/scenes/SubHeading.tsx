import images from "../constants/images";

type Props = {
	title: string;
};

function SubHeading({ title }: Props) {
	return (
		<div>
			<p className="font-cormorant-upright text-white font-bold text-[23px] leading-[29.9px] capitalize tracking-[0.04em]">
				{title}
			</p>
			<div className="w-[40px]">
				<img
					src={images.spoon}
					alt="spoon"
					className="w-[100%] h-[100%]"
				/>
			</div>
		</div>
	);
}
export default SubHeading;
