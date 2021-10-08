import React from "react";
import './countrylist.css';
import wcimg from '../../worldcup.jpg'

class CountryList extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            sortedData: []
        };
    }

    componentDidMount() {
        fetch("http://test.oye.direct/players.json")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                this.setState({
                    items: data
                });
            })
            .then(() => {
                const result = Object.keys(this.state.items).sort();
                console.log(result);
                this.setState({
                    sortedData: result
                });
                return this.state.sortedData;
            });
    }
    handleChange =(e, index) => {
        e.preventDefault();
        console.log(e.target.innerHTML);
        const players = Object.values(this.state.items);
        window.localStorage.setItem('playerlist', JSON.stringify(players[index]));
        window.location.href='/player';
        console.log(players)
    }
    render() {
   
        return (
        <div style={{width: "100%"}} >
            <br/> 
            <div style={{paddingLeft: 30, fontSize: 20, color: "red"}}><b>Please find the list of Teams available for World Cup : </b></div>
            <br/>
            <div className="countryName" style={{width: "100%"}}>
                <div style={{width: "40%"}}>
                {
                    this.state.sortedData.map((item, index) => ( 
                    <ul key = { index } > <a className="link" href='/player' target="_blank" onClick={(e) => this.handleChange(e, index)}>{item}</a></ul>
                    ))
                }
                </div>
                <img className="right-img"  src={wcimg} alt='worldcup' width="90%" height="80%"></img>
            </div> 
            
            
        </div>
    );
}
}
   
export default CountryList;