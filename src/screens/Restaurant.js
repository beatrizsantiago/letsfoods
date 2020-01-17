import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import IconIon from 'react-native-vector-icons/Ionicons'
import IconAnt from 'react-native-vector-icons/AntDesign'
import IconMComm from 'react-native-vector-icons/MaterialCommunityIcons'

import { ScrollGray, ContainerGray, Line, Row, ScrollHorizontal, ContainerScroll } from './styles/MainStyled'
import { LabelTitle, BoxIcon, TextCard, TextCardScratched } from './styles/HomeStyled'
import {
    ViewButtons, CircleButton, BannerImage, DetailsRestaurant, Spacing, TextStars, RowItemsDetails, TextIcon, TextSmall, BoxPromotion,
    CircleImagePromo, ImageCircle, CardPromotion, ViewLabelTitle, TitleCardPromo, ViewLabelDescription, DescriptionCardPromo,
    ViewLabelPromotion, ViewCardMenu, CardMenu, ViewInfo, InfoTitle, InfoSubtitle, ViewCardImage, ImageCard, CircleIconCard
} from './styles/RestaurantStyled'

import burger from '../assets/icons/burger-food.png'
import milkshake from '../assets/icons/milkshake.png'
import fries from '../assets/icons/french-fries.png'
import salads from '../assets/icons/salad.png'

export default Restaurant = props => {
    return (
        <ScrollGray showsVerticalScrollIndicator={false}>
            <ContainerGray>
                <BannerImage resizeMode="cover" source={{ uri: 'https://media-cdn.tripadvisor.com/media/photo-s/07/8d/a1/a3/bob-s.jpg' }} />

                <Spacing />

                <ViewButtons>
                    <CircleButton onPress={() => props.navigation.goBack()}>
                        <IconIon name="ios-arrow-back" color="#333" size={34} style={{ marginRight: 3 }} />
                    </CircleButton>
                    <CircleButton>
                        <IconAnt name="shoppingcart" color="#333" size={34} style={{ marginRight: 3 }} />
                    </CircleButton>
                </ViewButtons>

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
                            <IconAnt name="clockcircleo" size={22} color="#7d7d7d" />
                            <TextIcon>09:00 - 22:00</TextIcon>
                        </BoxIcon>
                    </RowItemsDetails>

                    <Line />

                    <RowItemsDetails>
                        <BoxIcon>
                            <IconMComm name="store" size={22} color="#7d7d7d" />
                            <TextSmall>Praça de alimentação Iguatemi</TextSmall>
                        </BoxIcon>
                    </RowItemsDetails>

                    <RowItemsDetails>
                        <BoxIcon>
                            <IconMComm name="home-outline" size={22} color="#7d7d7d" />
                            <TextSmall>Av. Washington Soares, 85 - Edson Queiroz, Fortaleza - CE</TextSmall>
                        </BoxIcon>
                    </RowItemsDetails>
                </DetailsRestaurant>

                <LabelTitle>Promoções</LabelTitle>

                <ScrollHorizontal horizontal={true} showsHorizontalScrollIndicator={false}>
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
                        <IconIon name="ios-arrow-forward" color="#fff" size={34} style={{ marginLeft: 3 }} />
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
                        <IconIon name="ios-arrow-forward" color="#fff" size={34} style={{ marginLeft: 3 }} />
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
                        <IconIon name="ios-arrow-forward" color="#fff" size={34} style={{ marginLeft: 3 }} />
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
                        <IconIon name="ios-arrow-forward" color="#fff" size={34} style={{ marginLeft: 3 }} />
                    </CircleIconCard>
                </ViewCardMenu>

            </ContainerGray>
        </ScrollGray>
    )
}

Restaurant.navigationOptions = ({ navigation }) => {
    return ({
        header: null
    })
}