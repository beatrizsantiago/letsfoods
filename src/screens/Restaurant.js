import React, { useState, useEffect } from 'react'
import { View, Text, Animated, Easing, Dimensions } from 'react-native'
import IconIon from 'react-native-vector-icons/Ionicons'
import IconAnt from 'react-native-vector-icons/AntDesign'
import IconMComm from 'react-native-vector-icons/MaterialCommunityIcons'
import { NavigationActions } from 'react-navigation'

import { ScrollGray, ContainerGray, Line, Row, ScrollHorizontal } from './styles/MainStyled'
import { LabelTitle, BoxIcon, TextCard, TextCardScratched } from './styles/HomeStyled'
import {
    ViewButtons, CircleButton, BannerImage, DetailsRestaurant, Spacing, TextStars, RowItemsDetails, TextIcon, TextSmall, BoxPromotion,
    CircleImagePromo, ImageCircle, CardPromotion, ViewLabelTitle, TitleCardPromo, ViewLabelDescription, DescriptionCardPromo,
    ViewLabelPromotion, ViewCardMenu, CardMenu, ViewInfo, InfoTitle, InfoSubtitle, ViewCardImage, ImageCard, CircleIconCard
} from './styles/RestaurantStyled'
import { Colors } from './styles/themes/Colors'

import burger from '../assets/icons/burger-food.png'
import milkshake from '../assets/icons/milkshake.png'
import fries from '../assets/icons/french-fries.png'
import salads from '../assets/icons/salad.png'

export default Restaurant = props => {

    const boxOpacityValue = new Animated.Value(0)
    const boxOpacity = boxOpacityValue.interpolate({
        inputRange: [0, 0.25, 0.5, 0.75, 1],
        outputRange: [0, 0.25, 0.5, 0.75, 1]
    })

    const imageTranslateYValue = new Animated.Value(0)
    const imageMoveY = imageTranslateYValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-260, 0]
    })

    const textScaleValue = new Animated.Value(0)
    const textScale = textScaleValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    })

    const scrollTranslateXValue = new Animated.Value(0)
    const scrollMoveX = scrollTranslateXValue.interpolate({
        inputRange: [0, 1],
        outputRange: [600, 0]
    })

    useEffect(() => {
        animate()
    }, [])

    const animate = () => {
        boxOpacityValue.setValue(0)
        imageTranslateYValue.setValue(0)
        textScaleValue.setValue(0)
        scrollTranslateXValue.setValue(0)

        Animated.parallel([
            Animated.timing(boxOpacityValue, {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear
            }),
            Animated.timing(imageTranslateYValue, {
                toValue: 1,
                duration: 800,
                easing: Easing.linear
            }),
            Animated.timing(textScaleValue, {
                toValue: 1,
                duration: 800,
                easing: Easing.linear
            }),
            Animated.timing(scrollTranslateXValue, {
                toValue: 1,
                duration: 800,
                easing: Easing.linear
            }),
        ]).start()
    }

    return (
        <ScrollGray showsVerticalScrollIndicator={false}>
            <ContainerGray>
                <BannerImage
                    as={Animated.Image}
                    style={{ transform: [{ translateY: imageMoveY }] }}
                    resizeMode="cover"
                    source={{ uri: 'https://media-cdn.tripadvisor.com/media/photo-s/07/8d/a1/a3/bob-s.jpg' }}
                />

                <Spacing />

                <ViewButtons>
                    <CircleButton onPress={() => props.navigation.goBack()}>
                        <IconIon name="ios-arrow-back" color={Colors.grayDark} size={34} style={{ marginRight: 3 }} />
                    </CircleButton>
                    <CircleButton onPress={() => props.navigation.navigate('Cart')} >
                        <IconAnt name="shoppingcart" color={Colors.grayDark} size={34} style={{ marginRight: 3 }} />
                    </CircleButton>
                </ViewButtons>

                <DetailsRestaurant as={Animated.View} {...props} style={{ opacity: boxOpacity }}>
                    <LabelTitle>Bob's</LabelTitle>

                    <Row>
                        <IconAnt name="star" size={18} color={Colors.yellowStar} />
                        <IconAnt name="star" size={18} color={Colors.yellowStar} />
                        <IconAnt name="star" size={18} color={Colors.yellowStar} />
                        <IconAnt name="star" size={18} color={Colors.yellowStar} />
                        <IconAnt name="star" size={18} color={Colors.yellowStar} />
                        <TextStars>4,9</TextStars>
                        <TextCard>(3.569 avaliações)</TextCard>
                    </Row>

                    <RowItemsDetails>
                        <BoxIcon>
                            <IconMComm name="silverware-variant" size={22} color={Colors.grayMiddle} />
                            <TextIcon>Burger</TextIcon>
                        </BoxIcon>
                        <BoxIcon>
                            <IconAnt name="enviromento" size={22} color={Colors.grayMiddle} />
                            <TextIcon>1,4km</TextIcon>
                        </BoxIcon>
                        <BoxIcon>
                            <IconAnt name="clockcircleo" size={22} color={Colors.grayMiddle} />
                            <TextIcon>09:00 - 22:00</TextIcon>
                        </BoxIcon>
                    </RowItemsDetails>

                    <Line />

                    <RowItemsDetails>
                        <BoxIcon>
                            <IconMComm name="store" size={22} color={Colors.grayMiddle} />
                            <TextSmall>Praça de alimentação Iguatemi</TextSmall>
                        </BoxIcon>
                    </RowItemsDetails>

                    <RowItemsDetails>
                        <BoxIcon>
                            <IconMComm name="home-outline" size={22} color={Colors.grayMiddle} />
                            <TextSmall>Av. Washington Soares, 85 - Edson Queiroz, Fortaleza - CE</TextSmall>
                        </BoxIcon>
                    </RowItemsDetails>
                </DetailsRestaurant>

                <LabelTitle as={Animated.Text} style={{ transform: [{ scale: textScale }] }}>Promoções</LabelTitle>

                <ScrollHorizontal as={Animated.ScrollView} style={{ transform: [{ translateX: scrollMoveX }] }} horizontal={true} showsHorizontalScrollIndicator={false} >
                    <BoxPromotion>
                        <CardPromotion>
                            <ViewLabelTitle>
                                <TitleCardPromo>Milkshake Ovomaltine G</TitleCardPromo>
                            </ViewLabelTitle>
                            <ViewLabelDescription>
                                <DescriptionCardPromo>Milkshake de ovomaltine crocante de 500ml com cobertura de chocolate.</DescriptionCardPromo>
                            </ViewLabelDescription>
                            <ViewLabelPromotion>
                                <LabelTitle>R$11,90</LabelTitle>
                                <TextCardScratched>R$14,90</TextCardScratched>
                            </ViewLabelPromotion>
                        </CardPromotion>

                        <CircleImagePromo>
                            <ImageCircle resizeMode="cover" source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyqurcwu95s_zvC6vP_0wqId9Obned0NBJGYc7tlB35VBaHhCzkQ&s' }} />
                        </CircleImagePromo>
                    </BoxPromotion>

                    <BoxPromotion>
                        <CardPromotion>
                            <ViewLabelTitle>
                                <TitleCardPromo>Trio Big Bob M</TitleCardPromo>
                            </ViewLabelTitle>
                            <ViewLabelDescription>
                                <DescriptionCardPromo>Big Bog M com molho gran gourmet, 2 carnes, queijo cheddar, alface e tomate. Batata frita M e Milkshake M.</DescriptionCardPromo>
                            </ViewLabelDescription>
                            <ViewLabelPromotion>
                                <LabelTitle>R$14,90</LabelTitle>
                                <TextCardScratched>R$19,90</TextCardScratched>
                            </ViewLabelPromotion>
                        </CardPromotion>

                        <CircleImagePromo>
                            <ImageCircle resizeMode="cover" source={{ uri: 'https://static.pelando.com.br/live/threads/content/a8qCW/206710.jpg' }} />
                        </CircleImagePromo>
                    </BoxPromotion>

                    <BoxPromotion>
                        <CardPromotion>
                            <ViewLabelTitle>
                                <TitleCardPromo>Trio Australiano Cheddar M</TitleCardPromo>
                            </ViewLabelTitle>
                            <ViewLabelDescription>
                                <DescriptionCardPromo>Pão australiano, 2 carnes, queijo cheddar, bacon e cebola. Batata frita M e refrigerande de 400ml.</DescriptionCardPromo>
                            </ViewLabelDescription>
                            <ViewLabelPromotion>
                                <LabelTitle>R$15,00</LabelTitle>
                                <TextCardScratched>R$17,90</TextCardScratched>
                            </ViewLabelPromotion>
                        </CardPromotion>

                        <CircleImagePromo>
                            <ImageCircle resizeMode="cover" source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuI56_H2WVHqq9IE7hn4ikEgb7f8Cz-OV4z9K3FCuDJ8pi1Q0f&s' }} />
                        </CircleImagePromo>
                    </BoxPromotion>

                    <BoxPromotion>
                        <CardPromotion>
                            <ViewLabelTitle>
                                <TitleCardPromo>Batata Canoa M</TitleCardPromo>
                            </ViewLabelTitle>
                            <ViewLabelDescription>
                                <DescriptionCardPromo>Batata frita canoa de tamanho M com 200ml de molho gran gourmet.</DescriptionCardPromo>
                            </ViewLabelDescription>
                            <ViewLabelPromotion>
                                <LabelTitle>R$10,00</LabelTitle>
                                <TextCardScratched>R$14,90</TextCardScratched>
                            </ViewLabelPromotion>
                        </CardPromotion>

                        <CircleImagePromo>
                            <ImageCircle resizeMode="cover" source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStNOdL6FjidpEKWzoAIU7FDHv5qXS2fM0bDWQEQTX4gbI5rua2&s' }} />
                        </CircleImagePromo>
                    </BoxPromotion>
                </ScrollHorizontal>

                <Line />

                <LabelTitle>Cardápio</LabelTitle>

                <ViewCardMenu onPress={() => props.navigation.navigate('MenuRestaurant')}>
                    <CardMenu>
                        <ViewInfo>
                            <InfoTitle>Hambúrguer</InfoTitle>
                            <InfoSubtitle>30 itens</InfoSubtitle>
                        </ViewInfo>
                    </CardMenu>
                    <ViewCardImage>
                        <ImageCard source={burger} />
                    </ViewCardImage>
                    <CircleIconCard>
                        <IconIon name="ios-arrow-forward" color={Colors.white} size={34} style={{ marginLeft: 3 }} />
                    </CircleIconCard>
                </ViewCardMenu>

                <ViewCardMenu onPress={() => props.navigation.navigate('MenuRestaurant')}>
                    <CardMenu>
                        <ViewInfo>
                            <InfoTitle>Bebidas</InfoTitle>
                            <InfoSubtitle>22 itens</InfoSubtitle>
                        </ViewInfo>
                    </CardMenu>
                    <ViewCardImage>
                        <ImageCard source={milkshake} />
                    </ViewCardImage>
                    <CircleIconCard>
                        <IconIon name="ios-arrow-forward" color={Colors.white} size={34} style={{ marginLeft: 3 }} />
                    </CircleIconCard>
                </ViewCardMenu>

                <ViewCardMenu onPress={() => props.navigation.navigate('MenuRestaurant')}>
                    <CardMenu>
                        <ViewInfo>
                            <InfoTitle>Batatas Fritas</InfoTitle>
                            <InfoSubtitle>5 itens</InfoSubtitle>
                        </ViewInfo>
                    </CardMenu>
                    <ViewCardImage>
                        <ImageCard source={fries} />
                    </ViewCardImage>
                    <CircleIconCard>
                        <IconIon name="ios-arrow-forward" color={Colors.white} size={34} style={{ marginLeft: 3 }} />
                    </CircleIconCard>
                </ViewCardMenu>

                <ViewCardMenu onPress={() => props.navigation.navigate('MenuRestaurant')}>
                    <CardMenu>
                        <ViewInfo>
                            <InfoTitle>Salada</InfoTitle>
                            <InfoSubtitle>2 itens</InfoSubtitle>
                        </ViewInfo>
                    </CardMenu>
                    <ViewCardImage>
                        <ImageCard source={salads} />
                    </ViewCardImage>
                    <CircleIconCard>
                        <IconIon name="ios-arrow-forward" color={Colors.white} size={34} style={{ marginLeft: 3 }} />
                    </CircleIconCard>
                </ViewCardMenu>

            </ContainerGray>
        </ScrollGray>
    )
}

Restaurant.navigationOptions = ({ navigation }) => {
    return ({
        header: null,
    })
}