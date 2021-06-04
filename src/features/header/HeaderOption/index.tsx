import React from 'react';
import styles from './styles.module.css';

type Props = {
  Icon?: any,
  title: string
}

// TODO: 57:49 avatar
const HeaderOption = ({ Icon, title }: Props) => {
  return (
    <div className={styles.headerOption}>
      {Icon && <Icon className={styles.headerOption__icon} />}
      <h3 className={styles.headerOption__title }>{title}</h3>
    </div>
  )
}

export default HeaderOption
