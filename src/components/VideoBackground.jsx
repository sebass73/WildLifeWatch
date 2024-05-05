import { useContext } from "react";
import video from "../assets/videos/videoBackground.mp4";
import '../styles/components/videobackground.scss'
import ThemeContext from "../context/ThemeContext";

const VideoBackground = () => {

  const {theme} = useContext(ThemeContext)

  return (
    <div className="about">
      <div className="overlayStyle"></div>
      <video src={video} autoPlay loop muted className="handleStyle" />
      <div className="content">
        <h1 className={`text-${theme}`}>WildLife Watch</h1>
        <p className="text-justify text-center mx-5 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nobis
          eius earum libero reiciendis accusantium? Minima, repellat perferendis
          tempore quia corporis, pariatur accusamus nemo illum architecto
          voluptatibus, esse adipisci dolore!
        </p>
        <button className={`btn btn-${theme}`}>Ver más</button>
      </div>
    </div>
  );
};

export default VideoBackground;
