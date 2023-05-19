import styles from "../styles";

type Props = {
	title: string;
	price: string;
	tags: string;
};
function MenuItem({ title, price, tags }: Props) {
	return (
		<div>
			<div className={`${styles.flexBetweenCenter}`}>
				<p className={`${styles.dish_name}`}>{title}</p>
				<div className={`${styles.flexBetweenCenter}`}>
					<div className="bg-white h-[1px] w-[119px]"></div>
					<span className="font-cormorant-upright font-bold text-white text-[23px] leading-[29.9px] tracking-[0.04em] ml-6 block">
						{price}
					</span>
				</div>
			</div>
			<p className="font-open-sans font-normal text-[16px] leading-[28px] tracking-[0.04em] text-white my-1">
				{tags}
			</p>
		</div>
	);
}
export default MenuItem;
