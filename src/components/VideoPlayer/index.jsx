import clsx from 'clsx'
import { useRef, useState } from 'react'
import styles from './styles.module.css'
import { VideoPlayerActions } from './VideoPlayerActions'

export const VideoPlayer = ({ src }) => {
  const [playing, setPlaying] = useState(false)
  const video = useRef(null)

  const handlePlay = () => {
    playing ? video.current.pause() : video.current.play()
    setPlaying(!playing)
  }

  const playerClassName = clsx(styles.player, {
    [styles.hidden]: playing
  })

  return (
    <div className={styles.wrapper}>
      <video
        className={styles.video}
        controls={false}
        loop
        onClick={handlePlay}
        ref={video}
        src={src.src}
      />
      <i className={playerClassName} onClick={handlePlay} />
      <VideoPlayerActions />
    </div>
  )
}
