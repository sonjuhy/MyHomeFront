import { useLocation, useNavigate } from 'react-router-dom';
import {
  StyledSidebar,
  StyledSidebarBox,
  StyledSidebarIcon,
  StyledSidebarMenu,
  StyledSidebarRegular,
  StyledSidebarTop,
} from './Sidebar.styled';

const Sidebar = () => {
  const location = useLocation();
  if (window.location.pathname === '/') return null;
  const navigate = useNavigate();

  const goPage = (e: any) => {
    navigate(e.target.title);
  };

  return (
    <StyledSidebar>
      <StyledSidebarTop id="home" title="main" onClick={goPage}>
        <StyledSidebarIcon src="/icon/MyHomeIcon-white.png" alt="logo" title="main" />
        <StyledSidebarRegular title="main">MyHome</StyledSidebarRegular>
      </StyledSidebarTop>

      <StyledSidebarBox>
        <StyledSidebarMenu id="contain">
          <StyledSidebarMenu id="profile">
            <StyledSidebarIcon src="/icon/profile.png" alt="profile" />
            000님, 안녕하세요
          </StyledSidebarMenu>
          <StyledSidebarMenu id="page" title="main" onClick={goPage}>
            <StyledSidebarIcon src="/icon/home.svg" alt="icon" title="main" />
            HOME
          </StyledSidebarMenu>
          <StyledSidebarMenu id="page" title="light" onClick={goPage}>
            <StyledSidebarIcon src="/icon/light.png" alt="icon" title="light" />
            LIGHT
          </StyledSidebarMenu>
          <StyledSidebarMenu id="page" title="weather" onClick={goPage}>
            <StyledSidebarIcon src="/icon/weather.png" alt="icon" title="weather" />
            WEATHER
          </StyledSidebarMenu>
          <StyledSidebarMenu id="page" title="cloud" onClick={goPage}>
            <StyledSidebarIcon src="/icon/cloud.png" alt="icon" title="cloud" />
            CLOUD
          </StyledSidebarMenu>
        </StyledSidebarMenu>
        <StyledSidebarMenu id="contain" title="setting" onClick={goPage}>
          <StyledSidebarMenu id="page">
            <StyledSidebarIcon src="/icon/setting.png" alt="icon" title="setting" />
            SETTINGS
          </StyledSidebarMenu>
          <StyledSidebarMenu id="page" title="logout" onClick={goPage}>
            <StyledSidebarIcon src="/icon/logout.png" alt="icon" title="logout" />
            LOGOUT
          </StyledSidebarMenu>
        </StyledSidebarMenu>
      </StyledSidebarBox>
    </StyledSidebar>
  );
};

export default Sidebar;
