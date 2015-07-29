/**
 * Created by user on 29.07.2015.
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'redux/react';
import * as GriddleFiltersActions from '../actions/GriddleFiltersActions';
import {method,data,columnMeta} from '../assets/fake.js'
import GriddleWrapper from '../components/griddle-wrapper.js'


function select(state){
		return {filters:state.filters};
}

export default class  extends Component {

	render() {
		return <Connector select={select}>
			{this.renderChild}
		</Connector>

	}


 	renderChild({filters,dispatch}) {
		const actions = bindActionCreators(GriddleFiltersActions, dispatch);
		return (
			<div>

				<GriddleWrapper data={data} filters={filters} actions={actions}/>
			</div>
		)
	}

}

