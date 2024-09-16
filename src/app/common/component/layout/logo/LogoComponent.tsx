import React from "react";
import {Flex, Layout, theme} from 'antd';
import './logo.scss';
import LogoImg from '../../../../assets/images/logo/logo.png';

const {Header} = Layout;
export const LogoComponent = () => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();
    return (
        <Header style={{padding: 0, background: colorBgContainer}}>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Flex justify={'center'} vertical={false} align={'center'} style={{height: '100%', width: '100%'}}>
                <img src={LogoImg} alt="logo"/>
            </Flex>
        </Header>
    )
}