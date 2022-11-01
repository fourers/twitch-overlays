import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { createTwitchClient, closeTwitchClient } from './TwitchClient';

const defaultChannel = "KaiCenat";

function calculateAnswers(answers) {
    const allAnswers = Object.entries(answers).map(([k, v]) => v);
    return allAnswers.reduce((total, value) => {
        if (value in total) {
            total[value]++;
        } else {
            total[value] = 1;
        }
        return total;
    }, {});
}

export default function PollOverlay() {
    const { "*": channelName } = useParams();
    const channel = channelName || defaultChannel;

    const [chatClient, setChatClient] = useState(null);
    const [answers, setAnswers] = useState({});

    useEffect(() => {
        createTwitchClient(channel, setChatClient, setAnswers);
        return () => {
            closeTwitchClient(chatClient);
        }
    }, []);

    const clearAnswers = () => setAnswers({});

    const calculatedAnswers = calculateAnswers(answers);
    const aCount = calculatedAnswers.W || 0;
    const bCount = calculatedAnswers.L || 0;
    const total = aCount + bCount;
    const aPercentage = Math.round((aCount / total * 100) * 100) / 100 || 0;
    const bPercentage = (total > 0) ? Math.round((100 - aPercentage) * 100) / 100 : 0;

    return (
        <Grid
            container
            height="100vh"
            justifyContent="center"
            alignItems="center"
            sx={{ p: 3 }}
        >
            <Stack gap={1} width="100%" sx={{ mb: 1 }}>
                <Box>
                    <Stack direction="row">
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Grid item>
                                <Stack
                                    direction="row"
                                    divider={<Divider orientation="vertical" flexItem />}
                                    gap={1}
                                >
                                    <Typography variant="subtitle1">W</Typography>
                                    <Typography variant="subtitle1">{`${aCount}/${total}`}</Typography>
                                    <Typography variant="subtitle1">{`${aPercentage.toFixed(2)}%`}</Typography>
                                </Stack>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">{`twitch.tv/${channel}`}</Typography>
                            </Grid>
                            <Grid item>
                                <Stack
                                    direction="row"
                                    divider={<Divider orientation="vertical" flexItem />}
                                    gap={1}
                                >
                                    <Typography variant="subtitle1">{`${bPercentage.toFixed(2)}%`}</Typography>
                                    <Typography variant="subtitle1">{`${bCount}/${total}`}</Typography>
                                    <Typography variant="subtitle1">L</Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Stack>
                </Box>
                <LinearProgress
                    variant="determinate"
                    color="success"
                    value={aPercentage}
                    onClick={clearAnswers}
                    sx={
                        {
                            height: 10,
                            borderRadius: 5,
                            backgroundColor: (theme) => (total > 0) ? theme.palette.error.light : theme.palette.grey[600],
                        }
                    }
                />
            </Stack>
        </Grid>
    );
}