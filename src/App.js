import { useState } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Topbar from "./scenes/global/Topbar"
import Sidebar from "./scenes/global/Sidebar"
import Dashboard from "./scenes/dashboard"
import Team from "./scenes/team"
import Invoices from "./scenes/invoices"
import Contacts from "./scenes/contacts"
import Bar from "./scenes/bar"
import Form from "./scenes/form"
import Line from "./scenes/line"
import Pie from "./scenes/pie"
import FAQ from "./scenes/faq"
import Geography from "./scenes/geography"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { ColorModeContext, useMode } from "./theme"
import Calendar from "./scenes/calendar/calendar"
import Login from "./scenes/login"
import Register from "./scenes/register"
import { AuthProvider, useAuth } from "./util/Authenticate"
// Departments Imports
import Drilling from "./scenes/departments/drilling"
import Finance from "./scenes/departments/finance"
import HSSE from "./scenes/departments/HSSE"
import HR from "./scenes/departments/HR"
import IT from "./scenes/departments/IT"
import Legal from "./scenes/departments/legal"
import PresidentOffice from "./scenes/departments/presidentOffice"
import Production from "./scenes/departments/production"
import PSCM from "./scenes/departments/PSCM"
import SubSurface from "./scenes/departments/subSurface"
import SurfaceFacilities from "./scenes/departments/surfaceFacilities"
import WellServices from "./scenes/departments/wellServices"
import GeneralServices from "./scenes/departments/generalServices"


const App = () => {
  const [theme, colorMode] = useMode()
  const [isSidebar, setIsSidebar] = useState(true)

  return (
    <AuthProvider>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar isSidebar={isSidebar} />
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar} />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/geography" element={<Geography />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                //Departments
                <Route path="/drilling" element={<Drilling />} />
                <Route path="/finance" element={<Finance />} />
                <Route path="/general-services" element={<GeneralServices />} />
                <Route path="/HR" element={<HR />} />
                <Route path="/HSSE" element={<HSSE />} />
                <Route path="/IT" element={<IT />} />
                <Route path="/legal" element={<Legal />} />
                <Route path="/president-office" element={<PresidentOffice />} />
                <Route path="/production" element={<Production />} />
                <Route path="/PSCM" element={<PSCM />} />
                <Route path="/sub-surface" element={<SubSurface />} />
                <Route path="/surface-facilities" element={<SurfaceFacilities />} />
                <Route path="/well-services" element={<WellServices />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </AuthProvider>
  )
}

export default App
