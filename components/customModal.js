import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import styles from './Content.module.css';

export default function CustomModal({ open, handleClose, title, children }) {

    return (
        <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            style={{ overflow: 'scroll' }}
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={open}>
                <Box className={styles.box}>
                    <h1 className={styles.section}>{title}</h1>
                    {children}
                </Box>
            </Fade>
        </Modal>
    )
}