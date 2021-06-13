import { useState, SyntheticEvent } from "react";

import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";

import styles from "./styles.module.css";
import InputOption from "./InputOption";
import Post from "./Post";

const Feed = () => {
  const [posts] = useState([{
    name: 'Jay',
    description: 'Description',
    message: 'Message',
    photoUrl: 'photoUrl'
  }]);

  // TODO: start set post 2:17:32
  const sendPosts = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <div className={styles.feed}>
      <div className={styles.feed__inputContainer}>
        <div className={styles.feed__input}>
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit" onClick={sendPosts}>
              Send
            </button>
          </form>
        </div>
        <div className={styles.feed__inputOptions}>
          <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#7fc15e"
          />
        </div>
      </div>

      {posts.map(({ name, description, message, photoUrl }) => (
        <Post
          key={name}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
};

export default Feed;
