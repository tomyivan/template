import { Table, flexRender } from "@tanstack/react-table"
import { FilterColumn } from "./FilterColumn.components"
interface TheadProps<TData> {
    table: Table<TData>,
    
}
export const Theader =<TData,>({table}:TheadProps<TData>) => {
    return (
        <thead className="border-b border-gray-500" >
        {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                    <th key={ header.id } colSpan={ header.colSpan }
                    onClick={ header.column.getToggleSortingHandler() } className={`px-2 py-2 cursor-pointer `}>
                        {
                            flexRender( header.column.columnDef.header, header.getContext() )
                        }
                        {
                            header.column.getIsSorted() === 'asc' ? '⬆️' :
                            header.column.getIsSorted() === 'desc' ? '⬇️' :
                            null
                        }
                        {
                            header.column.getCanFilter() ? (                                            
                                <FilterColumn column={header.column} />                                            
                            )  : null                                        
                        }
                    </th>
                ))}
            </tr>
        ))}
    </thead>
    )
}