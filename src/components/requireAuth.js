import React, { Component } from "react";
import {connect} from 'react-redux';

export default (ChildComponent) =>{
    class ComposedComponent extends Component{
        componentDidMount(){
            this.shouldNavigateAway();
        }
        componentDidUpdate(){
            this.shouldNavigateAway();
        }
        
        render(){
            return <ChildComponent {...this.props} />;
        };
        shouldNavigateAway(){
            if(!this.props.auth){
                this.props.history.push('/');
            }
        }
    }
    function mapStateToProps(state){
        return {auth: state.auth.authenticated }
    }
    return connect(mapStateToProps)(ComposedComponent);

};