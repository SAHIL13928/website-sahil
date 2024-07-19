import { Box, Card, CardContent, List, ListItem, ListItemText, Container, Typography } from '@mui/material'


const ITReturns = () => {
    return (<div className='mt-32 h-full flex flex-col items-center py-6 px-16 '>
        <Typography variant="h5" sx={{ fontWeight: "700" }} color="initial">
            What is <span className='text-blue-600 font-bold '>Privated limited Company</span>?
        </Typography>
        <Box sx={{ display: "flex", marginTop: "4rem", alignItems: "center" }}>
            <img src="https://assets.vakilsearch.com/live-images/pvt-overview-logo.svg" className='w-[16vw]' alt="" />
            <Typography variant="body1" color="initial">
                A Private Limited Company (Pvt Ltd) in India is a type of business structure that is privately held and offers limited liability to its shareholders. It is governed by the Companies Act, 2013, and its establishment and functioning are regulated by the Ministry of Corporate Affairs (MCA).
            </Typography>
        </Box>

        <Box sx={{ marginTop: "4rem" }}>
            <Typography variant="h5" sx={{ fontWeight: "700" }} color="initial">Features of a <span className='text-blue-600 font-bold'> Private Limited Company </span></Typography>
        </Box>
        <div className='flex w-full gap-6 mt-16'>
            <Card sx={{ display: "flex", alignItems: "center", flexDirection: "column", padding: "1.2rem", backgroundColor: "lightblue", width: "30vw" }}>
                <img className='my-6' src="https://assets.vakilsearch.com/handshakeblue.svg" alt="placeholderImage" />
                <CardContent sx={{ display: "flex", alignItems: "center", flexDirection: "column", textAlign: "center" }}>
                    <Typography variant="h6" color="initial">Limited Liability</Typography>
                    <Typography variant="body1" color="initial">Shareholders liability is limited to their share capital.</Typography>

                </CardContent>

            </Card>
            <Card sx={{ display: "flex", alignItems: "center", flexDirection: "column", padding: "1.2rem", backgroundColor: "lightblue", width: "30vw" }}>
                <img className='my-6' src="https://assets.vakilsearch.com/handshakeblue.svg" alt="placeholderImage" />
                <CardContent sx={{ display: "flex", alignItems: "center", flexDirection: "column", textAlign: "center" }}>
                    <Typography variant="h6" color="initial">	Separate Legal Entity</Typography>
                    <Typography variant="body1" color="initial">It has its own legal identity, separate from its owners.</Typography>

                </CardContent>

            </Card>
            <Card sx={{ display: "flex", alignItems: "center", flexDirection: "column", padding: "1.2rem", backgroundColor: "lightblue", width: "30vw" }}>
                <img className='my-6' src="https://assets.vakilsearch.com/handshakeblue.svg" alt="placeholderImage" />
                <CardContent sx={{ display: "flex", alignItems: "center", flexDirection: "column", textAlign: "center" }}>
                    <Typography variant="h6" color="initial">Perpetual Succession</Typography>
                    <Typography variant="body1" color="initial">The company continues to exist beyond the lives of its shareholders.</Typography>

                </CardContent>

            </Card>
        </div>
        <div className='flex w-full gap-6 mt-16'>
            <Card sx={{ display: "flex", alignItems: "center", flexDirection: "column", padding: "1.2rem", backgroundColor: "lightblue", width: "30vw" }}>
                <img className='my-6' src="https://assets.vakilsearch.com/handshakeblue.svg" alt="placeholderImage" />
                <CardContent sx={{ display: "flex", alignItems: "center", flexDirection: "column", textAlign: "center" }}>
                    <Typography variant="h6" color="initial" sx={{ textAlign: "center" }}>Minimum and Maximum Number of Members</Typography>
                    <Typography variant="body1" color="initial">A minimum of 2 and a maximum of 200 members (excluding current and former employees).</Typography>

                </CardContent>

            </Card>
            <Card sx={{ display: "flex", alignItems: "center", flexDirection: "column", padding: "1.2rem", backgroundColor: "lightblue", width: "30vw" }}>
                <img className='my-6' src="https://assets.vakilsearch.com/handshakeblue.svg" alt="placeholderImage" />
                <CardContent sx={{ display: "flex", alignItems: "center", flexDirection: "column", textAlign: "center" }}>
                    <Typography variant="h6" color="initial">Restrictions on Share Transfer</Typography>
                    <Typography variant="body1" color="initial">Shares cannot be freely transferred and are typically restricted to maintain control within a small group of people.</Typography>

                </CardContent>

            </Card>
            <Card sx={{ display: "flex", alignItems: "center", flexDirection: "column", padding: "1.2rem", backgroundColor: "lightblue", width: "30vw" }}>
                <img className='my-6' src="https://assets.vakilsearch.com/handshakeblue.svg" alt="placeholderImage" />
                <CardContent sx={{ display: "flex", alignItems: "center", flexDirection: "column", textAlign: "center" }}>
                    <Typography variant="h6" color="initial" >No Minimum Paid-Up Capital Requirement</Typography>
                    <Typography variant="body1" color="initial" >As per the Companies Amendment Act, 2015, there is no minimum capital requirement to form a Private Limited Company.</Typography>

                </CardContent>

            </Card>
        </div>
        <Box sx={{ marginTop: "4rem" }}>
            <Typography variant="h5" sx={{ fontWeight: "700" }} color="initial">Incorporation Process</Typography>
        </Box>
        <div className='mt-8 flex justify-between w-full items-center    '>
            <img src="https://assets.vakilsearch.com/bluelap.svg" alt="" />
            <List >
                <ListItem alignItems="flex-start">
                    <ListItemText
                        primary={<Typography variant="h6">1. Digital Signature Certificate (DSC): Obtain DSC for all proposed directors.</Typography>}
                    />
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemText
                        primary={<Typography variant="h6">2. Director Identification Number (DIN): Apply for DIN for all proposed directors through SPICe+ (Simplified Proforma for Incorporating Company Electronically Plus) form.</Typography>}
                    />
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemText
                        primary={<Typography variant="h6">3. Name Reservation: Reserve the company name through the RUN (Reserve Unique Name) web service or through the SPICe+ form.</Typography>}
                    />
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemText
                        primary={<Typography variant="h6">4. Memorandum and Articles of Association (MoA and AoA): Draft and file MoA and AoA, which outline the company’s objectives and rules.</Typography>}
                    />
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemText
                        primary={<Typography variant="h6">5. SPICe+ Form: Complete and submit the SPICe+ form, which integrates the application for company incorporation, DIN allotment, PAN, TAN, EPFO, ESIC, GSTIN, and bank account opening.</Typography>}
                    />
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemText
                        primary={<Typography variant="h6">6. Incorporation Certificate: Upon approval, the RoC issues the Certificate of Incorporation along with a unique Corporate Identity Number (CIN).</Typography>}
                    />
                </ListItem>
            </List>


        </div>
        <Box sx={{ marginTop: "4rem" }}>
            <Typography variant="h5" sx={{ fontWeight: "700" }} color="initial">Advantages of a <span className='text-blue-600 font-bold'> Private Limited Company </span></Typography>
        </Box>
        <div className='flex w-full gap-6 mt-8'>
            <Card sx={{ display: "flex", alignItems: "center", flexDirection: "column", padding: "1.2rem", backgroundColor: "white", width: "33vw" }}>
                <img className='my-6' src="https://assets.vakilsearch.com/handshakeblue.svg" alt="placeholderImage" />
                <CardContent sx={{ display: "flex", alignItems: "center", flexDirection: "column", textAlign: "center" }}>
                    <Typography variant="h6" color="initial">Credibility and Trust</Typography>
                    <Typography variant="body1" color="initial">More credible than a sole proprietorship or partnership, which helps in attracting investors and customers.</Typography>

                </CardContent>

            </Card>
            <Card sx={{ display: "flex", alignItems: "center", flexDirection: "column", padding: "1.2rem", backgroundColor: "white", width: "33vw" }}>
                <img className='my-6' src="https://assets.vakilsearch.com/handshakeblue.svg" alt="placeholderImage" />
                <CardContent sx={{ display: "flex", alignItems: "center", flexDirection: "column", textAlign: "center" }}>
                    <Typography variant="h6" color="initial">Access to Funding</Typography>
                    <Typography variant="body1" color="initial">Easier to raise capital from investors, venture capitalists, and through bank loans.</Typography>

                </CardContent>

            </Card>
            <Card sx={{ display: "flex", alignItems: "center", flexDirection: "column", padding: "1.2rem", backgroundColor: "white", width: "33vw" }}>
                <img className='my-6' src="https://assets.vakilsearch.com/handshakeblue.svg" alt="placeholderImage" />
                <CardContent sx={{ display: "flex", alignItems: "center", flexDirection: "column", textAlign: "center" }}>
                    <Typography variant="h6" color="initial">Tax Benefits</Typography>
                    <Typography variant="body1" color="initial">Eligible for various tax exemptions and incentives under the Income Tax Act.</Typography>

                </CardContent>

            </Card>
        </div>
        <div className='flex flex-wrap gap-6 mt-8'>
            <Card sx={{ display: "flex", alignItems: "center", flexDirection: "column", padding: "1.2rem", backgroundColor: "white", width: "33vw" }}>
                <img className='my-6' src="https://assets.vakilsearch.com/handshakeblue.svg" alt="placeholderImage" />
                <CardContent sx={{ display: "flex", alignItems: "center", flexDirection: "column", textAlign: "center" }}>
                    <Typography variant="h6" color="initial">Separate Property</Typography>
                    <Typography variant="body1" color="initial">Can own property in its own name, which provides more stability.</Typography>

                </CardContent>

            </Card>
            <Card sx={{ display: "flex", alignItems: "center", flexDirection: "column", padding: "1.2rem", backgroundColor: "white", width: "33vw" }}>
                <img className='my-6' src="https://assets.vakilsearch.com/handshakeblue.svg" alt="placeholderImage" />
                <CardContent sx={{ display: "flex", alignItems: "center", flexDirection: "column", textAlign: "center" }}>
                    <Typography variant="h6" color="initial">Continuity of Business</Typography>
                    <Typography variant="body1" color="initial">Unaffected by changes in ownership or management.</Typography>

                </CardContent>

            </Card>

        </div>
        <div className='mt-16'>
            <Card elevation={4} sx={{ p: "1.2rem", backgroundColor: "lightBlue", borderRadius: "20px", width: "90vw" }}>
                <Typography variant="h5" color="initial">
                    Documnets Required
                </Typography>
                <Container sx={{ display: "flex", mt: "1.25rem", justifyContent: "space-between" }}>
                    <div>
                        <Typography variant="h6" gutterBottom>
                            1. Digital Signature Certificate (DSC)
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="1.1. For all Directors and Subscribers:" />
                            </ListItem>
                            <List disablePadding sx={{ paddingLeft: 4 }}>
                                <ListItem>
                                    <ListItemText primary="• Passport-sized photograph" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="• Copy of PAN Card" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="• Copy of Aadhaar Card" />
                                </ListItem>
                            </List>
                            <ListItem>
                                <ListItemText primary="1.2. Address Proof (Any one of the following):" />
                            </ListItem>
                            <List disablePadding sx={{ paddingLeft: 4 }}>
                                <ListItem>
                                    <ListItemText primary="• Passport" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="• Driving License" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="• Voter ID Card" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="• Latest bank statement or utility bill (not older than two months)" />
                                </ListItem>
                            </List>
                        </List>
                    </div>
                    <div>
                        <Typography variant="h6" gutterBottom>
                            2. Director Identification Number (DIN)
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="2.1. For all Directors:" />
                            </ListItem>
                            <List disablePadding sx={{ paddingLeft: 4 }}>
                                <ListItem>
                                    <ListItemText primary="2.1.1. Identity Proof (Any one of the following):" />
                                </ListItem>
                                <List disablePadding sx={{ paddingLeft: 4 }}>
                                    <ListItem>
                                        <ListItemText primary="• PAN Card" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="• Passport (in case of foreign nationals)" />
                                    </ListItem>
                                </List>
                                <ListItem>
                                    <ListItemText primary="2.1.2. Address Proof (Any one of the following):" />
                                </ListItem>
                                <List disablePadding sx={{ paddingLeft: 4 }}>
                                    <ListItem>
                                        <ListItemText primary="• Passport" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="• Driving License" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="• Voter ID Card" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="• Latest bank statement or utility bill (not older than two months)" />
                                    </ListItem>
                                </List>
                            </List>
                        </List>
                    </div>
                </Container>
                <Container sx={{ mt: "1.25rem" }}>
                    <div>
                        <Typography variant="h6" gutterBottom>
                            3. Name Reservation
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="3.1. For all Directors:" />
                            </ListItem>
                            <List disablePadding sx={{ paddingLeft: 4 }}>
                                <ListItem>
                                    <ListItemText primary="• Proposed Company Names (at least two names in order of preference)" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="• Objectives of the Company" />
                                </ListItem>
                            </List>
                        </List>
                    </div>

                </Container>
                <Container sx={{ mt: "1.25rem" }}>
                    <Typography variant="h6" gutterBottom>
                        4. SPICe+ (Simplified Proforma for Incorporating Company Electronically Plus) Form
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText primary="4.1. For Company Incorporation:" />
                        </ListItem>
                        <List disablePadding sx={{ paddingLeft: 4 }}>
                            <ListItem>
                                <ListItemText primary="• Memorandum of Association (MoA)" secondary="Drafted as per the prescribed format and signed by subscribers." />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Articles of Association (AoA)" secondary="Drafted as per the prescribed format and signed by subscribers." />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Declaration by Directors and Subscribers in Form INC-9 (auto-generated in SPICe+)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Declaration by Professional (Chartered Accountant/Company Secretary/Cost Accountant) in Form INC-8" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Address Proof of Registered Office (Any one of the following):" />
                            </ListItem>
                            <List disablePadding sx={{ paddingLeft: 4 }}>
                                <ListItem>
                                    <ListItemText primary="Sale deed (if premises are owned)" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Rent agreement/Lease deed (if premises are rented)" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Utility bill (Electricity bill/Telephone bill/Gas bill) not older than two months" />
                                </ListItem>
                            </List>
                            <ListItem>
                                <ListItemText primary="• No Objection Certificate (NOC) from the owner (if the premises are rented)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Consent to Act as a Director in Form DIR-2" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Directors’ Details:" />
                            </ListItem>
                            <List disablePadding sx={{ paddingLeft: 4 }}>
                                <ListItem>
                                    <ListItemText primary="Identity Proof" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Address Proof" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="PAN Card" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="DIN (if already allotted)" />
                                </ListItem>
                            </List>
                        </List>
                    </List>
                </Container>
            </Card>
        </div>
    </div >
    )
}

export default ITReturns
