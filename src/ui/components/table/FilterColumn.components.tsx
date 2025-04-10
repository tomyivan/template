import {  Column } from "@tanstack/react-table"
import useFilterSelect from "../../store/filterColumn.store";
import  { useEffect } from "react";
export const FilterColumn= ({ column }:{ column: Column<any, unknown> }) => {    
    const { data } = useFilterSelect(state => state);
    useEffect(() => {
        for (const key in data) {          
            if (key === column.id) {
                column.setFilterValue(data[key])
            }
        }        
    }, [data])
    return null
}