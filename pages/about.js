import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/header'
import styles from '../components/Content.module.css'
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import headshot from '../public/images/headshot.jpg';

export default function About() {
  return (
    <div>
      <Head>
        <title>Jackson Moody: About</title>
      </Head>
      <Header image="https://i.ibb.co/QcnymSY/Screenshot-2023-01-27-at-1-30-42-AM.jpg" title="About Me" />

      <div className={styles.content}>
        <Grid container alignItems="flex-start" justifyContent="center" columnSpacing={{ xs: 15}} sx={{marginTop: 5}}>
          <Grid item xs={12} order={{ xs: 1, sm: 1 }}>
            <div className={styles.section}>
              Welcome! 👋
            </div>
          </Grid>
          <Grid item xs={12} sm={9} order={{ xs: 3, sm: 2 }}>
            <div className={styles.text}>
              <p>My name is Jackson Moody, and I'm a freshman at <a className={styles.link} href="https://college.harvard.edu/" target="_blank">Harvard College</a> studying mechanical engineering and computer science.</p>
              <p>I have worked in a variety of internship and volunteering positions, and I am passionate about utilizing technology to make a positive impact in the world!</p>
              <p>For more details, check out my résumé below. Also feel free to <a className={styles.link} href="mailto:jacksonmoody@college.harvard.edu">reach out</a> if you have any questions or want to say hello!</p>
              <br />
              <iframe src='/resume.pdf' width="100%" height="500px"></iframe>
            </div>

            <Link href="/">
              <button className={styles.button}>Return Home</button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={3} order={{ xs: 2, sm: 3 }}>
            <div className={styles.circle}>
              <Image src={headshot} alt="Headshot" width={300} />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
