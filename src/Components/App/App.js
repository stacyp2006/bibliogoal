import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Search from '../Search/Search';
import BookContainer from '../BookContainer/BookContainer';
import HaveRead from '../HaveRead/HaveRead';
import ToRead from '../ToRead/ToRead';
import GoalForm from '../GoalForm/GoalForm';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <h1 className='title'>BiblioGoal</h1>
        <nav className='links'>
          <Link className='homelink' to='/'>Home</Link> || <Link className='have-read-link' to='/have-read'>Books I Have Read</Link> || <Link className='to-read-link' to='/to-read'>Books To Read</Link>
        </nav>
        <GoalForm />
        <p className='goal-text'>I want to read {this.props.userGoal} books!</p>
        <p className='progress-text'>You have read {this.props.haveReadList.length} of {this.props.userGoal} books.</p>
        <Route exact path='/'>
          <Search />
          <BookContainer />
        </Route>
        <Route exact path='/have-read'>
          <HaveRead />
        </ Route>
        <Route exact path='/to-read'>
          <ToRead />
        </ Route>
      </main>
    )
  }
}

const mapStateToProps = state => ({
  userGoal: state.setUserGoal,
  haveReadList: state.haveReadList
})

export default connect(
  mapStateToProps
)(App)
