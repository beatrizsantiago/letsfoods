import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import IconFont from 'react-native-vector-icons/FontAwesome'
import IconMComm from 'react-native-vector-icons/MaterialCommunityIcons'

import { BoxProfile, CircleImage, ImageProfile, UserName, Row, TitleItem } from './styles/ProfileStyled'
import { Colors } from './styles/themes/Colors'

export default Profile = props => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%', flex: 1 }}>
            <BoxProfile>
                <CircleImage>
                    <ImageProfile resizeMode="cover" source={{ uri: 'https://static.quizur.com/i/b/572bd56c4fb3f6.68420337486354-507674509250566-1665035794-n.png' }} />
                </CircleImage>
                <UserName>Beatriz Santiago</UserName>

            </BoxProfile>

            <Row>
                <IconFont name="credit-card" size={24} color={Colors.grayDark} />
                <TitleItem>Pagamentos</TitleItem>
                <IconMComm name="chevron-down" size={26} color={Colors.grayDark} style={{ position: 'absolute', right: '3%' }} />
            </Row>

            <Row>
                <IconMComm name="heart-circle-outline" size={26} color={Colors.grayDark} />
                <TitleItem>Meus Favoritos</TitleItem>
                <IconMComm name="chevron-down" size={26} color={Colors.grayDark} style={{ position: 'absolute', right: '3%' }} />
            </Row>

            <Row>
                <IconMComm name="help-network-outline" size={26} color={Colors.grayDark} />
                <TitleItem>Ajuda</TitleItem>
                <IconMComm name="chevron-down" size={26} color={Colors.grayDark} style={{ position: 'absolute', right: '3%' }} />
            </Row>
        </ScrollView>
    )
}

Profile.navigationOptions = ({ navigation }) => {
    return ({
        header: null
    })
}