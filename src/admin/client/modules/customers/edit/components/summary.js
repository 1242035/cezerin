import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import messages from 'lib/text';
import * as helper from 'lib/helper';
import style from './style.css';
import SummaryForm from './summaryForm.js';

import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import FlatButton from '@material-ui/core/FlatButton';
import Button from '@material-ui/core/Button';
import FontIcon from '@material-ui/core/FontIcon';
import IconMenu from '@material-ui/core/IconMenu';
import MenuItem from '@material-ui/core/MenuItem';
import SelectField from '@material-ui/core/SelectField';
import Dialog from '@material-ui/core/Dialog';

export default class CustomerSummary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			openSummaryEdit: false
		};
	}

	showSummaryEdit = () => {
		this.setState({ openSummaryEdit: true });
	};

	hideSummaryEdit = () => {
		this.setState({ openSummaryEdit: false });
	};

	saveSummaryEdit = customer => {
		this.props.onCustomerSummaryUpdate(customer);
		this.hideSummaryEdit();
	};

	render() {
		const { customer, settings } = this.props;
		const totalSpent = helper.formatCurrency(customer.total_spent, settings);

		return (
			<Paper className="paper-box" zDepth={1}>
				<div className={style.innerBox}>
					<div
						className={style.customerName}
						style={{ paddingBottom: 26, paddingTop: 0 }}
					>
						{customer.full_name}
						<div>
							<small>{customer.group_name}</small>
						</div>
					</div>

					<div className={style.summaryRow + ' row'}>
						<div className="col-xs-5">
							<span>{messages.email}</span>
						</div>
						<div className="col-xs-7">
							<a href={'MailTo:' + customer.email} className={style.link}>
								{customer.email}
							</a>
						</div>
					</div>

					<div className={style.summaryRow + ' row'}>
						<div className="col-xs-5">
							<span>{messages.mobile}</span>
						</div>
						<div className="col-xs-7">{customer.mobile}</div>
					</div>

					<div className={style.summaryRow + ' row'}>
						<div className="col-xs-5">
							<span>{messages.customers_totalSpent}</span>
						</div>
						<div className="col-xs-7">{totalSpent}</div>
					</div>

					<div className={style.summaryRow + ' row'}>
						<div className="col-xs-5">
							<span>{messages.note}</span>
						</div>
						<div className="col-xs-7">{customer.note}</div>
					</div>

					<div style={{ marginTop: 20 }}>
						<Button variant="contained"
							label="Edit"
							style={{ marginRight: 15 }}
							onClick={this.showSummaryEdit}
						/>
					</div>

					<Dialog
						title={messages.customers_titleEdit}
						modal={false}
						open={this.state.openSummaryEdit}
						onRequestClose={this.hideSummaryEdit}
						contentStyle={{ width: 600 }}
					>
						<SummaryForm
							initialValues={customer}
							onCancel={this.hideSummaryEdit}
							onSubmit={this.saveSummaryEdit}
						/>
					</Dialog>
				</div>
			</Paper>
		);
	}
}
