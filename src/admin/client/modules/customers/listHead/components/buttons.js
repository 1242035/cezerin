import React from 'react';
import { Link } from 'react-router-dom';
import messages from 'lib/text';
import GroupSelect from 'modules/customerGroups/select';
import DeleteConfirmation from 'modules/shared/deleteConfirmation';
import Icon from '@material-ui/core/Icon';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Search from './search';

export default class Buttons extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			groupId: null,
			openSetGroup: false,
			openDelete: false
		};
	}

	showSetGroup = () => {
		this.setState({ openSetGroup: true });
	};

	showDelete = () => {
		this.setState({ openDelete: true });
	};

	closeSetGroup = () => {
		this.setState({ openSetGroup: false });
	};

	closeDelete = () => {
		this.setState({ openDelete: false });
	};

	deleteCustomers = () => {
		this.setState({ openDelete: false });
		this.props.onDelete();
	};

	saveSetGroup = () => {
		this.setState({ openSetGroup: false });
		this.props.onSetGroup(this.state.groupId);
	};

	selectSetGroup = groupId => {
		this.setState({ groupId: groupId });
	};

	render() {
		const { search, setSearch, selectedCount, onDelete } = this.props;

		const actionsSetGroup = [
			<Button
				label={messages.cancel}
				onClick={this.closeSetGroup}
				style={{ marginRight: 10 }}
			/>,
			<Button
				label={messages.save}
				primary={true}
				keyboardFocused={true}
				onClick={this.saveSetGroup}
			/>
		];

		return (
			<span>
				<Search value={search} setSearch={setSearch} />
				{selectedCount > 0 && (
					<span>
						<IconButton
							touch={true}
							tooltipPosition="bottom-left"
							tooltip={messages.actions_delete}
							onClick={this.showDelete}
						>
							<Icon color="#fff" className="material-icons">
								delete
							</Icon>
						</IconButton>
						<IconButton
							touch={true}
							tooltipPosition="bottom-left"
							tooltip={messages.customers_setGroup}
							onClick={this.showSetGroup}
						>
							<Icon color="#fff" className="material-icons">
								folder
							</Icon>
						</IconButton>
						<DeleteConfirmation
							open={this.state.openDelete}
							isSingle={false}
							itemsCount={selectedCount}
							onCancel={this.closeDelete}
							onDelete={this.deleteCustomers}
						/>
						<Dialog
							title={messages.customers_setGroup}
							actions={actionsSetGroup}
							modal={false}
							open={this.state.openSetGroup}
							onRequestClose={this.closeSetGroup}
							autoScrollBodyContent={true}
						>
							<GroupSelect
								onSelect={this.selectSetGroup}
								selectedId={this.state.groupId}
								showRoot={true}
								showAll={false}
							/>
						</Dialog>
					</span>
				)}
			</span>
		);
	}
}
