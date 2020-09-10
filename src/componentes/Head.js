import React from 'react';
import icon from '../assets/stethoscope.png';

const Head = ()=>{
    return(
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Mederi</title>
            <link rel="stylesheet" href="./src/styles/index.css" />
            <link rel="icon" href={icon} />
            <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@100;500&display=swap" rel="stylesheet" />
        </head>
    );
}
export default Head;