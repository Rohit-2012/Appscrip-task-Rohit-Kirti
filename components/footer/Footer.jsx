import Image from "next/image";
import styles from "./footer.module.css";
import FooterLinks from "./FooterLinks";
import { mettaMuse, quickLinks } from "@/utils/footerLinks";
import IconLinks from "./IconLinks";
import FooterForm from "./FooterForm";

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <section className={styles.footer__top}>
                <div className={styles.footer__info}>
                    <h2>BE THE FIRST TO KNOW</h2>
                    <p>Sign up for updates from mettā muse.</p>
                </div>

                <div className={styles.footer__info}>
                    <h2>CONTACT US</h2>
                    <p>+44 221 133 5360</p>
                    <p>customercare@mettamuse.com</p>
                </div>

                <FooterForm />
                

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
                    <p className={styles.transaction__info}>
                        Transactions will be completed in Euros and a currency reference is available on hover.
                    </p>
                </div>
            </section>
            <hr />

            <section className={styles.footer__bottom}>
                <FooterLinks linksList={mettaMuse}/>
                <FooterLinks linksList={quickLinks} />
                <IconLinks />
            </section>
            <section className={styles.footer__copyright}>
                <span>Copyright © 2023 mettamuse. All rights reserved.</span>
            </section>
        </footer>
    );
};

export default Footer;