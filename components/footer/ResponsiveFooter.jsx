import Image from "next/image";
import FooterForm from "./FooterForm";
import styles from "./responsiveFooter.module.css";
import { footerDropDownList, paymentLinks } from "@/utils/footerLinks";
import ResponsiveDD from "../responsiveFooterDropDown/ResponsiveDD";

const ResponsiveFooter = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footer__info}>
          <h2>BE THE FIRST TO KNOW</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. this is simply dummy text.
          </p>
        <FooterForm />
        </div>

      <div className={styles.footer__info}>
        <h2>CALL US</h2>
        <div className={styles.call__details}>
          <p>+44 221 133 5360</p>
          <Image
            src="/assets/images/star.png"
            alt="star"
            width={6}
            height={6}
          />
          <p>customercare@mettamuse.com</p>
        </div>
      </div>

      <div className={styles.footer__info}>
        <h2>CURRENCY</h2>
        <div className={styles.footer__currency}>
          <Image
            src="/assets/images/american-flag.png"
            alt="American Flag"
            width={24}
            height={24}
          />
          <Image
            src="/assets/images/star.png"
            alt="star"
            width={6}
            height={6}
          />
          <span>USD</span>
        </div>
      </div>
      {footerDropDownList.map((listItem, index) => (
        <ResponsiveDD key={index} dropDownItem={listItem}/>
      ))}

      <div className={styles.contents}>
          <h2>mettā muse Accepts</h2>
                  <div>
                      {paymentLinks.map((item) => (
                          <Image
                              key={item.name}
                          src={item.src}
                          alt={item.name}
                          width={51}
                          height={30}
                        />
                      ))}
          </div>
      </div>
      
      <section className={styles.footer__copyright}>
                <span>Copyright © 2023 mettamuse. All rights reserved.</span>
            </section>
    </footer>
  );
};

export default ResponsiveFooter;
