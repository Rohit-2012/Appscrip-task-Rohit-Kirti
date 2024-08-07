import styles from './hero.module.css'

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.breadCrumbs}>
        <span className={styles.light}>HOME</span>
        <span className={styles.light}>|</span>
        <span>SHOP</span>
      </div>
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
    </section>
  )
}

export default Hero