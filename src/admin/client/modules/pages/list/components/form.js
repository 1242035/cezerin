import React from 'react';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const PageItem = ({ page }) => {
	const tags = page.tags && page.tags.length > 0 ? page.tags.join(', ') : '';

	return (
		<div>
			<Divider />
			<Link to={`/admin/pages/${page.id}`} style={{ textDecoration: 'none' }}>
				<ListItem
					rightIcon={
						<Icon className="material-icons">keyboard_arrow_right</Icon>
					}
					leftIcon={
						page.is_system ? (
							<Icon className="material-icons">lock_outline</Icon>
						) : null
					}
					style={!page.enabled ? { color: 'rgba(0, 0, 0, 0.3)' } : {}}
					primaryText={
						<div className="row">
							<div className="col-xs-8">{page.meta_title}</div>
							<div className="col-xs-4" style={{ color: 'rgba(0, 0, 0, 0.4)' }}>
								{tags}
							</div>
						</div>
					}
				/>
			</Link>
		</div>
	);
};

export default class PagesList extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.onLoad();
	}

	render() {
		const { pages } = this.props;
		let listItems = pages.map((page, index) => (
			<PageItem key={index} page={page} />
		));

		return (
			<Paper className="paper-box" zDepth={1}>
				<div style={{ width: '100%' }}>
					<List style={{ padding: 0 }}>{listItems}</List>
				</div>
			</Paper>
		);
	}
}
