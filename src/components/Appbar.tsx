import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  Link,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import MenuIcon from "@mui/icons-material/Menu";
const Appbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const pages = [
    "About Us",
    "Our Webinars",
    "Frameworks",
    "Join Us",
    "Tribers",
    "Contact Us",
  ];

  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    // App bar
    <AppBar position="fixed">
      {/* container */}
      <Container maxWidth="xl">
        {/* toolbar */}
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", lg: "flex" },
              //   fontFamily: "monospace",
              fontWeight: 700,
              //   letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            CodeTribe
          </Typography>
          {/* side menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", sm: "flex", lg: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* middle logo */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { sm: "flex", lg: "none" },
              flexGrow: 1,
              //   fontFamily: "monospace",
              fontWeight: 700,
              //   letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            CodeTribe
          </Typography>

          {/* links */}
          <Stack
            direction={"row"}
            spacing={2}
            // alignItems={"start"}
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "none", md: "none", lg: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  marginTop: 0,
                  // my: 2,
                  display: "block",
                  alignSelf: "start",
                  // paddingX: 2,
                  backgroundColor: grey[100],
                  color: grey[900],
                }}
              >
                {page}
              </Button>
            ))}
          </Stack>
          {/* login */}
          <Box sx={{ flexGrow: 0 }}>
            <Button variant="contained">Login</Button>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Appbar;
