import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import IconAnt from 'react-native-vector-icons/AntDesign'

import { ContainerScroll, ContainerGray } from './styles/MainStyled'
import {
    ViewRed, ViewIcons, TitleMenu, ViewCardItem, CardItem, ViewInfoItem, InfoTitleItem, InfoDescriptionItem, RowPrice, Price,
    ViewCardImageItem, ImageCardItem
} from './styles/MenuRestaurantStyled'

export default MenuRestaurant = props => {
    return (
        <ContainerGray>
            <ViewRed />
            <ContainerScroll>
                <ViewIcons>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <IconAnt name="arrowleft" size={30} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <IconAnt name="shoppingcart" size={30} color="#333" />
                    </TouchableOpacity>
                </ViewIcons>

                <TitleMenu>Hambúrguers</TitleMenu>

                <ViewCardItem>
                    <CardItem>
                        <ViewInfoItem>
                            <InfoTitleItem>Bib Bob</InfoTitleItem>
                            <InfoDescriptionItem>Pão bola com gergelin, molho gran gourmet, 2 carnes, queijo, alface, tomate e cebola.</InfoDescriptionItem>
                            <RowPrice>
                                <Price>R$14,90</Price>
                            </RowPrice>
                        </ViewInfoItem>
                    </CardItem>
                    <ViewCardImageItem>
                        <ImageCardItem resizeMode="cover" source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG4cviAhSzKvBu3GC8BpU4cCKJRgb2qGIUDRs64fc1PVL13YOj&s' }} />
                    </ViewCardImageItem>
                </ViewCardItem>

                <ViewCardItem>
                    <CardItem>
                        <ViewInfoItem>
                            <InfoTitleItem>Cheddar</InfoTitleItem>
                            <InfoDescriptionItem>Pão bola, molho gran gourmet, 2 carnes, queijo cheddar, alface, tomate e cebola.</InfoDescriptionItem>
                            <RowPrice>
                                <Price>R$11,90</Price>
                            </RowPrice>
                        </ViewInfoItem>
                    </CardItem>
                    <ViewCardImageItem>
                        <ImageCardItem resizeMode="cover" source={{ uri: 'https://www.testapramim.com.br/wp-content/uploads/2018/04/double-cheddar-bobs.jpg' }} />
                    </ViewCardImageItem>
                </ViewCardItem>

                <ViewCardItem>
                    <CardItem>
                        <ViewInfoItem>
                            <InfoTitleItem>Cheddar Australiano</InfoTitleItem>
                            <InfoDescriptionItem>Pão bola autraliano com gergelin, 2 carnes, queijo cheddar, alface, tomate e cebola.</InfoDescriptionItem>
                            <RowPrice>
                                <Price>R$13,90</Price>
                            </RowPrice>
                        </ViewInfoItem>
                    </CardItem>
                    <ViewCardImageItem>
                        <ImageCardItem resizeMode="cover" source={{ uri: 'https://thelivery.com.br//img/products/site/novobobs-(17)934740937.jpg' }} />
                    </ViewCardImageItem>
                </ViewCardItem>

                <ViewCardItem>
                    <CardItem>
                        <ViewInfoItem>
                            <InfoTitleItem>Tentador Carne</InfoTitleItem>
                            <InfoDescriptionItem>Pão bola, molho gran gourmet, 1 carne, alface, tomate e cebola.</InfoDescriptionItem>
                            <RowPrice>
                                <Price>R$12,90</Price>
                            </RowPrice>
                        </ViewInfoItem>
                    </CardItem>
                    <ViewCardImageItem>
                        <ImageCardItem resizeMode="cover" source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkhivu4e7seilbNyo-D8-Na6L1TeYUsNznn2pHhlaWU1VRDlVw&s' }} />
                    </ViewCardImageItem>
                </ViewCardItem>

                <ViewCardItem>
                    <CardItem>
                        <ViewInfoItem>
                            <InfoTitleItem>Tentador Frango</InfoTitleItem>
                            <InfoDescriptionItem>Pão bola, molho gran gourmet, 1 carne de frango, alface, tomate e cebola.</InfoDescriptionItem>
                            <RowPrice>
                                <Price>R$12,90</Price>
                            </RowPrice>
                        </ViewInfoItem>
                    </CardItem>
                    <ViewCardImageItem>
                        <ImageCardItem resizeMode="cover" source={{ uri: 'https://uploads.metropoles.com/wp-content/uploads/2019/05/24132807/unnamed-114.jpg' }} />
                    </ViewCardImageItem>
                </ViewCardItem>

                <ViewCardItem>
                    <CardItem>
                        <ViewInfoItem>
                            <InfoTitleItem>Tentador Zero Beef</InfoTitleItem>
                            <InfoDescriptionItem>Pão bola, molho gran gourmet, 1 carnes, alface, tomate e cebola.</InfoDescriptionItem>
                            <RowPrice>
                                <Price>R$15,90</Price>
                            </RowPrice>
                        </ViewInfoItem>
                    </CardItem>
                    <ViewCardImageItem>
                        <ImageCardItem resizeMode="cover" source={{ uri: 'http://www.startagro.agr.br/wp-content/uploads/2019/09/rebel-whopper.jpg' }} />
                    </ViewCardImageItem>
                </ViewCardItem>

                <ViewCardItem>
                    <CardItem>
                        <ViewInfoItem>
                            <InfoTitleItem>Bob's Burger</InfoTitleItem>
                            <InfoDescriptionItem>Pão bola, molho gran gourmet, 1 carnes, alface, tomate e cebola.</InfoDescriptionItem>
                            <RowPrice>
                                <Price>R$10,90</Price>
                            </RowPrice>
                        </ViewInfoItem>
                    </CardItem>
                    <ViewCardImageItem>
                        <ImageCardItem resizeMode="cover" source={{ uri: 'https://conteudo.imguol.com.br/c/noticias/45/2018/12/28/mcdonalds-mc-duplo-picanha-1546003120379_v2_450x450.jpg' }} />
                    </ViewCardImageItem>
                </ViewCardItem>

                <ViewCardItem>
                    <CardItem>
                        <ViewInfoItem>
                            <InfoTitleItem>Chicken Crispy</InfoTitleItem>
                            <InfoDescriptionItem>Pão bola, molho gran gourmet, 1 carne de frango e alface.</InfoDescriptionItem>
                            <RowPrice>
                                <Price>R$15,90</Price>
                            </RowPrice>
                        </ViewInfoItem>
                    </CardItem>
                    <ViewCardImageItem>
                        <ImageCardItem resizeMode="cover" source={{ uri: 'https://www.testapramim.com.br/wp-content/uploads/2018/04/crispy-bobs.jpg' }} />
                    </ViewCardImageItem>
                </ViewCardItem>

                <ViewCardItem>
                    <CardItem>
                        <ViewInfoItem>
                            <InfoTitleItem>Crispy Bacon</InfoTitleItem>
                            <InfoDescriptionItem>Pão bola, molho gran gourmet, 2 carnes de frango, queijo, bacon, alface, tomate e cebola.</InfoDescriptionItem>
                            <RowPrice>
                                <Price>R$16,90</Price>
                            </RowPrice>
                        </ViewInfoItem>
                    </CardItem>
                    <ViewCardImageItem>
                        <ImageCardItem resizeMode="cover" source={{ uri: 'https://img.r7.com/images/2017/11/17/98tpenft3u_54atijg94d_file' }} />
                    </ViewCardImageItem>
                </ViewCardItem>

                <ViewCardItem>
                    <CardItem>
                        <ViewInfoItem>
                            <InfoTitleItem>Double Cheese</InfoTitleItem>
                            <InfoDescriptionItem>Pão bola com gergelin, molho gran gourmet, 2 carnes, 2 queijos, alface e tomate.</InfoDescriptionItem>
                            <RowPrice>
                                <Price>R$15,90</Price>
                            </RowPrice>
                        </ViewInfoItem>
                    </CardItem>
                    <ViewCardImageItem>
                        <ImageCardItem resizeMode="cover" source={{ uri: 'https://www.testapramim.com.br/wp-content/uploads/2018/04/picanha-barbecue-bobs.jpg' }} />
                    </ViewCardImageItem>
                </ViewCardItem>

                <ViewCardItem>
                    <CardItem>
                        <ViewInfoItem>
                            <InfoTitleItem>Bob's Artesanal</InfoTitleItem>
                            <InfoDescriptionItem>Pão bola, molho gran gourmet, 2 carnes, 2 queijos, bacon, ovo e alface.</InfoDescriptionItem>
                            <RowPrice>
                                <Price>R$17,90</Price>
                            </RowPrice>
                        </ViewInfoItem>
                    </CardItem>
                    <ViewCardImageItem>
                        <ImageCardItem resizeMode="cover" source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLCI_-J66PaGxAvWVkYHDY8SFiEM9XYROJOxihb4wtgf3lxUtK&s' }} />
                    </ViewCardImageItem>
                </ViewCardItem>

                <ViewCardItem>
                    <CardItem>
                        <ViewInfoItem>
                            <InfoTitleItem>Parmesão Artesanal</InfoTitleItem>
                            <InfoDescriptionItem>Pão bola, 2 carnes, parmesão, ovo, alface, tomate e cebola.</InfoDescriptionItem>
                            <RowPrice>
                                <Price>R$17,90</Price>
                            </RowPrice>
                        </ViewInfoItem>
                    </CardItem>
                    <ViewCardImageItem>
                        <ImageCardItem resizeMode="cover" source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1haIniwMm2gMOKXYQalOsvmnfL6X2swe2YuzohMSRyefaKw1r&s' }} />
                    </ViewCardImageItem>
                </ViewCardItem>

                <ViewCardItem>
                    <CardItem>
                        <ViewInfoItem>
                            <InfoTitleItem>Bourbon Artesanal</InfoTitleItem>
                            <InfoDescriptionItem>Pão bola, 2 carnes, cheddar, bacon, tomate e cebola.</InfoDescriptionItem>
                            <RowPrice>
                                <Price>R$18,90</Price>
                            </RowPrice>
                        </ViewInfoItem>
                    </CardItem>
                    <ViewCardImageItem>
                        <ImageCardItem resizeMode="cover" source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSmtAPSzh-w9nTTUunVRFQSni4XDx41O_VdChYV3qe52jbmm-p3g&s' }} />
                    </ViewCardImageItem>
                </ViewCardItem>

                <ViewCardItem>
                    <CardItem>
                        <ViewInfoItem>
                            <InfoTitleItem>Cheese Burger</InfoTitleItem>
                            <InfoDescriptionItem>Pão bola, 1 carne e queijo.</InfoDescriptionItem>
                            <RowPrice>
                                <Price>R$8,90</Price>
                            </RowPrice>
                        </ViewInfoItem>
                    </CardItem>
                    <ViewCardImageItem>
                        <ImageCardItem resizeMode="cover" source={{ uri: 'http://shopblob.blob.core.windows.net/1204-produtoimagem/zoom-Sanduiche-CHEDDAR.jpg' }} />
                    </ViewCardImageItem>
                </ViewCardItem>

            </ContainerScroll>
        </ContainerGray>
    )
}

MenuRestaurant.navigationOptions = ({ navigation }) => {
    return ({
        header: null
    })
}