import React from "react";

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
            <div style={{paddingLeft: 30}}><b>Please find the list of Teams available for World Cup : </b></div>
            <br/> 
            {
                this.state.sortedData.map((item, index) => ( 
                <ul key = { index } > <a href='/player' target="_blank" onClick={(e) => this.handleChange(e, index)}>{item}</a></ul>
                ))
            }
            
        </div>
    );
}
}
   
export default CountryList;