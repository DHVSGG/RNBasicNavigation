import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Text, Accordion, ActionSheet } from 'native-base';

const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];

var BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

//Query on: https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&camera=mast&api_key=1ma7wsg7wfY4AX9SbUHrPYDApbL3yOB61uJH7Vfa

class NativeBase extends Component {
    state = {
        clicked: null
    };
    
    render() {
        console.log(this.state);
        return (
            <Container>
                <Content padder>
                    <Text>
                        This is Content Section
                    </Text>
                    {/*<Accordion dataArray={dataArray}
                        headerStyle={{ backgroundColor: "#b7daf8" }}
                        contentStyle={{ backgroundColor: "#ddecf8" }}
                        icon='add'
                        iconStyle={{ color: 'green' }}
                        expandedIcon='remove'
                        expandedIconStyle={{ color: 'red' }} />*/}
                    <Button info
                            onPress={() =>
                            ActionSheet.show(
                            {
                                options: BUTTONS,
                                cancelButtonIndex: CANCEL_INDEX,
                                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                                title: "Testing ActionSheet"
                            },buttonIndex => {this.setState({ clicked: BUTTONS[buttonIndex] });})}>
                                <Text>Info</Text>
                    </Button>
                    <Button transparent success>
                            <Text>Success</Text>
                    </Button>
                    <Button bordered warning full>
                            <Text>Warning</Text>
                    </Button>
                    <Button rounded style={{ backgroundColor: '#fa2d78' }}>
                        <Text>Iniciar sesión</Text>
                    </Button>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button
                            onPress={() =>
                            ActionSheet.show(
                            {
                                options: BUTTONS,
                                cancelButtonIndex: CANCEL_INDEX,
                                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                                title: "Testing ActionSheet"
                            },buttonIndex => {this.setState({ clicked: BUTTONS[buttonIndex] });})}>
                                <Text>Info</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

export default NativeBase;
