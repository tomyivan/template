import { useReactTable, 
    getCoreRowModel,
    getPaginationRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    ColumnDef,
    SortingState,
    ColumnFiltersState,
    RowData
} from "@tanstack/react-table";
import { Pagination } from "./Pagination.components";
import React from "react";
import useSearchStore from "../../store/search.store";
import { Theader } from "./THeader.components";
import { TBody } from "./TBody.components";
import { Search } from "../filter/Search.component";
import { Button } from "../../shared";
import { PlusCircle } from "lucide-react";
import { DateFilter } from "../filter/DateFilter.component";

declare module '@tanstack/react-table' {
    interface ColumnMeta<TData extends RowData, TValue> {
      filterVariant?: 'text' | 'range' | 'select'
    }
}
interface MainTableProps<T extends object> {
    data: T[];
    columns: ColumnDef<T, unknown>[];
    isSelectRow?: boolean;
    center?: boolean;
    handleClickRow?: ( data: T ) => void;
    pageSize?: number;
    isCount?:boolean;
    options?: {
        filter?: boolean,
        add?: boolean,
        dateFilter?: boolean,
    },
    filterColumns?: React.ReactNode,
    filterColumnsState?: ColumnFiltersState
}
export const Table:React.FC<MainTableProps<any>> = React.memo(({ 
    data, 
    columns,
    isSelectRow = false,
    center= false,
    handleClickRow,
    pageSize = 10,
    isCount = true,
    options,
    filterColumns,
    filterColumnsState
}) => { 
    const { search } = useSearchStore(state => state);     
    const [ sorting, setSorting ] = React.useState<SortingState>([]); // Cambié a una matriz vacía
    const table = useReactTable({
        data,
        columns,
        state:{
            sorting,
            globalFilter: search,
            columnFilters: filterColumnsState,
        },
        onSortingChange: setSorting, 
        // onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel()
    });      
    return (
        <div className="flex flex-col w-full h-full shadow-lg p-2 dark:bg-gray-700 dark:text-gray-200 rounded-lg mb-2">
            <div className="flex justify-end md:flex-row flex-col gap-2 items-center">
                {
                    options?.filter && (
                        <Search />
                    )
                }{
                    options?.dateFilter && (
                        <DateFilter />
                    )
                }
                { options?.add && (
                    <div className="md:w-auto w-full ">
                        <Button 
                            variant="btn-primary"
                            size="btn-sm"
                            onClick={() => {}}
                            icon={<PlusCircle size={20}/>}
                            fullRounded
                            widthFull
                        >
                            Agregar
                        </Button>

                    </div>
                )}

            </div>
            {
                filterColumns                
            }
            <div className="overflow-x-auto flex justify-center w-auto h-full"> 
                <table className="w-full">
                    <Theader 
                        table={table}
                    />
                    <TBody 
                        table={table}
                        isSelectRow = { isSelectRow }
                        isCount = { isCount }
                        center = {center}
                        handleClickRow={ handleClickRow }
                    />
                </table>

            </div>
                <Pagination 
                    pageSize={pageSize}
                    table={table}                
                />
        </div>
    )
})