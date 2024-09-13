import React from 'react';
import styles from './NavigationItem.module.css';

function NavigationItem({ name, icon, isActive }) {
  return (
    <div className={`${styles.navigationItem} ${isActive ? styles.active : ''}`}>
      <img src={icon} alt="" className={styles.icon} />
      <span className={styles.label}>{name}</span>
      <div className={styles.underline} />
    </div>
  );
}

export default NavigationItem;