import React from 'react'
import styled from 'styled-components/native' 
import { Colors } from './themes/Colors'

export const LogoContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const LogoContainerGray = styled.View`
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 20%;
    padding: 15px;
    background-color: ${Colors.grayUltralight};
`

export const TextSubtitle = styled.Text`
    font-size: 12px;
    color: ${Colors.grayMiddle};
    margin: 22px 0px;
`

export const LabelAlign = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-between
    width: 80%;
    height: 80px;
    margin-bottom: 12px;
`

export const LabelInput = styled.Text`
    color: ${Colors.grayDark};
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
`

export const InputRadius = styled.TextInput`
    height: 50px;
    padding: 5px 20px;
    font-size: 18px;
    color: #333;
    border-radius: 50px;
    background-color: ${Colors.grayGrey};
`

export const ButtonRadius = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 50px;
    margin-top: 16px;
    border-radius: 50px;
    background-color: ${Colors.redFood};
`

export const TextButton = styled.Text`
    color: ${Colors.white};
    font-size: 16px;
    text-transform: uppercase;
`
export const TextSubtitleGray = styled.Text`
    font-size: 15px;
    color: ${Colors.grayDark};
    margin-top: 18px;
`

export const RegisterContainer = styled.View`
    display: flex;
    align-items: center;
    width: 90%;
    margin: 90px 5% 5% 5%;
    padding: 10px 0px;
    border-radius: 5px;
    background-color: ${Colors.white};
`

export const TextTitle = styled.Text`
    font-size: 25px;
    color: ${Colors.redFood}; 
    marginBottom: 5px;
    font-weight: bold;
    letter-spacing: 1px;
`
