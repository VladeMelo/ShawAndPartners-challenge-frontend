import styled from 'styled-components';

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
    font-family: Georgia, 'Times New Roman', Times, serif
  }
`

export const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.9);
`

export const ModalContainer = styled.div`
  width: 400px;
  height: 100vh;
  padding: 5px;

  border-radius: 20px;
  border: 3px solid rgba(242, 243, 245, 0.5);
  background: #24292e;
`

export const ModalHeader = styled.div`
  background: rgba(242, 243, 245, 0.5);
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  width: 100%;
  height: 160px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    max-width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      display: block;
      max-width: 100%;
      border-radius: 30px;
    }
  }

  h1 {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  a {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-decoration: none;
    color: rgba(242, 243, 245, 0.5);
  }

  h3 {
    font-family: Georgia, 'Times New Roman', Times, serif;
  }
`

export const RepositoriesList = styled.div`
  display: flex;
  flex-direction: column;
`

export const Repository = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 2px;

  div {
    display: flex;
    flex-direction: column; 

    h1 {
      font-size: 20px;
      color: rgba(242, 243, 245, 0.5);
    }

    a {
      text-decoration: none;
      color: rgba(242, 243, 245, 0.5);
    }
  }

  h3 {
    color: rgba(242, 243, 245, 0.5);
  }

  & + div {
    border-top: 1px solid rgba(242, 243, 245, 0.5);
  }
`
