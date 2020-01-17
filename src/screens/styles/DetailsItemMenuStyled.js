import React from 'react'
import styled from 'styled-components/native'

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
    background-color: #f12525;
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
    background-color: #fff;
`

export const ImageCircle = styled.Image`
    width: 210px;
    height: 210px;
    border-radius: 110px;
`

export const TextTitle = styled.Text`
    margin: 0px 10px 10px 10px;
    font-size: 25px;
    color: #333;
    font-weight: bold;
`
    
export const Description = styled.Text`
    margin: 0px 30px;
    font-size: 14px;
    color: #333;
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
    border-bottom-color: #f12525;
    background-color: #fff;
`

export const TitleHeader = styled.Text`
    color: #333;
    font-size: 18px;
    font-weight: bold;
`

export const SubtitleHeader = styled.Text`
    color: #7d7d7d;
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
    border-bottom-color: #f5f5f5;
    background-color: #fff;
`

export const ViewLabels = styled.View`
    display: flex;
    justify-content: space-between;
    width: 70%;
    height: 100%;
    padding: 3px 0px;
`

export const TitleItem = styled.Text`
    color: #333;
    font-size: 16px;
    font-weight: bold;
`

export const SubtitleItem = styled.Text`
    color: #7d7d7d;
    font-size: 12px;
`

export const ViewMore = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28%;
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
    background-color: #f12525;
`

export const BtnRadius = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 15px;
    background-color: #fff;
`

export const BtnRadiusSoft = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.4);
`

export const Number = styled.Text`
    color: #fff;
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
    background-color: #f5f5f5;
`

export const ButtonAdd = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 35%;
    height: 100%;
    border-radius: 8px;
    background-color: #fff;
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
    background-color: #f12525;
`