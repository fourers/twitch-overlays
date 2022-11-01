import { useState } from 'react';
import { useSearchParams } from "react-router-dom";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import { getHeartIcon, getIndexArray, getNumberOfHearts } from './HeartsOverlay';

export default function HeartsOverlay4() {
    const [searchParams] = useSearchParams();
    const numberOfHearts = getNumberOfHearts(searchParams);
    const indexArray = getIndexArray(numberOfHearts);
    const initialHeartState = indexArray.reduce((prev, curr) => {
        return {...prev, [`a${curr}`]: 0, [`b${curr}`]: 0, [`c${curr}`]: 0, [`d${curr}`]: 0};
    }, {});

    const [heartState, setHeartState] = useState(initialHeartState);
    const handleClick = (event) => {
        const eventIndex = event.nativeEvent.path.reduce((prev, curr) => prev !== null ? prev : curr.id.length > 0 ? curr.id : null, null);
        if (eventIndex !== null) {
            setHeartState((prev) => {
                return {...prev, [eventIndex]: (prev[eventIndex] + 1) % 3};
            });
        }
    };
    return (
        <Stack
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            height="100vh"
            sx={{ p: 3 }}
        >
            <Stack direction="row" width="100%">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container>
                        {
                            indexArray.map((index) => {
                                const sectionIndex = `a${index}`;
                                return (
                                    <Box id={sectionIndex} key={sectionIndex} onClick={handleClick}>
                                        {getHeartIcon(heartState[sectionIndex])}
                                    </Box>
                                );
                            })
                        }
                    </Grid>
                </Box>
                <Box>
                    <Grid container justifyContent="right">
                        {
                            indexArray.map((index) => {
                                const sectionIndex = `b${index}`;
                                return (
                                    <Box id={sectionIndex} key={sectionIndex} onClick={handleClick}>
                                        {getHeartIcon(heartState[sectionIndex])}
                                    </Box>
                                );
                            })
                        }
                    </Grid>
                </Box>
            </Stack>
            <Stack direction="row" width="100%">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container alignItems="end">
                        {
                            indexArray.map((index) => {
                                const sectionIndex = `c${index}`;
                                return (
                                    <Box id={sectionIndex} key={sectionIndex} onClick={handleClick}>
                                        {getHeartIcon(heartState[sectionIndex])}
                                    </Box>
                                );
                            })
                        }
                    </Grid>
                </Box>
                <Box>
                    <Grid container justifyContent="right" alignItems="end">
                        {
                            indexArray.map((index) => {
                                const sectionIndex = `d${index}`;
                                return (
                                    <Box id={sectionIndex} key={sectionIndex} onClick={handleClick}>
                                        {getHeartIcon(heartState[sectionIndex])}
                                    </Box>
                                );
                            })
                        }
                    </Grid>
                </Box>
            </Stack>
        </Stack>
    );
}