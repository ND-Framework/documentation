import styleSheet from "./double_linked_images.module.css"

const DoubleLinkedImages = ({ href, src, alt, href2, src2, alt2 }) => (
    <div>
        <a href={href} target="_blank" className={styleSheet.imageLink}>
            <img src={src} alt={alt} className={styleSheet.image} />
        </a>
        <a href={href2} target="_blank" className={styleSheet.imageLink2}>
            <img src={src2} alt={alt2} className={styleSheet.image2} />
        </a>
    </div>
);

export default DoubleLinkedImages;
