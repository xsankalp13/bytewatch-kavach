import styles from "../style";
import { os } from ".";

const CTA = () => (
  <section id="download" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let’s try our tool now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to dump your machine's RAM!
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <a href={
          os[0] == 'L' ? '../assets/instagram.svg' : '../assets/twitter.svg'
          } download className="py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none">Download Now</a>
    </div>
    
  </section>
);




export default CTA;