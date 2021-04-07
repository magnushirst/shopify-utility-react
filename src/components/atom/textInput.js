import React from "react"

const TextInput = ({text, name, id, value, onChange}) => {
    return (
        <div className="input-wrapper">
            <label htmlFor="male">{text}</label>
            <input type="text" name={name} id={id} value={value} onChange={onChange}/><br/>
        </div>
    )
}

export default TextInput