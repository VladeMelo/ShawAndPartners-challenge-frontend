import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
`

export const Header = styled.div`
  width: 100%;
  height: 60px;
  background: #24292e;
`

export const PageSelector = styled.div`
  margin: 0 auto;
  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 30px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #24292e;
  }
  
  svg {
    font-size: 26px;
    color: #24292e;
    opacity: 0.7;

  cursor: pointer;
    transition: 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`

export const UsersList = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 5px;
  padding: 5px;
  width: 100%;
`

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 80px;
  width: 240px;
  padding: 0px 5px;

  border: 3px solid rgba(242, 243, 245, 1);
  border-radius: 10px;
  background: rgba(242, 243, 245, 0.5);
  margin: 5px 0;

  transition: 0.2s;
  cursor: pointer;

  h2 {
    font-size: 13px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  &:hover {
    box-shadow: 3px 3px 10px #24292e;
  }
`

export const AvatarAndLogin = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  div {
    max-width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      display: block;
      max-width: 100%;
      border-radius: 20px;
    }
  }

  h1 {
    margin-left: 6px;
    font-size: 20px;
    font-family: Georgia, 'Times New Roman', Times, serif;
  }
`