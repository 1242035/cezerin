import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField, SelectField } from 'redux-form-material-ui';

import messages from 'lib/text';
import style from './style.css';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

class EmailSettings extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.onLoad();
	}

	render() {
		let { handleSubmit, pristine, submitting, initialValues } = this.props;

		return (
			<form
				onSubmit={handleSubmit}
				style={{
					display: 'initial',
					width: '100%'
				}}
			>
				<Paper className="paper-box" zDepth={1}>
					<div className={style.innerBox}>
						<div>
							<Field
								component={TextField}
								fullWidth={true}
								name="host"
								hintText="smtp.server.com"
								floatingLabelText={messages.settings_smtpHost}
							/>
						</div>
						<div>
							<Field
								component={TextField}
								fullWidth={true}
								name="port"
								type="number"
								hintText="465"
								floatingLabelText={messages.settings_smtpPort}
							/>
						</div>
						<div>
							<Field
								component={TextField}
								fullWidth={true}
								name="user"
								floatingLabelText={messages.settings_smtpUser}
							/>
						</div>
						<div>
							<Field
								component={TextField}
								fullWidth={true}
								name="pass"
								type="password"
								floatingLabelText={messages.settings_smtpPass}
							/>
						</div>
						<div>
							<Field
								component={TextField}
								fullWidth={true}
								name="from_name"
								floatingLabelText={messages.settings_emailFromName}
							/>
						</div>
						<div>
							<Field
								component={TextField}
								fullWidth={true}
								name="from_address"
								type="email"
								floatingLabelText={messages.settings_emailFromAddress}
							/>
						</div>
					</div>
					<div className="buttons-box">
						<Button
							variant="contained"
							type="submit"
							label={messages.save}
							primary={true}
							className={style.button}
							disabled={pristine || submitting}
						/>
					</div>
				</Paper>
			</form>
		);
	}
}

export default reduxForm({
	form: 'EmailSettingsForm',
	enableReinitialize: false
})(EmailSettings);
