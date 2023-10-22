const LinkedImage = ({ href, src, alt, styles }) => (
    <a href={href} style={styles.link} target="_blank">
        <img src={src} alt={alt} style={styles.image} />
    </a>
);

export default LinkedImage;
