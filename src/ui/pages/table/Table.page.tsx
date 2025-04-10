import { Table } from "../../components"
import { dataTable, columns } from "../../../content/Tabla.content"
import { DataTable } from "../../../domain"
import { useState } from "react"
export const TablePage = () => {
    const [ state, setState ] = useState<{id:string, value:string}>({
        id: 'state',
        value: ''
    });
    return (
        <div className="flex flex-col gap-4">
            <Table
                data={dataTable}
                columns={columns({
                    edit: (row: DataTable) => {
                        console.log(row)
                    },
                    approved: (row: DataTable) => {
                        console.log(row)
                    },
                    rejected: (row: DataTable) => {
                        console.log(row)
                    },
                })}
                filterColumns={
                    <div className="flex justify-start gap-2 m-2 border p-1 px-2 border-gray-500 rounded-2xl">
                        <div className="flex items-center gap-2">                         
                            <select
                                className="border border-gray-300 rounded-lg p-0.5 text-gray-500"
                                onChange={(e) => setState({ ...state, value: e.target.value })}
                            >
                                <option value="">Todoss</option>
                                <option value="Pendiente">Pendiente</option>
                                <option value="Aprobada">Aprobada</option>
                            </select>
                        </div>
                    </div>
                }
                filterColumnsState={[
                    state
                ]}
                options={ {
                    add: true,
                    filter: true,
                    dateFilter: true,
                }}
            />
        </div>
    )
}