import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section id="contact" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Contact Us
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Have a question or need assistance? We're here to help! Whether you have inquiries about our products, need technical support, or want to explore partnership opportunities, feel free to get in touch with our friendly team. Reach out to us via email or phone, and we'll respond promptly to provide you with the support you need. Your satisfaction is our priority, and we look forward to hearing from you!
      </p>

      <Button styles={`mt-10`} text="contact us" link="mailto:bytewatch7@gmail.com"/>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
