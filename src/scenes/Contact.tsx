import Button from "../component/Button";
import SubHeading from "../component/SubHeading";
import images from "../constants/images";
import styles from "../styles";

type Props = {};

function Contact({}: Props) {
  return (
    <section id="contact" className={`flex justify-center md:items-center md:py-20 p-10 flex-col md:flex-row bg-blur-black`}>
      <div className="mb-10 md:mb-0">
        <SubHeading title="Contact" />

        <h2 className={`${styles.heading2}`}>Find Us</h2>
        <p className={`${styles.paragraph} my-10`}>
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
        </p>

        <div className="mb-16">
          <h5 className="font-cormorant-upright text-[23px] font-bold leading-[29.9px] tracking-[0.04em] text-golden">
            Opening Hours
          </h5>
          <ul className="mt-4 list-none">
            <li className="my-2 font-open-sans text-[16px] font-normal leading-[28px] tracking-[0.04em] text-white">
              Mon - Fri: 10:00 am - 02:00 am
            </li>
            <li className="my-2 font-open-sans text-[16px] font-normal leading-[28px] tracking-[0.04em] text-white">
              Sat - Sun: 10:00 am - 03:00 am
            </li>
          </ul>
        </div>

        <Button>Visit Us</Button>
      </div>
      <div className="h-[688px] md:w-[619px] w-full">
        <img
          src={images.findus}
          alt="findUs"
          className="h-[100%] w-[100%] object-contain"
        />
      </div>
    </section>
  );
}
export default Contact;
