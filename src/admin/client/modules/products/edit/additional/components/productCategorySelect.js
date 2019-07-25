import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import messages from 'lib/text';
import style from './style.css';
import CategorySelect from 'modules/productCategories/select';
import Icon from '@material-ui/core/Icon';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
const Fragment = React.Fragment;

export default class ProductCategorySelect extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}

	close = () => {
		this.setState({ open: false });
	};

	open = () => {
		this.setState({ open: true });
	};

	handleSelect = categoryId => {
		this.props.input.onChange(categoryId);
	};

	render() {
		const {
			categories,
			input,
			meta: { touched, error }
		} = this.props;
		const { open } = this.state;
		const selectedCategoryId = input.value;
		const category = categories.find(item => item.id === selectedCategoryId);
		const categoryName = category ? category.name : '';

		const dialogButtons = [
			<Button
				label={messages.cancel}
				onClick={this.close}
				style={{ marginRight: 10 }}
			/>,
			<Button
				label={messages.save}
				primary={true}
				keyboardFocused={true}
				onClick={this.close}
			/>
		];

		return (
			<Fragment>
				<Dialog
					title={messages.category}
					actions={dialogButtons}
					modal={false}
					open={open}
					onRequestClose={this.close}
					autoScrollBodyContent={true}
				>
					<CategorySelect
						onSelect={this.handleSelect}
						selectedId={selectedCategoryId}
						opened={false}
					/>
				</Dialog>
				<Button
					label={categoryName}
					onClick={this.open}
					icon={
						<Icon color="#777" className="material-icons">
							create
						</Icon>
					}
				/>
			</Fragment>
		);
	}
}
