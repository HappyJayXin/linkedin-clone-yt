import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";

import styles from "./styles.module.css";
import InputOption from "./InputOption";
import Post from "./Post";
import { fetchSnapshot, Data } from "./feedApi";

interface IFormInput {
  message: string;
}

const Feed = () => {
  const [posts, setPosts] = useState<Data>([]);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit: SubmitHandler<IFormInput> = ({ message }) => {
    const newPost = {
      id: posts.length ? posts[posts.length - 1].id + 1 : 1,
      data: {
        name: 'Jay',
        description: 'Description',
        message,
        photoUrl: 'photoUrl'
      }
    }
    setPosts(prev => [...prev, newPost]);
    reset();
  };

  useEffect(() => {
    const fetcher = async () => {
      const data: Data = await fetchSnapshot();
      setPosts(data);
    };
    fetcher();
  }, []);

  return (
    <div className={styles.feed}>
      <div className={styles.feed__inputContainer}>
        <div className={styles.feed__input}>
          <CreateIcon />
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("message")} />
            <button type="submit" />
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

      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
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
