import React from "react"

const DataTable = (props) => {
    return (
        <table className='dataTable'>
            {props.children}
        </table>
    )
}

export default DataTable