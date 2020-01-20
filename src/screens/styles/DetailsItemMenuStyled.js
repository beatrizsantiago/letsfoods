import React from 'react'
import styled from 'styled-components/native'
import { Colors } from './themes/Colors'

export const Header = styled.View`
    width: 100%;
    height: 310px;
`

export const HalfCircle = styled.View`
    position: absolute;
    right: 0px;
    width: 72%;
    height: 90%;
    border-bottom-left-radius: 500px;
    background-color: ${Colors.redFood};
`

export const ViewButtons = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 30px;
    width: 100%;
    padding: 0px 8%;
`

export const ViewCircle = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: absolute;
    top: 24%;
    width: 100%;
`

export const CircleContainerImage = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 220px;
    height: 220px;
    border-radius: 110px;
    background-color: ${Colors.white};
`

export const ImageCircle = styled.Image`
    width: 210px;
    height: 210px;
    border-radius: 110px;
`

export const TextTitle = styled.Text`
    margin: 0px 10px 10px 10px;
    font-size: 25px;
    color: ${Colors.grayDark};
    font-weight: bold;
`
    
export const Description = styled.Text`
    margin: 0px 30px;
    font-size: 14px;
    color: ${Colors.grayDark};
    text-align: center;
`

export const HeaderList = styled.View`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    margin-top: 10px;
    padding: 10px;
    border-bottom-width: 2px;
    border-bottom-color: ${Colors.redFood};
    background-color: ${Colors.white};
`

export const TitleHeader = styled.Text`
    color: ${Colors.grayDark};
    font-size: 18px;
    font-weight: bold;
`

export const SubtitleHeader = styled.Text`
    color: ${Colors.grayMiddle};
    font-size: 13px;
`

export const ItemList = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: 5px 10px;
    border-bottom-width: 1px;
    border-bottom-color: ${Colors.grayUltralight};
    background-color: ${Colors.white};
`

export const ViewLabels = styled.View`
    display: flex;
    justify-content: space-between;
    width: 65%;
    height: 100%;
    padding: 3px 0px;
`

export const TitleItem = styled.Text`
    color: ${Colors.grayDark};
    font-size: 16px;
    font-weight: bold;
`

export const SubtitleItem = styled.Text`
    color: ${Colors.grayMiddle};
    font-size: 12px;
`

export const ViewMore = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35%;
    height: 100%;
`

export const ViewRadius = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80%;
    padding: 8px;
    border-radius: 40px;
    background-color: ${Colors.redFood};
`

export const BtnRadius = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 15px;
    background-color: ${Colors.white};
`

export const BtnRadiusSoft = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 15px;
    background-color: ${Colors.whiteTransparent};
`

export const Number = styled.Text`
    color: ${Colors.white};
    font-size: 16px;
    font-weight: bold;
`

export const ViewBottom = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: 10px;
    background-color: ${Colors.grayUltralight};
`

export const ButtonAdd = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 35%;
    height: 100%;
    border-radius: 8px;
    background-color: ${Colors.white};
`

export const ButtonTouch = styled.TouchableOpacity`
    padding: 0px 5px;
`

export const ButtonConfirm = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 100%;
    border-radius: 8px;
    background-color: ${Colors.redFood};
`