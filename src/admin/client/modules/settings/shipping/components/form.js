import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const MethodItem = ({ method }) => {
	return (
		<div>
			<Divider />
			<Link
				to={`/admin/settings/shipping/${method.id}`}
				style={{ textDecoration: 'none' }}
			>
				<ListItem
					rightIcon={
						<Icon className="material-icons">keyboard_arrow_right</Icon>
					}
					style={!method.enabled ? { color: 'rgba(0, 0, 0, 0.3)' } : {}}
					primaryText={
						<div className="row">
							<div className="col-xs-6">{method.name}</div>
							<div className="col-xs-6" style={{ color: 'rgba(0, 0, 0, 0.4)' }}>
								{method.description}
							</div>
						</div>
					}
				/>
			</Link>
		</div>
	);
};

export default class EmailSettings extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.onLoad();
	}

	render() {
		const { shippingMethods } = this.props;
		let methods = shippingMethods.map((method, index) => (
			<MethodItem key={index} method={method} />
		));

		return (
			<Paper className="paper-box" zDepth={1}>
				<div style={{ width: '100%' }}>
					<List style={{ padding: 0 }}>{methods}</List>
				</div>
			</Paper>
		);
	}
}
