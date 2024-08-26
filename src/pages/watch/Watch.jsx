import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import './watch.scss' 
function Watch() {
  return (
    <div className='watch'>
          <div className="back">
              <ArrowBackOutlinedIcon />
              Home
          </div>
          <video
              className='video'
              autoPlay
              progress
              controls
              src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' />
    </div>
  )
}

export default Watch
