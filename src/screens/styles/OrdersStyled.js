import React from 'react'
import styled from 'styled-components/native'
import { Colors } from './themes/Colors'

export const Title = styled.Text`
    color: ${Colors.grayDark};
    font-size: 20px;
    font-weight: bold;
    margin: 10px 20px 0px 20px;
`

export const Card = styled.TouchableOpacity`
    width: 85%;
    margin: 10px 7.5%;
    padding: 8px 20px;
    border-radius: 20px;
    border: solid 1px ${Colors.grayGrey};
    background-color: ${Colors.white};
`

export const TitleCard = styled.Text`
    color: ${Colors.grayDark};
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 5px;
`

export const Item = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 5px;
`

export const TextItem = styled.Text`
    color: ${Colors.grayMiddle};
    font-size: 14px;
    margin-left: 6px;
`

export const Row = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const TextTotal = styled.Text`
    color: ${Colors.grayMiddle};
    font-size: 16px;
    text-transform: uppercase;
`

export const TextGreen = styled.Text`
    color: ${Colors.success};
    font-size: 16px;
    text-transform: uppercase;
`

export const TextRed = styled.Text`
    color: ${Colors.redFood};
    font-size: 16px;
    text-transform: uppercase;
`
