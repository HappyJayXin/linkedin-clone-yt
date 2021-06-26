import styles from "./styles.module.css";
import { Avatar } from "@material-ui/core";
import InputOption from "../InputOption";
import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";

type Props = {
  name: string;
  description: string;
  message: string;
  photoUrl: string;
};

// TODO: 3:4148 start react forward
const Post = ({ name, description, message, photoUrl }: Props) => {
  return (
    <div className={styles.post}>
      <div className={styles.post__head}>
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className={styles.post__info}>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className={styles.post__body}>{message}</div>

      <div className={styles.post__buttons}>
        <InputOption Icon={ThumbUpAltOutlined} title="Like" color="gray" />
        <InputOption Icon={ChatOutlined} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlined} title="Share" color="gray" />
        <InputOption Icon={SendOutlined} title="Send" color="gray" />
      </div>
    </div>
  );
};

export default Post;
