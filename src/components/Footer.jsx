import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';

const logoStyle = {
    width: '140px',
    height: 'auto',
};

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" mt={1}>
            {'Copyright © '}
            <Link href="https://mui.com/">Sitemark&nbsp;</Link>
            {new Date().getFullYear()}
        </Typography>
    );
}

export default function Footer() {
    return (
        <Container
            maxWidth={false}
            disableGutters
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'stretch',
                textAlign: { sm: 'center', md: 'left' },
                padding: 0,
                width: '100%',
            }}
        >
            {/* Left Section */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 1, sm: 1 }, // Reduce the gap between elements
                    py: { xs: 4, sm: 5 }, // Reduce the padding
                    backgroundColor: 'darkblue',
                    color: 'white',
                    width: '50%',
                    padding: 2,
                    
                }}
            >
                <Box sx={{ ml: '-15px' }}>
                    <img
                        src={
                            'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg'
                        }
                        style={logoStyle}
                        alt="logo of sitemark"
                    />
                </Box>
                <Typography variant="body2" fontWeight={600} gutterBottom>
                    Newsletter
                </Typography>
                <Typography variant="body2" color="inherit" mb={1}>
                    Subscribe to our newsletter for weekly updates and promotions.
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap>
                    <TextField
                        id="outlined-basic"
                        hiddenLabel
                        size="small"
                        variant="outlined"
                        fullWidth
                        aria-label="Enter your email address"
                        placeholder="Your email address"
                        inputProps={{
                            autoComplete: 'off',
                            'aria-label': 'Enter your email address',
                        }}
                        sx={{ backgroundColor: 'white' }}
                    />
                    <Button variant="contained" color="primary" sx={{ flexShrink: 0 }}>
                        Subscribe
                    </Button>
                </Stack>
            </Box>
            {/* Right Section */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 2, sm: 3 }, 
                    py: { xs: 4, sm: 5 }, 
                    backgroundColor: 'white',
                    width: '50%',
                    padding: 2,
                   
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        width: '100%',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'flex' },
                            flexDirection: 'column',
                            gap: 1,
                        }}
                    >
                        <Typography variant="body2" fontWeight={600}>
                            Product
                        </Typography>
                        <Link color="text.secondary" href="#">
                            Features
                        </Link>
                        <Link color="text.secondary" href="#">
                            Testimonials
                        </Link>
                        <Link color="text.secondary" href="#">
                            Highlights
                        </Link>
                        <Link color="text.secondary" href="#">
                            Pricing
                        </Link>
                        <Link color="text.secondary" href="#">
                            FAQs
                        </Link>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'flex' },
                            flexDirection: 'column',
                            gap: 1,
                        }}
                    >
                        <Typography variant="body2" fontWeight={600}>
                            Company
                        </Typography>
                        <Link color="text.secondary" href="#">
                            About us
                        </Link>
                        <Link color="text.secondary" href="#">
                            Careers
                        </Link>
                        <Link color="text.secondary" href="#">
                            Press
                        </Link>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'flex' },
                            flexDirection: 'column',
                            gap: 1,
                        }}
                    >
                        <Typography variant="body2" fontWeight={600}>
                            Legal
                        </Typography>
                        <Link color="text.secondary" href="#">
                            Terms
                        </Link>
                        <Link color="text.secondary" href="#">
                            Privacy
                        </Link>
                        <Link color="text.secondary" href="#">
                            Contact
                        </Link>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        pt: { xs: 2, sm: 3 }, // Reduce the padding top
                        width: '100%',
                        borderTop: '1px solid',
                        borderColor: 'divider',
                    }}
                >
                    <div>
                        <Link color="text.secondary" href="#">
                            Privacy Policy
                        </Link>
                        <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
                            &nbsp;•&nbsp;
                        </Typography>
                        <Link color="text.secondary" href="#">
                            Terms of Service
                        </Link>
                        <Copyright />
                    </div>
                    <Stack
                        direction="row"
                        justifyContent="left"
                        spacing={1}
                        useFlexGap
                        sx={{
                            color: 'text.secondary',
                        }}
                    >
                        <IconButton
                            color="inherit"
                            href="https://github.com/mui"
                            aria-label="GitHub"
                            sx={{ alignSelf: 'center' }}
                        >
                            <FacebookIcon />
                        </IconButton>
                        <IconButton
                            color="inherit"
                            href="https://x.com/MaterialUI"
                            aria-label="X"
                            sx={{ alignSelf: 'center' }}
                        >
                            <TwitterIcon />
                        </IconButton>
                        <IconButton
                            color="inherit"
                            href="https://www.linkedin.com/company/mui/"
                            aria-label="LinkedIn"
                            sx={{ alignSelf: 'center' }}
                        >
                            <LinkedInIcon />
                        </IconButton>
                    </Stack>
                </Box>
            </Box>
        </Container>
    );
}
