import MultiSelectDropDown from '@/components/multiSelectDropDown/MultiSelectDropDown'
import styles from './sidebar.module.css'
import { filterOptions } from '@/utils/filteroptions'

const Sidebar = () => {
  return (
    <div className={styles.sidebar__container}>
      <div className={styles.customizable__option}>
        <input type="checkbox" name="customizable" id="customizable" />
        <label htmlFor="customizable">CUSTOMIZABLE</label>
      </div>
      {filterOptions.map((filterOption, index) => (
        <MultiSelectDropDown key={index} filterOption={filterOption}/>
      ))}
    </div>
  )
}

export default Sidebar
