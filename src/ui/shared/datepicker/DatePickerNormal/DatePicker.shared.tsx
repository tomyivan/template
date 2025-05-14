import { useState, useRef, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isBetween from "dayjs/plugin/isBetween";
import weekday from "dayjs/plugin/weekday";
import localeData from "dayjs/plugin/localeData";

import { HeaderDatePicker } from "../Header.shared";
import { RenderDays } from "../Day.shared";
import { RenderCells } from "./Cell.shared";
// Extender dayjs con los plugins necesarios
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
dayjs.extend(isBetween);
dayjs.extend(weekday);
dayjs.extend(localeData);

interface DateDay {
  day: Dayjs | null;
}

interface DateRangePickerProps {
  onChange: (range: DateDay) => void;
  initialDay?: DateDay;
  handleShow?: (open:boolean) => void;
  handleSelect?: (date: DateDay) => void;
  show?: boolean;
  filter?: ( date: Dayjs ) => boolean;
}

export const DatePicker = ({ 
    onChange, 
    initialDay, 
    handleShow,
    show = false,
    handleSelect,
    filter
}: DateRangePickerProps) => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [ dateDay, setDateDay ] = useState<DateDay>(initialDay || { day: null });
  const pickerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if( !handleShow ) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        handleShow?.(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDateClick = (date: Dayjs) => {
    setDateDay({ day: date });
    if ( !dateDay.day ) {
      setDateDay({ day: date });
      onChange({ day: date });
    }
  };



  return (
    <div ref={pickerRef} className="relative">
      {show && (
        <div className="absolute z-10 mt-1 bg-gray-100 text-gray-500 rounded-lg shadow-lg border p-2 w-64 capitalize">
          <HeaderDatePicker 
            currentMonth={currentMonth}
            setCurrentMonth={setCurrentMonth}
          />
          {<RenderDays />}
          <RenderCells 
            currentMonth={currentMonth}
            dateDay={dateDay}
            handleDateClick={handleDateClick}
            filter={filter}
            />
          <div className="flex justify-between p-2 border-t">
            <button
              className="text-blue-500 hover:text-blue-700 cursor-pointer"
              onClick={() => {
                handleSelect?.(dateDay) 
                handleShow?.(false);
              }}
            >
               Listo
            </button>
            { handleShow && 
              <button
                className="text-blue-500 hover:text-blue-700 cursor-pointer"
                onClick={() => handleShow?.(false)}
              >
                Cancelar
              </button>
            }
          </div>
        </div>
      )}
    </div>
  );
};