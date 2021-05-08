import styled from 'styled-components'
import {ArrowIosBack} from '@styled-icons/evaicons-solid/ArrowIosBack'
import {Switch} from "@styled-icons/icomoon/Switch"
import {DarkMode} from "@styled-icons/material/DarkMode"
import {Grid} from '@styled-icons/bootstrap/Grid'
import {Contacts} from '@styled-icons/remix-line/Contacts'
import {Group} from '@styled-icons/boxicons-regular/Group'
import {PermMedia} from '@styled-icons/material-outlined/PermMedia'
import {SettingsOutline} from "@styled-icons/evaicons-outline/SettingsOutline"


import Toggle from 'react-dark-mode-toggle'

export const ToggleMode = styled(Toggle)`
margin-left: auto;
`


export const Container = styled.div`
width: 100vh;
height: 100vh;
padding: 10px 300px;
display: flex;
flex-direction: column;
`

export const MobileWrapper = styled.div`
width: 300px;
height: fit-content;
border-radius: 25px;
border: 1px solid black;
padding: 30px;
background-color: ${({color})=>color};
`
export const ItemWrapper = styled.div`
display: flex;
justify-content: space-between;
/* border: 1px solid black; */
`
export const BackIcon = styled(ArrowIosBack)`
width:20px;
height: 20px;
color: ${({color})=>color};;
`
export const SwitchIcon = styled(Switch)`
width:20px;
height: 20px;
color: ${({color})=>color};;
`
export const Header = styled.div`
display: flex; 
flex-direction: column;
justify-content: center;
align-items: center;
`
Header.Img = styled.img`
width: 150px;
height: 150px;
border-radius: 50%;
margin-top: 30px;
`
Header.Title = styled.h1`
color: ${({color})=>color};;
font-size: 20px;
margin: 0;
padding:0;
margin-top: 15px;
`
Header.Text = styled.p`
color: ${({color})=>color};;
margin:0;
padding: 0;
font-size: 14px;
margin-top: 3px;
`
export const MenuWrapper = styled.div`
display: flex;
margin-top: 12px;
margin-left: 15px;
align-items: center;
`
MenuWrapper.Title = styled.h4`
font-size: 16px;
color: black;
margin: 0;
padding: 0;
color: ${({color})=>color};;
margin-left: 15px;
`
export const DarkIcon = styled(DarkMode)`
width: 20px; 
height: 20px;
color: black;
`
export const GridIcon = styled(Grid)`
width: 20px;
height: 20px;
color: orange;
`
export const ContactIcon = styled(Contacts)`
width: 20px;
height: 20px;
color: blue;
`
 export const GroupIcon = styled(Group)`
 width: 25px;
 height: 25px;
 color: purple;
 `
 export const Menu = styled.div`
display: flex;
flex-direction: column-reverse;
`

export const MediaIcon = styled(PermMedia)`
width: 20px;
height: 20px;
color: blue;
`

export const SettingIcon = styled(SettingsOutline)`
width: 20px;
height: 20px;
color:blue;
`