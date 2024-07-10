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
            <Container
                sx={{
                    display: 'flex',


                    pt: { xs: 14, sm: 20 },
                    pb: { xs: 8, sm: 12 },
                }}
            >
                <Stack sx={{ width: "50%" }}>
                    <Typography
                        variant="h1"

                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            color: "black",

                            fontSize: 'clamp(3.5rem, 10vw, 4rem)',
                        }}
                    >
                        Welcome To
                        <Typography
                            component="span"
                            variant="h1"
                            sx={{
                                fontSize: 'clamp(3rem, 10vw, 4rem)',
                                color: (theme) =>
                                    theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                                ml: "12px"
                            }}
                        >
                            Website
                        </Typography>
                    </Typography>
                    <Typography
                        textAlign="center"
                        color="text.secondary"
                        sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nobis quam earum a natus. Dolor voluptate labore illum deleniti.
                    </Typography>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        alignSelf="center"
                        spacing={2}
                        useFlexGap
                        sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
                    >
                        <TextField

                            fullWidth
                            hiddenLabel
                            sx={{
                                width: "35rem",
                                borderRadius: '1.4rem',
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '1.6rem',
                                }
                            }}

                            aria-label="Enter your email address"
                            placeholder="Your email address"
                        />
                        <Button disableElevation sx={{ width: "8rem", }} variant="contained" color="primary">
                            Start now
                        </Button>
                    </Stack>

                </Stack>

                <img src="./suit.jpg" alt="" className='w-[40vw] ml-32 h-[75vh]' />

            </Container>
        </Box>
    );
};

export default HeroSection;
