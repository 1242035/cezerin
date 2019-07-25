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
		this.props.onDelete(this.props.page.id);
	};

	render() {
		const { page } = this.props;
		const pageName =
			page && page.meta_title && page.meta_title.length > 0
				? page.meta_title
				: 'Draft';

		if (page && !page.is_system) {
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
					{page.enabled && (
						<a href={page.url} target="_blank">
							<IconButton
								touch={true}
								tooltipPosition="bottom-left"
								tooltip={messages.viewOnWebsite}
							>
								<Icon color="#fff" className="material-icons">
									open_in_new
								</Icon>
							</IconButton>
						</a>
					)}
					<DeleteConfirmation
						open={this.state.openDelete}
						isSingle={true}
						itemsCount={1}
						itemName={pageName}
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
