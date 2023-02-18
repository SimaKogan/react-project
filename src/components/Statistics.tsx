import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { Box, Typography } from '@mui/material'
import { Stat } from "../service/EmployeesService";
import React from "react";
import "./statTabel.css";
type Props = {
    title: string;
    gridProps: Stat;
}

export const Statistics: React.FC<Props> = ({ title, gridProps }) => {
    const fieldName: Array<string> = Object.keys(gridProps);
    const columns = React.useRef<GridColDef[]>([
        { field: fieldName[0],  headerName: 'Minimal Value',  headerClassName: 'header', headerAlign: "center",
    flex: 1, cellClassName: "cell",  align: "center"},
        { field: fieldName[1], headerClassName: 'header', headerName: 'Maximal Value', headerAlign: "center", 
        flex: 1, cellClassName: "cell", align: "center" },
        { field: fieldName[2], headerClassName: 'header', headerName: 'Average Value', headerAlign: "center", 
        flex: 1, cellClassName: "cell", align: "center" }
    ])
    const rows = React.useRef<GridRowsProp>([
        { id: 1, ...gridProps }
    ])
    return <Box sx={{ height: "40vh", width: '40vw' }}>
        <Typography sx={{ textAlign: "center", fontSize: "2em", fontWeight: "bold", marginBottom:"3vh", color: 'info.main' }}>{title}</Typography>
        <DataGrid  columns={columns.current} rows={rows.current}   />
    </Box>

}