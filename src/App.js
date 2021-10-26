import React, { Fragment } from "react";
import HomePage from "./HomePage";
import AboutPage from "./UserPage";
import ContactPage from "./ContactPage";
import GalleryPage from "./GalleryPage";
import { Switch, Route, Link, BrowserRouter} from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function App() {
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

  const allTabs = ["/", "/about", "/contact", "/gallery"];

  return (
    <div className="App">
      <BrowserRouter>
        <Route
          path="/"
          render={({ location }) => (
            <Fragment>
              <Tabs value={location.pathname}>
                <Tab label="Home" value="/" component={Link} to={allTabs[0]} />
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
                <Route path={allTabs[3]} component={GalleryPage} />
                <Route path={allTabs[0]} component={HomePage} />
                </Switch>
            </Fragment>
          )}
        />
      </BrowserRouter>
    </div>
  );
}
