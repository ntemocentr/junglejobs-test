import {Component,PropTypes} from 'react';
import Griddle from 'griddle-react'
import GriddleListItem from './griddle-list-item'
import GriddleFilter from './griddle-filter'
import _ from 'underscore'


export default  class GriddleWrapper extends Component {







	getChildContext() {
		return {
			actions: this.props.actions
		}
	}




	render() {
		const { filters } = this.props;

		var data = _.filter(this.props.data,filters);

		return (
			<div>
				<GriddleFilter filters={filters} />
					<Griddle results={data} tableClassName="table" showFilter={true}
					 useCustomRowComponent={true}
					 customRowComponent={GriddleListItem}
					 columns={["name", "city", "state", "country"]}
					 showSettings={true} />
			</div>
		);
	}


}
GriddleWrapper.propTypes = {
	actions: PropTypes.object.isRequired
};
GriddleWrapper.childContextTypes= {
	actions: PropTypes.any
};