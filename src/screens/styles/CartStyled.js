import React from 'react'
import styled from 'styled-components/native'
import { Colors } from './themes/Colors'

export const Card = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 96%;
    margin-top: 10px;
    padding: 8px 12px;
    border-radius: 12px;
    background-color: ${Colors.white};
`

export const BigSpacing = styled.View`
    width: 66%;
    border-right-width: 1px;
    border-color: ${Colors.grayGrey};
`

export const SmallSpacing = styled.View`
    width: 30%;
`

export const TitleCard = styled.Text`
    color: ${Colors.grayMiddle};
    font-size: 14px;
    text-transform: uppercase;
`

export const TextCard = styled.Text`
    color: ${Colors.grayDark};
    font-size: 18px;
    font-weight: bold;
    margin-top: 2px;
`

export const Box = styled.View`
    display: flex;
    align-items: center;
    flex: 1;
    width: 96%;
    margin: 10px 0px;
    padding: 8px 12px;
    border-radius: 12px;
    background-color: ${Colors.white};
`

export const TitleBox = styled.Text`
    color: ${Colors.grayDark};
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 8px;
`

export const CardBox = styled.View`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 80px;
    padding: 8px;
    border-bottom-width: 1px;
    border-bottom-color: ${Colors.grayBlot};
`

export const ImageBox = styled.Image`
    width: 18%;
    height: 100%;
    border-radius: 4px;
`

export const BoxInfo = styled.View`
    display: flex;
    justify-content: center;
    width: 50%;
    height: 100%;
    padding-left: 8px;
`

export const Info = styled.Text`
    color: ${Colors.grayDark};
    font-size: 16px;
`

export const ButtonAdd = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 28%;
    height: 40px;
    border-radius: 8px;
    border: solid 1px ${Colors.grayGrey};
    background-color: ${Colors.white};
`

export const ButtonTouch = styled.TouchableOpacity`
    padding: 5px;
`
