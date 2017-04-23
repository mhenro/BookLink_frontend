import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducer from './reducers/appReducer.jsx';

import Menu from './components/Global/Menu.jsx';
import LeftMenu from './components/Global/LeftMenu.jsx';
import Footer from './components/Global/Footer.jsx';

import PageBooks from './components/Global/TopMenuPages/PageBooks.jsx';
import BookViewer from './components/Global/BookComponents/BookViewer.jsx';
import PageAuthors from './components/Global/TopMenuPages/PageAuthors.jsx';
import PageRatings from './components/Global/TopMenuPages/PageRatings.jsx';
import PageForums from './components/Global/TopMenuPages/PageForums.jsx';
import PageReviews from './components/Global/TopMenuPages/PageReviews.jsx';
import PageHelp from './components/Global/TopMenuPages/PageHelp.jsx';

import MeContainer from './containers/MeContainer.jsx';
import News from './components/Global/LeftMenuPages/News.jsx';
import Messages from './components/Global/LeftMenuPages/Messages.jsx';
import Friends from './components/Global/LeftMenuPages/Friends.jsx';
import Groups from './components/Global/LeftMenuPages/Groups.jsx';

import Registration from './components/Global/Login/Registration.jsx';

import NotFound from './components/Global/NotFound.jsx';

import LoginPanel from './components/Global/Login/LoginPanel.jsx';

import { BrowserRouter, Match, Miss } from 'react-router'

import './Components/Global/Global.css';

let store = createStore(appReducer);

class Root extends React.Component {
    render() {
        return (
            <BrowserRouter basename="/booklink">
                <div>
                    <div className="header">
                        <Menu items={[
                            {'Книги': 'books'},
                            {'Авторы': 'authors'},
                            {'Рейтинги': 'ratings'},
                            {'Обсуждения': 'forums'},
                            {'Обзоры': 'reviews'},
                            {'Помощь': 'help'}
                        ]}/>
                    </div>
                    <div className="container">
                        <div className="primary">
                            <LeftMenu />
                        </div>

                        <div className="content">
                            {/* top menu pages*/}
                            <Match exactly pattern='/' component={PageBooks}/>
                            <Match exactly pattern='/books' component={PageBooks}/>
                            <Match exactly pattern='/bookviewer' component={BookViewer}/>
                            <Match exactly pattern='/authors' component={PageAuthors}/>
                            <Match exactly pattern='/ratings' component={PageRatings}/>
                            <Match exactly pattern='/forums' component={PageForums}/>
                            <Match exactly pattern='/reviews' component={PageReviews}/>
                            <Match exactly pattern='/help' component={PageHelp}/>

                            {/* left menu pages */}
                            <Match exactly pattern='/me' component={MeContainer}/>
                            <Match exactly pattern='/news' component={News}/>
                            <Match exactly pattern='/messages' component={Messages}/>
                            <Match exactly pattern='/friends' component={Friends}/>
                            <Match exactly pattern='/groups' component={Groups}/>

                            {/* registration */}
                            <Match exactly pattern='/registration' component={Registration}/>

                            <Miss component={NotFound}/>
                        </div>

                        <div className="secondary">
                            <LoginPanel/>
                        </div>
                    </div>
                    <div className="footer">
                        <Footer />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('react-content')
)