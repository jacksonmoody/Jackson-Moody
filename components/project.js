import styles from './Project.module.css';
import Image from 'next/image';
import { useState } from 'react';
import ModalPicker from './modalPicker';

export default function Project({ name, image, link }) {

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <div className={styles.project} onClick={() => setOpen(true)}>
                <div className={styles.square}>
                    <Image className={styles.image} src={image} alt={name} fill style={{ objectFit: "cover" }} />
                </div>
                <h1 className={styles.text}>{name}</h1>
            </div>
            <ModalPicker open={open} handleClose={handleClose} link={link}/>
        </>
    )
}