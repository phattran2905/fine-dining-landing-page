import images from "../constants/images";
import styles from "../styles";
import Button from "../component/Button";
import SubHeading from "../component/SubHeading";
import GalleryItem from "../component/GalleryItem";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { useRef } from "react";

type Props = {};
function PhotoGallery({}: Props) {
  const scrollRef = useRef(null);

  const scroll = (direction: string) => {
    const { current } = scrollRef;

    if (direction === "left") {
      (current as any).scrollLeft -= 300;
    } else {
      (current as any).scrollLeft += 300;
    }
  };

  return (
    <section
      id="gallery"
      className="flex flex-col items-center justify-between p-10 md:ml-20 md:flex-row md:p-0 md:py-10"
    >
      <div className="mb-10 mr-10 flex basis-1/2 flex-col items-start justify-center md:mb-0 md:basis-2/5">
        <SubHeading title="Instagram" />

        <h2 className={`${styles.heading2}`}>Photo Gallery</h2>

        <p className={`${styles.paragraph} mb-8 mt-12`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>

        <Button>View More</Button>
      </div>

      <div className="relative flex w-full basis-1/2 scroll-m-0 items-center justify-center gap-x-4 p-10 md:basis-3/5 md:overflow-x-hidden md:p-0">
        <div className="group/container flex overflow-x-scroll" ref={scrollRef}>
          <GalleryItem imgSrc={images.gallery01} title={"gallery01"} />
          <GalleryItem imgSrc={images.gallery02} title={"gallery02"} />
          <GalleryItem imgSrc={images.gallery03} title={"gallery03"} />
          <GalleryItem imgSrc={images.gallery04} title={"gallery04"} />
        </div>

        <div className="absolute flex w-full items-center justify-between">
          <BsArrowLeftShort
            className="cursor-pointer bg-gray text-white hover:bg-crimson hover:text-black"
            size={50}
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="cursor-pointer  bg-gray text-white hover:bg-crimson hover:text-black"
            size={50}
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </section>
  );
}
export default PhotoGallery;
