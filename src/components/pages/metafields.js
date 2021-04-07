import React from "react"
import BackChevron from "../atom/backChevron";

class Metafields extends React.Component {
    render() {
        return (
            <div className="about">
                <div className="heading">
                    <BackChevron to="/"/>
                    <h1>Metafields</h1>
                </div>
            </div>
        )
    }
}

export default Metafields