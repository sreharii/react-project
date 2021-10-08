import React from "react";

class PlayerList extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            players: [],
            sortedplayers: [],
            captain: ''
        };
    }
    componentDidMount() {
        let players = JSON.parse(window.localStorage.getItem('playerlist'));
        let playerdata = [];
        let cap = '';
        players.forEach((value, index) => {
            playerdata.push(value.name);
            if(value.captain){
                cap = value.name;
            }
        });
        playerdata.sort();
        console.log(playerdata);
        this.setState({players: playerdata, captain: cap});
    }
    handleClick = () => {
        var sortplayer = this.state.players.sort(function (obj1, obj2) {
            var s1 = obj1.split(' ')[1],
                s2 = obj2.split(' ')[1];
            return (s1 || obj1).localeCompare(s2 || obj2)
        });
        this.setState({players: sortplayer})
    }
    handleChange = () => {
        var player = this.state.players.sort();
        this.setState({players: player})
        console.log(player);
    }
    render(){
        return(
        <div style={{width: "100%", textAlign: 'center'}}>
            <h1 style={{fontSize: 18}}>Team members List</h1>
            <button style={{marginRight: 20}} className="btn btn-primary btn-block" onClick={this.handleClick}> Sort by lastName </button>
            <button className="btn btn-primary btn-block" onClick={this.handleChange}> Sort by firstName </button>
            <br/>
            <div style={{paddingTop: 10}}>{
                this.state.players.map((item, index) => ( 
                <ol key = { index } style={{ paddingLeft: 100, display: "flex", color: item === this.state.captain? 'red': 'black', fontWeight: item === this.state.captain? 'bold': 'normal',  fontSize: 11}}>{item}</ol>
                ))
            }</div>
            
        </div>
        )
    }

}

export default PlayerList;