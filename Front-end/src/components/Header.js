import React, { Component } from "react";
import styled from 'styled-components';
import Template from "../components/Template";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import ls from 'local-storage';

let Head = styled.div`
    margin: 20px;
    background: white;
    width: 100hv;
    height: 70px;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
`;

class Header extends Component {

    render() {
        return (
            <Head>
                <Template bg="#292625"
                          text="Matches"/>
                <Template bg="#292625"
                          text="Football Clubs"/>
                <Template bg="#292625"
                          text="Players"/>
                <Template bg="#292625"
                          text="Score"/>
            </Head>
            );
        }
    }

export default Header;