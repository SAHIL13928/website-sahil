import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';



const HeroSection = () => {
    return (
        <Box
            id="hero"
            sx={() => ({
                width: '100%',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            })}
        >
            {/* <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',

                    pt: { xs: 14, sm: 20 },
                    pb: { xs: 8, sm: 12 },
                }}
            >
                <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
                    <Typography
                        variant="h1"

                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            color: "black",

                            fontSize: 'clamp(3.5rem, 10vw, 4rem)',
                        }}
                    >
                        Welcome To Website
                        <Typography
                            component="span"
                            variant="h1"
                            sx={{
                                fontSize: 'clamp(3rem, 10vw, 4rem)',
                                color: (theme) =>
                                    theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                            }}
                        >

                        </Typography>
                    </Typography>
                    <Typography
                        textAlign="center"
                        color="text.secondary"
                        sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nobis quam earum a natus. Dolor voluptate labore illum deleniti rem.
                    </Typography>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        alignSelf="center"
                        spacing={2}
                        useFlexGap
                        sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
                    >
                        <TextField
                            id="outlined-basic"
                            fullWidth
                            hiddenLabel
                            sx={{ width: "28rem" }}
                            variant="outlined"
                            aria-label="Enter your email address"
                            placeholder="Your email address"
                        />
                        <Button disableElevation sx={{ width: "8rem", }} variant="contained" color="primary">
                            Start now
                        </Button>
                    </Stack>
                </Stack>
            </Container> */}
        </Box>
    );
};

export default HeroSection;
