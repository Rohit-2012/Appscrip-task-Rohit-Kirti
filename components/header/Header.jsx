import Image from "next/image";
import GreyStrip from "../greyStrip/GreyStrip";
import styles from "./header.module.css";
import { headerMenu, headerMenuResponsive } from "@/utils/headerMenu";
import DropDownMenu from "../dropDownMenu/DropDownMenu";
import { languages } from "@/utils/languages";
import Link from "next/link";


const Header = () => {
  return (
    <header>
      <GreyStrip />
      <section className={styles.header}>
        <div className={styles.header__top}>
          <div className={styles.logo_container}>
            <Image
              src="/assets/icons/ham-burger.png"
              alt="ham burger menu"
              width={16}
              height={13}
              className={styles.hamBurger_menu}
            />
            <Image
              src="/assets/images/Logo.png"
              alt="logo"
              width={36}
              height={36}
            />
          </div>
          <h1>LOGO</h1>
          <div className={styles.header__menu}>
            <div className={styles.wide__headerMenu}>
              {headerMenu.map(({ id, name, src }) => (
                <Image key={id} src={src} alt={name} width={24} height={24} />
              ))}
            </div>

            <div className={styles.responsive__headerMenu}>
              {headerMenuResponsive.map(({ id, name, src }) => (
                <Image key={id} src={src} alt={name} width={24} height={24} />
              ))}
            </div>

            <div className={styles.dd__hide}><DropDownMenu menu={languages}/></div>
          </div>
        </div>
        <nav className={styles.nav__bar}>
          <ul className={styles.nav__list}>
            <li><Link href="#">SHOP</Link></li>
            <li><Link href="#">SKILLS</Link></li>
            <li><Link href="#">STORIES</Link></li>
            <li><Link href="#">ABOUT</Link></li>
            <li><Link href="#">CONTACT US</Link></li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;
