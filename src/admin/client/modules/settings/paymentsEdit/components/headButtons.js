import React from 'react';
import messages from 'lib/text';
import DeleteConfirmation from 'modules/shared/deleteConfirmation';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

export default class Buttons extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			openDelete: false
		};
	}

	showDelete = () => {
		this.setState({ openDelete: true });
	};

	closeDelete = () => {
		this.setState({ openDelete: false });
	};

	deleteGroup = () => {
		this.setState({ openDelete: false });
		this.props.onDelete(this.props.paymentMethod.id);
	};

	render() {
		const { paymentMethod, onDelete } = this.props;
		const methodName =
			paymentMethod && paymentMethod.name && paymentMethod.name.length > 0
				? paymentMethod.name
				: 'Draft';

		return (
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
				<DeleteConfirmation
					open={this.state.openDelete}
					isSingle={true}
					itemsCount={1}
					itemName={methodName}
					onCancel={this.closeDelete}
					onDelete={this.deleteGroup}
				/>
			</span>
		);
	}
}
