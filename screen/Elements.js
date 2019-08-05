import React, { Component } from 'react';
import { Button, ThemeProvider, Overlay, Text } from 'react-native-elements';

class Elements extends Component {
    state = {
        isVisible: false
    };

    render() {
        return (
            <>
                <ThemeProvider>
                    <Button title="Hey!" onPress={() => this.setState({ isVisible: true })} />
                </ThemeProvider>
                <Overlay
                isVisible={this.state.isVisible}
                onBackdropPress={() => this.setState({ isVisible: false })}>
                    <Text>Hello from Overlay!</Text>
                </Overlay>
            </>
        );
    }
}

export default Elements;
