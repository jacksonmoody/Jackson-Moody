import styles from './Header.module.css';
import backgroundImage from '../public/images/background.jpeg';
import Image from 'next/image';

export default function Header({ title }) {
    return (
        <div className={styles.header}>
            <Image className={styles.img} src={backgroundImage} alt={title}/>
            <div className={styles.title}>
                <h1>{title}</h1>
            </div>
        </div>
    )
}