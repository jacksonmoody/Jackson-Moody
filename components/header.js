import styles from './Header.module.css';

export default function Header({ image, title }) {
    return (
        <div className={styles.header}>
            <img className={styles.img} src={image} alt={title}/>
            <div className={styles.title}>
                <h1>{title}</h1>
            </div>
        </div>
    )
}