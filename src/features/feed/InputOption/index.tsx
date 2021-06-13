import SvgIcon from '@material-ui/core/SvgIcon';
import styles from './styles.module.css';

type Props = {
  Icon?: typeof SvgIcon;
  title: string;
  color: string;
}

const InputOption = ({ Icon, title, color }: Props) => {
  return (
    <div className={styles.inputOption}>
      {Icon && <Icon style={{ color }} />}
      <h4>{title}</h4>
    </div>
  )
}

export default InputOption
