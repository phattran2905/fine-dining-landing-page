import { useRef, useState } from "react";
import images from "../constants/images";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

type Props = {};
function IntroVideo({}: Props) {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef<HTMLVideoElement>(null);

  return (
    <section id="special" className="relative">
      <video
        src={images.meal}
        typeof="video/mp4"
        ref={vidRef}
        loop
        controls={false}
        muted
        className="h-[100%] w-[100%] object-cover"
      />

      <div className="absolute inset-0 flex w-full items-center justify-center">
        <div
          className="flex h-[100px] w-[100px] cursor-pointer items-center justify-center rounded-full border-4 border-white"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current?.pause();
            } else {
              vidRef.current?.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </section>
  );
}
export default IntroVideo;
