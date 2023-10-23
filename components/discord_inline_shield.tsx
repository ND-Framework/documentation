import styleSheet from "./discord_inline_shield.module.css"

const DiscordInlineShield = ({ href, src, alt }) => (
    <a href={href} target="_blank" className={styleSheet.imageLink}>
        <img src={src} alt={alt} className={styleSheet.image} />
    </a>
);

export default DiscordInlineShield;
