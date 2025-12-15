// src/app/about/page.tsx
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { myCustomFont } from '../../styles/fonts'; // Import the custom font

export default function About() {
    return (
        <Container maxWidth="md">
            <Box className="flex flex-col justify-center items-center min-h-screen text-center">
                
                {/* 'font-bold' has been removed from the className list */}
                <Typography 
                    variant="h2" 
                    component="h1" 
                    gutterBottom 
                    fontWeight={"bold"}
                    className={`${myCustomFont.className} text-blue-600 drop-shadow-lg`}
                >
                    About Us (with Custom Font)
                </Typography>
                <Typography variant="body1" paragraph>
                    The title is now bold.
                </Typography>
                
                <Stack direction="row" spacing={2}>
                    <Button variant="contained">Contained</Button>
                    <Button variant="outlined">Outlined</Button>
                    <Button variant="text" className="hover:bg-gray-200">Text (with Tailwind Hover)</Button>
                </Stack>
            </Box>
        </Container>
    );
}
