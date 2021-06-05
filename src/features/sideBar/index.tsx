import { Avatar } from "@material-ui/core";
import styles from "./styles.module.css";

const SideBar = () => {
  // TODO: 1:28:40 recentItem function
  const recentItem = (topic) => {};

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__top}>
        <img
          src="https://images.unsplash.com/photo-1622819584099-e04ccb14e8a7"
          alt=""
        />
        <Avatar className={styles.sidebar__avatar} />
        <h2>Jay</h2>
        <h4>4a490063@stust.edu.tw</h4>
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
      </div>
    </div>
  );
};

export default SideBar;
