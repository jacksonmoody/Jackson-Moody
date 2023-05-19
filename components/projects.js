import { useRef } from 'react';
import Image from 'next/image';
import arrow from '../public/images/arrow.gif';
import Grid from '@mui/material/Grid';
import Project from './project';

export default function Projects() {
    const ref = useRef(null);

    const executeScroll = () => ref.current.scrollIntoView({ behavior: 'smooth' });

    const weeks = [
        {
            name: "Smart Alarm Clock",
            image: "https://i.imgur.com/UlsyO94.jpg",
            link: "alarm-clock"
        },
        {
            name: "Macular Degeneration Headband",
            image: "https://i.imgur.com/IDqKcXZ.jpg",
            link: "headband"
        },
        {
            name: "Mask Detection System",
            image: "https://i.imgur.com/jykYjhf.jpg",
            link: "mask-detection"
        },
        {
            name: "Drawing Robot",
            image: "https://i.imgur.com/XjSeZdh.png",
            link: "drawing-robot"
        },
        {
            name: "Lifting Robot",
            image: "https://i.imgur.com/DXGPtI9.jpg",
            link: "lifting-robot"
        },
        {
            name: "Random Interesting Thing Generator",
            image: "https://i.imgur.com/XSXoTtU.jpg",
            link: "random-generator"
        },
        {
            name: "CovEducation Website",
            image: "https://i.imgur.com/FmgoTb0.jpg",
            link: "coveducation"
        },
        {
            name: "City of Boston Analytics",
            image: "https://i.imgur.com/NL9m0hA.png",
            link: "boston-analytics"
        },
        {
            name: "Harvard Club Q Guide",
            image: "https://i.imgur.com/YvYqxiE.jpg",
            link: "club-qguide"
        },
        {
            name: "Blocking Group Finder",
            image: "https://i.imgur.com/LS0hPTA.jpg",
            link: "blocking-finder"
        },
        {
            name: "Soft Robotics Research",
            image: "https://i.imgur.com/3Z97Syw.jpg",
            link: "soft-robot-research"
        },
        {
            name: "Flashcard Robot",
            image: "https://i.imgur.com/OrwyW6O.jpg",
            link: "flashcard-robot"
        },
        {
            name: "Teleoperation App",
            image: "https://i.imgur.com/nr7atE2.jpg",
            link: "teleoperation"
        },
        {
            name: "Time Management App",
            image: "https://i.imgur.com/A12AJq8.jpg",
            link: "time-management"
        },
        {
            name: "BattleBot",
            image: "https://i.imgur.com/Kh0mPow.jpg",
            link: "battlebot"
        },
    ]

    return (
        <>
            <Image src={arrow} alt="Arrow" onClick={executeScroll} />
            <div ref={ref}>
                <Grid container spacing={4}>
                    {weeks.map(week => (
                        <Grid item xs={12} sm={6} md={4}>
                                <Project name={week.name} image={week.image} link={week.link} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    )

}

