import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import IconEntypo from 'react-native-vector-icons/Entypo'

import { ContainerGray } from './styles/MainStyled'
import { Card, BigSpacing, SmallSpacing, TitleCard, TextCard, Box, TitleBox, CardBox, ImageBox, BoxInfo, Info, ButtonAdd, ButtonTouch } from './styles/CartStyled'
import { Colors } from './styles/themes/Colors'

export default Cart = props => {
    return (
        <ContainerGray>
            <Card>
                <BigSpacing>
                    <TitleCard>Ponto de retirada</TitleCard>
                    <TextCard>Bob's Shopping Iguatemi - Praça de alimentação</TextCard>
                </BigSpacing>
                <SmallSpacing>
                    <TitleCard>Total</TitleCard>
                    <TextCard>R$34,99</TextCard>
                </SmallSpacing>
            </Card>

            <Box>
                <TitleBox>Itens</TitleBox>
                <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
                    <CardBox>
                        <ImageBox resizeMode="cover" source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG4cviAhSzKvBu3GC8BpU4cCKJRgb2qGIUDRs64fc1PVL13YOj&s' }} />
                        <BoxInfo>
                            <Info>Big Bob M</Info>
                        </BoxInfo>
                        <ButtonAdd>
                            <ButtonTouch>
                                <IconEntypo name="minus" size={24} color={Colors.grayDark} />
                            </ButtonTouch>
                            <TextCard>1</TextCard>
                            <ButtonTouch>
                                <IconEntypo name="plus" size={24} color={Colors.grayDark} />
                            </ButtonTouch>
                        </ButtonAdd>
                    </CardBox>

                    <CardBox>
                        <ImageBox resizeMode="cover" source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLCI_-J66PaGxAvWVkYHDY8SFiEM9XYROJOxihb4wtgf3lxUtK&s' }} />
                        <BoxInfo>
                            <Info>Bob's Artesanal</Info>
                        </BoxInfo>
                        <ButtonAdd>
                            <ButtonTouch>
                                <IconEntypo name="minus" size={24} color={Colors.grayDark} />
                            </ButtonTouch>
                            <TextCard>1</TextCard>
                            <ButtonTouch>
                                <IconEntypo name="plus" size={24} color={Colors.grayDark} />
                            </ButtonTouch>
                        </ButtonAdd>
                    </CardBox>

                    <CardBox>
                        <ImageBox resizeMode="cover" source={{ uri: 'https://thelivery.com.br//img/products/site/novobobs-(17)934740937.jpg' }} />
                        <BoxInfo>
                            <Info>Cheddar Australiano</Info>
                        </BoxInfo>
                        <ButtonAdd>
                            <ButtonTouch>
                                <IconEntypo name="minus" size={24} color={Colors.grayDark} />
                            </ButtonTouch>
                            <TextCard>1</TextCard>
                            <ButtonTouch>
                                <IconEntypo name="plus" size={24} color={Colors.grayDark} />
                            </ButtonTouch>
                        </ButtonAdd>
                    </CardBox>

                    <CardBox>
                        <ImageBox resizeMode="cover" source={{ uri: 'https://abrilexame.files.wordpress.com/2017/08/batata-canoa-mega.png?w=1008&h=767' }} />
                        <BoxInfo>
                            <Info>Batata com Cheddar e Bacon</Info>
                        </BoxInfo>
                        <ButtonAdd>
                            <ButtonTouch>
                                <IconEntypo name="minus" size={24} color={Colors.grayDark} />
                            </ButtonTouch>
                            <TextCard>1</TextCard>
                            <ButtonTouch>
                                <IconEntypo name="plus" size={24} color={Colors.grayDark} />
                            </ButtonTouch>
                        </ButtonAdd>
                    </CardBox>

                    <CardBox>
                        <ImageBox resizeMode="cover" source={{ uri: 'https://conteudo.imguol.com.br/c/noticias/1b/2016/09/13/milkshake-de-ovomaltine-do-bobs-1473778469118_615x300.jpg' }} />
                        <BoxInfo>
                            <Info>Milkshake Ovomaltine G</Info>
                        </BoxInfo>
                        <ButtonAdd>
                            <ButtonTouch>
                                <IconEntypo name="minus" size={24} color={Colors.grayDark} />
                            </ButtonTouch>
                            <TextCard>1</TextCard>
                            <ButtonTouch>
                                <IconEntypo name="plus" size={24} color={Colors.grayDark} />
                            </ButtonTouch>
                        </ButtonAdd>
                    </CardBox>

                    <CardBox>
                        <ImageBox resizeMode="cover" source={{ uri: 'https://cdn9.bobsfa.com.br/assets/cardapio/produtos/milk-shake-nuts-com-morango.png' }} />
                        <BoxInfo>
                            <Info>Milkshake Morango M</Info>
                        </BoxInfo>
                        <ButtonAdd>
                            <ButtonTouch>
                                <IconEntypo name="minus" size={24} color={Colors.grayDark} />
                            </ButtonTouch>
                            <TextCard>1</TextCard>
                            <ButtonTouch>
                                <IconEntypo name="plus" size={24} color={Colors.grayDark} />
                            </ButtonTouch>
                        </ButtonAdd>
                    </CardBox>

                    <CardBox>
                        <ImageBox resizeMode="cover" source={{ uri: 'https://cdn1.bobsfa.com.br/assets/cardapio/produtos/refrigerantes.png' }} />
                        <BoxInfo>
                            <Info>Refrigerante 300ml</Info>
                        </BoxInfo>
                        <ButtonAdd>
                            <ButtonTouch>
                                <IconEntypo name="minus" size={24} color={Colors.grayDark} />
                            </ButtonTouch>
                            <TextCard>1</TextCard>
                            <ButtonTouch>
                                <IconEntypo name="plus" size={24} color={Colors.grayDark} />
                            </ButtonTouch>
                        </ButtonAdd>
                    </CardBox>
                </ScrollView>
            </Box>
        </ContainerGray>
    )
}

Cart.navigationOptions = ({ navigation }) => {
    return ({
        header: null
    })
}