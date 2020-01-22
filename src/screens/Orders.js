import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import IconAnt from 'react-native-vector-icons/AntDesign'

import { ScrollGray, Line } from './styles/MainStyled'
import { Title, Card, TitleCard, Item, TextItem, Row, TextTotal, TextGreen, TextRed } from './styles/OrdersStyled'
import { Colors } from './styles/themes/Colors'

export default Orders = props => {
    return (
        <ScrollGray>
            <Title>Em andamento</Title>

            <Card>
                <TitleCard>Bob's</TitleCard>
                <Item>
                    <IconAnt name="right" size={15} color={Colors.grayMiddle} />
                    <TextItem>1 Big Bog M</TextItem>
                </Item>
                <Item>
                    <IconAnt name="right" size={15} color={Colors.grayMiddle} />
                    <TextItem>2 Milkshake Morango G</TextItem>
                </Item>
                <Item>
                    <IconAnt name="right" size={15} color={Colors.grayMiddle} />
                    <TextItem>1 Batata M</TextItem>
                </Item>
                <Line />
                <Row>
                    <TextTotal>Total: 36,90</TextTotal>
                    <TextGreen>Em andamento</TextGreen>
                </Row>
            </Card>

            <Title>Anteriores</Title>

            <Card>
                <TitleCard>Cheppitos</TitleCard>
                <Item>
                    <IconAnt name="right" size={15} color={Colors.grayMiddle} />
                    <TextItem>1 Pastel Maria Bonita 40cm</TextItem>
                </Item>
                <Item>
                    <IconAnt name="right" size={15} color={Colors.grayMiddle} />
                    <TextItem>1 Molho Barbecue</TextItem>
                </Item>
                <Line />
                <Row>
                    <TextTotal>Total: 27,90</TextTotal>
                    <TextRed>Fechado</TextRed>
                </Row>
            </Card>

            <Card>
                <TitleCard>Mini Kalzone</TitleCard>
                <Item>
                    <IconAnt name="right" size={15} color={Colors.grayMiddle} />
                    <TextItem>2 Kalzone 4 queijos</TextItem>
                </Item>
                <Item>
                    <IconAnt name="right" size={15} color={Colors.grayMiddle} />
                    <TextItem>2 Sem Noção</TextItem>
                </Item>
                <Line />
                <Row>
                    <TextTotal>Total: 18,90</TextTotal>
                    <TextRed>Fechado</TextRed>
                </Row>
            </Card>

            <Card>
                <TitleCard>Puro Açaí</TitleCard>
                <Item>
                    <IconAnt name="right" size={15} color={Colors.grayMiddle} />
                    <TextItem>1 Açaí 500ml com gotas de chocolate, M&M's, leite em pó, kiwi e cereja.</TextItem>
                </Item>
                <Line />
                <Row>
                    <TextTotal>Total: 16,90</TextTotal>
                    <TextRed>Fechado</TextRed>
                </Row>
            </Card>
        </ScrollGray>
    )
}

Orders.navigationOptions = ({ navigation }) => {
    return ({
        header: null
    })
}
