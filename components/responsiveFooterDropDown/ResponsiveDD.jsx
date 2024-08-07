"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from './responsiveDD.module.css'

const ResponsiveDD = ({dropDownItem}) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    
  
    const handleExpand = () => setIsExpanded(!isExpanded);
  
  
    return (
      <div className={styles.dropDown}>
        <form>
          <div className={styles.heading}>
                    <h3>{dropDownItem.heading}</h3>
            {!isExpanded ? (
              <Image
                src="/assets/icons/arrow-down.png"
                alt="arrow down"
                width={16}
                height={16}
                onClick={handleExpand}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <Image
                src="/assets/icons/arrow-up.png"
                alt="arrow down"
                width={16}
                height={16}
                onClick={handleExpand}
                style={{ cursor: "pointer" }}
              />
            )}
          </div>
          <div className={isExpanded ? styles.expanded : styles.collapsed}>
            
            <div className={styles.links}>
                {dropDownItem.links && dropDownItem?.links.map((link, index) => (
                    <li key={index}>{link }</li>
                ))}
            </div>
                    
            <div className={styles.icons}>
                {dropDownItem.icons && dropDownItem?.icons.map((icon) => (
                    <Image
                        key={icon.src}
                    src={icon.src}
                    alt={icon.alt}
                    width={32}
                    height={32}
                  />
                ))}
            </div>
          </div>
        </form>
        </div>
    )
}

export default ResponsiveDD