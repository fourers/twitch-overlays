import { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";

import Icon from '@mdi/react';
import { mdiHeart, mdiHeartHalfFull, mdiHeartOutline } from '@mdi/js';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const DEFAULT_HEARTS = 3

export function getHeartIcon(value) {
    return value === 0 ? (
        <Icon path={mdiHeart} size={4}/>
    ) : value === 1 ? (
        <Icon path={mdiHeartOutline} size={4}/>
    ) : (
        <Icon path={mdiHeartHalfFull} size={4}/>
    );
}

export function getNumberOfHearts(searchParams) {
    const numberOfHearts = Number.parseInt(searchParams.get("hearts"));
    if (Number.isInteger(numberOfHearts) && numberOfHearts > 0) {
        return numberOfHearts;
    }
    return DEFAULT_HEARTS;
}

export function getIndexArray(count) {
    const array = [];
    for (let i = 0; i < count; i++) {
        array.push(i.toString());
    }
    return array;
}

export default function HeartsOverlay() {
    const [searchParams] = useSearchParams();

    const numberOfHearts = getNumberOfHearts(searchParams);
    const heartArray = getIndexArray(numberOfHearts);
    const initialHeartState = heartArray.reduce((prev, curr) => {
        return {...prev, [curr]: 0};
    }, {});

    const [heartState, setHeartState] = useState(initialHeartState);

    useEffect(() => {
        setHeartState(initialHeartState);
    }, [numberOfHearts]);

    const handleClick = (event) => {
        const eventIndex = event.nativeEvent.path.reduce((prev, curr) => prev !== null ? prev : curr.id.length > 0 ? curr.id : null, null);
        if (eventIndex !== null) {
            setHeartState((prev) => {
                return {...prev, [eventIndex]: (prev[eventIndex] + 1) % 3};
            });
        }
    };
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            height="100vh"
            sx={{ p: 3 }}
        >
            <Grid
                container
                justifyContent="center"
            >
                {
                    heartArray.map((heartIndex) => {
                        return (
                            <Box id={heartIndex} key={heartIndex} onClick={handleClick}>
                                {getHeartIcon(heartState[heartIndex])}
                            </Box>
                        );
                    })
                }
            </Grid>
        </Grid>
    );
}