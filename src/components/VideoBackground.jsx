import video from "../assets/videos/videoBackground.mp4";
import '../styles/components/videobackground.scss'

const VideoBackground = () => {


  return (
    <div className="about">
      <div className="overlayStyle"></div>
      <video src={video} autoPlay loop muted className="handleStyle" />
      <div className="content">
        <h1>Welcome</h1>
        <p className="text-justify text-center mx-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nobis
          eius earum libero reiciendis accusantium? Minima, repellat perferendis
          tempore quia corporis, pariatur accusamus nemo illum architecto
          voluptatibus, esse adipisci dolore!
        </p>
        <button className="btn btn-primary">Ver más</button>
      </div>
    </div>
  );
};

export default VideoBackground;
