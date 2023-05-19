import { AiOutlineCamera } from "react-icons/ai";

type Props = {
  imgSrc: string;
  title: string;
};

function GalleryItem({ imgSrc, title }: Props) {
  return (
    <div className="relative my-4 cursor-pointer hover:blur-[1px]">
      <div className=" h-[447px] md:my-0 md:w-[301px]">
        <img
          src={imgSrc}
          alt={title}
          className="h-[100%] w-[100%] object-cover "
        />
      </div>

      <div className="absolute inset-0 h-full w-full items-stretch justify-center hover:flex hidden">
        <div className="opacity-1 flex h-full items-center justify-center">
          <AiOutlineCamera size={30} className="text-white" />
        </div>
      </div>
    </div>
  );
}
export default GalleryItem;
