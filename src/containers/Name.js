import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { updateName } from '../actions';

class Name extends Component {
  state = {
    name: "",
    fireRedirect: false,
  }

  handleChange = e => {
    this.setState({ name: e.target.value })
  }

  handleSubmit = e => {
    const { dispatch } = this.props;    
    dispatch(updateName(this.state.name))
    this.setState({ fireRedirect: true })
    e.preventDefault();
  }

  render() {
    const { fireRedirect, name } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          textAlign: "center"
        }}
      >
        <form 
          onSubmit={handleSubmit}
        >

          <input 
            style={{
              fontSize: "1.5rem",                
              border: "1px solid #eee",                         
              borderRadius: "4px",
              padding: ".8rem 1rem",
              marginLeft: ".5rem",                
            }}
            onChange={handleChange} 
            type="text" value={name} 
            placeholder="Your name..."
          />

          <input 
            style={{
              fontSize: "1.5rem",
              background: "#373737",
              color: "#fff",
              border: "1px solid #131313",
              borderRadius: "4px",              
              padding: ".8rem 1rem",
            }}
            type="submit" 
            value="Play"
          />
        </form>
        {fireRedirect ? <Redirect to={`${process.env.PUBLIC_URL}/game_window`} /> : null }
      </div>
    )
  }
}

export default connect()(Name);