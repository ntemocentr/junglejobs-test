/**
 * Created by user on 29.07.2015.
 */
import {Component,PropTypes} from 'react'
import _ from 'underscore'
export default class GriddleFilter extends Component{

	render(){
		return (
			<div>
				<h4>{_.size(this.props.filters)	 ==0 ?'Для активации фильтров нажмите на любое значение карточки':'Список отфильтрован по следующим критериям:'}</h4>
			<ul>
			{ _.map(this.props.filters,this.renderFilter.bind(this)) }
		</ul>
				</div>
		)

	}

	handleClick(index){
		this.context.actions.unset(index);
	}

	renderFilter(item,index){
		return (<li>{index}:  {item} <button className="btn btn-default" onClick={()=>this.handleClick(index)}>x</button></li>)
	}

}


GriddleFilter.contextTypes = {
	actions: PropTypes.any
};

