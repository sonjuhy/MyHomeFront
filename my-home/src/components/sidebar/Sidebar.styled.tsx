import styled, { css } from 'styled-components';

const StyledSidebar = styled.div`
  background-color: ${(props) => props.theme.colors.dark};
  width: 200px;
  min-width: 200px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  cursor: default;
  position: fixed;
`;

const StyledSidebarTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid ${(props) => props.theme.colors.lightgray};
  padding: 20px;
  margin-bottom: 10px;
`;

const StyledSidebarIcon = styled.img.attrs<any>(() => ({}))`
  ${(props) => {
    const alt = props.alt;
    const name: any = {
      logo: `
    width: 35px;
    height : 45px;
    object-fit: cover;
    margin : 0px 3px 0px 3px;
    cursor: pointer;
    `,
      icon: `
    width:20px;
    height:20px;
    margin-right: 10px;
    `,
      profile: `
    width:50px;
    height:50px;
    margin: 5px;
    `,
    };

    return css`
      ${name[alt]}
    `;
  }}
`;

const StyledSidebarRegular = styled.div`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 24px;
  color: ${(props) => props.theme.colors.white};
`;

const StyledSidebarBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledSidebarMenu = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const id = props.id;
    const name: any = {
      page: `
  display : flex;
  align-items: center;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid white;
      }
  `,
      profile: `
    display : flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
    margin-bottom : 5px;
    
  `,
    };

    return css`
      ${name[id]}
      padding: 10px;
      color: ${(props) => props.theme.colors.white};
      font-family: ${(props) => props.theme.fonts.regular};
    `;
  }}
`;

export {
  StyledSidebar,
  StyledSidebarTop,
  StyledSidebarIcon,
  StyledSidebarRegular,
  StyledSidebarMenu,
  StyledSidebarBox,
};
