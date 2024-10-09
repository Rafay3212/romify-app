import React from 'react';
import styles from './SearchDevice.module.css';

const SearchDevice = () => {
  return (
    <section className={styles.searchSection}>
      <form className={styles.searchForm}>
        <label htmlFor="deviceSearch" className="visually-hidden">Search your Device</label>
        <input
          type="search"
          id="deviceSearch"
          className={styles.searchInput}
          placeholder="Search your Device"
          aria-label="Search your Device"
        />
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f52c3b105956664fc55bd51109c16b90fb2343137fe4e4a3e0256349b933e89c?placeholderIfAbsent=true&apiKey=cb1db43ffc26405789293b2cef5404b8" alt="" className={styles.searchIcon} />
      </form>
    </section>
  );
};

export default SearchDevice;