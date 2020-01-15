import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import IconMComm from 'react-native-vector-icons/MaterialCommunityIcons'
import IconAnt from 'react-native-vector-icons/AntDesign'

import { ContainerGray, ContainerScroll, ScrollHorizontal, Line } from './styles/MainStyled'
import {
    BoxImage, ImageBox, CardBox, LabelTitle, BoxItemScroll, CircleIcon, ImageIcon, LargeCard, ImageView, ImageCard, BodyCard, TitleCard,
    TextCard, TextCardScratched, RowItemsCard, BoxIcon
} from './styles/HomeStyled'

import burger from '../assets/icons/burger.png'
import pizza from '../assets/icons/pizza.png'
import pastas from '../assets/icons/pastas.png'
import japanese from '../assets/icons/japanese.png'
import desserts from '../assets/icons/desserts.png'
import coffee from '../assets/icons/coffee.png'
import drinks from '../assets/icons/drinks.png'
import breakfeast from '../assets/icons/breakfeast.png'
import lunch from '../assets/icons/lunch.png'

export default Home = props => {
    return (
        <ContainerGray>
            <ContainerScroll showsVerticalScrollIndicator={false}>

                <ScrollHorizontal horizontal={true} showsHorizontalScrollIndicator={false}>
                    <BoxImage>
                        <ImageBox source={{ uri: 'https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0R0f00000xsvI6EAI/5ba38e95e4b0e8a409971a79.jpg&w=710&h=462' }} />
                        <CardBox>
                            <TitleCard>Pizza de Calabresa G</TitleCard>
                            <RowItemsCard>
                                <TextCard>Pasto & Pizza</TextCard>
                                <BoxIcon>
                                    <IconAnt name="star" size={18} color="#ffe600" />
                                    <IconAnt name="star" size={18} color="#ffe600" />
                                    <IconAnt name="star" size={18} color="#ffe600" />
                                    <IconAnt name="star" size={18} color="#ffe600" />
                                    <IconAnt name="star" size={18} color="#ffe600" />
                                    <TextCard> 5,0</TextCard>
                                </BoxIcon>
                            </RowItemsCard>
                            <RowItemsCard>
                                <BoxIcon>
                                    <IconAnt name="enviromento" size={18} color="#7d7d7d" />
                                    <TextCard>1,4km</TextCard>
                                </BoxIcon>
                                <BoxIcon>
                                    <Text style={{ fontSize: 22 }}>R$39,90</Text>
                                    <TextCardScratched>R$49,90</TextCardScratched>
                                </BoxIcon>
                            </RowItemsCard>
                        </CardBox>
                    </BoxImage>

                    <BoxImage>
                        <ImageBox source={{ uri: 'https://abrilveja.files.wordpress.com/2016/09/393084220_1280x720.jpg' }} />
                        <CardBox>
                            <TitleCard>Milkshake Ovomaltine G</TitleCard>
                            <RowItemsCard>
                                <TextCard>Bob's</TextCard>
                                <BoxIcon>
                                    <IconAnt name="star" size={18} color="#ffe600" />
                                    <IconAnt name="star" size={18} color="#ffe600" />
                                    <IconAnt name="star" size={18} color="#ffe600" />
                                    <IconAnt name="star" size={18} color="#ffe600" />
                                    <IconAnt name="star" size={18} color="#ffe600" />
                                    <TextCard> 4,9</TextCard>
                                </BoxIcon>
                            </RowItemsCard>
                            <RowItemsCard>
                                <BoxIcon>
                                    <IconAnt name="enviromento" size={18} color="#7d7d7d" />
                                    <TextCard>1,4km</TextCard>
                                </BoxIcon>
                                <BoxIcon>
                                    <Text style={{ fontSize: 22 }}>R$11,90</Text>
                                    <TextCardScratched>R$14,90</TextCardScratched>
                                </BoxIcon>
                            </RowItemsCard>
                        </CardBox>
                    </BoxImage>

                    <BoxImage>
                        <ImageBox source={{ uri: 'https://www.baratocoletivo.com.br/static/team/2012/1026/13512731097984.jpg' }} />
                        <CardBox>
                            <TitleCard>Pastel Maria Bonita 40cm</TitleCard>
                            <RowItemsCard>
                                <TextCard>Cheppitos</TextCard>
                                <BoxIcon>
                                    <IconAnt name="star" size={18} color="#ffe600" />
                                    <IconAnt name="star" size={18} color="#ffe600" />
                                    <IconAnt name="star" size={18} color="#ffe600" />
                                    <IconAnt name="star" size={18} color="#ffe600" />
                                    <IconAnt name="star" size={18} color="#ffe600" />
                                    <TextCard> 4,9</TextCard>
                                </BoxIcon>
                            </RowItemsCard>
                            <RowItemsCard>
                                <BoxIcon>
                                    <IconAnt name="enviromento" size={18} color="#7d7d7d" />
                                    <TextCard>1,4km</TextCard>
                                </BoxIcon>
                                <BoxIcon>
                                    <Text style={{ fontSize: 22 }}>R$19,90</Text>
                                    <TextCardScratched>R$24,90</TextCardScratched>
                                </BoxIcon>
                            </RowItemsCard>
                        </CardBox>
                    </BoxImage>
                </ScrollHorizontal>

                <LabelTitle>Categorias</LabelTitle>

                <ScrollHorizontal horizontal={true} showsHorizontalScrollIndicator={false}>
                    <BoxItemScroll>
                        <CircleIcon>
                            <ImageIcon source={burger} />
                        </CircleIcon>
                        <TextCard>Hambúrguers</TextCard>
                    </BoxItemScroll>

                    <BoxItemScroll>
                        <CircleIcon>
                            <ImageIcon style={{ marginLeft: -8 }} source={pizza} />
                        </CircleIcon>
                        <TextCard>Pizzas</TextCard>
                    </BoxItemScroll>

                    <BoxItemScroll>
                        <CircleIcon>
                            <ImageIcon source={pastas} />
                        </CircleIcon>
                        <TextCard>Massas</TextCard>
                    </BoxItemScroll>

                    <BoxItemScroll>
                        <CircleIcon>
                            <ImageIcon source={japanese} />
                        </CircleIcon>
                        <TextCard>Japonesa</TextCard>
                    </BoxItemScroll>

                    <BoxItemScroll>
                        <CircleIcon>
                            <ImageIcon source={desserts} />
                        </CircleIcon>
                        <TextCard>Sobremesas</TextCard>
                    </BoxItemScroll>

                    <BoxItemScroll>
                        <CircleIcon>
                            <ImageIcon source={coffee} />
                        </CircleIcon>
                        <TextCard>Café</TextCard>
                    </BoxItemScroll>

                    <BoxItemScroll>
                        <CircleIcon>
                            <ImageIcon source={drinks} />
                        </CircleIcon>
                        <TextCard>Bebidas</TextCard>
                    </BoxItemScroll>

                    <BoxItemScroll>
                        <CircleIcon>
                            <ImageIcon source={breakfeast} />
                        </CircleIcon>
                        <TextCard>Café da Manhã</TextCard>
                    </BoxItemScroll>

                    <BoxItemScroll>
                        <CircleIcon>
                            <ImageIcon source={lunch} />
                        </CircleIcon>
                        <TextCard>Almoço</TextCard>
                    </BoxItemScroll>
                </ScrollHorizontal>

                <Line />

                <LabelTitle>Restaurantes</LabelTitle>

                <LargeCard onPress={() => props.navigation.navigate('Restaurant')}>
                    <ImageView>
                        <ImageCard source={{ uri: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0022/6775/brand.gif?itok=bRhyR5WJ' }} />
                    </ImageView>

                    <BodyCard>
                        <TitleCard>Bob's</TitleCard>
                        <TextCard>Bob's é uma rede de restaurantes de comida rápida brasileira fundada em 1952.</TextCard>
                        <RowItemsCard>
                            <BoxIcon>
                                <IconMComm name="silverware-variant" size={18} color="#7d7d7d" />
                                <TextCard>Burger</TextCard>
                            </BoxIcon>
                            <BoxIcon>
                                <IconAnt name="enviromento" size={18} color="#7d7d7d" />
                                <TextCard>1,4km</TextCard>
                            </BoxIcon>
                            <BoxIcon>
                                <IconAnt name="star" size={18} color="#ffe600" />
                                <TextCard>4,9</TextCard>
                            </BoxIcon>
                        </RowItemsCard>
                    </BodyCard>
                </LargeCard>

                <LargeCard onPress={() => props.navigation.navigate('Restaurant')}>
                    <ImageView>
                        <ImageCard source={{ uri: 'https://media.licdn.com/dms/image/C4D0BAQF3SJzyv6EGbQ/company-logo_200_200/0?e=2159024400&v=beta&t=F8yAehcGx3cFMP45dcUkcma4zcjLsXJm2xHEraUZ848' }} />
                    </ImageView>

                    <BodyCard>
                        <TitleCard>Mini Kalzone</TitleCard>
                        <TextCard>Mini Kalzone é uma cadeia brasileira de restaurantes casuais especializados em calzone.</TextCard>
                        <RowItemsCard>
                            <BoxIcon>
                                <IconMComm name="silverware-variant" size={18} color="#7d7d7d" />
                                <TextCard>Pastas</TextCard>
                            </BoxIcon>
                            <BoxIcon>
                                <IconAnt name="enviromento" size={18} color="#7d7d7d" />
                                <TextCard>200m</TextCard>
                            </BoxIcon>
                            <BoxIcon>
                                <IconAnt name="star" size={18} color="#ffe600" />
                                <TextCard>4,9</TextCard>
                            </BoxIcon>
                        </RowItemsCard>
                    </BodyCard>
                </LargeCard>

                <LargeCard onPress={() => props.navigation.navigate('Restaurant')}>
                    <ImageView>
                        <ImageCard source={{ uri: 'https://static-images.ifood.com.br/image/upload/f_auto,t_high/logosgde/201802251144_052574f4-993a-49b0-aa1e-7bb199c19ed1.png' }} />
                    </ImageView>

                    <BodyCard>
                        <TitleCard>Cheppitos</TitleCard>
                        <TextCard>O Gigante Pastel Cheppitos foi desenvolvido para concorrer ao título de maior pastel do Brasil.</TextCard>
                        <RowItemsCard>
                            <BoxIcon>
                                <IconMComm name="silverware-variant" size={18} color="#7d7d7d" />
                                <TextCard>Pastas</TextCard>
                            </BoxIcon>
                            <BoxIcon>
                                <IconAnt name="enviromento" size={18} color="#7d7d7d" />
                                <TextCard>1,2km</TextCard>
                            </BoxIcon>
                            <BoxIcon>
                                <IconAnt name="star" size={18} color="#ffe600" />
                                <TextCard>4,9</TextCard>
                            </BoxIcon>
                        </RowItemsCard>
                    </BodyCard>
                </LargeCard>

                <LargeCard onPress={() => props.navigation.navigate('Restaurant')}>
                    <ImageView>
                        <ImageCard source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUJzkqAqOilrRJU-6jLXZSlvr6VJgoes2cOJU4j-O_rnz9w3AG&s' }} />
                    </ImageView>

                    <BodyCard>
                        <TitleCard>Puro Açai</TitleCard>
                        <TextCard>Açaí Fit. Zero açúcar, 100% natural. A energia que você gosta, com ainda mais... Açai.</TextCard>
                        <RowItemsCard>
                            <BoxIcon>
                                <IconMComm name="silverware-variant" size={18} color="#7d7d7d" />
                                <TextCard>Dessert</TextCard>
                            </BoxIcon>
                            <BoxIcon>
                                <IconAnt name="enviromento" size={18} color="#7d7d7d" />
                                <TextCard>1km</TextCard>
                            </BoxIcon>
                            <BoxIcon>
                                <IconAnt name="star" size={18} color="#ffe600" />
                                <TextCard>4,9</TextCard>
                            </BoxIcon>
                        </RowItemsCard>
                    </BodyCard>
                </LargeCard>

                <LargeCard onPress={() => props.navigation.navigate('Restaurant')}>
                    <ImageView>
                        <ImageCard source={{ uri: 'https://logodownload.org/wp-content/uploads/2015/02/Burger-king-logo-5.png' }} />
                    </ImageView>

                    <BodyCard>
                        <TitleCard>Burger King</TitleCard>
                        <TextCard>Burger King, muitas vezes abreviado como BK, é uma rede de restaurantes especializada em fast-food.</TextCard>
                        <RowItemsCard>
                            <BoxIcon>
                                <IconMComm name="silverware-variant" size={18} color="#7d7d7d" />
                                <TextCard>Burger</TextCard>
                            </BoxIcon>
                            <BoxIcon>
                                <IconAnt name="enviromento" size={18} color="#7d7d7d" />
                                <TextCard>1,4km</TextCard>
                            </BoxIcon>
                            <BoxIcon>
                                <IconAnt name="star" size={18} color="#ffe600" />
                                <TextCard>4,6</TextCard>
                            </BoxIcon>
                        </RowItemsCard>
                    </BodyCard>
                </LargeCard>

                <LargeCard onPress={() => props.navigation.navigate('Restaurant')}>
                    <ImageView>
                        <ImageCard source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSELiP6WWpDrnvrGYrMH_m0DJXWLK1s4RIJN1348Kw41zG7ejV0&s' }} />
                    </ImageView>

                    <BodyCard>
                        <TitleCard>Subway</TitleCard>
                        <TextCard>Subway é uma rede de restaurantes fast food, com especialidade em vendas de sanduíches e saladas.</TextCard>
                        <RowItemsCard>
                            <BoxIcon>
                                <IconMComm name="silverware-variant" size={18} color="#7d7d7d" />
                                <TextCard>Burger</TextCard>
                            </BoxIcon>
                            <BoxIcon>
                                <IconAnt name="enviromento" size={18} color="#7d7d7d" />
                                <TextCard>1,4km</TextCard>
                            </BoxIcon>
                            <BoxIcon>
                                <IconAnt name="star" size={18} color="#ffe600" />
                                <TextCard>4,6</TextCard>
                            </BoxIcon>
                        </RowItemsCard>
                    </BodyCard>
                </LargeCard>

                <LargeCard onPress={() => props.navigation.navigate('Restaurant')}>
                    <ImageView>
                        <ImageCard source={{ uri: 'https://img.mcd.must.pt/produtos/logo_5164258535b36151447cdd_7.jpg' }} />
                    </ImageView>

                    <BodyCard>
                        <TitleCard>Mc Donald's</TitleCard>
                        <TextCard>McDonald's Corporation é a maior cadeia mundial de restaurantes de fast food de hambúrguer.</TextCard>
                        <RowItemsCard>
                            <BoxIcon>
                                <IconMComm name="silverware-variant" size={18} color="#7d7d7d" />
                                <TextCard>Burger</TextCard>
                            </BoxIcon>
                            <BoxIcon>
                                <IconAnt name="enviromento" size={18} color="#7d7d7d" />
                                <TextCard>1,4km</TextCard>
                            </BoxIcon>
                            <BoxIcon>
                                <IconAnt name="star" size={18} color="#ffe600" />
                                <TextCard>2,2</TextCard>
                            </BoxIcon>
                        </RowItemsCard>
                    </BodyCard>
                </LargeCard>
            </ContainerScroll>
        </ContainerGray>
    )
}