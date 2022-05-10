import "./App.css"; 
import errpage from "./resources/errorpage.jsx";
import home from "./resources/home/home.jsx";
import login from "./resources/logsignup/login.jsx";
import signup_personal from "./resources/logsignup/signup_personal.jsx";
import signup_business from "./resources/logsignup/signup_business.jsx"
import account from './resources/grid/account/account'
import dashboard from './resources/dashboard/dashboard.jsx'
import administrate_account from './resources/grid/editaccount/administrate_account'
import explore from './resources/grid/explore/explore'
import accounthrd from './resources/grid/account/accounthrd'
import matchmaking from './resources/matchmaking'
import { Route, Router } from "react-router-dom";
import $$ from 'jquery.cookie'
import $ from 'jquery'
import Nav from './resources/navbar.jsx'
function App(){
    if(window.location.pathname == '/explore' || window.location.pathname == '/dashboard' || window.location.pathname == '/account' || window.location.pathname =='/administrate-account' || window.location.pathname == '/matchmaking' || window.location.pathname == `/${$.cookie('httpurl')}`){
        if(localStorage.getItem('token') === null){
            window.location.pathname='/signin'
        }
    }
    if(localStorage.getItem('token') && window.location.pathname != '/' && window.location.pathname != '/signin' && window.location.pathname != '/signup-business' && window.location.pathname !='/signup-personal'){
if(window.location.pathname != '/explore' && window.location.pathname != '/dashboard' && window.location.pathname != '/account' && window.location.pathname !='/administrate-account' && window.location.pathname != '/matchmaking' && window.location.pathname != `/${$.cookie('httpurl')}`){
        return(
            <div>
                <Route component={errpage}/>
            </div>
        )
    }else{
        return(
            <div>
             <Nav/>
            <Route exact path = '/dashboard'
            component = { dashboard }/>
            <Route exact path ='/account'
            component= {account}/>
            <Route exact path ='/administrate-account'
            component ={administrate_account}/>
            <Route exact path='/explore'
            component={explore}/>
            <Route path={`/${$.cookie('httpurl')}`}
                component={accounthrd}/>
            <Route exact path='/matchmaking'
                   component={matchmaking}/>
            </div>
        )
        
    }}else if(window.location.pathname == '/' || window.location.pathname == '/signin' || window.location.pathname == '/signup-business' || window.location.pathname == '/signup-personal'){
    return( 
        <div>
            <Route exact path = "/"
            component = { home }/>
             <Route exact path = "/signin"
            component = { login }/>
             <Route exact path = "/signup-business"
            component = { signup_business }/>
             <Route exact path = "/signup-personal"
            component = { signup_personal }/>
            </div>
       )
    }
}
export default App;
