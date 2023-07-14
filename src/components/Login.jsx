import React, { Component } from 'react' //imrc
import { getUser } from './user';


//cc
class Login extends Component {
    
    state = { 
        users: getUser(),
        username: '',
        password: ''
     }

     handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };

      handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Add login logic using this.state.email and this.state.password
        const { username, password, users } = this.state;
        const trimmedPassword = password.trim();
        const user = users.find((user) => user.username === username && user.password === trimmedPassword);

        if (user) {
            console.log('Logged in');
        }
        else {
            console.log('Invalid username or password');
            console.log('Un and PW'+ username);
        }

      };
     

    render() { 
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
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
          <button onClick={this.state.handleSubmit} type="submit">Login</button>
        </form>
                
            </div>
        );
    }
}
 
export default Login;