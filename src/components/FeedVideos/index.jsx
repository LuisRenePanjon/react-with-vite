import { VideoPlayer } from '../VideoPlayer'
import styles from './styles.module.css'

const VIDEOS = [
  {
    id: 1,
    author: 'francoescamillaoficial',
    description: 'Cuando retas a tu amigo y el no se ahueva 😎😎 #rap #freestyle',
    likes: 121,
    shares: 283,
    comment: 94,
    songTitle: 'sonido original - Franco Escamilla',
    albumCover: 'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/f690e67830de443a35d9188b5c964309.jpeg?x-expires=1646344800&x-signature=QUkic2Glk%2BUcUP%2BWUduCD%2BEIUb4%3D',
    src: 'https://v16-webapp.tiktok.com/e675cabf2cce8790218e09f2025b16ab/6222b715/video/tos/useast2a/tos-useast2a-ve-0068c004/2c6af9b314d743e0a2460cfb0420201f/?a=1988&br=2858&bt=1429&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-30-nz7Th7vbCDXq&l=202203041903570101890650801F51EEF5&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3RtdWc6ZmVrOjMzNzczM0ApaTk1NWY0ZWVoNzVmPDdmZGdgaDRzcjRvM3NgLS1kMTZzczQwNTI1Ll8uMTBgYjNjXy46Yw%3D%3D&vl=&vr='
  },
  {
    id: 2,
    author: 'videossheldon',
    description: 'Cuando prefieres perder a que pedir ayuda 😅😅 #TheBigBangTheory #Sheldon',
    likes: 163,
    shares: 218,
    comment: 102,
    songTitle: 'sonido original - P.D.M.81',
    albumCover: 'https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web-us/tiktok/web/node/_next/static/images/album-628a1f27c2ed684e4454d53f4c042f7a.svg',
    src: 'https://v16-webapp.tiktok.com/db770e89138c2b1388afac5f5d71bc84/6222b79f/video/tos/useast2a/tos-useast2a-ve-0068c004/638e807a36d840899eb5d91ac71a8414/?a=1988&br=830&bt=415&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-30-nz7ThJ2bCDXq&l=2022030419052501022307203527548E10&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzx0bzY6ZnhxNzMzNzczM0ApaDZlNTY3NTs6NzQ2PDk0ZGdgXl9ecjRvMjVgLS1kMTZzczViM141YDZjNDI1XzE2NTQ6Yw%3D%3D&vl=&vr='
  }
]

export const FeedVideos = () => {
  return (
    VIDEOS.map((video) => {
      return (
        <div key={video.id} className={styles.item}>
          <VideoPlayer src={video} />
        </div>
      )
    })
  )
}
