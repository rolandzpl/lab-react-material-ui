import React, { Fragment } from "react";
import HomePage from "./HomePage";
import AboutPage from "./UserPage";
import ContactPage from "./ContactPage";
import GalleryPage from "./GalleryPage";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Container from "@mui/material/Container";
import { Instagram } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";
import { Home } from "@mui/icons-material";

export default function App({ settings }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [state, setState] = React.useState({
    currentView: null,
    accountImageUrl:
      "C:\\Users\\rolan\\Desktop\\Inne zdjęcia\\DSC_1939_Nik_1_HDR_DxO_2048.jpg",
  });

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onMenuProfile = (event) => {
    setAnchorEl(null);
  };

  const [value, setValue] = React.useState(0);

  const allTabs = ["/", "/about", "/contact", "/gallery"];

  return (
    <div className="App">
      <Container maxWidth="lg" noValidate>
        <BrowserRouter>
          <Route
            path="/"
            render={({ location }) => (
              <Fragment>
                <Tabs value={location.pathname}>
                  <Tab
                    label={<Home />}
                    value="/"
                    component={Link}
                    to={allTabs[0]}
                  />
                  <Tab
                    label="About"
                    value="/about"
                    component={Link}
                    to={allTabs[1]}
                  />
                  <Tab
                    label="Contact"
                    value="/contact"
                    component={Link}
                    to={allTabs[2]}
                  />
                  <Tab
                    label="Gallery"
                    value="/gallery"
                    component={Link}
                    to={allTabs[3]}
                  />
                </Tabs>
                <Switch>
                  <Route path={allTabs[1]} component={AboutPage} />
                  <Route path={allTabs[2]} component={ContactPage} />
                  <Route path={allTabs[3]}>
                    <GalleryPage galleryService={settings.galleryService} />
                  </Route>
                  <Route path={allTabs[0]}>
                    <HomePage blogService={settings.blogService} />
                  </Route>
                </Switch>
              </Fragment>
            )}
          />
          <a href={settings.instagramUrl}>
            <Instagram />
          </a>
          <a href={settings.facebookUrl}>
            <Facebook />
          </a>
        </BrowserRouter>
      </Container>
    </div>
  );
}
