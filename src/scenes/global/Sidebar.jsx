import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined'; // Drilling
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined'; // Finance
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined'; // General Services
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined'; // HR
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined'; // HSSE
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined'; // IT
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined'; // Legal
import AssuredWorkloadOutlinedIcon from '@mui/icons-material/AssuredWorkloadOutlined'; // President Office
import OilBarrelOutlinedIcon from '@mui/icons-material/OilBarrelOutlined'; // Production
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined'; // PSCM
import LandscapeOutlinedIcon from '@mui/icons-material/LandscapeOutlined'; // Sub Surface
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined'; // Surface Facilities
import PropaneOutlinedIcon from '@mui/icons-material/PropaneOutlined'; // Well Services

import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined" // Login
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined" // Register

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMIN PANEL
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Oday
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Planning Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Departments
            </Typography>
            <Item
              title="Drilling"
              to="/drilling"
              icon={<PrecisionManufacturingOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Finance"
              to="/finance"
              icon={<AccountBalanceOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="General Services"
              to="/general-services"
              icon={<ConstructionOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="HR"
              to="/hr"
              icon={<Groups2OutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="HSSE"
              to="/hsse"
              icon={<HealthAndSafetyOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="IT"
              to="/it"
              icon={<DevicesOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Legal"
              to="/legal"
              icon={<GavelOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="President Office"
              to="/president-office"
              icon={<AssuredWorkloadOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Production"
              to="/production"
              icon={<OilBarrelOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="PSCM"
              to="/pscm"
              icon={<InventoryOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Sub Surface"
              to="/sub-surface"
              icon={<LandscapeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Surface Facilities"
              to="/surface-facilities"
              icon={<EngineeringOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Well Services"
              to="/well-services"
              icon={<PropaneOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Account
            </Typography>
            <Item
              title="Login"
              to="/login"
              icon={<LoginOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Register"
              to="/register"
              icon={<HowToRegOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {/* <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  )
};

export default Sidebar;
