import type { NextPage } from "next";
import styles from "../styles/index.module.css";

import Header from "../features/header";
import SideBar from '../features/sideBar';
import Feed from '../features/feed';

// TODO: 2:36 start redux
const IndexPage: NextPage = () => {
  return (
    <div className={styles.app}>
      <Header />

      {/* App Body */}
      <div className={styles.app__body}>
        <SideBar />
        <Feed />
        {/* Widgets */}
      </div>
    </div>
  );
};

export default IndexPage;
