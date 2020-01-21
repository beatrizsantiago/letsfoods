import React from 'react'
import styled from 'styled-components/native'
import { Colors } from './themes/Colors'

export const Header = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    padding: 5px 18px;
`

export const TextHeader = styled.Text`
    color: ${Colors.grayDark};
    font-size: 22px;
    font-weight: bold;
`

export const BoxImage = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 320px;
    height: 240px;
    margin: 0px 7px;
`

export const ImageBox = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 25px;
`

export const CardBox = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    left: 5.8%;
    bottom: 20px;
    width: 88%;
    height: 90px;
    padding: 8px 12px;
    border-radius: 15px;
    background-color: ${Colors.white};
`

export const LabelTitle = styled.Text`
    color: ${Colors.grayDark};
    font-size: 20px;
    font-weight: bold;
    margin: 0px 3%;
`

export const BoxItemScroll = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100px;
`

export const CircleIcon = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border-radius: 40px;
    background-color: ${Colors.white};
`

export const ImageIcon = styled.Image`
    width: 62%;
    height: 62%;
`

export const LargeCard = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    width: 94%;
    height: 120px;
    margin: 6px 3%;
    padding: 8px;
    border-radius: 25px;
    background-color: ${Colors.white};
`

export const ImageView = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 100%;
    padding: 3px;
    border: solid 1px ${Colors.grayLight};
    border-radius: 20px;
`

export const ImageCard = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 15px;
`

export const BodyCard = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 70%;
    height: 100%;
    padding: 2px 5px;
`

export const TitleCard = styled.Text`
    color: ${Colors.grayDark};
    font-size: 18px;
    font-weight: bold;
`

export const TextCard = styled.Text`
    color: ${Colors.grayMiddle};
    font-size: 14px;
`

export const TextCardScratched = styled.Text`
    color: ${Colors.grayMiddle};
    font-size: 12px;
    text-decoration: line-through;
    margin-Left: 2px;
`

export const RowItemsCard = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 20px;
`

export const BoxIcon = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
