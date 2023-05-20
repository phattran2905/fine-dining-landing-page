import images from "../constants/images";
import styles from "../styles";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

type Props = {};
function Footer({}: Props) {
  return (
    <section
      id="footer"
      className="flex flex-col items-center justify-center bg-blur-black bg-no-repeat p-2 md:p-10"
    >
      <div className="flex w-full flex-col items-center gap-y-10 p-10 md:px-0 md:pb-0">
        <div className="flex flex-col gap-12 md:flex-row">
          {/* Contact */}
          <div className="flex flex-col items-center">
            <h6 className="my-8 font-cormorant-upright text-[32px] font-normal leading-[41.6px] tracking-[0.04em] text-crimson">
              Contact Us
            </h6>
            <ul className="flex list-none flex-col items-center justify-start">
              <li className="my-4 text-center font-open-sans text-[16px] font-normal leading-[28px] tracking-[0.04em] text-grey">
                9 W 53rd St, New York, NY 10019, USA
              </li>
              <li className="text-center font-open-sans text-[16px] font-normal leading-[28px] tracking-[0.04em] text-grey ">
                +1 212-344-1230
              </li>
              <li className="text-center font-open-sans text-[16px] font-normal leading-[28px] tracking-[0.04em] text-grey ">
                +1 212-555-1230
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="mx-16 flex flex-col items-center justify-center">
            <h2 className={`${styles.heading2} mb-10 uppercase`}>Gerícht</h2>
            <p className={`${styles.paragraph} text-center`}>
              "The best way to find yourself is to lose yourself in the service
              of others.”
            </p>
            <img
              src={images.spoon}
              alt="spoon"
              className="h-[40px] w-[40px] object-contain"
            />

            <ul className="my-2 flex list-none flex-row items-center justify-between gap-x-3">
              <li>
                <a href="" className="">
                  <FiFacebook className="text-crimson" size={20} />
                </a>
              </li>
              <li>
                <a href="" className="">
                  <FiTwitter className="text-crimson" size={20} />
                </a>
              </li>
              <li>
                <a href="" className="">
                  <FiInstagram className="text-crimson" size={20} />
                </a>
              </li>
            </ul>
            <p className="mx-auto mt-20 hidden font-open-sans text-[16px] font-normal leading-[28px] tracking-[0.04em] text-grey md:block">
              2023 Gerícht. All Rights reserved.
            </p>
          </div>

          {/* Working hours */}
          <div className="flex flex-col items-center">
            <h6 className="my-10 text-center font-cormorant-upright text-[32px] font-normal leading-[41.6px] tracking-[0.04em] text-crimson">
              Working Hours
            </h6>
            <ul className="flex list-none flex-col items-center justify-start">
              <li className="mb-4 text-center font-open-sans text-[16px] font-normal leading-[28px] tracking-[0.04em] text-grey">
                Monday-Friday: <br />
                08:00 am -12:00 am
              </li>
              <li className="text-center font-open-sans text-[16px] font-normal leading-[28px] tracking-[0.04em] text-grey">
                Saturday-Sunday: <br />
                07:00am -11:00 pm
              </li>
            </ul>
          </div>
        </div>
        <p className="mx-auto my-10 block font-open-sans text-[16px] font-normal leading-[28px] tracking-[0.04em] text-grey md:hidden">
          2023 Gerícht. All Rights reserved.
        </p>
      </div>
    </section>
  );
}
export default Footer;
