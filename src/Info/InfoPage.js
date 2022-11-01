import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';

export default function InfoPage() {
    return (
        <Grid
            container
            height="100vh"
            justifyContent="center"
            alignItems="center"
        >
            <Container>
                <Card>
                    <CardContent>
                        <Typography variant="heading3" component="div" sx={{ pb: 2 }}>
                            Developed by <Link href="https://www.twitch.tv/fourers">Fourers</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ pb: 2 }}>
                            To use these overlays in OBS, add the url as a Browser Source.
                        </Typography>
                        <Typography variant="body2" sx={{ pb: 2 }}>
                            Source code can be found on <Link href="https://github.com/fourers/twitch-overlays">GitHub</Link>.
                        </Typography>
                        <Grid container justifyContent="center" width="100%">
                            <Stack direction="column">
                                <Typography variant="heading4" align="center" sx={{ pb: 1 }}>Available Overlays</Typography>
                                <Stack direction="row">
                                    <Button href="#/wl-poll">W-L Poll</Button>
                                    <Button href="#/hearts">Hearts</Button>
                                    <Button href="#/hearts4">Hearts4</Button>
                                    <Button href="#/submissions">Submissions</Button>
                                </Stack>
                            </Stack>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </Grid>
    );
}