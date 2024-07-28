import { useState, useEffect } from 'react';
import { Box, AppBar, Toolbar, Button, Container, Typography, MenuItem, Menu } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { menuItems } from '../constant/menuItems';
import { FaChevronDown, FaChevronUp, FaChevronRight } from "react-icons/fa6";

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

  useEffect(() => {
    // Reset overflow style on component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

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
                  <MenuItem sx={{ py: '6px', px: '12px', bgcolor: "#000aa3", color: "white", borderRadius: "16px", fontWeight: "bolder", }}>
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
                        sx={{ color: 'black', ml: 2, textTransform: "inherit" }}
                      >
                        {menuItem.label} {openDropdown === menuItem.id ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                      </Button>
                      {openDropdown === menuItem.id && (
                        <Box
                          className="dropdown"
                          onMouseLeave={handleMenuClose}
                          sx={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            boxShadow: 3,

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
                              <Link to={`/${subItem.link}`} style={{ textDecoration: 'none', color: 'black', display: "flex", gap: "18px", alignItems: "center" }}>
                                {subItem.label} {openSubDropdown === subItem.id ? <FaChevronRight /> : null}
                              </Link>
                              {openSubDropdown === subItem.id && subItem.subSubItems && (
                                <Box
                                  className="dropdown"
                                  sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: '100%',
                                    boxShadow: 3,

                                    zIndex: 10,
                                    display: 'none',
                                  }}
                                >
                                  {subItem.subSubItems.map((subSubItem, index) => (
                                    <MenuItem key={index}>
                                      <Link to={`/${subItem.links[index]}`} style={{ textDecoration: 'none', color: 'black' }}>
                                        {subSubItem}
                                      </Link>
                                    </MenuItem>
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
