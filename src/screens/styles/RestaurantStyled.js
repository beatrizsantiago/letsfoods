import React from 'react'
import styled from 'styled-components/native'

export const ViewButtons = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 20px;
    width: 85%;
`

export const CircleButton = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
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
    height: 200px;
    padding: 12px 15px;
    border-radius: 20px;
    background-color: #fff;
`

export const Spacing = styled.View`
    width: 100%;
    height: 108px;
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
    font-size: 14px;
    margin-left: 5px;
`

export const TextSmall = styled.Text`
    width: 92%;
    color: #7d7d7d;
    font-size: 14px;
    margin-left: 5px;
`

export const BoxPromotion = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 170px;
    height: 320px;
    margin: 0px 5px;
`

export const CircleImagePromo = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0px;
    width: 120px;
    height: 120px;
    border-radius: 60px;
    background-color: #fff;
`

export const ImageCircle = styled.Image`
    width: 110px;
    height: 110px;
    border-radius: 60px;
`

export const CardPromotion = styled.View`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 260px;
    padding: 60px 10px 10px 10px;
    border-radius: 30px;
    background-color: #fff;
`

export const ViewLabelTitle = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
`

export const TitleCardPromo = styled.Text`
    width: 100%;
    color: #333;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
`

export const ViewLabelDescription = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 95px;
`

export const DescriptionCardPromo = styled.Text`
    width: 100%;
    font-size: 12px;
    color: #7d7d7d;
    text-align: center;
`

export const ViewLabelPromotion = styled.View`
    display: flex;
    align-items: center;
    width: 100%;
`

export const ViewCardMenu = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90px;
    margin: 5px 0px;
`

export const CardMenu = styled.View`
    display: flex;
    justify-content: center;
    width: 76%;
    height: 100%;
    padding: 15px 60px;
    border-radius: 20px;
    background-color: #fff;
`

export const ViewInfo = styled.View`
    display: flex;
    justify-content: space-between;
    height: 60px;
`

export const InfoTitle = styled.Text`
    color: #333;
    font-size: 24px;
    font-weight: bold;
`

export const InfoSubtitle = styled.Text`
    color: #7d7d7d;
    font-size: 15px;
`

export const ViewCardImage = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 6%;
    width: 70px;
    height: 70px;
    border: solid 3px #f5f5f5;
    border-radius: 15px;
    background-color: #fff;
`

export const ImageCard = styled.Image`
    width: 75%;
    height: 75%;
`

export const CircleIconCard = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 6%;
    width: 45px;
    height: 45px;
    border-radius: 25px;
    background-color: #f12525;
`

// export const BoxPromotion = styled.TouchableOpacity`
//     width: 300px;
//     height: 200px;
//     margin: 0px 5px;
// `

// export const CircleImagePromo = styled.View`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: absolute;
//     top: 0px;
//     left: 0px;
//     width: 120px;
//     height: 120px;
//     border-radius: 60px;
//     background-color: #fff;
// `

// export const ImageCircle = styled.Image`
//     width: 110px;
//     height: 110px;
//     border-radius: 60px;
// `

// export const CardPromotion = styled.View`
//     position: absolute;
//     right: 0px;
//     bottom: 0px;
//     width: 265px;
//     height: 140px;
//     padding: 10px;
//     border-radius: 30px;
//     background-color: #fff;
// `

// export const ViewLabelTitle = styled.View`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: absolute;
//     top: 6px;
//     right: 10px;
//     width: 170px;
//     height: 50px;
// `

// export const TitleCardPromo = styled.Text`
//     width: 100%;
//     color: #333;
//     font-size: 18px;
//     font-weight: bold;
//     text-align: center;
// `

// export const ViewLabelDescription = styled.View`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: absolute;
//     top: 60px;
//     width: 100%;
//     height: 46px;
//     margin: 0px 10px;
// `

// export const DescriptionCardPromo = styled.Text`
//     width: 100%;
//     font-size: 12px;
//     color: #7d7d7d;
//     text-align: center;
// `

// export const ViewLabelPromotion = styled.View`
//     display: flex;
//     flex-direction: row;
//     align-items: flex-end;
//     position: absolute;
//     bottom: 6px;
//     right: 10px;
//     width: 98%;
// `