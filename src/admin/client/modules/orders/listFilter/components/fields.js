import React from 'react';
import messages from 'lib/text';
import style from './style.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default ({
	isClosed,
	isCancelled,
	isDelivered,
	isPaid,
	isHold,
	isDraft,
	setClosed,
	setCancelled,
	setDelivered,
	setPaid,
	setHold,
	setDraft
}) => {
	return (
		<div className={style.filter}>
			<Select
				className={style.select}
				fullWidth={true}
				value={isDraft}
				onChange={(event, index, value) => {
					setDraft(value);
				}}
				floatingLabelText={messages.orders_draft}
			>
				<MenuItem value={null} primaryText={messages.all} label=" " />
				<MenuItem value={false} primaryText={messages.no} />
				<MenuItem value={true} primaryText={messages.yes} />
			</Select>

			<Select
				className={style.select}
				fullWidth={true}
				value={isHold}
				onChange={(event, index, value) => {
					setHold(value);
				}}
				floatingLabelText={messages.orders_hold}
			>
				<MenuItem value={null} primaryText={messages.all} label=" " />
				<MenuItem value={false} primaryText={messages.no} />
				<MenuItem value={true} primaryText={messages.yes} />
			</Select>

			<Select
				className={style.select}
				fullWidth={true}
				value={isPaid}
				onChange={(event, index, value) => {
					setPaid(value);
				}}
				floatingLabelText={messages.orders_paid}
			>
				<MenuItem value={null} primaryText={messages.all} label=" " />
				<MenuItem value={false} primaryText={messages.no} />
				<MenuItem value={true} primaryText={messages.yes} />
			</Select>

			<Select
				className={style.select}
				fullWidth={true}
				value={isDelivered}
				onChange={(event, index, value) => {
					setDelivered(value);
				}}
				floatingLabelText={messages.orders_delivered}
			>
				<MenuItem value={null} primaryText={messages.all} label=" " />
				<MenuItem value={false} primaryText={messages.no} />
				<MenuItem value={true} primaryText={messages.yes} />
			</Select>

			<Select
				className={style.select}
				fullWidth={true}
				value={isCancelled}
				onChange={(event, index, value) => {
					setCancelled(value);
				}}
				floatingLabelText={messages.orders_cancelled}
			>
				<MenuItem value={null} primaryText={messages.all} label=" " />
				<MenuItem value={false} primaryText={messages.no} />
				<MenuItem value={true} primaryText={messages.yes} />
			</Select>

			<Select
				className={style.select}
				fullWidth={true}
				value={isClosed}
				onChange={(event, index, value) => {
					setClosed(value);
				}}
				floatingLabelText={messages.orders_closed}
			>
				<MenuItem value={null} primaryText={messages.all} label=" " />
				<MenuItem value={false} primaryText={messages.no} />
				<MenuItem value={true} primaryText={messages.yes} />
			</Select>
		</div>
	);
};
