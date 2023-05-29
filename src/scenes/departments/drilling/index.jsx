import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material"
import Header from "../../../components/Header"

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'fileName', headerName: 'File Name', sortable: true, width: 130 },
  { field: 'modifiedTime', headerName: 'Modified Time', width: 130 },
  { field: 'modifiedDate', headerName: 'Modified Date', width: 130 },
  { field: 'modifiedBy', headerName: 'Modified By', width: 130 },
];

const rows = [
  { id: 1, fileName: 'Drilling BPR', modifiedTime: new Date().toLocaleTimeString(), modifiedDate: new Date().toLocaleDateString(), modifiedBy: 'User',  },
];

const Drilling = () => {
  const functionName = 'Drilling' 

  return (
    <Box m="20px">
      <Header
        title={`${functionName} BPR Template`}
        subtitle={`Current ${functionName} BPR Template 2023`}
      />
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
    </div>
    </Box>
  )
}

export default Drilling





