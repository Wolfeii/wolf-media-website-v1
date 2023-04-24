import ReactPlayer from "react-player";

export const Hero = () => {
    return (
        <div className="video-hero">
            <ReactPlayer url={'https://player.vimeo.com/video/757646182?background=1'} loop playing={true}/>
        </div>
    );
};

export default Hero;