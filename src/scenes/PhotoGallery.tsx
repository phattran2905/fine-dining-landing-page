import images from "../constants/images";
import styles from "../styles";
import Button from "../component/Button";
import SubHeading from "../component/SubHeading";

type Props = {};
function PhotoGallery({}: Props) {
  return (
    <section
      id="gallery"
      className="flex md:flex-row flex-col items-center justify-between md:ml-20 md:py-10 p-10 md:p-0"
    >
      <div className="flex md:basis-2/5 flex-col items-start justify-center mb-10 md:mb-0">
        <SubHeading title="Instagram" />

        <h2 className={`${styles.heading2}`}>Photo Gallery</h2>

        <p className={`${styles.paragraph} mb-8 mt-12`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>

        <Button>View More</Button>
      </div>

      <div className="flex md:basis-3/5 w-full md:flex-row flex-col gap-x-4 md:overflow-x-hidden">
        <div className="h-[447px] md:w-[301px] my-4 md:my-0">
          <img
            src={images.gallery01}
            alt="gallery01"
            className="h-[100%] w-[100%] object-cover"
          />
        </div>
        <div className="h-[447px] md:w-[301px] my-4 md:my-0">
          <img
            src={images.gallery02}
            alt="gallery02"
            className="h-[100%] w-[100%] object-cover"
          />
        </div>
        <div className="h-[447px] md:w-[301px] my-4 md:my-0">
          <img
            src={images.gallery03}
            alt="gallery03"
            className="h-[100%] w-[100%] object-cover"
          />
        </div>
        <div className="h-[447px] md:w-[301px] my-4 md:my-0">
          <img
            src={images.gallery04}
            alt="gallery04"
            className="h-[100%] w-[100%] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
export default PhotoGallery;
