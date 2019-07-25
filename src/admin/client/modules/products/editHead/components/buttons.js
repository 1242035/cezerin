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

	handleDelete = () => {
		this.closeDelete();
		this.props.onDelete();
	};

	render() {
		const { product } = this.props;
		const productName =
			product && product.name && product.name.length > 0
				? product.name
				: 'Draft';

		return (
			<Fragment>
				<IconButton
					touch={true}
					tooltipPosition="bottom-left"
					tooltip={messages.deleteProduct}
					onClick={this.openDelete}
				>
					<Icon color="#fff" className="material-icons">
						delete
					</Icon>
				</IconButton>
				{product && product.enabled && (
					<a href={product.url} target="_blank">
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
					itemName={productName}
					onCancel={this.closeDelete}
					onDelete={this.handleDelete}
				/>
			</Fragment>
		);
	}
}
