import React, { Component } from "react";
import './login.component.css';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          mail: '',
          passwrd: '',
          loginError: ''
        };
        this.handleMailChange = this.handleMailChange.bind(this);
        this.handlePasswrdChange = this.handlePasswrdChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
      }
      handleMailChange = (event) => {
        this.setState({mail: event.target.value})
      }
      handlePasswrdChange = (event) => {
        this.setState({passwrd: event.target.value})
      }
      handleLogin = (event) => {
        event.preventDefault();
        var loginData = JSON.parse(window.localStorage.getItem('user'));
        if (loginData.email === this.state.mail && loginData.password === this.state.passwrd) {
            var clientData = this.state;
            window.localStorage.setItem('loginuser', JSON.stringify(clientData));
            window.location.href='/home';
        } else {
            this.setState({loginError: "Incorrect user name and password"});
        }
      }
      componentDidMount() {
        this.userData =  JSON.parse(localStorage.getItem('loginuser'));
        if(localStorage.getItem('loginuser')) {
            this.setState({
                mail: this.userData.mail,
                passwrd: this.userData.passwrd,
                loginError: ''
              })
        } else {
            this.setState({
                mail: '',
                passwrd: '',
                loginError: ''
              })
        }
      }
    render() {
        return (<>
            <div className="form">
            <form onSubmit={this.handleLogin}>
                <h3 className='label'>LOGIN</h3>

                <div className="form-group">
                    <label className='label'>Email</label>
                    <input value={this.state.mail} type="email" className="form-control" placeholder="ex : johndoe@email.com" onChange={this.handleMailChange} />
                </div>

                <div className="form-group">
                    <label className='label'>Password</label>
                    <input value={this.state.passwrd} type="password" className="form-control" placeholder="Enter your password" onChange={this.handlePasswrdChange} />
                </div>
                <div style={{ fontSize: 12, color: "red"}}>{this.state.loginError}</div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block button" >Log in</button>
                </div>

                <div className="form-group">
                    <p className="signup">
                        Don't have an account <a href="/sign-up">Sign Up</a>
                    </p>
                </div>

            </form>
            </div>
            </>
        );
    }
}