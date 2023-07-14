import React, { Component } from 'react' //imrc
import { createUser } from './user';

//cc
class Register extends Component {
    state = { 
        
        username: '',
        password: '',
        users:[],
     } 

        handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
        }

        handleSubmit = (e) => {
        e.preventDefault();

        const { username, password, users } = this.state;
        createUser(username, password);
        console.log(users);
        }

    render() { 
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.state.handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.username}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.password}
                        onChange={this.handleChange}
                    />
                    <br />
                    <button onClick={this.state.handleSubmit} type="submit">Register</button>
                </form>
            </div>
        );
    }
}
 
export default Register;