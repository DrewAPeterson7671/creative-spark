import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import Home from './Home';
import ArticleList from './ArticleList';
import Error404 from './Error404';
import NewArticleForm from './NewArticleForm';
import Admin from './Admin';


class App extends React.Component {
  // let currentRouterPath = props.location.pathname
  // console.log(props.location.pathname)

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><Home/>} />
          <Route path='/articlelist' render={(props)=><ArticleList
            articleList={props.masterArticleList}
            currentRouterPath={props.location.pathname}
            />} />
          <Route path='/admin' render={(props)=><Admin currentRouterPath={props.location.pathname} />} />
          <Route path='/newarticle' render={()=><NewArticleForm />} />
          <Route component={Error404}/>
        </Switch>
      </div>
      );
    }
}

App.propTypes = {
  masterArticleList: PropTypes.object,
  currentRouterPath: PropTypes.string
}

const mapStateToProps = state => {
  return {
    masterArticleList: state.masterArticleList,
    currentRouterPath: state.currentRouterPath
  }
}

export default withRouter(connect(mapStateToProps)(App));


// ArticleList
//  var masterArticleList
// New NewArticleControl
// Error404

// need a home page
// ArticleList page
// users comment in articles page
// NewArticles should be under Admin
// need an About page
// need a Contact page
// Productions is a link to
// admin page should have authentication

// <Route path='/admin' render={(props)=><Admin currentRouterPath={props.location.pathname} />} />
