import { ChevronLeft, ChevronRight } from "lucide-react"
import { Table } from "@tanstack/react-table"
import { useEffect } from "react"

interface PaginationProps<TData> {
    table: Table<TData>
    pageSize: number
}
export const Pagination =<TData,>({table, pageSize}:PaginationProps<TData> )=> {
    useEffect(() => {
        table.setPageSize(pageSize )
    }, [table])
    return (
        <>
            <ul className="flex gap-2 justify-end mt-2 items-center text-gray-700 dark:text-gray-200">
                <li className="font-semibold">
                    <span>
                        {table.getState().pagination.pageSize*table.getState().pagination.pageIndex + 1 } - {(table.getState().pagination.pageSize*table.getState().pagination.pageIndex) + table.getRowModel().rows.length } de unas { table.getRowCount()}
                    </span>
                </li>
                <li className="font-semibold">
                    <span>
                    Página {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}
                    </span>
                </li>
                <li
                    onClick={() => table.previousPage()}
                >
                    <div className="dark:hover:bg-gray-500 hover:bg-gray-100  p-2  cursor-pointer rounded-full">
                        <ChevronLeft size={20}/>
                    </div>
                </li>
                <li                    
                    onClick={() => !table.getCanNextPage() ? null: table.nextPage()}                   
                >
                    <div className="hover:bg-gray-100 dark:hover:bg-gray-500 p-2 cursor-pointer rounded-full">
                        <ChevronRight size={20}/>
                    </div>
                </li>
            </ul>
        </>
    )
}