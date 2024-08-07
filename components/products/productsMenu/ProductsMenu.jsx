import DropDownMenu from "@/components/dropDownMenu/DropDownMenu";
import styles from "./productsMenu.module.css";
import Image from "next/image";
import { sortingOptions } from "@/utils/sortingOptions";

const ProductsMenu = ({
  totalItems = 0,
  toggleFilter,
  isFilterMenuVisible,
}) => {
  return (
    <div className={styles.product__menu}>
      <div className={styles.toggle__filter}>
        <h2>{totalItems} ITEMS</h2>
        <button>
          {isFilterMenuVisible ? (
            <Image
              src="/assets/icons/arrow-left.png"
              alt="arrow right"
              width={16}
              height={16}
            />
          ) : (
            <Image
              src="/assets/icons/arrow-right.png"
              alt="arrow right"
              width={16}
              height={16}
            />
          )}
          <span onClick={toggleFilter}>
            {isFilterMenuVisible ? "HIDE FILTER" : "SHOW FILTER"}
          </span>
        </button>
      </div>

      <h4>FILTER</h4>
      <DropDownMenu menu={sortingOptions} />
    </div>
  );
};

export default ProductsMenu;
