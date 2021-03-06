import React, { useEffect, useState } from 'react';
import '../../App';

import classes from './About.module.css';

export default function AboutNav(props){
    const [hash, setHash] = useState(window.location.hash);
    useEffect(() => {
        const hashHandler = () => {
            setHash((prevHash) => {
                const newHash = window.location.hash;
                if (prevHash !== newHash) {
                    //reload page without reloading browser
                    window.location.reload();
                    return newHash;
                }
                return hash;
            });
        };
        window.addEventListener('hashchange', hashHandler);
    });
    return <Sections />
}

export function Sections(props){
    return(
            <ul className={classes.aboutNavBar}>
                <Section text="ABOUT ME" ></Section>
                <Section text="SKILLS" ></Section>
                <Section text="CAREER" ></Section>
                <Section text="EDUCATION" ></Section>
            </ul>
    );
}

export function Section(props){
    return(
        <li>
            <a href={props.href} onClick={props.click}>{props.text}</a>
        </li>
    );
}