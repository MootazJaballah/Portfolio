import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../data/firebase';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import '../Portfolio/index.scss';

const Article = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [project, setProject] = useState([]);

    const fetchPost = async () => {
        const querySnapshot = await getDocs(collection(db, 'articles'));
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

    const renderArticles = () => {
        return (
            <div className="images-container">
                {project.map((port, idx) => (
                    <div className="image-box" key={idx}>
                        <img src={port.images[0]} className="portfolio-image" alt="article" />
                        <div className="content">
                            <p className="title">{port.name}</p>
                            <h4 className="description">{truncateParagraph(port.description)}</h4>
                            <button className="btn" onClick={() => window.open(`https://${port.articleUrl}`)}>
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
                <h1 className="page-title">
                    <AnimatedLetters letterClass={letterClass} strArray={'Articles'.split('')} idx={15} />
                </h1>
                <div>{renderArticles()}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Article;
