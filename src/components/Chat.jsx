import { useState } from 'react';
import { BsChatRightDots } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { Box, IconButton, Typography, Paper, Card, CardContent } from '@mui/material';



const Chat = () => {
    const [isOpen, setIsOpen] = useState(false);



    const toggleChat = () => {
        setIsOpen(!isOpen);
    };




    return (
        <Box position="fixed" bottom={16} right={16}>
            {!isOpen && (
                <div className='flex gap-2'>
                    <Card elevation={0}>

                        <CardContent sx={{ p: 1 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: "bolder" }}>
                                Hey There!
                            </Typography>
                            <Typography variant="body2" color="initial">
                                How can I help you today?
                            </Typography>
                        </CardContent>
                    </Card>
                    <IconButton
                        onClick={toggleChat}
                        sx={{
                            backgroundColor: 'white',
                            p: 2,
                            height: 66,
                            marginTop: 1.7,

                            borderRadius: '50%',
                            '&:hover': {
                                backgroundColor: 'white',
                            },
                        }}
                    >
                        <BsChatRightDots size={24} />
                    </IconButton>
                </div>
            )}

            {isOpen && (
                <Paper elevation={0} sx={{ mt: 1, width: 356, height: 400, backgroundColor: "blue", borderRadius: "1rem", overflow: "hidden", border: "none", }}>
                    <Box sx={{ position: "relative", height: "100%", overflow: "hidden" }}>
                        <IconButton
                            onClick={toggleChat}
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                },
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                zIndex: 1,
                            }}
                        >
                            <AiOutlineClose />
                        </IconButton>
                        <Box sx={{ p: 3, backgroundColor: "white", width: "100%", height: "100%", display: "flex", flexDirection: "column", overflowY: "auto", mt: 4 }}>
                            {Array.from({ length: 10 }).map((_, index) => (
                                <Typography sx={{ overflow: "hidden" }} key={index} variant="body1" className='bg-slate-100 p-12' color="initial">
                                    part{index + 1}
                                </Typography>
                            ))}
                        </Box>
                    </Box>
                </Paper>


            )}
        </Box>
    );
};

export default Chat;
