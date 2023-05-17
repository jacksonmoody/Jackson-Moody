import styles from './Home.module.css';
import Image from 'next/image';
import headshot from '../public/images/headshot.jpg';
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image src={headshot} alt="Headshot" className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <p className={styles.header}>Hi! I'm Jackson </p>
                    <p className={styles.body}>On this website you can <Link href="/about" className={styles.link}>learn more about me</Link> or explore some of my projects below! 
                    </p>
                    <Link href="/about">
                        <button className={styles.button}>About Me</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}