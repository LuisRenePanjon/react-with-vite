import styles from './styles.module.css'

const SRC = 'https://v16-webapp.tiktok.com/97e80e987a7e7118e9a0174dc6df9f53/621453ce/video/tos/useast2a/tos-useast2a-pve-0068/446b8bddfbb44faeb596d492e9944eb7/?a=1988&br=3810&bt=1905&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-30-nz7Th7aU9DXq&l=2022022121084401022308216413557E16&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anh1cTg6ZnA8OTMzNzczM0ApNTNnZzo8NDs0Nzk7Zzk2N2doZGtxcjRfaWNgLS1kMTZzc2BiMjEyYjE1YGIxXl9hXi06Yw%3D%3D&vl=&vr='
export const VideoPlayer = () => {
  return (
    <video src={SRC} controls={false} className={styles.video} />
  )
}
