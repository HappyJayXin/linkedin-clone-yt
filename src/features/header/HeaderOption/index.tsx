import { Avatar } from "@material-ui/core";
import styles from "./styles.module.css";
import SvgIcon from "@material-ui/core/SvgIcon";

import { useAppSelector } from "../../../app/hooks";
import { selectUser } from "../../userSlice";

type Props = {
  avatar?: string;
  Icon?: typeof SvgIcon;
  title: string;
  onClick?: () => void;
};

const HeaderOption = ({ avatar, Icon, title, onClick }: Props) => {
  const user = useAppSelector(selectUser);

  return (
    <div onClick={onClick} className={styles.headerOption}>
      {Icon && <Icon className={styles.headerOption__icon} />}
      {avatar && (
        <Avatar src={avatar} className={styles.headerOption__icon}>
          {user?.name[0]}
        </Avatar>
      )}
      <h3 className={styles.headerOption__title}>{title}</h3>
    </div>
  );
};

export default HeaderOption;
