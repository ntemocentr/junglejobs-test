/**
 * Created by user on 29.07.2015.
 */
import {Component,PropTypes} from 'react'
import _ from 'underscore'

import Toggle from './griddle-prop-item-toggle.js'

export default  class  GriddleListItem  extends Component {

	getChildContext() {
		return {
			actions: this.context.actions
		}
	}

	render() {

		return <div className="col-md-2">
			<ul >
				{_.map(this.props.data, this.renderProp.bind(this))}
			</ul>
		</div>
	}

	renderProp(item, index) {
		//debugger;
		return <li >{index}: <Toggle label={item} attr={index} /></li>
	}

}
GriddleListItem.childContextTypes= {
	actions: PropTypes.any
};

GriddleListItem.contextTypes = {
	actions: PropTypes.any
};

