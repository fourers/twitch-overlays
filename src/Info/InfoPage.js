import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
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
                            Developed by @Fourers
                        </Typography>
                        <Typography variant="body2">
                            To use this overlay in OBS, add the url as a Browser Source
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </Grid>
    );
}