import React from 'react';
import { Link } from 'react-router-dom';
import messages from 'lib/text';
import CategorySelect from 'modules/productCategories/select';
import DeleteConfirmation from 'modules/shared/deleteConfirmation';
import Icon from '@material-ui/core/Icon';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import Search from './search';
const Fragment = React.Fragment;

export default class Buttons extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			categoryIdMoveTo: null,
			openMoveTo: false,
			openDelete: false
		};
	}

	showMoveTo = () => {
		this.setState({ openMoveTo: true });
	};

	openDelete = () => {
		this.setState({ openDelete: true });
	};

	closeDelete = () => {
		this.setState({ openDelete: false });
	};

	deleteProduct = () => {
		this.setState({ openDelete: false });
		this.props.onDelete();
	};

	closeMoveTo = () => {
		this.setState({ openMoveTo: false });
	};

	saveMoveTo = () => {
		this.setState({ openMoveTo: false });
		this.props.onMoveTo(this.state.categoryIdMoveTo);
	};

	selectMoveTo = categoryId => {
		this.setState({ categoryIdMoveTo: categoryId });
	};

	render() {
		const { search, setSearch, selectedCount, onDelete, onCreate } = this.props;

		const actionsMoveTo = [
			<Button
				label={messages.cancel}
				onClick={this.closeMoveTo}
				style={{ marginRight: 10 }}
			/>,
			<Button
				label={messages.actions_moveHere}
				primary={true}
				keyboardFocused={true}
				onClick={this.saveMoveTo}
			/>
		];

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
						<IconButton
							touch={true}
							tooltipPosition="bottom-left"
							tooltip={messages.actions_moveTo}
							onClick={this.showMoveTo}
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
							onDelete={this.deleteProduct}
						/>
						<Dialog
							title={messages.actions_moveTo}
							actions={actionsMoveTo}
							modal={false}
							open={this.state.openMoveTo}
							onRequestClose={this.closeMoveTo}
							autoScrollBodyContent={true}
						>
							<CategorySelect
								onSelect={this.selectMoveTo}
								selectedId={this.state.categoryIdMoveTo}
								opened={true}
							/>
						</Dialog>
					</Fragment>
				)}
				<IconButton
					touch={true}
					tooltipPosition="bottom-left"
					tooltip={messages.addProduct}
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
