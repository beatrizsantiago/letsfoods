import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import IconAnt from 'react-native-vector-icons/AntDesign'
import IconEntypo from 'react-native-vector-icons/Entypo'

import { ScrollGray, ContainerGray } from './styles/MainStyled'
import {
    Header, HalfCircle, ViewButtons, ViewCircle, CircleContainerImage, ImageCircle, TextTitle, Description, HeaderList, TitleHeader,
    SubtitleHeader, ItemList, ViewLabels, TitleItem, SubtitleItem, ViewMore, ViewRadius, BtnRadius, BtnRadiusSoft, Number, ViewBottom,
    ButtonAdd, ButtonTouch, ButtonConfirm
} from './styles/DetailsItemMenuStyled'

export default DetailsItemMenu = props => {
    return (
        <ContainerGray>
            <ScrollGray showsVerticalScrollIndicator={false}>

                <Header>
                    <HalfCircle />

                    <ViewButtons>
                        <TouchableOpacity onPress={() => props.navigation.goBack()}>
                            <IconAnt name="arrowleft" size={30} color="#333" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <IconAnt name="shoppingcart" size={30} color="#fff" />
                        </TouchableOpacity>
                    </ViewButtons>

                    <ViewCircle>
                        <CircleContainerImage>
                            <ImageCircle resizeMode="cover" source={{ uri: 'https://cdn5.bobsfa.com.br/assets/cardapio/produtos/big-bob.g.png' }} />
                        </CircleContainerImage>
                    </ViewCircle>
                </Header>

                <TextTitle>Big Bob Hamburguer</TextTitle>

                <Description>Pão bola com gergelin, molho gran gourmet, 2 carnes, queijo, alface, tomate e cebola.</Description>

                <HeaderList>
                    <TitleHeader>O que mais você gostaria de acrescentar?</TitleHeader>
                    <SubtitleHeader>Acrescente até 5 itens</SubtitleHeader>
                </HeaderList>

                <ItemList>
                    <ViewLabels>
                        <TitleItem>Queijo</TitleItem>
                        <SubtitleItem>+ R$1,00</SubtitleItem>
                    </ViewLabels>
                    <ViewMore>
                        <ViewRadius>
                            <BtnRadiusSoft>
                                <IconEntypo name="minus" size={24} color="#333" />
                            </BtnRadiusSoft>
                            <Number>0</Number>
                            <BtnRadius>
                                <IconEntypo name="plus" size={24} color="#333" />
                            </BtnRadius>
                        </ViewRadius>
                    </ViewMore>
                </ItemList>

                <ItemList>
                    <ViewLabels>
                        <TitleItem>Calabresa</TitleItem>
                        <SubtitleItem>+ R$3,09</SubtitleItem>
                    </ViewLabels>
                    <ViewMore>
                        <ViewRadius>
                            <BtnRadiusSoft>
                                <IconEntypo name="minus" size={24} color="#333" />
                            </BtnRadiusSoft>
                            <Number>0</Number>
                            <BtnRadius>
                                <IconEntypo name="plus" size={24} color="#333" />
                            </BtnRadius>
                        </ViewRadius>
                    </ViewMore>
                </ItemList>

                <ItemList>
                    <ViewLabels>
                        <TitleItem>Cebola</TitleItem>
                        <SubtitleItem>+ R$0,49</SubtitleItem>
                    </ViewLabels>
                    <ViewMore>
                        <ViewRadius>
                            <BtnRadiusSoft>
                                <IconEntypo name="minus" size={24} color="#333" />
                            </BtnRadiusSoft>
                            <Number>0</Number>
                            <BtnRadius>
                                <IconEntypo name="plus" size={24} color="#333" />
                            </BtnRadius>
                        </ViewRadius>
                    </ViewMore>
                </ItemList>

                <ItemList>
                    <ViewLabels>
                        <TitleItem>Cheddar</TitleItem>
                        <SubtitleItem>+ R$3,49</SubtitleItem>
                    </ViewLabels>
                    <ViewMore>
                        <ViewRadius>
                            <BtnRadiusSoft>
                                <IconEntypo name="minus" size={24} color="#333" />
                            </BtnRadiusSoft>
                            <Number>0</Number>
                            <BtnRadius>
                                <IconEntypo name="plus" size={24} color="#333" />
                            </BtnRadius>
                        </ViewRadius>
                    </ViewMore>
                </ItemList>

                <ItemList>
                    <ViewLabels>
                        <TitleItem>Presunto</TitleItem>
                        <SubtitleItem>+ R$1,29</SubtitleItem>
                    </ViewLabels>
                    <ViewMore>
                        <ViewRadius>
                            <BtnRadiusSoft>
                                <IconEntypo name="minus" size={24} color="#333" />
                            </BtnRadiusSoft>
                            <Number>0</Number>
                            <BtnRadius>
                                <IconEntypo name="plus" size={24} color="#333" />
                            </BtnRadius>
                        </ViewRadius>
                    </ViewMore>
                </ItemList>

            </ScrollGray>

            <ViewBottom>
                <ButtonAdd>
                    <ButtonTouch>
                        <IconEntypo name="minus" size={24} color="#333" />
                    </ButtonTouch>
                    <TitleItem>1</TitleItem>
                    <ButtonTouch>
                        <IconEntypo name="plus" size={24} color="#333" />
                    </ButtonTouch>
                </ButtonAdd>
                <ButtonConfirm>
                    <Number>Selecionar - R$32,99</Number>
                </ButtonConfirm>
            </ViewBottom>
        </ContainerGray>
    )
}

DetailsItemMenu.navigationOptions = ({ navigation }) => {
    return ({
        header: null
    })
}