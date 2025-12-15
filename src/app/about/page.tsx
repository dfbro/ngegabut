// src/app/about/page.tsx
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

export default function About() {
    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    textAlign: 'center',
                }}
            >
                <Typography variant="h2" component="h1" gutterBottom>
                    About Us (with MUI)
                </Typography>
                <Typography variant="body1" paragraph>
                    Welcome! This page is now styled using Material-UI components. 
                    Here are some button variants:
                </Typography>
                <Stack direction="row" spacing={2}>
                    <Button variant="contained">Contained</Button>
                    <Button variant="outlined">Outlined</Button>
                    <Button variant="text">Text</Button>
                </Stack>
            </Box>
        </Container>
    );
}
