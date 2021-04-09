import React from "react"
import BackChevron from "../atom/backChevron";
import TableHeader from "../atom/tableHeader";
import TableRow from "../atom/tableRow";
import DataTable from "../molecule/dataTable";
import {GET_METAFIELDS} from "../../api/getMetafields";
import {useQuery} from "@apollo/client";
import {ShopifyGraphClient} from "../../api/shopifyGraphqlClient";

const Metafields = () =>{
    const { loading, error, data } = useQuery(GET_METAFIELDS, {client: ShopifyGraphClient});
    return (
        <div className="about">
            <div className="heading">
                <BackChevron to="/"/>
                <h1>Metafields</h1>
            </div>
            {error &&
                <div>An error occurred :(</div>
            }
            {loading &&
            <div>...loading data</div>
            }
            <DataTable>
                <TableHeader headings={['ID', 'Name', 'Value', 'Namespace']} />
                {data && data.shop.metafields.edges.map((edge) =>
                    <TableRow fields={[edge.node.id, edge.node.key, edge.node.value, edge.node.namespace]} />
                )}
            </DataTable>
        </div>
    )
}

export default Metafields