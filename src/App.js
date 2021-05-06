import React from 'react'
import Main from './assets/main.jpg'
import {Container, MobileWrapper, ItemWrapper, BackIcon, SwitchIcon, Header} from './AppStyle'
function App() {
  return (
    <Container>
      <MobileWrapper>
        <ItemWrapper>
          <BackIcon />
          <SwitchIcon />
        </ItemWrapper>
        <Header>
          <Header.Img src={Main} />
          <Header.Title>Abduvaxobov Xojiakbar</Header.Title>
          <Header.Text>https://github.com/axx7007</Header.Text>
        </Header>
      </MobileWrapper>
    </Container>
  );
}

export default App;
