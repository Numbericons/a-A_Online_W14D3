import React from 'react';
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.errorShow = this.errorShow.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  errorShow() {
    if (this.props.errors.session.constructor === Array) {
      return <ul>
              {this.props.errors.session.map((error,i) => <li key={i} className="error">{error}</li>)}
            </ul>
    }
  }

  render () {
    //use match?
    let formTypeText, linkText, linkType;
    if (this.props.formType === 'signup') {
      formTypeText = 'Sign Up';
      linkText = 'Log In';
      linkType = "/login";
    } else {
      formTypeText = 'Log In';
      linkText ='Sign Up';
      linkType = "/signup";
    }
    return (
        <div>
            {this.errorShow()}
            <h1>{formTypeText}</h1>
            <form onSubmit={this.handleSubmit}>
                 <input type="text" placeholder='Name' onChange={this.update("username")}/>
                 <input type="password" placeholder='Password' onChange={this.update("password")}/>
                 <input type="submit" value={formTypeText}/>
            </form>
            <Link to={linkType}>{linkText}</Link>
        </div>
    )
  }
}

export default SessionForm;

// <Link to='/signup'>Sign Up</Link>
// <Link to='/login'>Log In</Link>