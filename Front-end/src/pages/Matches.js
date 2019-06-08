import React, { Component } from "react";
import styled from 'styled-components';
import Header from "../components/Header";
import Content from "../components/Content";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import ls from 'local-storage';

let MatchBackground = styled.div`
    margin: 0;
    padding-top: 20px;
    width: 100%;
    height: 100vh;
    background: url('./images/back.jpg');
    background-size: cover;
`;

class Matches extends Component {

    render() {
        return (
            <MatchBackground>
                <Header/>
                <Content/>
            </MatchBackground>
            );
        }
    }

export default Matches;