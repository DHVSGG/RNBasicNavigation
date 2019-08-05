import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { auth } from '../firebase';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-right: 30;
    margin-left: 30;
`;

const Logo = styled.View`
    margin-top: 20;
    background-color: #C4C4C4;
    border-radius: 100;
`;

const FormSeparator = styled.View`
    margin-top: 30;
`

const TextField = styled.TextInput`
    border: 1px solid #E5E5E5;
    color: #828282;
    font-size: 20;
    margin-top: 20;
    width: 100%;
    border-radius: 4px;
`;

const LoginButton = styled.TouchableHighlight`
    width: 100%;
    border-radius: 4px;
    padding: 16px;
    background-color: ${(props) => props.bgcolor};
    margin-top: 20;
    margin-bottom: 20;
    elevation: 5;
`;

const LoginButtonText = styled.Text`
    font-size: 16px;
    text-align: center;
    color: #FFF;
`;

const ErrorText = styled.Text`
    font-size: 16px;
    text-align: center;
    color: #828282;
`;

const Divisor = styled.View`
    width: 100%
    height: 1px;
    background-color: #E5E5E5;
`;

export default class LoginScreen extends Component {
    state = {
        email: '',
        password: '',
        error: ''
    };

    loginByEmail = () => {
        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((user) => {
            this.props.navigation.navigate('Grid');
        },(error) => {
            this.setState({ error: error.message });
        });
    }

    render() {
      return (
        <ScrollView>
            <Container>
                <Logo style={{ width: 150, height: 150 }}></Logo>
                <FormSeparator />
                <ErrorText>{this.state.error}</ErrorText>
                    <TextField placeholder='email'
                        name='email'
                        onChangeText={(text) => this.setState({ email: text })} />
                    <TextField placeholder='Contraseña'
                        secureTextEntry
                        onChangeText={(text) => this.setState({ password: text })} />
                    <LoginButton bgcolor='#C4C4C4'
                        underlayColor='#C8C8C8'
                        onPress={this.loginByEmail.bind(this)} >
                            <LoginButtonText>Iniciar sesion</LoginButtonText>
                    </LoginButton>
                    <Divisor />
                    <LoginButton title='Iniciar sesión con facebook'
                        bgcolor='#3B5998'>
                            <LoginButtonText>
                                Iniciar sesion con facebook
                            </LoginButtonText>
                    </LoginButton>
            </Container>
        </ScrollView>
      );
    }
}