import React, {useContext, useState} from 'react'
import Main from './assets/main.jpg'
import {Container, SettingIcon, ToggleMode, MediaIcon, MobileWrapper, GroupIcon, ContactIcon, GridIcon, MenuWrapper, ItemWrapper, BackIcon, SwitchIcon, Header, DarkIcon} from './AppStyle'
import {ThemeContext} from './context'

function App() {
  const [mode, setMode] = useState(false)
  const [theme, setTheme] = useContext(ThemeContext)
  
  const dark = {
    icon: 'black',
    title: 'black',
    background: 'white'
  }
  const light = {
    icon: 'white',
    title: 'white',
    background: 'black'
  }
 
  const onChange=()=>{
    setMode(!mode)
    setTheme(mode?dark:light);
  }
  return (
    <Container>
      <MobileWrapper  color={theme.background}>
        <ItemWrapper>
          <BackIcon color={theme.icon} />
          <SwitchIcon color={theme.icon}  />
        </ItemWrapper>
        <Header>
          <Header.Img src={Main}/>
          <Header.Title color={theme.title}>Abduvaxobov Xojiakbar</Header.Title>
          <Header.Text color={theme.title} >https://github.com/axx7007</Header.Text>
        </Header>
        <MenuWrapper>
          <DarkIcon color={theme.icon} />
          <MenuWrapper.Title color={theme.title} >Dark mode</MenuWrapper.Title>
          <ToggleMode 
          onChange={onChange}
          checked={mode}
          size={50}
          />
        </MenuWrapper>
        <MenuWrapper>
          <GridIcon />
          <MenuWrapper.Title color={theme.title} >Story</MenuWrapper.Title>
        </MenuWrapper>
        <MenuWrapper>
          <ContactIcon />
          <MenuWrapper.Title color={theme.title}>Chat heads</MenuWrapper.Title>
        </MenuWrapper>
        <MenuWrapper>
          <GroupIcon />
          <MenuWrapper.Title color={theme.title} >Groups</MenuWrapper.Title>
        </MenuWrapper>
        <MenuWrapper>
          <MediaIcon />
          <MenuWrapper.Title color={theme.title} >Media</MenuWrapper.Title>
        </MenuWrapper>
        <MenuWrapper>
          <SettingIcon />
          <MenuWrapper.Title color={theme.title} >Settings and Privacy</MenuWrapper.Title>
        </MenuWrapper>
      </MobileWrapper>
    </Container>
  );
}

export default App;
