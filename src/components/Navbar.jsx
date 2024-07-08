import { useState } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';

const logoStyle = {
  width: '140px',
  height: 'auto',
  cursor: 'pointer',
};

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [subAnchorEl, setSubAnchorEl] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);

  const handleMenuOpen = (event, menuId) => {
    setAnchorEl(event.currentTarget);
    setOpenDropdown(menuId);
    setSubAnchorEl(null);
    setOpenSubDropdown(null);
    document.body.style.overflow = 'hidden';
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenDropdown(null);
    setSubAnchorEl(null);
    setOpenSubDropdown(null);
    document.body.style.overflow = 'auto';
  };

  const handleSubMenuOpen = (event, subMenuId) => {
    setSubAnchorEl(event.currentTarget);
    setOpenSubDropdown(subMenuId);
  };

  const menuItems = [
    {
      id: 'start-business',
      label: 'Start your business',
      subItems: [
        { id: 'subitem1', label: 'Private Limited Company Registration' },
        { id: 'subitem2', label: 'Public Limited Company Registration' },
        { id: 'subitem3', label: 'One Person Company Registration' },
        { id: 'subitem4', label: 'Section 8 Company Registration' },
        { id: 'subitem5', label: 'Limited Liability Partnership Firm Registration' },
        { id: 'subitem6', label: 'Partnership Firm Registration' },
        { id: 'subitem6', label: 'Society Registration' },
        { id: 'subitem6', label: 'Trust Registration' },
      ],
    },
    {
      id: 'tax-compliances',
      label: 'Tax compliances',
      subItems: [
        { id: 'subitem1', label: 'GST', subSubItems: ['GST Registration ', 'GST Returns Filing', 'GST Refund', 'GST Annual Return', 'GST Notice Reply', 'GST Audit', 'GST Cancellation'] },
        { id: 'subitem2', label: 'Income Tax', subSubItems: ['Income Tax Returns (ITR)', 'Income Tax Notice Reply', 'Income Tax Scrutiny', 'Income Tax Appeal to CIT(A)', 'Income Tax Appeal to ITAT', 'Income Tax Audit', 'TDS Return Filing'] },



      ],
    },
    {
      id: 'business-management',
      label: 'Business Management',
      subItems: [
        { id: 'subitem1', label: 'Virtual CFO Solutions' },
        { id: 'subitem2', label: 'Licenses & Registrations', subSubItems: ['Startup Registration', 'MSME Registration', 'IEC Code', 'Trade License', 'Digital Signature Certificate', 'Provident Fund (PF) Registration', 'ESI Registration', 'Professional Tax Registration', 'Shops and Establishments License', 'Darpan Registration', 'FCRA Registration', 'Section 12A & 80G Registration'] },
        { id: 'subitem3', label: 'Company Compliances', subSubItems: ['Annual Company ROC Compliance ', 'Company Audit', 'Appointment of Director', 'Resignation of Director', 'Increase Authorized Capital', 'Share Transfer of a Company', 'Closure the Company', 'Strike off Company', 'Change in Object Clause', 'Change in Address'] },
        { id: 'subitem4', label: 'Partnership / LLP Compliances', subSubItems: ['Annual LLP ROC Compliance', 'Partnership / LLP Audit', 'Add Designated Partner', 'Remove Designated Partner', 'Changes to Partnership Agreement', 'Dissolution of Partnership Firm', 'Winding Up of LLP'] },
        { id: 'subitem5', label: 'Convert Your Business', subSubItems: ['Proprietorship to Partnership / LLP', '	Proprietorship to Company', 'Partnership / LLP to Company', 'Private to Public Company'] },
        { id: 'subitem6', label: 'Accounting Services', subSubItems: ['Accounting and Book-keeping', 'Financial Due Diligence', 'Payroll Services', 'Retirement Planning'] },
      ],
    },



    {
      id: 'valuation-services',
      label: 'Valuation Services',
      subItems: [
        { id: 'subitem1', label: 'Business Valuation Services' },
        { id: 'subitem2', label: 'Intangibles Valuation Services' },
        { id: 'subitem3', label: 'Valuation Under Companies Act' },
        { id: 'subitem4', label: 'Valuation Under Companies Act' },
        { id: 'subitem5', label: 'Startup Valuation' },
        { id: 'subitem6', label: 'M & A Valuations' },
      ],
    },
  ];

  return (
    <>
      <div>
        <AppBar
          position="fixed"
          sx={{
            boxShadow: 0,
            bgcolor: 'transparent',
            backgroundImage: 'none',
            mt: 2,
          }}
        >
          <Container maxWidth="lg">
            <Toolbar
              elevation={10}
              variant="regular"
              sx={(theme) => ({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexShrink: 0,
                borderRadius: '999px',
                bgcolor:
                  theme.palette.mode === 'light'
                    ? 'rgba(255, 255, 255, 0.4)'
                    : 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(24px)',
                maxHeight: 40,
                border: '1px solid',
                borderColor: 'divider',
                boxShadow:
                  theme.palette.mode === 'light'
                    ? '0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)'
                    : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
              })}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  ml: '-18px',
                }}
              >
                <Link to="/">
                  <img
                    src={
                      'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg'
                    }
                    style={logoStyle}
                    alt="logo of sitemark"
                  />
                </Link>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                  <MenuItem sx={{ py: '6px', px: '12px', bgcolor: "blue", color: "white", borderRadius: "16px", fontWeight: "bolder" }}>
                    <Link to="/contact" style={{ textDecoration: 'none' }}>
                      <Typography variant="body2" >
                        Consult an Expert
                      </Typography>
                    </Link>
                  </MenuItem>
                  {menuItems.map((menuItem) => (
                    <Box
                      key={menuItem.id}
                      onMouseLeave={handleMenuClose}
                      sx={{
                        position: 'relative',

                        '&:hover > div': {
                          display: 'block',
                        },
                      }}
                    >
                      <Button
                        onMouseEnter={(e) => handleMenuOpen(e, menuItem.id)}
                        sx={{ color: 'black', ml: 2 }}
                      >
                        {menuItem.label}
                      </Button>
                      {openDropdown === menuItem.id && (
                        <Box
                          onMouseLeave={handleMenuClose}
                          sx={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            // bgcolor: 'background.paper',
                            boxShadow: 3,
                            bgcolor: "pink",
                            zIndex: 10,
                          }}
                        >
                          {menuItem.subItems.map((subItem) => (
                            <MenuItem
                              key={subItem.id}
                              onMouseEnter={(e) => handleSubMenuOpen(e, subItem.id)}
                              sx={{

                                position: 'relative',
                                '&:hover > div': {
                                  display: 'block',
                                },
                              }}
                            >
                              {subItem.label}
                              {openSubDropdown === subItem.id && subItem.subSubItems && (
                                <Box
                                  sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: '100%',
                                    // bgcolor: 'background.paper',
                                    boxShadow: 3,
                                    bgcolor: "red",
                                    zIndex: 10,
                                    display: 'none',
                                  }}
                                >
                                  {subItem.subSubItems.map((subSubItem, index) => (
                                    <MenuItem key={index}>{subSubItem}</MenuItem>
                                  ))}
                                </Box>
                              )}
                            </MenuItem>
                          ))}
                        </Box>
                      )}
                    </Box>
                  ))}
                </Box>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {menuItems.map((menuItem) => (
                    <MenuItem
                      key={menuItem.id}
                      onClick={handleMenuClose}
                      sx={{ color: 'black' }}
                    >
                      {menuItem.label}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <MenuIcon sx={{ color: 'black', ml: 2, display: { xs: 'block', md: 'none' } }} />
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </>
  );
};

export default Navbar;
