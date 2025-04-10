
export interface DataTable {
    id:     number;
    contract:    number;
    dni:           string;
    employee:      string;
    typeHour:      string;
    dateHs:        Date;
    startTime:     Date;
    endTime:       Date;
    detail:        string;
    state:         string;
    actions?:      string;
}


export interface Actions {
    edit?: (row:any) => void;
    approved?: (row:any) => void;
    rejected?: (row:any) => void;
    deleteAction?: (row:any) => void;
    view?: (row:any) => void;
    print?: (row:any) => void;
    send?: (row:any) => void;
    download?: (row:any) => void;
}