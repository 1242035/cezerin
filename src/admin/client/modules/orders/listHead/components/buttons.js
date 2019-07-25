import React from 'react';
import { Link } from 'react-router-dom';
import messages from 'lib/text';
import DeleteConfirmation from 'modules/shared/deleteConfirmation';
import Icon from '@material-ui/core/Icon';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Search from './search';
const Fragment = React.Fragment;

export default class Buttons extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			openDelete: false
		};
	}

	openDelete = () => {
		this.setState({ openDelete: true });
	};

	closeDelete = () => {
		this.setState({ openDelete: false });
	};

	deleteOrders = () => {
		this.setState({ openDelete: false });
		this.props.onDelete();
	};

	render() {
		const { search, setSearch, selectedCount, onDelete, onCreate } = this.props;

		return (
			<Fragment>
				<Search value={search} setSearch={setSearch} />
				{selectedCount > 0 && (
					<Fragment>
						<IconButton
							touch={true}
							tooltipPosition="bottom-left"
							tooltip={messages.actions_delete}
							onClick={this.openDelete}
						>
							<Icon color="#fff" className="material-icons">
								delete
							</Icon>
						</IconButton>
						<DeleteConfirmation
							open={this.state.openDelete}
							isSingle={false}
							itemsCount={selectedCount}
							onCancel={this.closeDelete}
							onDelete={this.deleteOrders}
						/>
					</Fragment>
				)}
				<IconButton
					touch={true}
					tooltipPosition="bottom-left"
					tooltip={messages.orders_titleAdd}
					onClick={onCreate}
				>
					<Icon color="#fff" className="material-icons">
						add
					</Icon>
				</IconButton>
			</Fragment>
		);
	}
}
