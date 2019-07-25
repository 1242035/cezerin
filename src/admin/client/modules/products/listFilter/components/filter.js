import React from 'react';
import messages from 'lib/text';
import style from './style.css';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Switch from '@material-ui/core/Switch';

const Filter = ({
	filter,
	setEnabled,
	setDiscontinued,
	setOnSale,
	setStock
}) => {
	const { enabled, discontinued, onSale, stockStatus } = filter;

	return (
		<div className={style.filter}>
			<Select
				value={enabled}
				onChange={(event, index, value) => {
					setEnabled(value);
				}}
				floatingLabelText={messages.enabled}
				fullWidth={true}
			>
				<MenuItem value={null} primaryText={messages.all} label=" " />
				<MenuItem value={false} primaryText={messages.no} />
				<MenuItem value={true} primaryText={messages.yes} />
			</Select>

			<Select
				value={discontinued}
				onChange={(event, index, value) => {
					setDiscontinued(value);
				}}
				floatingLabelText={messages.products_discontinued}
				fullWidth={true}
			>
				<MenuItem value={null} primaryText={messages.all} label=" " />
				<MenuItem value={false} primaryText={messages.no} />
				<MenuItem value={true} primaryText={messages.yes} />
			</Select>

			<Select
				value={onSale}
				onChange={(event, index, value) => {
					setOnSale(value);
				}}
				floatingLabelText={messages.products_onSale}
				fullWidth={true}
			>
				<MenuItem value={null} primaryText={messages.all} label=" " />
				<MenuItem value={false} primaryText={messages.no} />
				<MenuItem value={true} primaryText={messages.yes} />
			</Select>

			<Select
				value={stockStatus}
				onChange={(event, index, value) => {
					setStock(value);
				}}
				floatingLabelText={messages.products_stockStatus}
				fullWidth={true}
			>
				<MenuItem value={null} primaryText={messages.all} label=" " />
				<MenuItem value={'available'} primaryText={messages.products_inStock} />
				<MenuItem
					value={'out_of_stock'}
					primaryText={messages.products_outOfStock}
				/>
				<MenuItem
					value={'backorder'}
					primaryText={messages.products_backorder}
				/>
				<MenuItem value={'preorder'} primaryText={messages.products_preorder} />
				<MenuItem
					value={'discontinued'}
					primaryText={messages.products_discontinued}
				/>
			</Select>
		</div>
	);
};

export default Filter;
