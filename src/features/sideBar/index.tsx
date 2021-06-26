import { Avatar } from "@material-ui/core";
import styles from "./styles.module.css";

import { useAppSelector } from "../../app/hooks";
import { selectUser } from "../userSlice";

const SideBar = () => {
  const user = useAppSelector(selectUser);

  const recentItem = (topic: string) => (
    <div className={styles.sidebar__recentItem}>
      <span className={styles.sidebar__hash}>#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__top}>
        <img
          src="https://images.unsplash.com/photo-1622819584099-e04ccb14e8a7"
          alt=""
        />
        <Avatar src={user?.profile} className={styles.sidebar__avatar}>
          {user?.name[0]}
        </Avatar>
        <h2>{user?.name}</h2>
        <h4>{user?.email}</h4>
      </div>

      <div className={styles.sidebar__stats}>
        <div className={styles.sidebar__stat}>
          <p>Who view you?</p>
          <p className={styles.sidebar__statNumber}>10</p>
        </div>
        <div className={styles.sidebar__stat}>
          <p>Views on post</p>
          <p className={styles.sidebar__statNumber}>500</p>
        </div>
      </div>

      <div className={styles.sidebar__bottom}>
        <p>Recent</p>
        {recentItem('ReactJS')}
        {recentItem('Javascript')}
        {recentItem('CSS-in-JS')}
      </div>
    </div>
  );
};

export default SideBar;
