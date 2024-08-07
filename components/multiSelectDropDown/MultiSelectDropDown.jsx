"use client";
import { useEffect, useState } from "react";
import styles from "./multiSelectDropDown.module.css";
import Image from "next/image";


const MultiSelectDropDown = ({ filterOption }) => {
    const {optionTitle, options:optionsList} = filterOption
  const [options, setOptions] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setOptions(optionsList);
  }, [optionsList]);

  const handleExpand = () => setIsExpanded(!isExpanded);

  const handleSelect = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let updatedOptions = options.map((option) => {
        return { ...option, isChecked: checked };
      });
      setOptions(updatedOptions);
    } else {
      let updatedOptions = options.map((option) =>
        option.name === name ? { ...option, isChecked: checked } : option
      );
      setOptions(updatedOptions);
    }
  };

  const handleUnselectAll = (e) => {
    e.preventDefault();
    const newOptions = options.map((option) => {
      return { ...option, isChecked: false };
    });
    setOptions(newOptions);
  };

  return (
    <div className={styles.multiselect}>
      <form>
        <div className={styles.heading}>
                  <h3>{optionTitle}</h3>
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
        <div>
          <input
            type="checkbox"
            name="allSelect"
            id="allSelect"
            style={{ display: "none" }}
            checked={!options.some((option) => option?.isChecked !== true)}
            onChange={handleSelect}
          />
          <label htmlFor="allSelect">All</label>
        </div>
        <div className={isExpanded ? styles.expanded : styles.collapsed}>
          <button onClick={handleUnselectAll} className={styles.unselect__btn}>
            Unselect All
          </button>
          {options.map((option, index) => (
            <div key={index} className={styles.multiSelect__option}>
              <input
                type="checkbox"
                name={option.name}
                id={option.name}
                checked={option?.isChecked || false}
                onChange={handleSelect}
              />
              <label htmlFor={option.name}>{option.label}</label>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default MultiSelectDropDown;
