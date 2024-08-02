import { useState } from 'react';
import { BsChatRightDots } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { Box, IconButton, Typography, Paper, Card, CardContent, TextField } from '@mui/material';
import { LuSend } from "react-icons/lu";




const Chat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);




    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleSendMessage = (e) => {
        if (message.trim()) {
            setMessages([...messages, message]);
            setMessage("");
        }

    }



    return (
        <Box position="fixed" bottom={16} right={24}>
            {!isOpen && (
                <div className='flex gap-2'>
                    <Card sx={{ border: "1px solid #EBF1F0", bgcolor: "#EBF1F0" }}>
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
                            boxShadow: 3,
                            '&:hover': {
                                backgroundColor: 'white',
                            },
                        }}
                    >
                        <BsChatRightDots size={24} style={{ color: "blue", fontWeight: "bolder" }} />
                    </IconButton>
                </div>

            )}

            {isOpen && (
                <Paper elevation={0} sx={{ mt: 1, width: 400, height: 450, backgroundColor: "blue", borderRadius: "1rem", overflow: "hidden", border: "none", mr: 2 }}>
                    <Box sx={{ position: "relative", height: "100%", overflow: "hidden" }}>
                        <IconButton
                            onClick={toggleChat}
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                },
                                position: 'absolute',
                                display: 'flex',
                                alignItems: 'center',
                                top: 0,
                                right: 0,
                                zIndex: 1,
                            }}
                        >
                            <AiOutlineClose />
                        </IconButton>
                        <Box sx={{ p: 3, backgroundColor: "white", width: "100%", height: "100%", display: "flex", flexDirection: "column", overflowY: "auto", marginY: 6, gap: 2 }}>
                            {/* <p>logo</p> */}
                            <Typography variant="body1" className='bg-slate-100 py-4 px-2 rounded-r-xl rounded-b-xl   ' color="initial">
                                How can we help you today?
                            </Typography>
                            {messages.map((msg, index) => (
                                <Typography key={index} variant="body1" className='bg-slate-100 py-4 px-2 rounded-r-xl rounded-b-xl' color="initial">
                                    {msg}
                                </Typography>
                            ))}
                            {/* {Array.from({ length: 20 }).map((_, index) => (
                                <Typography key={index} variant="body1" className='bg-slate-100 py-4 px-2 rounded-r-xl rounded-b-xl   ' color="initial">
                                    part{index + 1}
                                </Typography>
                            ))} */}

                        </Box>

                    </Box>
                    <div className='mb-8 mt flex items-center gap-2 cursor-pointer  sticky bottom-0 bg-blue-700  '>
                        <TextField
                            className='w-[90%]'
                            id=""
                            placeholder="Enter your message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}

                        />
                        <LuSend onClick={handleSendMessage} />

                    </div>
                </Paper>



            )}

        </Box>
    );
};

export default Chat;
