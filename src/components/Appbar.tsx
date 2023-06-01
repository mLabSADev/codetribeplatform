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
    {
      label: "About Us",
      link: "#aboutus",
    },
    { label: "Our Webinars", link: "#webinars" },
    { label: "Frameworks", link: "#frameworks" },
    // { label: "Join Us", link: "#join" },
    // { label: "Tribers", link: "#tribers" },
    { label: "Contact Us", link: "#contact" },
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
              {pages.map((page: PageLinkTypes, i: number) => (
                <MenuItem key={i} onClick={handleCloseNavMenu}>
                  <Link href={page.link}>{page.label}</Link>
                  {/* <Typography textAlign="center">{page.label}</Typography> */}
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
            {pages.map((page: PageLinkTypes, i: number) => (
              <Button
                key={i}
                onClick={handleCloseNavMenu}
                sx={{
                  marginTop: 0,
                  // my: 2,
                  display: "block",
                  alignSelf: "start",
                  paddingX: 2,

                  backgroundColor: grey[100],
                  color: grey[900],
                }}
              >
                <Link
                  sx={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                  href={page.link}
                >
                  {page.label}
                </Link>
              </Button>
            ))}
          </Stack>
          {/* login */}
          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="contained"
              component={"a"}
              href="https://codetribe.mlab.co.za/"
              target="_blank"
            >
              Login
            </Button>
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
export interface PageLinkTypes {
  label: string;
  link: string;
}
