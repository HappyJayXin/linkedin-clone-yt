import HeaderOption from "./HeaderOption";
import styles from "./styles.module.css";

import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logout, selectUser } from "../userSlice";

const Header = () => {
  const user = useAppSelector(selectUser);

  const dispatch = useAppDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__left}>
        <img
          src="https://eaes.eu/wp-content/uploads/2017/05/linkedin-logo.png"
          alt=""
        />

        <div className={styles.header__search}>
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className={styles.header__right}>
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network " />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging " />
        <HeaderOption Icon={NotificationsIcon} title="Notification" />
        {user && (
          <HeaderOption
            avatar={user?.profile}
            onClick={logoutOfApp}
            title="me"
          />
        )}
      </div>
    </div>
  );
};

export default Header;
