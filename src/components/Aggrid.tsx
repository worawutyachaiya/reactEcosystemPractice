import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { useState, useRef, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
// import type GridApi from 'ag-grid-community'; // หากต้องการใช้ GridApi โดยตรง
// import type ColumnApi from 'ag-grid-community'; // หากต้องการใช้ ColumnApi โดยตรง

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

// 1. กำหนด Type สำหรับข้อมูลแถว (Row Data)
interface IRow {
    Name: string;
    Age: number;
    Grade: number;
}

const Aggrid = () => {
    // 2. ใช้ useRef พร้อม Generic Type: AgGridReact<IRow>
    // การใช้ null | AgGridReact<IRow> ทำให้ TypeScript รู้ว่า ref จะถูกกำหนดค่าเมื่อคอมโพเนนต์ถูกเมาท์
    const gridRef = useRef<AgGridReact<IRow> | null>(null);

    const [rowData, setRowData] = useState<IRow[]>([
        { Name: "fork", Age: 21, Grade: 1 },
        { Name: "fork", Age: 21, Grade: 2 },
        { Name: "fork", Age: 21, Grade: 3 },
        { Name: "fork", Age: 21, Grade: 4 },
        { Name: "fork", Age: 21, Grade: 5 },
        { Name: "fork", Age: 21, Grade: 6 },
        { Name: "fork", Age: 21, Grade: 7 },
        { Name: "fork", Age: 21, Grade: 8 },
        { Name: "fork", Age: 21, Grade: 9 },
        { Name: "fork", Age: 21, Grade: 10 },
        { Name: "fork", Age: 21, Grade: 11 },
        { Name: "fork", Age: 21, Grade: 12 },
        { Name: "fork", Age: 21, Grade: 13 },
        { Name: "fork", Age: 21, Grade: 14 },
        { Name: "fork", Age: 21, Grade: 15 },
        { Name: "fork", Age: 21, Grade: 16 },
        { Name: "fork", Age: 21, Grade: 17 },
        { Name: "fork", Age: 21, Grade: 18 },
        { Name: "fork", Age: 21, Grade: 19 },
        { Name: "fork", Age: 21, Grade: 20 },
    ]);

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState([
        { field: "Name" as const },
        { field: "Age" as const },
        { field: "Grade" as const },
    ]);

    const onBtnExport = useCallback(() => {
        // 3. การเข้าถึง API จะปลอดภัยและมี Type ที่ถูกต้อง
        if (gridRef.current && gridRef.current.api) {
            // TypeScript จะรู้ว่า gridRef.current.api คือ GridApi และมีเมธอด exportDataAsCsv()
            gridRef.current.api.exportDataAsCsv();
        }
    }, []);

    return (
        <div className='h-dvh p-4'>
            <button onClick={onBtnExport} className='mb-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
                Export to CSV
            </button>
            
            <div className='ag-theme-alpine' style={{ height: 'calc(100% - 40px)', width: '100%' }}>
                <AgGridReact
                    ref={gridRef}
                    rowData={rowData}
                    columnDefs={colDefs}
                    defaultColDef={{ sortable: true, filter: true, flex: 1 }}
                    pagination={true}
                    paginationPageSize={15}
                />
            </div>
        </div>
    )
}

export default Aggrid;