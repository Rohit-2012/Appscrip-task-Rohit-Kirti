import ProductCard from '../productCard/ProductCard'
import styles from './productsList.module.css'

const ProductsList = ({products,isFilterMenuVisible}) => {
  return (
    <div className={`${isFilterMenuVisible ? styles.products_list : styles.products__listExpanded}`}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductsList