import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import SignUpFormComponent from './SignupFormComponent'
import '../css/app.css'

export default class App extends Component {
    render() {
        return <div className="rectangle">
            <SignUpFormComponent/>
        </div>
    }
}
