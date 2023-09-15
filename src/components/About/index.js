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
                        I graduated from ISIMM (Higher Institute of Computer Science and Mathematics) in Monastir. Currently, I am a second-year student pursuing a degree in artificial intelligence engineering. My specialization lies in both front-end and back-end development, as well as website creation. Furthermore, I possess strong skills in designing mobile applications and video games. In search of new opportunities, I am determined to leverage my knowledge and expertise to make a meaningful contribution in the field.
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
