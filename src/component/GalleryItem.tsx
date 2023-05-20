import { AiOutlineCamera } from "react-icons/ai";

type Props = {
  imgSrc: string;
  title: string;
};

function GalleryItem({ imgSrc, title }: Props) {
  return (
    <div className="group/card relative flex h-[447px] min-w-[301px] cursor-pointer items-center justify-center mx-1 ">
      <img
        src={imgSrc}
        alt={title}
        className="h-[100%] w-[100%] object-cover opacity-100 group-hover/card:opacity-30"
      />
      <AiOutlineCamera
        size={30}
        className="absolute cursor-pointer text-white opacity-0 group-hover/card:opacity-100"
      />
    </div>
  );
}
export default GalleryItem;
