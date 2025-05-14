import dayjs, { Dayjs } from "dayjs";
import { DatePicker, DatePickerRange, Input } from "../../shared"
import { useState } from "react";
interface DateRange {
  start: Dayjs | null;
  end: Dayjs | null;
}
interface DateDay {
  day: Dayjs | null;
}

export const DatePickerPage = () => {
    const [ show, setShow ] = useState(true)
    const [ dateRange, setDateRange ] = useState<DateRange>({
        start: null,
        end: null
    })
    const [ dateN, setDateN ] = useState<DateDay>({
        day: null
    })
    const handleChange2 = (date: DateDay) => {
        console.log(date)
    }
    const handleSelect = (date: DateRange) => {
        console.log(date)
        setDateRange(date)
    }
    const handleSelect2 = (date: DateDay) => {
        console.log(date)
        setDateN(date)
    }
    return (
        <div className="flex flex-col gap-4">
            {/* <div className="flex flex-col justify-center w-full items-center gap-4"
                
            >
                <div className="flex gap-4"
                    onClick={() => setShow(true)}
                >
                    <Input 
                    label="Fecha de inicio"
                        name="startDate"
                        variant="inp-filled"
                        value={dateRange.start?.format('YYYY-MM-DD')}
                        disabled
                    /> 
                    <Input 
                        label="Fecha de fin"
                        name="endDate"
                        variant="inp-filled"
                        value={dateRange.end?.format('YYYY-MM-DD')}
                        disabled
                    />

                </div>
                <DatePickerRange
                    show = {show}
                    onChange={handleChange}
                    handleSelect={handleSelect}
                    handleShow={( newShow:boolean ) => setShow(newShow)}
                />
            </div> */}
            <div className="flex flex-col justify-center w-full items-center gap-4">
                <div className="flex gap-4">
                    <Input 
                        label="Fecha"
                        name="dateChose"
                        variant="inp-filled"
                        value={dateN.day?.format('YYYY-MM-DD')}
                        
                    /> 
                </div>
                <DatePicker
                    show = {true}
                    onChange={handleChange2}          
                    handleSelect={handleSelect2}       
                    filter={(date: Dayjs) => {
                        return date.format('YYYY-MM-DD') === '2025-05-22' 
                    }} 
                    initialDay={{
                        day: dayjs()
                    }}
                />
            </div>
        </div>
    )
}