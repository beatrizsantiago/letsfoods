import React from 'react'
import styled from 'styled-components/native'
import { Colors } from './themes/Colors'

export const BoxProfile = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-bottom: 25px;
    width: 100%;
`

export const CircleImage = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    border-radius: 100px;
    border: solid 1px ${Colors.grayGrey};
`

export const ImageProfile = styled.Image`
    width: 94%;
    height: 94%;
    border-radius: 100px;
`

export const UserName = styled.Text`
    color: ${Colors.grayDark};
    font-size: 20px;
    font-weight: bold;
`

export const Row = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 94%;
    padding: 8px 12px;
    margin: 0px 3%;
    border-top-width: 1px;
    border-top-color: ${Colors.grayLight};
    border-bottom-width: 1px;
    border-bottom-color: ${Colors.grayLight};
`

export const TitleItem = styled.Text`
    color: ${Colors.grayDark};
    font-size: 17px;
    margin-left: 10px;
`