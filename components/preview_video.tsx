import styleSheet from "./preview_video.module.css"

const PreviewVideo = ({ src }) => (
    <iframe
        className={styleSheet.video}
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen={true}
    />
);

export default PreviewVideo;
