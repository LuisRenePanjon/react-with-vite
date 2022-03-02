import { useRef, useState } from 'react'
import styles from './styles.module.css'

const SRC = 'https://v16-webapp.tiktok.com/91f1d2d9d4e7c2d236dcc9409bfe7cdb/621ff847/video/tos/useast2a/tos-useast2a-ve-0068c004/2c6af9b314d743e0a2460cfb0420201f/?a=1988&br=2858&bt=1429&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-30-nz7ThLrccDXq&l=202203021705190101921680910C4768C9&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3RtdWc6ZmVrOjMzNzczM0ApaTk1NWY0ZWVoNzVmPDdmZGdgaDRzcjRvM3NgLS1kMTZzczQwNTI1Ll8uMTBgYjNjXy46Yw%3D%3D&vl=&vr='
export const VideoPlayer = () => {
  const [playing, setPlaying] = useState(false)
  const video = useRef()

  const handlePlay = () => {
    if (playing) {
      video.current.pause()
      setPlaying(!playing)
    } else {
      video.current.play()
      setPlaying(!playing)
    }
  }

  return (
    <div>
      <video
        src={SRC}
        controls={false}
        className={styles.video}
        ref={video}
      />
      <button className={styles.player} onClick={handlePlay} />
    </div>
  )
}
