import React, {Component} from "react";
import "../css/FormInput.css"

export default class SignupFormComponent extends Component {
    state = {
        firstName: "",
        lastName: "",
        password: "",
        email: "",
        contact: ""
    }

    onChange = (event) => {
        let {name, value} = event.target
        this.setState({[name]: value})
    }

    onSubmit = (event) => {
        event.preventDefault()
        let {firstName, lastName, password, email, contact} = this.state
        let body = {
            'name': firstName + " " + lastName,
            'email': email,
            'password': password,
            'contact': contact
        }
        let requestOptions = {
            method: "POST",
            headers: {"content-type": "application/json;charset=UTF-8"},
            body: JSON.stringify(body)
        }
        fetch("/api/signup", requestOptions)
            .then(r => console.log(r.status))
    }

    render() {
        return <div className="col-md-12">
            <h2>Sign Up</h2>
            <p><small>Please fill this form to create account!</small></p>
            <hr/>
            <form className="from-prop">
                <div className="form-group">
                    <div className="form-row ">
                        <div className="col-md-6">
                            <input name={"firstName"} onChange={this.onChange} className="form-control style "
                                   placeholder="First Name"/>
                        </div>
                        <div className="col-md-6">
                            <input name={"lastName"} onChange={this.onChange} className="form-control style "
                                   placeholder="Last Name"/>
                        </div>
                    </div>
                    <br/>
                    <input name={"email"} onChange={this.onChange} className="form-control style"
                           placeholder="Email"/><br/>
                    <input name={"contact"} onChange={this.onChange} className="form-control style"
                           placeholder="Phone Number"/><br/>
                    <input name={"password"} onChange={this.onChange} className="form-control style" type="password"
                           placeholder="Password"/><br/>
                    <button type={"submit"} onClick={this.onSubmit} className="btn btn-primary form-item">Submit
                    </button>
                </div>
            </form>
        </div>
    }
}