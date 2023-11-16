import { useEffect, useState } from 'react'
import {
    faGitAlt,
    faJsSquare,
    faReact,
    faNodeJs,
} from '@fortawesome/free-brands-svg-icons'
import { faBrain, faServer } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p align="LEFT">
                        As a graduate of the Higher Institute of Computer Science and Mathematics (ISIMM) in Monastir, I am currently advancing my education as a second-year student specializing in Artificial Intelligence and Data Science Engineering. My experience is well-rounded in the realm of software development, encompassing both front-end and back-end technologies, particularly as a MERN Stack developer. Additionally, I have developed a strong proficiency in designing mobile applications and video games. Eager to explore new opportunities, I am committed to applying my diverse skill set and knowledge to make a significant impact in the technology sector.
                    </p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faNodeJs} color="green" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faBrain} color="#0B6FB4" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faServer} color="#011E2A" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About
