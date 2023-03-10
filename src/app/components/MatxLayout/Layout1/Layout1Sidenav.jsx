import { Box, styled, Switch, useTheme } from "@mui/material";
import { themeShadows } from "app/components/MatxTheme/themeColors";
import useSettings from "app/hooks/useSettings";
import { sidenavCompactWidth, sideNavWidth } from "app/utils/constant";
import { convertHexToRGB } from "app/utils/utils";
import React from "react";
import Brand from "../../Brand";
import Sidenav from "../../Sidenav";

// styled components
const SidebarNavRoot = styled(Box)(({ theme, width, bg, img }) => ({
  top: 0,
  left: 0,
  zIndex: 111,
  width: width,
  height: "100vh",
  position: "fixed",
  overflow: "hidden",
  backgroundSize: "cover",
  backgroundPosition: "top",
  boxShadow: themeShadows[8],
  backgroundRepeat: "no-repeat",
  color: theme.palette.text.primary,
  transition: "all 250ms ease-in-out",
  background: "#565656"
}));

const NavListBox = styled(Box)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

const Layout1Sidenav = () => {
  const theme = useTheme();
  const { settings, updateSettings } = useSettings();
  const leftSidebar = settings.layout1Settings.leftSidebar;
  const { mode, bgImgURL } = leftSidebar;

  const getSidenavWidth = () => {
    switch (mode) {
      case "compact":
        return sidenavCompactWidth;

      default:
        return sideNavWidth;
    }
  };
  const primaryRGB = convertHexToRGB(theme.palette.primary.main);

  const updateSidebarMode = (sidebarSettings) => {
    updateSettings({ layout1Settings: { leftSidebar: { ...sidebarSettings } } });
  };

  const handleSidenavToggle = () => {
    updateSidebarMode({ mode: mode === "compact" ? "full" : "compact" });
  };

  return (
    <SidebarNavRoot img={bgImgURL} bg={primaryRGB} width={getSidenavWidth()}>
      <NavListBox>
        <Brand>
          <Switch
            size="small"
            color="secondary"
            onChange={handleSidenavToggle}
            checked={leftSidebar.mode !== "full"}
            sx={{ display: { md: "block", xs: "none" } }}
          />
        </Brand>

        <Sidenav />
      </NavListBox>
    </SidebarNavRoot>
  );
};

export default React.memo(Layout1Sidenav);
