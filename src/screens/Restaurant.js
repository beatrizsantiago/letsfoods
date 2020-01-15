import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import IconIon from 'react-native-vector-icons/Ionicons'
import IconAnt from 'react-native-vector-icons/AntDesign'
import IconMComm from 'react-native-vector-icons/MaterialCommunityIcons'

import { ScrollGray, ContainerGray, Line, Row } from './styles/MainStyled'
import { LabelTitle, BoxIcon, TextCard } from './styles/HomeStyled'
import { BackButton, BannerImage, DetailsRestaurant, Spacing, TextStars, RowItemsDetails, TextIcon } from './styles/RestaurantStyled'

export default Restaurant = props => {
    return (
        <ScrollGray showsVerticalScrollIndicator={false}>
            <ContainerGray>
                <BannerImage resizeMode="cover" source={{ uri: 'https://media-cdn.tripadvisor.com/media/photo-s/07/8d/a1/a3/bob-s.jpg' }} />
                
                <Spacing />

                <BackButton>
                    <IconIon name="ios-arrow-back" color="#333" size={34} style={{ marginRight: 3 }} />
                </BackButton>

                <DetailsRestaurant>
                    <LabelTitle>Bob's</LabelTitle>

                    <Row>
                        <IconAnt name="star" size={18} color="#ffe600" />
                        <IconAnt name="star" size={18} color="#ffe600" />
                        <IconAnt name="star" size={18} color="#ffe600" />
                        <IconAnt name="star" size={18} color="#ffe600" />
                        <IconAnt name="star" size={18} color="#ffe600" />
                        <TextStars>4,9</TextStars>
                        <TextCard>(3.569 avaliações)</TextCard>
                    </Row>

                    <RowItemsDetails>
                        <BoxIcon>
                            <IconMComm name="silverware-variant" size={22} color="#7d7d7d" />
                            <TextIcon>Burger</TextIcon>
                        </BoxIcon>
                        <BoxIcon>
                            <IconAnt name="enviromento" size={22} color="#7d7d7d" />
                            <TextIcon>1,4km</TextIcon>
                        </BoxIcon>
                        <BoxIcon>
                            <IconAnt name="star" size={22} color="#ffe600" />
                            <TextIcon>4,9</TextIcon>
                        </BoxIcon>
                    </RowItemsDetails>

                    <Line />

                </DetailsRestaurant>
            </ContainerGray>
        </ScrollGray>
    )
}

Restaurant.navigationOptions = ({ navigation }) => {
    return ({
        header: null
    })
}