import React, {Component} from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.css'

export default class App extends Component {

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
        // let headers = new Headers();
        // headers.append("Content-Type", "application/json; charset=UTF-8")

        let {name, password, email, contact} = this.state
        let body = {
            'name': name,
            'email': email,
            'password': password,
            'contact': contact
        }

        const requestOptions = {
            method: 'POST',
            header: {
                "Content-Type": "application/json;charset=UTF-8",
                'Accept': 'application/json'
            },
            body: JSON.stringify(body),
            mode: 'cors'
        }
        // console.log(headers)
        console.log(requestOptions)
        fetch('/api/signup', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
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
                    <button onClick={this.onSubmit} className="btn btn-primary form-item">Submit</button>
                </div>
            </form>
        </div>
    }
}
