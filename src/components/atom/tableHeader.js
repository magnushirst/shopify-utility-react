import React from "react"

const TableRow = (props) => {
    return (
        <tr>
            {props.headings.map((heading) =>
                <th>
                    {heading}
                </th>
            )}
        </tr>
    )
}

export default TableRow