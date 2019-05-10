import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner,CardSection } from '../src/component/common'
import LoginForm from './component/LoginForm'
class App extends Component {

    state = {
        loggedIn: null
    }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCM5_44IAvd_RmHnCPfPgx7bRm2AFNBs_o',
            authDomain: 'authentication-113e9.firebaseapp.com',
            databaseURL: 'https://authentication-113e9.firebaseio.com',
            projectId: 'authentication-113e9',
            storageBucket: 'authentication-113e9.appspot.com',
            messagingSenderId: '1017447525995',
            appId: '1:1017447525995:web:f27486353ea1066a'
        })
        firebase.auth().onAuthStateChanged((user) => {
            user ? this.setState({ loggedIn: true }) : this.setState({ loggedIn: false });
            console.log("===========================", user);
        });

    }
    signOut() {
        console.log("sign out ssdd");
        firebase.auth().signOut();
    }

    onButtonPress() {
        this.setState({ loggedIn: null })
        console.log("sign out ssdd");
        firebase.auth().signOut()
            .then(() => {
                this.setState({ loggedIn: false })
            })
            .catch(() => {
                this.setState({ loggedIn: false });
                console.log("Something went Wrong");
            })
    }

    renderContent() {

        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection style={{ backgroundColor: 'red', marginTop: 200 }}>
                        <Button onPress={this.onButtonPress.bind(this)}>
                            Log Out
                         </Button>
                    </CardSection>
                )
            case false:
                return <LoginForm />;
            default:
                return <Spinner size='small' />;
        }
    }
    render() {
        return (
            <View>
                <Header> Authentication </Header>
                {this.renderContent()}
            </View>
        )
    }
}

export default App;