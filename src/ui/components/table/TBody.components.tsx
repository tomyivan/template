import { Table, flexRender } from "@tanstack/react-table"
interface TheadProps<TData> {
    table: Table<TData>,
    handleClickRow?: (data: TData) => void;
    isSelectRow?: boolean;
    isCount?: boolean;
    center?: boolean
}
export const TBody = <TData,>({table, handleClickRow, isSelectRow=false, isCount=true, center=false}:TheadProps<TData>)  => {
    return (
        <tbody>
        { table.getRowModel().rows.length === 0? 
            <tr>
                <td colSpan={table.getAllColumns().length} className="text-center py-2 ">                                
                    Cargando
                </td>
            </tr>:
        table.getRowModel().rows.map((row, count) => (
            <tr 
                key={row.id} 
                className={`text-gray-600 text-sm dark:text-gray-200  border-b border-gray-500 ${isSelectRow ? `cursor-pointer hover:bg-emerald-100`:``}`}
                onClick={ () => handleClickRow && handleClickRow(row.original)}
                >
                { isCount && <td className={`text-center `} key={`nro-${count+1}`}>
                    {table.getState().pagination.pageSize*table.getState().pagination.pageIndex+count +1 }                           
                </td>}
                {row.getVisibleCells().map((cell,index:number) => (                                
                        (!isCount || !(index === 0)) &&   
                            <td key={cell.id} className={`py-1.5 max-w-[150px] capitalize px-2 ${index === 0 || center? `text-center`:``} `}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>                                                                    
                ))}          
            </tr>
        ))
        }
    </tbody>
    )   
}