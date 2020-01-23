import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import IconAnt from 'react-native-vector-icons/AntDesign'

import { ContainerGray, ScrollGray } from './styles/MainStyled'
import { BoxSearch, SearchBar, TextHeader, BoxCards, LittleCard, CircleImage, ImageIcon, TextCard } from './styles/SearchStyled'
import { Colors } from './styles/themes/Colors'

export default Search = props => {
    return (
        <ContainerGray>
            <BoxSearch>
                <SearchBar />
                <IconAnt name="search1" color={Colors.grayMiddle} size={20} style={{ position: 'absolute', left: '5%' }} />
            </BoxSearch>

            <TextHeader>Categorias</TextHeader>

            <ScrollGray showsVerticalScrollIndicator={false}>
                <BoxCards>
                    <LittleCard>
                        <CircleImage>
                            <ImageIcon resizeMode="cover" source={{ uri: 'https://images.vexels.com/media/users/3/154677/isolated/preview/546d0036741a42d009b1cc7879c389fd---cone-de-sushi-nigiri-by-vexels.png' }} />
                        </CircleImage>
                        <TextCard>Japonesa</TextCard>
                    </LittleCard>
                    <LittleCard>
                        <CircleImage>
                            <ImageIcon resizeMode="cover" source={{ uri: 'https://cdn.iconscout.com/icon/free/png-256/chinese-food-1851570-1569295.png' }} />
                        </CircleImage>
                        <TextCard>Chinesa</TextCard>
                    </LittleCard>
                    <LittleCard>
                        <CircleImage>
                            <ImageIcon resizeMode="cover" source={{ uri: 'https://i.pinimg.com/originals/1b/ec/81/1bec818c51ca78276ffa641f2a210612.png' }} />
                        </CircleImage>
                        <TextCard>Mexicana</TextCard>
                    </LittleCard>
                    <LittleCard>
                        <CircleImage>
                            <ImageIcon resizeMode="cover" source={{ uri: 'https://image.flaticon.com/icons/png/512/184/184559.png' }} />
                        </CircleImage>
                        <TextCard>Saudáveis</TextCard>
                    </LittleCard>
                    <LittleCard>
                        <CircleImage>
                            <ImageIcon resizeMode="cover" source={{ uri: 'https://icons-for-free.com/iconfiles/png/512/linecolor+version+svg+ice+cream-1319964494028526965.png' }} />
                        </CircleImage>
                        <TextCard>Sobremesas</TextCard>
                    </LittleCard>
                    <LittleCard>
                        <CircleImage>
                            <ImageIcon resizeMode="cover" source={{ uri: 'https://img.icons8.com/bubbles/2x/milkshake.png' }} />
                        </CircleImage>
                        <TextCard>Bebidas</TextCard>
                    </LittleCard>
                    <LittleCard>
                        <CircleImage>
                            <ImageIcon resizeMode="cover" source={{ uri: 'https://pngimage.net/wp-content/uploads/2018/06/pasta-icon-png-8.png' }} />
                        </CircleImage>
                        <TextCard>Massas</TextCard>
                    </LittleCard>
                    <LittleCard>
                        <CircleImage>
                            <ImageIcon resizeMode="cover" source={{ uri: 'https://img.icons8.com/bubbles/2x/hamburger.png' }} />
                        </CircleImage>
                        <TextCard>Burger</TextCard>
                    </LittleCard>
                    <LittleCard>
                        <CircleImage>
                            <ImageIcon resizeMode="cover" source={{ uri: 'https://cdn1.iconfinder.com/data/icons/birthday-30/64/pizza_food_slice_piece_fast_-512.png' }} />
                        </CircleImage>
                        <TextCard>Pizza</TextCard>
                    </LittleCard>
                    <LittleCard>
                        <CircleImage>
                            <ImageIcon resizeMode="cover" source={{ uri: 'https://image.flaticon.com/icons/png/512/454/premium/454368.png' }} />
                        </CircleImage>
                        <TextCard>Churrasco</TextCard>
                    </LittleCard>
                    <LittleCard>
                        <CircleImage>
                            <ImageIcon resizeMode="cover" source={{ uri: 'https://image.flaticon.com/icons/png/512/123/123300.png' }} />
                        </CircleImage>
                        <TextCard>Batatas</TextCard>
                    </LittleCard>
                    <LittleCard>
                        <CircleImage>
                            <ImageIcon resizeMode="cover" source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90XsrUXqAQVhDMdKRNV9LdAT6PNRP9Sft2Y9GhZCWUqYLvK8N&s' }} />
                        </CircleImage>
                        <TextCard>Sucos</TextCard>
                    </LittleCard>
                    <LittleCard>
                        <CircleImage>
                            <ImageIcon resizeMode="cover" source={{ uri: 'http://www.cardapolis.com.br/adm/uploads/icons/coxinha.png' }} />
                        </CircleImage>
                        <TextCard>Salgados</TextCard>
                    </LittleCard>
                    <LittleCard>
                        <CircleImage>
                            <ImageIcon resizeMode="cover" source={{ uri: 'https://image.freepik.com/vetores-gratis/icone-do-queijo_22350-103.jpg' }} />
                        </CircleImage>
                        <TextCard>Queijos</TextCard>
                    </LittleCard>
                    <LittleCard>
                        <CircleImage>
                            <ImageIcon resizeMode="cover" source={{ uri: 'https://image.flaticon.com/icons/png/512/1826/1826260.png' }} />
                        </CircleImage>
                        <TextCard>Carnes</TextCard>
                    </LittleCard>
                    <LittleCard>
                        <CircleImage>
                            <ImageIcon resizeMode="cover" source={{ uri: 'https://image.flaticon.com/icons/png/512/1206/1206237.png' }} />
                        </CircleImage>
                        <TextCard>Frangos</TextCard>
                    </LittleCard>
                    <LittleCard>
                        <CircleImage>
                            <ImageIcon resizeMode="cover" source={{ uri: 'https://img.icons8.com/cotton/2x/cake.png' }} />
                        </CircleImage>
                        <TextCard>Bolos</TextCard>
                    </LittleCard>
                    <LittleCard>
                        <CircleImage>
                            <ImageIcon resizeMode="cover" source={{ uri: 'https://icons-for-free.com/iconfiles/png/512/bakery+svglinecolor+donuts-1319964867869874400.png' }} />
                        </CircleImage>
                        <TextCard>Donuts</TextCard>
                    </LittleCard>
                </BoxCards>
            </ScrollGray>
        </ContainerGray>
    )
}

Search.navigationOptions = ({ navigation }) => {
    return ({
        header: null
    })
}