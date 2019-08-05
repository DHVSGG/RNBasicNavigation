import React, {Component} from 'react';
import styled from 'styled-components/native';
import { db, timeStamp } from '../firebase';

const Container = styled.View`
    justify-content: center;
    align-items: center;
    margin-right: 10;
    margin-left: 15;
    margin-bottom: 40;
`;
const Row = styled.View`
    flex: 1;
    flex-direction: row;
`;

const HeadButtonText = styled.Text`
    font-size: 16px;
    text-align: center;
    color: #FFF;
`;

const Card = styled.TouchableHighlight`
    width: 150;
    height: 200;
    background-color: #C4C4C4;
    margin-left: 10;
    margin-right: 10;
    margin-top: 50;
    margin-bottom: 50;
    elevation: 6;
`;

class GridScreen extends Component {
    state = {
        cards: [],
        create: false,
        createText: ''
    };

    componentDidMount(){
        db.child('card').orderByChild('timeStamp').on('value', (cards) => {
            cardsObject = [];
            cards.forEach((card) => {
                cardsObject.push(card.val().value);
            });
            this.setState({ cards: cardsObject.reverse() });
        });
    }

    activePublish(){
        if (this.state.createText !== '') {
            db.child('card').push({ value: this.state.createText, timeStamp: timeStamp });
        }
        this.setState({ create: !this.state.create, createText: '' });
    }

    render(){
        return (
            <Container>
                <Row>
                    <Card onPress={() => this.props.navigation.navigate('NativeBase')} >
                        <HeadButtonText>Native Base</HeadButtonText>
                    </Card>
                    <Card onPress={() => this.props.navigation.navigate('Elements')}>
                        <HeadButtonText>React Native Elements</HeadButtonText>
                    </Card>
                </Row>
            </Container>
        )
    }
}

export default GridScreen;