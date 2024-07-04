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
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenDropdown(null);
    setSubAnchorEl(null);
    setOpenSubDropdown(null);
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
        { id: 'subitem1', label: 'Subitem 1', subSubItems: ['SubSubItem 1', 'SubSubItem 2'] },
        { id: 'subitem2', label: 'Subitem 2', subSubItems: ['SubSubItem 1', 'SubSubItem 2'] },
      ],
    },
    {
      id: 'tax-compliances',
      label: 'Tax compliances',
      subItems: [
        { id: 'subitem1', label: 'Subitem 1', subSubItems: ['SubSubItem 1', 'SubSubItem 2'] },
        { id: 'subitem2', label: 'Subitem 2', subSubItems: ['SubSubItem 1', 'SubSubItem 2'] },
      ],
    },
    {
      id: 'business-management',
      label: 'Business Management',
      subItems: [
        { id: 'subitem1', label: 'Subitem 1', subSubItems: ['SubSubItem 1', 'SubSubItem 2'] },
        { id: 'subitem2', label: 'Subitem 2', subSubItems: ['SubSubItem 1', 'SubSubItem 2'] },
      ],
    },
    {
      id: 'valuation-services',
      label: 'Valuation Services',
      subItems: [
        { id: 'subitem1', label: 'Subitem 1', subSubItems: ['SubSubItem 1', 'SubSubItem 2'] },
        { id: 'subitem2', label: 'Subitem 2', subSubItems: ['SubSubItem 1', 'SubSubItem 2'] },
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
                  {menuItems.map((item) => (
                    <MenuItem
                      key={item.id}
                      sx={{ py: '6px', px: '12px' }}
                      onClick={(e) => handleMenuOpen(e, item.id)}
                    >
                      <Typography variant="body2" color="text.primary">
                        {item.label}
                      </Typography>
                      <Menu
                        anchorEl={anchorEl}
                        open={openDropdown === item.id}
                        onClose={handleMenuClose}
                        MenuListProps={{
                          onMouseLeave: handleMenuClose,
                        }}
                      >
                        {item.subItems.map((subItem) => (
                          <MenuItem
                            sx={{ backgroundColor: "pink", height: "20vh", width: "20vw" }}
                            key={subItem.id}
                            onMouseEnter={(e) => handleSubMenuOpen(e, subItem.id)}
                            onClick={(e) => handleSubMenuOpen(e, subItem.id)}
                          >
                            {subItem.label}
                            <Menu
                              anchorEl={subAnchorEl}
                              open={openSubDropdown === subItem.id}
                              onClose={handleMenuClose}
                              anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                              }}
                              transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                              }}
                              MenuListProps={{
                                onMouseLeave: handleMenuClose,
                              }}
                            >
                              {subItem.subSubItems.map((subSubItem, index) => (
                                <MenuItem key={index} onClick={handleMenuClose}
                                  sx={{ backgroundColor: "red", height: "10vh", width: "20vw" }}
                                >
                                  {subSubItem}
                                </MenuItem>
                              ))}
                            </Menu>
                          </MenuItem>
                        ))}
                      </Menu>
                    </MenuItem>
                  ))}
                </Box>
              </Box>
              <Box sx={{ display: { sm: '', md: 'none' } }}>
                <Button
                  variant="text"
                  color="primary"
                  aria-label="menu"
                  sx={{ minWidth: '30px', p: '4px' }}
                >
                  <MenuIcon />
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </>
  );
};

export default Navbar;
