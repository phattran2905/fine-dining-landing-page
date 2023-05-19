import styles from "../styles";

type Props = {
  imgUrl: string;
  title: string;
  subtitle: string;
};

function Award({ imgUrl, title, subtitle }: Props) {
  return (
    <div className={`${styles.flexBetweenCenter}  my-6`}>
      <div className="h-[79px] w-[79px]">
        <img
          src={imgUrl}
          alt={title}
          className="h-[100%] w-[100%] object-contain"
        />
      </div>

      <div className="ml-6 md:max-w-[190px]">
        <h5
          className={`font-cormorant-upright text-[23px] font-bold leading-[29.9px] tracking-[0.04em] text-golden`}
        >
          {title}
        </h5>
        <p className={`${styles.paragraph}`}>{subtitle}</p>
      </div>
    </div>
  );
}
export default Award;
