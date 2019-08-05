import React, { Component } from 'react';
import styled from 'styled-components/native';
import { auth } from '../firebase';

const Container = styled.View`
    justify-content: center;
    align-items: text;
`;

const LoadingText = styled.Text`
    font-size: 40;
    color: #C4C4C4;
    text-align: center;
`;

class AuthLoading extends Component {
    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            this.props.navigation.navigate(user ? 'App' : 'Auth');   
        })
    }
    render() {
        return (
            <>
                <LoadingText>Cargando</LoadingText>
            </>
        );
    }
}

export default AuthLoading;
