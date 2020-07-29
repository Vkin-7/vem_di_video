import React from 'react';

const ButtonLink = (props) => {
    return(
        <a {...props}>
            {props.children}
        </a>
    )
}

export default ButtonLink;