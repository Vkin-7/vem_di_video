import React from 'react'

const FormField = (props) => {
    return(
        <div>
            <label>{props.label}:
                {props.type === 'textarea' ? 
                <textarea
                    {...props}
                /> :
                <input
                    {...props}
                />}
            </label>
        </div>
    )
}

export default FormField