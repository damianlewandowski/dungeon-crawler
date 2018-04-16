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
      <div>
        <form 
          onSubmit={handleSubmit}
        >
          <label>
            Name:
            <input onChange={handleChange} type="text" value={name} placeholder="Your name..."/>
          </label>
          <input type="submit" value="Play"/>
        </form>
        {fireRedirect ? <Redirect to="/game_window" /> : null }
      </div>
    )
  }
}

export default connect()(Name);