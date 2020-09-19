// ./twitter-front-end/src/components/session/RegistrationForm.js

import React from 'react';
import UserContext from '../../contexts/UserContext';

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        // TODO: Set up default state
        this.state = {
            username: '',
            password: '',
            email: '',
        };
    }
    registerUser = async (e) => {
        e.preventDefault();
        const { username, password, email } = this.state;
        console.log(this.state);
        try {
            const res = await fetch('/users', {
                method: 'POST',
                body: JSON.stringify({ username, password, email }),
                headers: {
                    "Content-Type": "application/json"
                },
            });
            if (!res.ok) throw res;
            const {
                token,
                user: { id },
            } = await res.json();
            this.props.value.updateContext(token, id);

        } catch (err) {
            console.error(err);
        }
    }
    updateUsername = e => {
        this.setState({ username: e.target.value });
    }
    updatePassword = e => {
        this.setState({ password: e.target.value });
    }
    updateEmail = e => {
        this.setState({ email: e.target.value });
    }
    render() {
        // TODO: Render registration form
        return (
            <form>
                <h2>Register</h2>
                <input type='text' name='username' placeholder='Enter Username' value={this.state.username} onChange={this.updateUsername} />
                <input type='password' name='password' placeholder='Enter Password' value={this.state.password} onChange={this.updatePassword} />
                <input type='email' name='email' placeholder='Enter Email' value={this.state.email} onChange={this.updateEmail} />
                <button type='submit' onClick={this.registerUser}>Sign Up</button>
            </form>
        );
    }
}

class RegistrationFormWithContext extends React.Component {
    render() {
        return (
            <UserContext.consumer >
                {value => <RegistrationForm auth={value} />}
            </UserContext.consumer>
        );
    }
}

export default RegistrationFormWithContext;