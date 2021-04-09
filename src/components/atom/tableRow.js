import React from "react"

const TableRow = (props) => {
    return (
        <tr>
            {props.fields.map((field) =>
                <td>
                    {field}
                </td>
            )}
        </tr>
    )
}

export default TableRow