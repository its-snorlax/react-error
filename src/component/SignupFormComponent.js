import React, {Component} from "react";

export default class SignupFormComponent extends Component {
    state = {
        name: "",
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
        let {name, password, email, contact} = this.state
        let body = {
            'name': name,
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
            <form className="from-prop">
                <div className="form-group">
                    <input name={"name"} onChange={this.onChange} className="form-control" placeholder="Name"/><br/>
                    <input name={"email"} onChange={this.onChange} className="form-control" placeholder="Email"/><br/>
                    <input name={"contact"} onChange={this.onChange} className="form-control"
                           placeholder="Phone Number"/><br/>
                    <input name={"password"} onChange={this.onChange} className="form-control" type="password"
                           placeholder="Password"/><br/>
                    <button type={"submit"} onClick={this.onSubmit} className="btn btn-primary form-item">Submit
                    </button>
                </div>
            </form>
        </div>
    }
}