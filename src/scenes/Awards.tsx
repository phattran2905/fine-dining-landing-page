import Award from "../component/Award";
import images from "../constants/images";
import data from "../constants/data";
import styles from "../styles";
import SubHeading from "../component/SubHeading";

type Props = {};
function Awards({}: Props) {
  return (
    <section
      id="awards"
      className="bg-blur-black flex flex-row items-stretch md:py-16 md:px-12 p-10"
    >
      <div className={`flex md:flex-row flex-col md:items-start items-center justify-between`}>
        <div className="basis-1/12 mr-12">
          <div className="h-[146px] w-[146px]">
            <img
              src={images.logoAward}
              alt="logoAward"
              className="h-[100%] w-[100%] object-contain"
            />
          </div>
        </div>
        <div className="my-auto flex flex-col justify-center">
          <SubHeading title="Awards & recognition" />

          <h2 className={`${styles.heading2}`}>Our Laurels</h2>
          <div className="flex flex-row flex-wrap">
            {data.awards.map((award) => (
              <Award key={award.title} {...award} />
            ))}
          </div>
        </div>

        <div className="my-10">
          <div className="h-[691px] md:w-[483px]">
            <img
              src={images.laurels}
              alt="laurels"
              className="h-[100%] w-[100%] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Awards;
