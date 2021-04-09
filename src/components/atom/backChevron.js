import React from "react"
import {Link} from "react-router-dom";

const BackChevron = ({to}) => {
    return (
        <Link className="back-icon" to={to}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white"
                 className="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fillRule="evenodd"
                      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
        </Link>
    )
}

export default BackChevron