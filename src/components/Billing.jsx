import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Billing = () => (
  <section id="docs" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Run Our RAM Dump Tool <br className="sm:block hidden" />Locally with Ease
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      In our comprehensive documentation, you'll find step-by-step instructions to effortlessly set up and run the tool on your own system. Don't miss out on the powerful capabilities of our RAM dump tool - start exploring now and elevate your memory analysis game!
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Button styles={`mt-10`} text="Read Docs" link="https://sankalpsalve.me"/>
      </div>
    </div>
  </section>
);

export default Billing;
