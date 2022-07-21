import React from 'react'
import './MyStyle.css'

const heading = {
    fontSize: '72px',
    color: 'blue'
}
const StyleSheet = () => {
    let className = "primary"
    return(
        <div>
            <h1 className={`${className} font-xl`}> CSS Applied </h1>
            <h1 style={heading}> Inline Style</h1>
        </div>
    );
}

export default StyleSheet;

//Module css
//create class MyStyle.module.css
//import styles from './Mystyle.module.css'
//<h1 className={styles.primary}