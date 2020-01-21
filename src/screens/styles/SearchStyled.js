import React from 'react'
import styled from 'styled-components/native'
import { Colors } from './themes/Colors'

export const BoxSearch = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
`

export const SearchBar = styled.TextInput`
    width: 95%;
    height: 40px;
    padding: 5px 20px 5px 40px;
    border-radius: 25px;
    border: solid 1px ${Colors.grayGrey};
    background-color: ${Colors.white};
`

export const TextHeader = styled.Text`
    color: ${Colors.grayDark};
    font-size: 22px;
    font-weight: bold;
`

export const BoxCards = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    padding: 10px;
`

export const LittleCard = styled.TouchableOpacity`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;
    height: 120px;
    margin: 5px;
    padding: 5px;
    border-radius: 8px;
    border: solid 1px ${Colors.grayGrey};
    background-color: ${Colors.white};
`

export const CircleImage = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
`

export const ImageIcon = styled.Image`
    width: 100%;
    height: 100%;
`

export const TextCard = styled.Text`
    color: ${Colors.grayDark};
    font-size: 13px;
    text-transform: uppercase;
`