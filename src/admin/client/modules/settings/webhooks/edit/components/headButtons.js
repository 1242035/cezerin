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

	deletePage = () => {
		this.setState({ openDelete: false });
		this.props.onDelete(this.props.webhook.id);
	};

	render() {
		const { webhook } = this.props;
		const webhookName =
			webhook && webhook.url && webhook.url.length > 0 ? webhook.url : 'Draft';

		if (webhook) {
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
						itemName={webhookName}
						onCancel={this.closeDelete}
						onDelete={this.deletePage}
					/>
				</Fragment>
			);
		} else {
			return null;
		}
	}
}
