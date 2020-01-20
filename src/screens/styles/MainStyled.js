import React from 'react'
import styled from 'styled-components/native'
import { Colors } from './themes/Colors'

export const ContainerCenter = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    background-color: ${Colors.white};
`

export const ContainerRed = styled.ScrollView`
    flex: 1;
    background-color: ${Colors.redFood};
`

export const ContainerGray = styled.View`
    display: flex;
    align-items: center;
    flex: 1;
    background-color: ${Colors.grayUltralight};
`

export const ContainerWhite = styled.View`
    display: flex;
    align-items: center;
    flex: 1;
    background-color: ${Colors.white};
`
    
export const ContainerScroll = styled.ScrollView`
    width: 95%;
`

export const ScrollHorizontal = styled.ScrollView`
    width: 100%;
    margin: 5px 0px;
    padding: 0px 5px;
`

export const ScrollGray = styled.ScrollView`
    flex: 1;
    width: 100%;
    background-color: ${Colors.grayUltralight};
`

export const Line = styled.View`
    width: 92%;
    height: 1px;
    margin: 5px 4%;
    background-color: ${Colors.grayBlot};
`

export const Row = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`