import React, { Component } from 'react';


class Home extends Component {
    constructor(){
        super();
        let record = JSON.parse(window.localStorage.getItem('user'));
        let list = Object.values(record);
        list = list.filter(item => item !== "" && item !== true);
        console.log(list);
        this.state = {
            comments: list,
        };
      }
      handleClick = () => {
        window.location.href='/country';
      }
    render(){
        return(
        <div style={{width: "100%"}}>
            <div style={{textAlign: "center" , fontSize: 20}}><b>Welcome to the user page.</b></div>
            <br />
            <div style={{paddingLeft: 20}}><b>Please find the user information</b></div> 
            <br />
            <ul>
                {this.state.comments.map((item, index) => {
                    return (
                    <ul key={index}>{item}
                    </ul>);
                })}
            </ul>

            <button className="btn btn-primary btn-block button" onClick={this.handleClick}> Check the Team list</button>
        </div>
        )
    }
}

export default Home

