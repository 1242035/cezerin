import React from 'react';
import { Link } from 'react-router-dom';
import messages from 'lib/text';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Icon from '@material-ui/core/Icon';

const styles = {
	selectedItem: {
		backgroundColor: 'rgba(0, 0, 0, 0.1)'
	},
	innerItem: {
		paddingLeft: 55
	}
};

const FolderIcon = <Icon className="material-icons">folder</Icon>;

export default class Groups extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.onLoad();
	}

	render() {
		const {
			onSelect,
			selectedId,
			items,
			showAll,
			showRoot,
			showManage
		} = this.props;

		const rows = items.map(item => (
			<ListItem
				key={item.id}
				className="treeItem"
				style={item.id === selectedId ? styles.selectedItem : null}
				innerDivStyle={styles.innerItem}
				primaryText={item.name}
				leftIcon={FolderIcon}
				onClick={() => {
					this.props.onSelect(item.id);
				}}
			/>
		));

		return (
			<List>
				{showRoot && (
					<ListItem
						className="treeItem"
						primaryText={messages.customers_noGroup}
						style={'root' === selectedId ? styles.selectedItem : null}
						innerDivStyle={styles.innerItem}
						leftIcon={<Icon className="material-icons">clear</Icon>}
						onClick={() => {
							onSelect('root');
						}}
					/>
				)}

				{showAll && (
					<ListItem
						className="treeItem"
						primaryText={messages.customerGroups_all}
						style={'all' === selectedId ? styles.selectedItem : null}
						innerDivStyle={styles.innerItem}
						leftIcon={FolderIcon}
						onClick={() => {
							onSelect('all');
						}}
					/>
				)}

				{rows}

				{showManage && (
					<Link to="/admin/customers/groups" style={{ textDecoration: 'none' }}>
						<ListItem
							className="treeItem"
							primaryText={messages.customerGroups_titleEditMany}
							innerDivStyle={styles.innerItem}
							leftIcon={<Icon className="material-icons">settings</Icon>}
						/>
					</Link>
				)}
			</List>
		);
	}
}
