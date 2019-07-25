import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Head from './head';
import CustomersListItem from './item';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import messages from 'lib/text';
import style from './style.css';

export default class CustomersList extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.onLoad();
	}

	render() {
		const {
			items,
			selected,
			loadingItems,
			hasMore,
			onSelect,
			onSelectAll,
			loadMore,
			settings
		} = this.props;
		const rows = items.map((item, index) => (
			<CustomersListItem
				key={index}
				customer={item}
				selected={selected}
				onSelect={onSelect}
				settings={settings}
			/>
		));

		return (
			<div>
				<List>
					<Head onSelectAll={onSelectAll} />
					<Divider />
					{rows}
					<div className={style.more}>
						<Button
							variant="contained"
							disabled={loadingItems || !hasMore}
							label={messages.actions_loadMore}
							labelPosition="before"
							primary={false}
							icon={<Icon className="material-icons">refresh</Icon>}
							onClick={loadMore}
						/>
					</div>
				</List>
			</div>
		);
	}
}
