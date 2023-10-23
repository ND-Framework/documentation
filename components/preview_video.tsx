import styleSheet from "./preview_video.module.css"

const PreviewVideo = ({ src }) => (
    <iframe
        className={styleSheet.video}
        width="560"
        height="315"
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen={true}
    />
);

export default PreviewVideo;
