import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { TextField } from 'redux-form-material-ui';

import { CustomToggle } from 'modules/shared/form';
import messages from 'lib/text';
import style from './style.css';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const DeveloperForm = ({
	handleSubmit,
	pristine,
	submitting,
	initialValues
}) => {
	return (
		<div style={{ maxWidth: 720, width: '100%' }}>
			<div className="gray-title" style={{ margin: '15px 0 15px 20px' }}>
				{messages.developerProfile}
			</div>
			<form
				onSubmit={handleSubmit}
				style={{
					display: 'initial',
					width: '100%'
				}}
			>
				<Paper style={{ margin: '0px 20px' }} zDepth={1}>
					<div style={{ padding: '10px 30px 30px 30px' }}>
						<div>
							<Field
								component={TextField}
								fullWidth={true}
								name="name"
								floatingLabelText={messages.fullName}
							/>
						</div>
						<div>
							<Field
								component={TextField}
								fullWidth={true}
								name="description"
								floatingLabelText={messages.description}
								multiLine={true}
								rows={1}
							/>
						</div>
						<div>
							<Field
								component={TextField}
								fullWidth={true}
								name="website"
								floatingLabelText={messages.website}
							/>
						</div>
						<div>
							<Field
								component={TextField}
								fullWidth={true}
								name="email"
								floatingLabelText={messages.email}
							/>
						</div>
					</div>
					<div
						className="buttons-box"
						style={{ display: pristine ? 'none' : 'block' }}
					>
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
		</div>
	);
};

export default reduxForm({
	form: 'WebStoreDeveloperForm',
	enableReinitialize: true
})(DeveloperForm);
