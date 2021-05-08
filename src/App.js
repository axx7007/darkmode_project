import React, {useContext, useState} from 'react'
import Main from './assets/main.jpg'
import {Container, SettingIcon, ToggleMode, MediaIcon, MobileWrapper, GroupIcon, ContactIcon, GridIcon, MenuWrapper, ItemWrapper, BackIcon, SwitchIcon, Header, DarkIcon} from './AppStyle'
import {ThemeContext} from './context'

function App() {
  const [mode, setMode] = useState(false)
  const [theme, setTheme] = useContext(ThemeContext)
  const onChange=()=>{
    setMode(!mode)
  }
  return (
    <Container>
      <MobileWrapper >
        <ItemWrapper>
          <BackIcon  />
          <SwitchIcon  />
        </ItemWrapper>
        <Header>
          <Header.Img src={Main}/>
          <Header.Title>Abduvaxobov Xojiakbar</Header.Title>
          <Header.Text >https://github.com/axx7007</Header.Text>
        </Header>
        <MenuWrapper>
          <DarkIcon />
          <MenuWrapper.Title >Dark mode</MenuWrapper.Title>
          <ToggleMode 
          onChange={onChange}
          checked={mode}
          size={50}
          />
        </MenuWrapper>
        <MenuWrapper>
          <GridIcon />
          <MenuWrapper.Title >Story</MenuWrapper.Title>
        </MenuWrapper>
        <MenuWrapper>
          <ContactIcon />
          <MenuWrapper.Title >Chat heads</MenuWrapper.Title>
        </MenuWrapper>
        <MenuWrapper>
          <GroupIcon />
          <MenuWrapper.Title >Groups</MenuWrapper.Title>
        </MenuWrapper>
        <MenuWrapper>
          <MediaIcon />
          <MenuWrapper.Title >Media</MenuWrapper.Title>
        </MenuWrapper>
        <MenuWrapper>
          <SettingIcon />
          <MenuWrapper.Title >Settings and Privacy</MenuWrapper.Title>
        </MenuWrapper>
      </MobileWrapper>
    </Container>
  );
}

export default App;
