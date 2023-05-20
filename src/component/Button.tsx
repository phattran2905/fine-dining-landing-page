type Props = {
	children: React.ReactNode;
	styles?: string;
};

function Button({ children, styles }: Props) {
	return (
		<button
			type="button"
			className={`${styles} bg-golden text-black font-cormorant-upright font-bold text-[16px] leading-[28px] tracking-[0.04em] py-2 px-8 hover:bg-crimson cursor-pointer`}
		>
			{children}
		</button>
	);
}
export default Button;
