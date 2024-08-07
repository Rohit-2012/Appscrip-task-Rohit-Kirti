"use client";
import Image from "next/image";
import styles from "./productCard.module.css";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => setIsLiked(!isLiked);

  const { image, title } = product;
  return (
    <div className={styles.product__card}>
      <Image
        src={image}
        alt="Producthh"
        width={250}
        height={350}
        className={styles.product__image}
      />
      <div className={styles.product__info}>
        <h3>{title.slice(0, 20)}...</h3>
        <p>
          <span>Sign in</span> or Create an account to see pricing
        </p>
      </div>
      {isLiked ? (
        <Image
          src="/assets/icons/filled-heart.png"
          alt="like product"
          width={22}
          height={20}
          className={styles.product__likeBTN}
          onClick={handleLike}
        />
      ) : (
        <Image
          src="/assets/icons/heart.png"
          alt="like product"
          width={24}
          height={24}
            className={styles.product__likeBTN}
            onClick={handleLike}
        />
      )}
    </div>
  );
};

export default ProductCard;
