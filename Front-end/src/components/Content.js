import React, { Component } from "react";
import styled from 'styled-components';
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import ls from 'local-storage';

let Cont = styled.div`
    border: 1px solid #16ecff78;
    color: #9c9381;
    display: flex;
    margin: 0px 20%;
    justify-content: center;
    background: white;
    width: 60%;
    height: 79.5%;

    ul{
        color: black;
    }
`;

class Content extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch(`http://localhost:3000/players/get`)
        .then(response => response.json())
        .then(json => { 
            this.setState({
                isLoaded: true,
                items: json.players,
            })
        });
    }
    render() {
        let {isLoaded, items} = this.state;
        console.log('items', items);

        if (!isLoaded) {
            return <div>Loading... </div>
        }
        else{
        return (
            <Cont>
               <ul>
                   {items.map(item => (
                       <li key={item.id}>
                         Goalkeeper:  {item.goalkeeper}  
                         Defender1:  {item.defender1}
                         Defender2:  {item.defender2}
                         defender3:  {item.defender3}
                         defender4:  {item.defender4}
                         midfielder1:{item.midfielder1}
                         midfielder2:{item.midfielder2}
                         midfielder3:{item.midfielder3}
                         midfielder4:{item.midfielder4}
                         attack1:    {item.attack1}
                         attack2:    {item.attack2}
                       </li>
                   ))}
               </ul>
            </Cont>
            );
        }
    }
}

export default Content;