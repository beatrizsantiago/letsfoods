import React from 'react'
import styled from 'styled-components/native'

export const ViewRed = styled.View`
    position: absolute;
    left: 0px;
    width: 230px;
    height: 100%;
    background-color: #f12525;
`

export const ViewIcons = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 20px 15px 10px 15px;
`

export const TitleMenu = styled.Text`
    width: 200px;
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    margin-left: 15px;
    margin-bottom: 5px;
`

export const ViewCardItem = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 150px;
    padding: 6px 15px;
`

export const CardItem = styled.View`
    display: flex;
    justify-content: center;
    width: 310px;
    height: 100%;
    padding: 15px 60px;
    border-radius: 20px;
    background-color: #fff;
`

export const ViewInfoItem = styled.View`
    display: flex;
    justify-content: space-between;
    width: 235px;
    height: 120px;
`
    
export const InfoTitleItem = styled.Text`
    color: #333;
    font-size: 22px;
    font-weight: bold;
`

export const InfoDescriptionItem = styled.Text`
    color: #7d7d7d;
    font-size: 15px;
`

export const RowPrice = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

export const Price = styled.Text`
    color: #f12525;
    font-size: 18px;
    font-weight: bold;
`

export const ViewCardImageItem = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 15px;
    width: 100px;
    height: 100px;
    border-radius: 15px;
`

export const ImageCardItem = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 12px;
`