import { Route, Routes } from "react-router-dom";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import HeartsOverlay from "./Hearts/HeartsOverlay";
import HeartsOverlay4 from "./Hearts/HeartsOverlay4";
import InfoPage from "./Info/InfoPage";
import SubmissionsOverlay from "./Submissions/SubmissionsOverlay";
import PollOverlay from "./WLPoll/PollOverlay";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline enableColorScheme/>
        <Routes>
            <Route path="/hearts/*" element={
                <HeartsOverlay />
            }/>
            <Route path="/hearts4/*" element={
                <HeartsOverlay4 />
            }/>
            <Route path="/submissions/*" element={
                <SubmissionsOverlay />
            }/>
            <Route path="/wl-poll/*" element={
                <PollOverlay />
            }/>
            <Route path="*" element={
                <InfoPage />
            }/>
        </Routes>
    </ThemeProvider>
  );
}

export default App;
