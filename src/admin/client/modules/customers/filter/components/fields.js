import React from 'react';
import messages from 'lib/text';
import style from './style.css';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Switch from '@material-ui/core/Switch';

export default ({
	active,
	discontinued,
	on_sale,
	stock_status,
	setActive,
	setDiscontinued,
	setOnSale,
	setStock
}) => {
	return (
		<div className={style.filter}>
			<Switch
				label={messages.products_onlyEnabled}
				onSwitch={(e, value) => {
					setActive(value);
				}}
				toggled={active}
				className={style.toggle}
			/>
			<Switch
				label={messages.products_onlyDiscontinued}
				onSwitch={(e, value) => {
					setDiscontinued(value);
				}}
				toggled={discontinued}
				className={style.toggle}
			/>
			<Switch
				label={messages.products_onlyOnSale}
				onSwitch={(e, value) => {
					setOnSale(value);
				}}
				toggled={on_sale}
				className={style.toggle}
			/>
			<Select
				value={stock_status}
				onChange={(event, index, value) => {
					setStock(value);
				}}
				floatingLabelText={messages.products_stockStatus}
				fullWidth={true}
			>
				<MenuItem value={'all'} primaryText={messages.all} />
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
