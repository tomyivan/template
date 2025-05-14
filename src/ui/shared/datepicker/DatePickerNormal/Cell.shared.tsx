import { Dayjs } from "dayjs";

interface RenderCellsProps {
    currentMonth: any;
    dateDay: {day: Dayjs  | null};
    handleDateClick: (date: any) => void;
    filter?: ( date: Dayjs ) => boolean;
} 
export const RenderCells:React.FC<RenderCellsProps> = ({
    currentMonth,
    dateDay,
    handleDateClick,
    filter
}) => {
    const monthStart = currentMonth.startOf("month");
    const monthEnd = currentMonth.endOf("month");
    const startDay = monthStart.startOf("week");
    const endDay = monthEnd.endOf("week");
    const rows = [];
    let days = [];
    let day = startDay;

    while (day.isSameOrBefore(endDay)) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        const isSelectedDay = dateDay.day?.isSame(cloneDay, "day");
        const isCurrentMonth = cloneDay.isSame(currentMonth, "month");
        const isFiltered = filter ? filter(cloneDay) : false;
        days.push(
          <div
            key={day.toString()}
            className={`relative p-2 text-center cursor-pointer 
              ${!isCurrentMonth ? "text-gray-500" : "text-gray-800"}
                ${isSelectedDay && "rounded-2xl"}
              ${isSelectedDay ? "bg-blue-400 text-white" : ""}
              ${isFiltered ? "bg-gray-200 text-gray-400" : "hover:bg-blue-200"}              `}
            onClick={() => !isFiltered && handleDateClick(cloneDay)}
          >
            <span className={`${(isSelectedDay) ? "font-bold" : ""}
              ${isFiltered ? "text-gray-400" : ""} `}>
              {day.format("D") } 
            </span>
          </div>
        );
        day = day.add(1, "day");
      }
      rows.push(
        <div key={day.toString()} className="grid grid-cols-7">
          {days} 
        </div>
      );
      days = [];
    }
    return <div className="mb-2">{rows}</div>;
  };