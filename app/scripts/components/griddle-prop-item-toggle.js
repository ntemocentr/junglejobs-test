/**
 * Created by user on 29.07.2015.
 */

import React from 'react'


import { bindActionCreators } from 'redux';
import * as GriddleFiltersActions from '../actions/GriddleFiltersActions';


export default class PropItemToggle extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			active: true
		}
	}

	handleClick() {
		this.context.actions.set(this.props.attr,this.props.label);
	}

	render() {

		return <a onClick={()=>this.handleClick() }>{this.props.label}</a>
	}



}

PropItemToggle.contextTypes = {
	actions: React.PropTypes.any
};

