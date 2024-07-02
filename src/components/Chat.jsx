import { useState } from 'react';
import { BsChatRightDots } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { Box, IconButton, Typography, Paper } from '@mui/material';

const Chat = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Box position="fixed" bottom={16} right={16}>
            {!isOpen && (
                <IconButton
                    onClick={toggleChat}
                    sx={{
                        backgroundColor: 'white',
                        p: 2,

                        borderRadius: '50%',
                        '&:hover': {
                            backgroundColor: 'white',
                        },
                    }}
                >
                    <BsChatRightDots size={24} />
                </IconButton>
            )}

            {isOpen && (
                <Paper elevation={3} sx={{ p: 2, mt: 1, width: 356, height: 400 }}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography>Hello</Typography>
                        <IconButton
                            onClick={toggleChat}
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                },
                            }}
                        >
                            <AiOutlineClose />
                        </IconButton>
                    </Box>
                </Paper>
            )}
        </Box>
    );
};

export default Chat;
