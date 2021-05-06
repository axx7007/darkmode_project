import styled from 'styled-components'
import {ArrowIosBack} from '@styled-icons/evaicons-solid/ArrowIosBack'
import {Switch} from "@styled-icons/icomoon/Switch"
import {DarkMode} from "@styled-icons/material/DarkMode"
export const Container = styled.div`
width: 100vh;
height: 100vh;
padding: 10px 300px;
display: flex;
flex-direction: column;
`

export const MobileWrapper = styled.div`
width: 400px;
height: 650px;
border-radius: 25px;
/* background-color: whitesmoke; */
border: 1px solid black;
padding: 30px;
`
export const ItemWrapper = styled.div`
display: flex;
justify-content: space-between;
/* border: 1px solid black; */
`
export const BackIcon = styled(ArrowIosBack)`
width:20px;
height: 20px;
color: black;
`
export const SwitchIcon = styled(Switch)`
width:20px;
height: 20px;
color: black;
`
export const Header = styled.div`
display: flex; 
border: 1px solid black;
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
color: black;
font-size: 20px;
margin: 0;
padding:0;
margin-top: 15px;
`
Header.Text = styled.p`
color: grey;
margin:0;
padding: 0;
font-size: 14px;
margin-top: 3px;
`
 