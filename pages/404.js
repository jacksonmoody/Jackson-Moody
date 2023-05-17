import styles from '../components/Home.module.css';
import Link from 'next/link';

export default function errorPage() {
    return (
        <div className={styles.error}>
            <h1>Sorry! That page doesn't exist yet.</h1>
            <h2>In the meantime, you can return home to see the rest of my projects!</h2>
            <Link href="/">
                <button className={styles.button}>Home</button>
            </Link>
        </div>
    )
  }