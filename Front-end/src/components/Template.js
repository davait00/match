import React, { Component } from "react";
import styled from 'styled-components';
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import ls from 'local-storage';

let TemplDiv = styled.div`
    border: 1px solid #16ecff78;
    background: ${(props => props.bg)};
    justify-content: center;
    align-items: stretch;
    align-content: center;
    font-family: unset;
    color: #9c9381;
    display: flex;
    letter-spacing: 0.2em;
`;

class Template extends Component {

    render() {
        let {bg, text} = this.props;
        return (
            <TemplDiv bg={bg}>
                <h2>{text}</h2>
            </TemplDiv>
            );
        }
    }

export default Template;