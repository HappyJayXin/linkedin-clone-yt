import { Avatar } from '@material-ui/core';
import styles from './styles.module.css';
import SvgIcon from '@material-ui/core/SvgIcon';

type Props = {
  avatar?: string,
  Icon?: typeof SvgIcon,
  title: string
}

const HeaderOption = ({ avatar, Icon, title }: Props) => {
  return (
    <div className={styles.headerOption}>
      {Icon && <Icon className={styles.headerOption__icon} />}
      {avatar && <Avatar className={styles.headerOption__icon} />}
      <h3 className={styles.headerOption__title }>{title}</h3>
    </div>
  )
}

export default HeaderOption
