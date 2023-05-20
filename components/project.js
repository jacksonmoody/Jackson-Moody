import styles from './Project.module.css';
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
                    <img className={styles.image} src={image} alt={name} />
                </div>
                <h1 className={styles.text}>{name}</h1>
            </div>
            <ModalPicker open={open} handleClose={handleClose} link={link}/>
        </>
    )
}