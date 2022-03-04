import { Comment } from '../Icons/Comment'
import { Heart } from '../Icons/Heart'
import { Share } from '../Icons/Share'
import styles from './styles.module.css'
export const VideoPlayerActions = ({ likes = 125, comments = 59, shares = 124, hearted = false }) => {
  return (
    <aside className={styles.actions}>
      <div className={styles.action}>
        <Heart />
        <strong title='like'>{likes}</strong>
      </div>
      <div className={styles.action}>
        <Comment />
        <strong title='comments'>{comments}</strong>

      </div>
      <div className={styles.action}>
        <Share />
        <strong title='shares'>{shares}</strong>

      </div>
    </aside>
  )
}
