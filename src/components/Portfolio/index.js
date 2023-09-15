import React, { useState, useEffect, useMemo } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../data/firebase';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [project, setProject] = useState([]);
    const [file, setFile] = useState([]);
    const [index, setIndex] = useState(0);

    const fetchPost = async () => {
        const querySnapshot = await getDocs(collection(db, 'projects'));
        const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setProject(newData);
    };

    useEffect(() => {
        fetchPost();
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    const truncateParagraph = (paragraph) => {
        if (paragraph.length > 70) {
            return paragraph.substring(0, 70) + '...';
        } else {
            return paragraph;
        }
    };

    const images = useMemo(() => {
        if (file.length > 0) {
            return file;
        }
        if (project.length > 0) {
            return project[index].images;
        }
        return [];
    }, [file, project, index]);

    const swipeImage = () => {
        if (images.length > 0) {
            setIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
        }
    };

    const openImagePopup = (images) => {
        setFile(images);
        setIndex(0);
    };

    const closeImagePopup = () => {
        setFile([]);
        setIndex(0);
    };

    const renderPortfolio = () => {
        return (
            <div className="images-container">
                {project.map((port, idx) => (
                    <div className="image-box" key={idx} onClick={() => openImagePopup(port.images)}>
                        <img src={port.images[0]} className="portfolio-image" alt="portfolio" />
                        <div className="content">
                            <p className="title">{port.name}</p>
                            <h4 className="description">{truncateParagraph(port.description)}</h4>
                            <button className="btn" onClick={() => window.open(port.githubUrl)}>
                                View
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <>
            <div className="container portfolio-page">
                {file.length > 0 && (
                    <div className="popup-media">
                        <span onClick={closeImagePopup}>&times;</span>
                        <img src={images[index]} alt="popup" onClick={swipeImage} />
                    </div>
                )}
                <h1 className="page-title">
                    <AnimatedLetters letterClass={letterClass} strArray={'portfolio'.split('')} idx={15} />
                </h1>
                <div>{renderPortfolio()}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Portfolio;
