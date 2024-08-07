"use client";
import { useEffect, useState } from "react";
import styles from "./productContainer.module.css";
import ProductsList from "./productsList/ProductsList";
import ProductsMenu from "./productsMenu/ProductsMenu";
import Sidebar from "./sidebar/Sidebar";
import { getProducts } from "@/lib/actions";

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [isFilterMenuVisible, setIsFilterMenuVisible] = useState(false);

  const toggleFilterMenu = () => {
    setIsFilterMenuVisible(!isFilterMenuVisible);
  };

  useEffect(() => {
    const abortController = new AbortController();

    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await getProducts();
        if (!abortController.signal.aborted) {
          setProducts(response);
        }
      } catch (error) {
        if (!abortController.signal.aborted) {
          setError(
            `Something went wrong while getting the products list: ${error.message}`
          );
        }
      } finally {
        if (!abortController.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    fetchProducts();

    return () => {
      abortController.abort();
    };
  }, []);

  const mainContent = (
    <div className={styles.products_list}>
      {isFilterMenuVisible && <Sidebar />}
      <ProductsList
        products={products}
        isFilterMenuVisible={isFilterMenuVisible}
      />
    </div>
  );

  const loading = <h2>Loading...</h2>;

  const errorComponent = <h2>{error}</h2>;

  return (
    <>
      <div className={styles.products_container}>
        <ProductsMenu
          totalItems={products.length}
          toggleFilter={toggleFilterMenu}
          isFilterMenuVisible={isFilterMenuVisible}
        />
        {isLoading && loading}

        {!isLoading && error && errorComponent}

        {!isLoading && !error && mainContent}
      </div>
    </>
  );
};

export default ProductContainer;
