'use client'

import { useState } from 'react'
import styles from './dropDownMenu.module.css'
import Image from 'next/image'


const DropDownMenu = ({menu=[{ option: "Not selected", isSelected: true}]}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState(menu[0])

    const handleToggle = () => setIsOpen(!isOpen)

    const onOptionClicked = (item) => () => {
        item.isSelected = true
        console.log(item)
      };

  return (
      <div className={styles.dropDown__container}>
          <div className={styles.dropDown__header} onClick={handleToggle}>
              <span>{selectedOption.option.toUpperCase()}</span>
              <Image src="/assets/icons/arrow-down.png" alt='Arrow down' width={16} height={16}/>
          </div>

          {isOpen && (
              <div className={styles.dropDown__listContainer}>
                  <ul className={styles.dropDown__list}>
                      {menu.map((item) => (
                          <li key={item.option} onClick={onOptionClicked(item)}>
                              {item.option.toUpperCase()}
                          </li>
                      ))}
                  </ul>
              </div>
          )}
    </div>
  )
}

export default DropDownMenu