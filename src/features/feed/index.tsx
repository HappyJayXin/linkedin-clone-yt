import CreateIcon from '@material-ui/icons/Create';
import styles from './styles.module.css';

const Feed = () => {
  return (
    <div className={styles.feed}>
      <div className={styles.feed__inputContainer}>
        <div className={styles.feed__input}>
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className={styles.feed__inputOptions}>
          {/* TODO: 1:43:51 input options */}
        </div>
      </div>
    </div>
  )
}

export default Feed
