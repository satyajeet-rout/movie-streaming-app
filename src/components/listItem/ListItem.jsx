// import './listItem.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
// import { useState } from 'react';


// function ListItem({index}) {
//   const [isHovered, setIsHovered] = useState(false)
//   const trailer =
//     "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
//   //  const style = {
//   //   left: isHovered ? `${index * 225-50 + index*2.5}` : '0px'
//   // };
//   return (
//     <div 
//       className='listItem'
//       style={{ left: isHovered && index * 225 - 50 + index * 2.5}}
      
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={()=> setIsHovered(false)}
//     >
//       {isHovered && (
//         <>
//           <video src={trailer} autoPlay={true} loop />
//       <img src='https://filminformation.com/wp-content/uploads/2024/03/Crakk-New.jpg' alt='' />
//       <div className="itemInfo">
//         <div className="icons">
//           <PlayArrowIcon />
//           <AddOutlinedIcon />
//           <ThumbUpOutlinedIcon />
//           <ThumbDownOutlinedIcon />
//         </div>
//         <div className="itemInfoTop">
//           <span> 1hour 14 min</span>
//           <span className='limit'> +16 </span>
//           <span> 1999 </span>
//         </div>
//         <div className="desc">
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis quia, at debitis fuga perferendis dolorem alias obcaecati impedit voluptates? Excepturi suscipit quam ipsa, officia maxime temporibus voluptatibus hic soluta molestiae.
//         </div>
            
//           </div>
//           </>
//       )}
//     </div>
//   )
// }

// export default ListItem



import "./listItem.scss";
// import {
//   PlayArrow,
//   Add,
//   ThumbUpAltOutlined,
//   ThumbDownOutlined,
// } from "@material-ui/icons";
import { useState } from "react";

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrowIcon className="icon" />
              <AddOutlinedIcon className="icon" />
              <ThumbUpOutlinedIcon className="icon" />
              <ThumbDownOutlinedIcon className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium hic rem eveniet error possimus, neque ex doloribus.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}
