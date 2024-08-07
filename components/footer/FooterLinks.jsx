import styles from './footerLinks.module.css';

const FooterLinks = ({linksList}) => {
    return (
        <div className={styles.footer__links}>
            <h2>{linksList.heading}</h2>
            <ul className={styles.footer__linksList}>
                {linksList.links.map(link => (
                    <li key={link}>{link }</li>
                ))}
            </ul>
        </div>
    );
};

export default FooterLinks;