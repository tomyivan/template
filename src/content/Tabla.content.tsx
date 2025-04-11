import { ColumnDef } from "@tanstack/react-table"
import { Actions, DataTable } from "../domain"
import { Button } from "../ui/shared"
import { Check, Download, Edit,  Eye,  FileText,  Send,  Trash, X } from "lucide-react"

export const columns = ({
    edit,
    approved,
    rejected,
    deleteAction,
    view,
    print,
    send,
    download,
}: Actions):ColumnDef<DataTable>[] => 
    [
        {
            accessorKey: 'id',
            header: 'ID',
            size: 50,
        },
        {
            accessorKey: 'contract',
            header: 'Contrato',
            size: 100,
        },
        {
            accessorKey: 'dni',
            header: 'DNI',
            size: 100,
        },
        {
            accessorKey: 'employee',
            header: 'Empleado',
            size: 150,
        },
        {
            accessorKey: 'typeHour',
            header: 'Tipo de Hora',
            size: 150,
        },
        {
            accessorKey: 'dateHs',
            header: 'Fecha de Hora',
            size: 150,
        },
        {
            accessorKey: 'startTime',
            header: 'Hora Inicio',
            size: 150,
        },
        {
            accessorKey: 'endTime',
            header: 'Hora Fin',
            size: 150,
        },
        {
            accessorKey: 'detail',
            header: 'Detalle',
            size: 200,
        },
        {
            accessorKey: 'state',
            header: 'Estado',
            size: 100,
        },
        {
            accessorKey: 'actions',
            header: 'Acciones',
            size: 150,
            cell: ({ row }) => (
                <div className="flex flex-wrap gap-1 font-semibold">
                    {edit && <Button title={`Editar`} size="btn-md" variant="btn-primary" onClick={() => edit(row)}>
                        <Edit size={15} />
                        </Button>}
                    {approved && <Button title={`Aprobar`} size="btn-md"  variant="btn-success" onClick={() => approved(row)}>
                        <Check size={15} />
                        </Button>}
                    {rejected && <Button title={`Rechazar`} size="btn-md"  variant="btn-danger" onClick={() => rejected(row)}>
                         <X size={15} />
                        </Button>}
                    {deleteAction && <Button title={`Eliminar`} size="btn-md" variant="btn-danger" onClick={() => deleteAction(row)}>                        
                         <Trash  size={15} />
                        </Button>}
                    {view && <Button title={`Ver`} size="btn-md" variant="btn-info" onClick={() => view(row)}>
                        <Eye size={15} />
                        </Button>}
                    {print && <Button title={`Reporte`} size="btn-md" variant="btn-outline-danger" onClick={() => print(row)}>
                        <FileText size={15} />
                        </Button>}
                    {send && <Button title={`Enviar`} size="btn-md" variant="btn-outline-primary" onClick={() => send(row)}>
                        <Send size={15} />
                        </Button>}
                    {download && <Button title={`Descargar`} size="btn-md" variant="btn-outline-info" onClick={() => download(row)}>
                        <Download size={15} />
                        </Button>}
                </div>
            ),
        },
    ]


export const dataTable:DataTable[] = [
    {
        id: 1,
        contract: 123456,
        dni: "12345678",
        employee: "Juan Perez",
        typeHour: "Normal",
        dateHs: new Date(),
        startTime: new Date(),
        endTime: new Date(),
        detail: "Detalle de la hora",
        state: "Pendiente",
    },
    {
        id: 2,
        contract: 123457,
        dni: "12345679",
        employee: "Maria Gomez",
        typeHour: "Extra",
        dateHs: new Date(),
        startTime: new Date(),
        endTime: new Date(),
        detail: "Detalle de la hora extra",
        state: "Aprobada",
    },
    {
        id: 2,
        contract: 123457,
        dni: "12345679",
        employee: "Maria Gomez",
        typeHour: "Extra",
        dateHs: new Date(),
        startTime: new Date(),
        endTime: new Date(),
        detail: "Detalle de la hora extra",
        state: "Aprobada",
    },
    {
        id: 2,
        contract: 123457,
        dni: "12345679",
        employee: "Maria Gomez",
        typeHour: "Extra",
        dateHs: new Date(),
        startTime: new Date(),
        endTime: new Date(),
        detail: "Detalle de la hora extra",
        state: "Aprobada",
    },
    {
        id: 2,
        contract: 123457,
        dni: "12345679",
        employee: "Maria Gomez",
        typeHour: "Extra",
        dateHs: new Date(),
        startTime: new Date(),
        endTime: new Date(),
        detail: "Detalle de la hora extra",
        state: "Aprobada",
    },
    {
        id: 2,
        contract: 123457,
        dni: "12345679",
        employee: "Maria Gomez",
        typeHour: "Extra",
        dateHs: new Date(),
        startTime: new Date(),
        endTime: new Date(),
        detail: "Detalle de la hora extra",
        state: "Aprobada",
    },
    {
        id: 2,
        contract: 123457,
        dni: "12345679",
        employee: "Maria Gomez",
        typeHour: "Extra",
        dateHs: new Date(),
        startTime: new Date(),
        endTime: new Date(),
        detail: "Detalle de la hora extra",
        state: "Aprobada",
    },
    {
        id: 2,
        contract: 123457,
        dni: "12345679",
        employee: "Maria Gomez",
        typeHour: "Extra",
        dateHs: new Date(),
        startTime: new Date(),
        endTime: new Date(),
        detail: "Detalle de la hora extra",
        state: "Aprobada",
    },
    {
        id: 2,
        contract: 123457,
        dni: "12345679",
        employee: "Maria Gomez",
        typeHour: "Extra",
        dateHs: new Date(),
        startTime: new Date(),
        endTime: new Date(),
        detail: "Detalle de la hora extra",
        state: "Aprobada",
    },
    {
        id: 2,
        contract: 123457,
        dni: "12345679",
        employee: "Maria Gomez",
        typeHour: "Extra",
        dateHs: new Date(),
        startTime: new Date(),
        endTime: new Date(),
        detail: "Detalle de la hora extra",
        state: "Aprobada",
    },
    {
        id: 2,
        contract: 123457,
        dni: "12345679",
        employee: "Maria Gomez",
        typeHour: "Extra",
        dateHs: new Date(),
        startTime: new Date(),
        endTime: new Date(),
        detail: "Detalle de la hora extra",
        state: "Aprobada",
    },
    {
        id: 2,
        contract: 123457,
        dni: "12345679",
        employee: "Maria Gomez",
        typeHour: "Extra",
        dateHs: new Date(),
        startTime: new Date(),
        endTime: new Date(),
        detail: "Detalle de la hora extra",
        state: "Aprobada",
    },
    {
        id: 2,
        contract: 123457,
        dni: "12345679",
        employee: "Maria Gomez",
        typeHour: "Extra",
        dateHs: new Date(),
        startTime: new Date(),
        endTime: new Date(),
        detail: "Detalle de la hora extra",
        state: "Aprobada",
    },
    
]