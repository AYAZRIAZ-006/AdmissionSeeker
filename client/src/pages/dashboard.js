import React, { useState } from "react"
// import Navbar from "./components/Navbar"
import NavBar from "../components/Navbar";
// import Sidebar from "./components/Sidebar"
import Sidebar from "../components/SideBar";
// import Feed from "./components/Feed"
import Feed from "../components/feed";
// import Rightbar from "./components/Rightbar"
import Rightbar from "../components/rightBar";
// import MyFab from "./components/widgets/MyFab"

//mui stuff

import { createTheme, Stack, Box, ThemeProvider } from "@mui/material"

const Dashboard = () => {
  const [mode, setMode] = useState("light")
  const toogleThemeMode = () => setMode(mode === "light" ? "dark" : "light")

  const theme = createTheme({
    palette: {
      mode,
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavBar />
        <Stack direction='row' justifyContent='space-between' gap='10px'>
          <Sidebar toogleThemeMode={toogleThemeMode} themeMode={mode} />
          <Feed />
          <Rightbar />
        </Stack>

        {/* <MyFab /> */}
      </Box>
    </ThemeProvider>
  )
}

export default Dashboard;