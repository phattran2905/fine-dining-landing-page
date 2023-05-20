import { useState } from "react";
import Button from "../component/Button";
import SubHeading from "../component/SubHeading";
import styles from "../styles";

type Props = {};
function Subscribe({}: Props) {
  const [email, setEmail] = useState<string>("");

  return (
    <section id="subscribe" className="flex flex-col p-20">
      <div className="flex flex-col items-center justify-center">
        <SubHeading
          title="Newsletter"
          containerStyles="items-center justify-center flex flex-col "
        />

        <h2 className={`${styles.heading2}`}>Subscribe to Our Newsletter</h2>
        <p className={`${styles.paragraph} my-6`}>
          And never miss latest Updates!
        </p>
      </div>

      <div className="flex md:flex-row flex-col items-center justify-center px-10">
        <input
          type="email"
          value={email}
          placeholder="Email Address"
          className="font-cormorant-upright font-semibold text-white placeholder:text-grey bg-transparent border-2 border-grey text-[16px] leading-[28px] tracking-[0.04em] p-4 w-full mr-10 md:mr-10 mb-6 md:mb-0"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.currentTarget.value)
          }
        />

        <Button>Subscribe</Button>
      </div>
    </section>
  );
}
export default Subscribe;
