import type { NextPage } from "next";
import styles from "../styles/index.module.css";
import { useAppSelector } from '../app/hooks'

import Header from "../features/header";
import SideBar from '../features/sideBar';
import Feed from '../features/feed';
import Login from '../features/login';

import { selectUser } from '../features/userSlice';

const IndexPage: NextPage = () => {
  const user = useAppSelector(selectUser);

  return (
    <div className={styles.app}>
      <Header />

      {user ? (
        <div className={styles.app__body}>
          <SideBar />
          <Feed />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default IndexPage;
