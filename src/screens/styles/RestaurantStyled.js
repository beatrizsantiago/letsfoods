import React from 'react'
import styled from 'styled-components/native'

export const BackButton = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 20px;
    left: 7.2%;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: rgba(255, 255, 255, 0.8);
`

export const BannerImage = styled.Image`
    width: 100%;
    height: 250px;
`

export const DetailsRestaurant = styled.View`
    position: absolute;
    top: 150px;
    width: 85%;
    height: 180px;
    padding: 12px 15px;
    border-radius: 20px;
    background-color: #fff;
`

export const Spacing = styled.View`
    width: 100%;
    height: 95px;
    border: solid 1px #000;
`

export const TextStars = styled.Text`
    font-size: 18px;
    margin: 0px 6px;
    color: #7d7d7d;
`

export const RowItemsDetails = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 5px 0px;
`


export const TextIcon = styled.Text`
    color: #7d7d7d;
    font-size: 18px;
    margin-left: 5px;
`