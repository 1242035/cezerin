import React from 'react';
import { Link } from 'react-router-dom';
import messages from 'lib/text';
import DeleteConfirmation from 'modules/shared/deleteConfirmation';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
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

	deleteOrder = () => {
		this.closeDelete();
		this.props.onDelete();
	};

	render() {
		const { customer } = this.props;
		const customerName =
			customer && customer.full_name && customer.full_name.length > 0
				? customer.full_name
				: 'Draft';

		return (
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
					isSingle={true}
					itemsCount={1}
					itemName={customerName}
					onCancel={this.closeDelete}
					onDelete={this.props.onDelete}
				/>
			</Fragment>
		);
	}
}
