import { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";

import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import HeaderPrevNext from '../Common/HeaderPrevNext';
import SubmissionsComponent from './SubmissionsComponent';

import data from './data.json'

function getInitialIndex(searchParams) {
    const indexNumber = Number.parseInt(searchParams.get("index"));
    if (Number.isInteger(indexNumber) && indexNumber >= 0 && indexNumber < data.length) {
        return indexNumber;
    }
    return 0;
}

export default function SubmissionsOverlay() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [index, setIndex] = useState(getInitialIndex(searchParams));

    useEffect(() => setSearchParams({"index": index}), [index]);

    const handlePrev = () => {
        setIndex((previousValue) => Math.max(0, previousValue - 1));
    };
    const handleNext = () => {
        setIndex((previousValue) => Math.min(data.length - 1, previousValue + 1));
    };

    return (
        <>
            <HeaderPrevNext
                isBottom={true}
                handlePrev={handlePrev}
                disablePrev={index <= 0}
                handleNext={handleNext}
                disableNext={index >= data.length - 1}
            />
            <Grid
                container
                minHeight="50vh"
                justifyContent="center"
                alignItems="end"
            >
                <Container>
                    <SubmissionsComponent
                        index={index}
                    />
                </Container>
            </Grid>
        </>
    );
}