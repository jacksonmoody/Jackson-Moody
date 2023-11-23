import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/header'
import styles from '../components/Content.module.css'
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import headshot from '../public/images/headshot.jpeg';

export default function About() {
  return (
    <div>
      <Head>
        <title>Jackson Moody: About</title>
      </Head>
      <Header title="About Me" />

      <div className={styles.content}>
        <Grid container alignItems="flex-start" justifyContent="center" columnSpacing={{ xs: 15}} sx={{marginTop: 5}}>
          <Grid item xs={12} order={{ xs: 1, sm: 1 }}>
            <div className={styles.section}>
              Welcome! 👋
            </div>
          </Grid>
          <Grid item xs={12} sm={9} order={{ xs: 3, sm: 2 }}>
            <div className={styles.text}>
              <p>My name is Jackson Moody, and I'm a sophomore at <a className={styles.link} href="https://college.harvard.edu/" target="_blank">Harvard College</a> studying computer science on the mind, brain, and behavior track.</p>
              <p>For more details, check out my resume below. Also feel free to <a className={styles.link} href="mailto:jacksonmoody@college.harvard.edu">reach out</a> if you have any questions or want to say hello!</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={3} order={{ xs: 2, sm: 3 }}>
            <div className={styles.circle}>
              <Image src={headshot} alt="Headshot" width={250} />
            </div>
          </Grid>
          <Grid item xs={12} order={{ xs: 4, sm: 4 }} mt={7}>
          <Link href="/">
              <iframe src='files/resume.pdf#toolbar=0&navpanes=0' width="100%" height="1100px" frameBorder="0"></iframe>
              <button className={styles.button}>Return Home</button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
