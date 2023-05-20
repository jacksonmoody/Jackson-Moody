import CustomModal from "./customModal";
import Image from 'next/image';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import styles from './Content.module.css';
import Carousel from 'react-material-ui-carousel';

import alarm_clock from '../public/images/alarm_clock.jpeg';
import alarm_clock_2 from '../public/images/alarm_clock_2.jpeg';
import headband1 from '../public/images/headband1.jpg';
import headband2 from '../public/images/headband2.jpg';
import headband3 from '../public/images/headband3.jpg';
import headband4 from '../public/images/headband4.jpg';
import lifting_1 from '../public/images/lifting_1.jpeg';
import lifting_2 from '../public/images/lifting_2.jpeg';
import lifting_3 from '../public/images/lifting_3.jpeg';
import lifting_4 from '../public/images/lifting_4.jpeg';
import random_1 from '../public/images/random_generator_1.jpg';
import random_2 from '../public/images/random_generator_2.jpg';
import coved from '../public/images/coved.jpg';
import coved1 from '../public/images/coved1.jpg';
import coved2 from '../public/images/coved2.jpg';
import boston_analytics from '../public/images/boston_analytics.png';
import clubq from '../public/images/clubq.jpg';
import clubq1 from '../public/images/clubq1.jpg';
import clubq2 from '../public/images/clubq2.jpg';
import clubq3 from '../public/images/clubq3.jpg';
import blocking1 from '../public/images/blocking_1.jpg';
import blocking2 from '../public/images/blocking_2.jpg';
import blocking3 from '../public/images/blocking_3.jpg';
import research from '../public/images/research.jpg';
import teleop from '../public/images/teleoperation.gif';

export default function ModalPicker({ open, handleClose, link }) {

    switch (link) {
        case "alarm-clock":
            return (
                <CustomModal open={open} handleClose={handleClose} title="Smart Alarm Clock">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Carousel navButtonsAlwaysVisible autoPlay={false}>
                                <video width="100%" height="auto" controls>
                                    <source src="/videos/alarm_video.mp4" type="video/mp4" />
                                </video>
                                <div className={styles.rectangle}>
                                    <Image src={alarm_clock} alt="Alarm Clock" fill style={{ objectFit: "cover" }} />
                                </div>
                                <div className={styles.rectangle}>
                                    <Image src={alarm_clock_2} alt="Alarm Clock" fill style={{ objectFit: "cover" }} />
                                </div>
                            </Carousel>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className={styles.text}>
                                <p>For this project, I created a "Smart Alarm Clock" to truly motivate me to get out of bed in the morning. Rather than merely playing a tune, this alarm clock also opens the blinds and squirts you with water to wake you up—I haven't been late to class since!</p>
                                <Link href="/files/alarm_clock_code.zip" locale={false}>
                                    <button className={styles.button}>Download Code</button>
                                </Link>
                                <Link href="/files/alarm_clock_files.zip" locale={false}>
                                    <button className={styles.button}>Download Parts</button>
                                </Link>
                            </div>
                        </Grid>
                    </Grid>
                </CustomModal>
            )
            break;
        case "headband":
            return (
                <CustomModal open={open} handleClose={handleClose} title="Macular Degeneration Headband">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Carousel navButtonsAlwaysVisible autoPlay={false}>
                                <div className={styles.rectangle}>
                                    <Image src={headband1} alt="Macular Degeneration Headband" fill style={{ objectFit: "cover" }} />
                                </div>
                                <div className={styles.rectangle}>
                                    <Image src={headband2} alt="Macular Degeneration Headband" fill style={{ objectFit: "cover" }} />
                                </div>
                                <div className={styles.rectangle}>
                                    <Image src={headband3} alt="Macular Degeneration Headband" fill style={{ objectFit: "contain" }} />
                                </div>
                                <div className={styles.rectangle}>
                                    <Image src={headband4} alt="Macular Degeneration Headband" fill style={{ objectFit: "contain" }} />
                                </div>
                            </Carousel>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className={styles.text}>
                                <p>As my grandfather's macular degeneration worsened, I noticed that he was always holding his phone's camera up to his face in order to see.</p>
                                <p>Realizing the burden that this was taking on his quality of life, I made my grandfather a custom headband to hold his phone for him. This headband was custom fit to the size of his head, and had velcro straps, foam, and counter-weights to ensure long-term comfort.</p>
                                <Link href="/files/headband.zip" locale={false}>
                                    <button className={styles.button}>Download Parts</button>
                                </Link>
                            </div>
                        </Grid>
                    </Grid>
                </CustomModal>
            )
            break;
        case "mask-detection":
            return (
                <CustomModal open={open} handleClose={handleClose} title="Mask Detection System">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <video width="100%" height="auto" controls>
                                <source src="/videos/mask_recognition.mp4" type="video/mp4" />
                            </video>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className={styles.text}>
                                <p>During the COVID-19 pandemic, some of the largest issues were surrounding the enforcement of mask mandates. To mitigate this, I used a Misty II robot and a Tensorflow neural network to detect when people were wearing masks and instruct them accordingly.</p>
                                <Link href="/files/mask_recognition.zip" locale={false}>
                                    <button className={styles.button}>Download Code</button>
                                </Link>
                            </div>
                        </Grid>
                    </Grid>
                </CustomModal>
            )
            break
        case "drawing-robot":
            return (
                <CustomModal open={open} handleClose={handleClose} title="Drawing Robot">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <video width="100%" height="auto" controls muted>
                                <source src="/videos/drawing_video.mp4" type="video/mp4" />
                            </video>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className={styles.text}>
                                <p>As part of an introductory course in digital fabrication, I created a robot that can draw anything using water (or any other liquid).</p>
                                <p>To use it, simply input a drawing at <a className={styles.link} href="https://ps70-machine.vercel.app" target="_blank">this site</a>. From there, a backend will convert the drawing into coordinates and instructions for the robot.</p>
                                <Link href="/files/drawing_robot_code.zip" locale={false}>
                                    <button className={styles.button}>Download Code</button>
                                </Link>
                                <Link href="/files/drawing_robot.zip" locale={false}>
                                    <button className={styles.button}>Download Parts</button>
                                </Link>
                            </div>
                        </Grid>
                    </Grid>
                </CustomModal>
            )
            break;
        case "lifting-robot":
            return (
                <CustomModal open={open} handleClose={handleClose} title="Lifting Robot">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Carousel navButtonsAlwaysVisible autoPlay={false}>
                                <div className={styles.rectangle}>
                                    <Image src={lifting_1} alt="Lifting Robot" fill style={{ objectFit: "contain" }} />
                                </div>
                                <div className={styles.rectangle}>
                                    <Image src={lifting_2} alt="Lifting Robot" fill style={{ objectFit: "contain" }} />
                                </div>
                                <div className={styles.rectangle}>
                                    <Image src={lifting_3} alt="Lifting Robot" fill style={{ objectFit: "cover" }} />
                                </div>
                                <div className={styles.rectangle}>
                                    <Image src={lifting_4} alt="Lifting Robot" fill style={{ objectFit: "cover" }} />
                                </div>
                            </Carousel>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className={styles.text}>
                                <p>As part of an introductory course in mechanical engineering, I was tasked with building a robot to stack various objects (cubes, spheres, and rings) on top of each other at different heights.</p>
                                <p>The resulting robot is pictured at left, and was manufactured using CNC milling, 3D printing, turning, molding and casting, and a variety of other manufacturing processes.</p>
                                <Link href="/files/lifting_robot.zip" locale={false}>
                                    <button className={styles.button}>Download CAD</button>
                                </Link>
                            </div>
                        </Grid>
                    </Grid>
                </CustomModal>
            )
            break;
        case "random-generator":
            return (
                <CustomModal open={open} handleClose={handleClose} title="Random Interesting Thing Generator">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Carousel navButtonsAlwaysVisible autoPlay={false}>
                                <div className={styles.rectangle}>
                                    <Image src={random_2} alt="Random Interesting Thing Generator" fill style={{ objectFit: "contain" }} />
                                </div>
                                <div className={styles.rectangle}>
                                    <Image src={random_1} alt="Random Interesting Thing Generator" fill style={{ objectFit: "contain" }} />
                                </div>
                            </Carousel>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className={styles.text}>
                                <p>As a way to mitigate boredom and mindless scrolling, I created a project to scrape the internet for interesting content across a variety of categories (sports, entertainment, news, etc.)</p>
                                <p>Ultimately, the user is presented with interesting content from YouTube, the New York Times, and Wikipedia. The frontend for this project was built using pure HTML and CSS, while the backend was built using Python and Flask.</p>
                                <Link href="/files/random_generator.zip" locale={false}>
                                    <button className={styles.button}>Download Code</button>
                                </Link>
                            </div>
                        </Grid>
                    </Grid>
                </CustomModal>
            )
            break;
        case "coveducation":
            return (
                <CustomModal open={open} handleClose={handleClose} title="CovEducation Website">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Carousel navButtonsAlwaysVisible autoPlay={false}>
                                <div className={styles.rectangle}>
                                    <Image src={coved} alt="CovEd Website" fill style={{ objectFit: "contain" }} />
                                </div>
                                <div className={styles.rectangle}>
                                    <Image src={coved1} alt="CovEd Website" fill style={{ objectFit: "contain" }} />
                                </div>
                                <div className={styles.rectangle}>
                                    <Image src={coved2} alt="CovEd Website" fill style={{ objectFit: "contain" }} />
                                </div>
                            </Carousel>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className={styles.text}>
                                <p>As CovEducation's Technology Officer, I led a team of students in developing a web application to automatically match thousands of mentees with prospective mentors.</p>
                                <p>This project was built with React and Material UI on the frontend and Mongo DB and Express on the backend. To learn more, check out <a className={styles.link} href="https://www.coved.org/" target="_blank">CovEducation's website</a>!</p>
                                <Link href="/files/coved.zip" locale={false}>
                                    <button className={styles.button}>Download Code</button>
                                </Link>
                            </div>
                        </Grid>
                    </Grid>
                </CustomModal>
            )
            break;
        case "boston-analytics":
            return (
                <CustomModal open={open} handleClose={handleClose} title="City of Boston Analytics">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <div className={styles.rectangle}>
                                <Image src={boston_analytics} alt="City of Boston Visual Analytics" fill style={{ objectFit: "contain" }} />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className={styles.text}>
                                <p>As a member of Harvard's Tech for Social Good, I helped develop an application for the City of Boston to visualize city spending.</p>
                                <p>Using React, Material UI, and the Plotly library, I created visualizations of the City's spending across various time periods and departments—thereby allowing citizens to clearly understand a previously nebulous dataset.</p>
                                <Link href="/files/boston_analytics.zip" locale={false}>
                                    <button className={styles.button}>Download Code</button>
                                </Link>
                            </div>
                        </Grid>
                    </Grid>
                </CustomModal>
            )
            break;
        case "club-qguide":
            return (
                <CustomModal open={open} handleClose={handleClose} title="Harvard Club Q Guide">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Carousel navButtonsAlwaysVisible autoPlay={false}>
                                <div className={styles.rectangle}>
                                    <Image src={clubq} alt="Club Q Guide" fill style={{ objectFit: "contain" }} />
                                </div>
                                <div className={styles.rectangle}>
                                    <Image src={clubq1} alt="Club Q Guide" fill style={{ objectFit: "contain" }} />
                                </div>
                                <div className={styles.rectangle}>
                                    <Image src={clubq2} alt="Club Q Guide" fill style={{ objectFit: "contain" }} />
                                </div>
                                <div className={styles.rectangle}>
                                    <Image src={clubq3} alt="Club Q Guide" fill style={{ objectFit: "contain" }} />
                                </div>
                            </Carousel>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className={styles.text}>
                                <p>To simplify the overwhelming number of clubs and student organizations at Harvard College, I helped develop a web application through which students could provide their own feedback on clubs (much like in Harvard's Academic "Q Guide").</p>
                                <p>This website was built using HTML/CSS on the frontend and Python/Flask on the backend.</p>
                                <Link href="/files/clubq.zip" locale={false}>
                                    <button className={styles.button}>Download Code</button>
                                </Link>
                            </div>
                        </Grid>
                    </Grid>
                </CustomModal>
            )
            break;
        case "blocking-finder":
            return (
                <CustomModal open={open} handleClose={handleClose} title="Blocking Group Finder">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Carousel navButtonsAlwaysVisible autoPlay={false}>
                                <div className={styles.rectangle}>
                                    <Image src={blocking1} alt="Blocking Group Finder" fill style={{ objectFit: "contain" }} />
                                </div>
                                <div className={styles.rectangle}>
                                    <Image src={blocking2} alt="Blocking Group Finder" fill style={{ objectFit: "contain" }} />
                                </div>
                                <div className={styles.rectangle}>
                                    <Image src={blocking3} alt="Blocking Group Finder" fill style={{ objectFit: "contain" }} />
                                </div>
                            </Carousel>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className={styles.text}>
                                <p>The process of finding a "blocking group" (a group of people to live with for the next three years) is one of the most stressful parts of the Harvard freshman experience. To ease this process, I led the development of a blocking group matching application through which students can input their preferences and be automatically matched with the most compatible blockmates!</p>
                                <p>This application was built using React and Material UI on the frontend and Firebase on the backend.</p>
                                <Link href="/files/blocking_group.zip" locale={false}>
                                    <button className={styles.button}>Download Code</button>
                                </Link>
                            </div>
                        </Grid>
                    </Grid>
                </CustomModal>
            )
            break;
        case "soft-robot-research":
            return (
                <CustomModal open={open} handleClose={handleClose} title="Soft Robotics Research">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Carousel navButtonsAlwaysVisible autoPlay={false}>
                                <video width="100%" height="auto" muted loop controls>
                                    <source src="/videos/soft_robot.mp4" type="video/mp4" />
                                </video>
                                <div className={styles.rectangle}>
                                    <Image src={research} alt="Soft Robotics Research" fill style={{ objectFit: "cover" }} />
                                </div>
                            </Carousel>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className={styles.text}>
                                <p>At the University of Colorado Boulder's Intelligent Robotics Laboratory, I created an algorithm to generate interlocking "finger joints" between the two materials—thereby greatly improving the adhesion and effectivity of 3D printed soft robot actuators.</p>
                                <p>Additionally, I developed a force-measurement system to consistently and accurately apply force to a finger sensor. Using the data collected from this system, I trained a lightweight neural network to determine when and where force is being applied.</p>
                            </div>
                        </Grid>
                    </Grid>
                </CustomModal>
            )
            break;
        case "flashcard-robot":
            return (
                <CustomModal open={open} handleClose={handleClose} title="Flashcard Robot">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <video width="100%" height="auto" loop controls>
                                <source src="/videos/flashcards.mp4" type="video/mp4" />
                            </video>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className={styles.text}>
                                <p>To assist my siblings with studying for their vocabulary and math tests, I created a skill for a Misty II robot to quiz them on these terms.</p>
                                <p>This application was built using Javascript and Google's Text to Speech API, and it makes use of Misty's microphones, bump sensors, and facial recognition capabilities.</p>
                                <Link href="/files/flashcards.zip" locale={false}>
                                    <button className={styles.button}>Download Code</button>
                                </Link>
                            </div>
                        </Grid>
                    </Grid>
                </CustomModal>
            )
            break;
        case "teleoperation":
            return (
                <CustomModal open={open} handleClose={handleClose} title="Teleoperation App">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <div className={styles.rectangle}>
                                <Image src={teleop} alt="Teleoperation" fill style={{ objectFit: "cover" }} />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className={styles.text}>
                                <p>As part of an internship with <a href="https://www.mistyrobotics.com/" target="_blank" className={styles.link}>Misty Robotics</a>, I created a teleoperation app for the robot. When in use, the application shows a live video feed and transmits live audio—providing controls for driving the robot, moving its head, playing audio, and more.</p>
                                <p>This app was built on top of the Misty API using REST calls, Websocket subscriptions, and Python. Today, it forms the basis of the teleoperation functionality built into the official Misty app.</p>
                            </div>
                        </Grid>
                    </Grid>
                </CustomModal>
            )
            break;
        case "time-management":
            return (
                <CustomModal open={open} handleClose={handleClose} title="Time Management App">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <video width="100%" height="auto" loop controls>
                                <source src="/videos/time_management.mp4" type="video/mp4" />
                            </video>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className={styles.text}>
                                <p>As someone who struggles with procrastination and time management, I chose to create an application to help me manage all of the competing priorities in my life.</p>
                                <p>The application is written in Java, with the UI designed using the Netbeans IDE. Today, I use it to manage all of the activities in my life—following its recommended daily, weekly, and monthly schedules whenever I can.</p>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={styles.text}>
                                <Link href="/files/time_management.zip" locale={false}>
                                    <button className={styles.button}>Download Code</button>
                                </Link>
                            </div>
                        </Grid>
                    </Grid>
                </CustomModal>
            )
            break;
        case "battlebot":
            return (
                <CustomModal open={open} handleClose={handleClose} title="BattleBot">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <div className={styles.video}>
                                <video width="100%" height="auto" loop controls muted>
                                    <source src="/videos/battlebot.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className={styles.text}>
                                <p>During the robotics offseason, I chose to create a BattleBot to compete in a local featherweight BattleBots tournament. Having never created a BattleBot before, I struggled to create a robot with the necessary strength and resilience while simultaneously staying under the strict weight limits.</p>
                                <p>However, I ultimately created a remote-controlled, dual-wheel robot that is capable of driving on both of its faces (face up and face down). The robot's primary weapon is a highspeed steel spinner that was custom machined in the local makerspace; overall I am very happy with how it turned out!</p>
                            </div>
                        </Grid>
                    </Grid>
                </CustomModal>
            )
            break;
    }
}