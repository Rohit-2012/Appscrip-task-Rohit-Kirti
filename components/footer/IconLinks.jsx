import Image from "next/image";
import styles from "./iconLinks.module.css";
import { paymentLinks } from "@/utils/footerLinks";

const IconLinks = () => {
  return (
    <section className={styles.iconLinks__container}>
      <div className={styles.contents}>
        <h2>FOLLOW US</h2>
        <div>
          <Image
            src="/assets/icons/Insta.png"
            alt="instagram link"
            width={32}
            height={32}
          />
          <Image
            src="/assets/icons/linkedIn.png"
            alt="LinkedIn link"
            width={32}
            height={32}
          />
        </div>
        </div>

        <div className={styles.contents}>
          <h2>mettā muse Accepts</h2>
                  <div>
                      {paymentLinks.map((item, index) => (
                          <Image
                              key={item.name}
                          src={item.src}
                          alt={item.name}
                          width={56}
                          height={35}
                        />
                      ))}
          </div>
        </div>
    </section>
  );
};

export default IconLinks;
