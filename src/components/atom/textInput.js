import React from "react"

const TextInput = ({text, name, id, value}) => {
    return (
        <div className="input-wrapper">
            <label htmlFor="male">{text}</label>
            <input type="text" name={name} id={id} value={value}/><br/>
        </div>
    )
}

export default TextInput