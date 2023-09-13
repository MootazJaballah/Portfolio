import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../data/firebase';


const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    const [project, setproject] = useState([]);
    const [file, setFile] = useState([]);
    const [index, setIndex] = useState(0);



    const fetchPost = async () => {

        await getDocs(collection(db, "projects"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setproject(newData);
            })

    }

    useEffect(() => {
        fetchPost();
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    const renderPortfolio = () => {
        return (
            <div className="images-container">
                {
                    project.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx} onClick={() => {
                                setFile(port.images);
                            }}>
                                <img
                                    src={port.images[0]}
                                    className="portfolio-image"
                                    alt="portfolio" />
                                <div className="content">
                                    <p className="title">{port.name}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.githubUrl)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }

    const swipeImage = (listImage) => {
        if (index < (listImage.length - 1)) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    return (
        <>
            <div className='container portfolio-page' >
                {file.length > 0 ? <div className='popup-media' >
                    <span onClick={() => {
                        setFile([]);
                        setIndex(0);
                    }}>&times;</span>
                    <img src={file[index]} alt='popup' onClick={() => swipeImage(file)} />
                </div> : <div></div>}
                <h1 className='page-title' >
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={'portfolio'.split('')}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio()}</div>
            </div>
            <Loader type='pacman' />
        </>

    );
}

export default Portfolio;
