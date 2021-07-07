import { Info } from "@material-ui/icons";
import styles from "./styles.module.css";

const Widgets = () => {
  return (
    <div className={styles.widgets}>
      <div className={styles.widgets__header}>
        <h2>LinkedIn News</h2>
        <Info />
      </div>
    </div>
  );
};

export default Widgets;
