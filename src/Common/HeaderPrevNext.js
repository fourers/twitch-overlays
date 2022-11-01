import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

export default function HeaderPrevNext({ isBottom, handlePrev, disablePrev, handleNext, disableNext }) {
    const appBarPosition = isBottom ? "fixed" : "static";
    const appBarSx = isBottom ? { top: 'auto', bottom: 0 } : {};
    return (
        <AppBar position={appBarPosition} sx={appBarSx}>
            <Container>
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1 }}>
                        <Button
                            color="inherit"
                            onClick={handlePrev}
                            disabled={disablePrev}
                        >
                            {"Previous"}
                        </Button>
                    </Box>
                    <Button
                        color="inherit"
                        onClick={handleNext}
                        disabled={disableNext}
                    >
                        {"Next"}
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
}