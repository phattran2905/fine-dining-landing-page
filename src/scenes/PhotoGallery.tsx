import images from "../constants/images";
import styles from "../styles";
import Button from "../component/Button";
import SubHeading from "../component/SubHeading";
import GalleryItem from "../component/GalleryItem";

type Props = {};
function PhotoGallery({}: Props) {
  return (
    <section
      id="gallery"
      className="flex flex-col items-center justify-between p-10 md:ml-20 md:flex-row md:p-0 md:py-10"
    >
      <div className="mb-10 flex flex-col items-start justify-center md:mb-0 md:basis-2/5">
        <SubHeading title="Instagram" />

        <h2 className={`${styles.heading2}`}>Photo Gallery</h2>

        <p className={`${styles.paragraph} mb-8 mt-12`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>

        <Button>View More</Button>
      </div>

      <div className="flex w-full flex-col gap-x-4 md:basis-3/5 md:flex-row md:overflow-x-scroll">
        <GalleryItem imgSrc={images.gallery01} title={"gallery01"} />
        <GalleryItem imgSrc={images.gallery02} title={"gallery02"} />
        <GalleryItem imgSrc={images.gallery03} title={"gallery03"} />
        <GalleryItem imgSrc={images.gallery04} title={"gallery04"} />
      </div>
    </section>
  );
}
export default PhotoGallery;
