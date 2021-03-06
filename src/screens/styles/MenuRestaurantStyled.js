import React from 'react'
import styled from 'styled-components/native'
import { Colors } from './themes/Colors'

export const ViewRed = styled.View`
    position: absolute;
    left: 0px;
    width: 230px;
    height: 100%;
    background-color: ${Colors.redFood};
`

export const ViewIcons = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 20px 4% 10px 4%;
`

export const TitleMenu = styled.Text`
    width: 200px;
    color: ${Colors.white};
    font-size: 30px;
    font-weight: bold;
    margin-left: 4%;
    margin-bottom: 5px;
`

export const ViewCardItem = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    padding: 6px 15px;
`

export const CardItem = styled.View`
    display: flex;
    justify-content: center;
    width: 86%;
    padding: 15px 60px;
    border-radius: 20px;
    background-color: ${Colors.white};
`

export const ViewInfoItem = styled.View`
    display: flex;
    justify-content: space-between;
    width: 125%;
    height: 120px;
`
    
export const InfoTitleItem = styled.Text`
    color: ${Colors.grayDark};
    font-size: 22px;
    font-weight: bold;
`

export const InfoDescriptionItem = styled.Text`
    color: ${Colors.grayMiddle};
    font-size: 15px;
`

export const RowPrice = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

export const Price = styled.Text`
    color: ${Colors.redFood};
    font-size: 18px;
    font-weight: bold;
`

export const ViewCardImageItem = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 4%;
    width: 100px;
    height: 100px;
    border-radius: 15px;
`

export const ImageCardItem = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 12px;
`