import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class App extends React.Component {


}

render() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' render={()=><ArticleList articleList={this.props.masterArticleList}/>} />
        <Route path='/newarticle' render={()=><NewArticleControl />} />
        <Route path='/admin' render={(props)=><Admin currentRouterPath={props.location.pathname} />} />
        <Route component={Error404}/>
      </Switch>
    </div>
    );
  }
}

App.PropTypes = {
  masterArticleList: PropTypes.object
}

const mapStateToProps = state => {
  return {
    masterArticleList: state.masterArticleList
  }
}

export default withRouter(connect(mapStateToProps)(App));


// ArticleList
//  var masterArticleList
// New NewArticleControl
// Error404
