import React from 'react';
import { Link } from 'react-router-dom';
import messages from 'lib/text';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const WebhookItem = ({ webhook }) => {
	const events =
		webhook.events && webhook.events.length > 0
			? webhook.events.join(', ')
			: 'none';
	return (
		<div>
			<Divider />
			<Link
				to={`/admin/settings/webhooks/${webhook.id}`}
				style={{ textDecoration: 'none' }}
			>
				<ListItem
					rightIcon={
						<Icon className="material-icons">keyboard_arrow_right</Icon>
					}
					style={!webhook.enabled ? { color: 'rgba(0, 0, 0, 0.3)' } : {}}
					primaryText={
						<div className="row">
							<div className="col-xs-6">{webhook.url}</div>
							<div className="col-xs-6" style={{ color: 'rgba(0, 0, 0, 0.4)' }}>
								{events}
							</div>
						</div>
					}
				/>
			</Link>
		</div>
	);
};

export default class WebhooksList extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.onLoad();
	}

	render() {
		const { webhooks } = this.props;
		let listItems = webhooks.map((webhook, index) => (
			<WebhookItem key={index} webhook={webhook} />
		));

		return (
			<div>
				<div style={{ margin: 20, color: 'rgba(0, 0, 0, 0.52)' }}>
					{messages.webhooksAbout}
				</div>
				<Paper className="paper-box" zDepth={1}>
					<div style={{ width: '100%' }}>
						<List style={{ padding: 0 }}>{listItems}</List>
					</div>
				</Paper>
			</div>
		);
	}
}
