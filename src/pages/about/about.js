import React from "react"
import "./about.css"

const About = () => {
    return (
        <div className="about-page">
            <div className="resume-container">
                <img src="/resume.png" alt="resume" width={"700"} />
            </div>
            <div className="about-paragraph">
                <h2>
                    Thank you for taking the time to check out my personal website! I made this with React.js
                    and some good old typical CSS. I am a recent Computer Science graduate with an associate
                    degree in General Studies.
                </h2>
                <h2>
                    From an early age, my father introduced me to the world of computers.
                    And that sparked it all. As I grew up playing video games on the computer, I started to tinker
                    with the various components of my PC to get more FPS and maximize my computer's performance! I
                    started to learn about overclocking, undervolting, and even messing with the Windows registry
                    to remove unnecessary Windows bloat. One thing led to another, and eventually, I graduated high
                    school with no idea what I wanted to do in life... but what 18-year-old does Yano?
                </h2>
                <h2>
                    I went to my local community college and worked on my Associate's Degree while taking various
                    electives to hone in on what I wanted. I landed in Computer Science; from there, the rest is history. I have now
                    received my bachelor's degree and am looking to find my first professional software engineering
                    role where I can make a difference by pursuing my passion for something impactful.
                </h2>
            </div>
        </div>
    )
}

export default About