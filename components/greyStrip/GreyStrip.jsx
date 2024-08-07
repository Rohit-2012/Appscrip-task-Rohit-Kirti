import Image from 'next/image'
import styles from './greyStrip.module.css'
import { joinClasses } from '@/utils/joinClasses'

const GreyStrip = () => {
    return (
        <div className={styles.greyStrip}>
            <div className={styles.content}>
                <Image src="/assets/images/element-4.png" alt='grey strip image' width={16} height={16} />
                <span className={styles.text}>Lorem ipsum dolor</span>
            </div>
            <div className={joinClasses(styles,"content", "hidden")}>
                <Image src="/assets/images/element-4.png" alt='grey strip image' width={16} height={16} />
                <span className={styles.text}>Lorem ipsum dolor</span>
            </div>
            <div className={joinClasses(styles,"content", "hidden")}>
                <Image src="/assets/images/element-4.png" alt='grey strip image' width={16} height={16} />
                <span className={styles.text}>Lorem ipsum dolor</span>
            </div>
    </div>
  )
}

export default GreyStrip