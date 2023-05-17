import styles from './Project.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Project({ name, image, link }) {
    return (
        <div className={styles.project}>
            {/*<Link href={link} >*/}
                <div className={styles.square}>
                    <Image className={styles.image} src={image} alt={name} fill style={{ objectFit: "cover" }} />
                </div>
                <h1 className={styles.text}>{name}</h1>
            {/*</Link>*/}
        </div>
    )
}