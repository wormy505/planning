import React from "react"
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material"
import Header from "../../../components/Header"

const Finance = () =>  {
  const functionName = 'Finance' 

  return (
    <Box m="20px">
      <Header
        title={`${functionName} BPR Template`}
        subtitle={`Current ${functionName} BPR Template 2023`}
      />
    </Box>
  )
}

export default Finance