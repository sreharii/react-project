import React, { Component } from "react";

export default class SignUp extends Component {
    userData;
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          password: '',
          dob: '',
          phone: '',
          nameError: '',
          emailError: '',
          passwordError: '',
          phoneError: '',
          dobError: '',
          agree: false
        };
        
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleDobChange = this.handleDobChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkboxHandler = this.checkboxHandler.bind(this);
      }
      handlePasswordChange(event) {
        let pwd = this.state.password;
        pwd = event.target.value;
        this.setState({
            password: pwd,
            passwordError: ''
          });
      }
      handleDobChange(event) {
        let dob = this.state.dob;
        dob = event.target.value;
        this.setState({
            dob: dob,
            dobError: ''
          });
      }
      handlePhoneChange(event) {
        let phone = this.state.phone;
        phone = event.target.value;
        this.setState({ 
            phone: phone.replace(/[^0-9\b]/, ''),
            phoneError: ''
          });
      }
      handleEmailChange(event) {
        let value = this.state.email;
        value = event.target.value;
        this.setState({
          email: value,
          emailError: ''
        });
      }
         
      handleSubmit(event) {
        event.preventDefault();
        const isValid = this.validate();
        if(isValid){
            let data = this.state;
            window.localStorage.setItem('user', JSON.stringify(data));
            this.setState({
                name: '',
                email: '',
                password: '',
                dob: '',
                phone: '',
                nameError: '',
                emailError: '',
                passwordError: '',
                phoneError: '',
                dobError: '',
                agree: false
              })
        }
      }
      validate(){
          let name = this.state.name;
          let email = this.state.email;
          let password = this.state.password;
          let phone = this.state.phone;
          let dob = this.state.dob;
          let isValid = true;
      
          if (!name) {
            isValid = false;
            this.setState({nameError : "Please enter your name."});
          }
      
          if (!email) {
            isValid = false;
            this.setState({emailError :"Please enter your email Address."});
          } else if (email !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(email)) {
              isValid = false;
              this.setState({emailError :"Please enter valid email address."});
            }
          }
          
          if(password.trim === ""){
            isValid = false;
            this.setState({passwordError :"Password is required."});
          } else if (password !== "undefined") {
            var pwd = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i);
            if (!pwd.test(password)) {
              isValid = false;
              this.setState({passwordError :"Password must contain atleast 8 characters, 1 number, 1 upper and 1 lowercase !"});
            }
          }

          if (!phone) {
            isValid = false;
            this.setState({phoneError: "Please enter your phone number."});
          }
      
          if (phone !== "undefined") {  
            if(phone.length !== 10){
              isValid = false;
              this.setState({phoneError: "Please enter valid phone number."});
            }
          }

          if (!dob) {
            isValid = false;
            this.setState({dobError: "Please enter your Date Of Birth."});
          } else {
            var date_regex = /^\d{2}\/\d{2}\/\d{4}$/ ;
            if(!date_regex.test(dob)){
                isValid = false;
                this.setState({dobError :"Please enter valid Date of Birth."});
            }
          }

          this.setState({agree: false})

      
          return isValid;
      }

        checkboxHandler(event) {
          var bool = this.state.agree;
            this.setState({
               agree: !bool
            });
            console.log(bool)
        }

        chartAllow = (e) => {
            this.setState({name: e.target.value.replace(/[^a-zA-Z\s]/, ''), nameError: ''})
        }

      
    render() {
        
        
        return (<>
            <div className="form">
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" value={this.state.name} className="form-control" placeholder="First name" onChange={this.chartAllow}/>
                    <div style={{fontSize: 10, color: "red"}}>
                        {this.state.nameError}
                    </div>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" value={this.state.email} className="form-control" placeholder="Enter email" onChange={this.handleEmailChange} />
                    <div style={{fontSize: 10, color: "red"}}>
                        {this.state.emailError}
                    </div>
                </div>

                <div className="form-group" style={{ display: "inline-flex"}}>
                    <div className="inlinetext">
                        <label>Phone Number</label>
                        <input type="text" style={{width: "100%"}} name="phone" value={this.state.phone} onChange={this.handlePhoneChange}
              className="form-control" placeholder="Enter phone Number" id="phone" />
              <div style={{fontSize: 10, color: "red"}}>
                        {this.state.phoneError}
                    </div>
                    </div>
                    <div className="inlinetext" style={{ paddingLeft: "30px"}}>  
                        <label>Date Of Birth</label>
                        <input type="dob" value={this.state.dob} style={{width: "100%"}} className="form-control" placeholder="DD/MM/YY" onChange={this.handleDobChange}/>
                        <div style={{fontSize: 10, color: "red"}}>
                        {this.state.dobError}
                    </div>
                    </div>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={this.state.password} className="form-control" placeholder="Enter password" onChange={this.handlePasswordChange} />
                    <div style={{fontSize: 10, color: "red"}}>
                        {this.state.passwordError}
                    </div>
                </div>
                <div className="form-group">
                    <input type="checkbox" id="agree" checked={this.state.agree} onChange={this.checkboxHandler} />
                    <label style={{paddingLeft: "10px"}}> I accept the <span style={{color: 'blue'}}>terms and conditions</span></label>
                </div>
                <div className="form-group">
                    <button disabled={!this.state.agree} type="submit" className="btn btn-primary btn-block button">Sign Up</button>
                </div>
                <div className="form-group">
                    <p className="signup">
                        Do you already have an account <a href="/sign-in">Sign In</a>
                    </p>
                </div>
            </form>
            </div>
            </>
        );
    }
}