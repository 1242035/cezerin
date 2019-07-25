import React from 'react';

import messages from 'lib/text';
import style from './style.css';
import DynamicEditControl from './dynamicEditControl';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';

const ArrayEditor = ({
	label,
	properties,
	fields,
	meta: { touched, error, submitFailed }
}) => {
	return (
		<div>
			<div className={style.arrayTitle}>
				{label}
				<Fab
					mini={true}
					secondary={true}
					onClick={() => fields.push({})}
					style={{ marginLeft: '20px' }}
				>
					<Icon className="material-icons">add</Icon>
				</Fab>
			</div>

			<ol style={{ listStyle: 'none' }}>
				{fields.map((field, index) => (
					<li key={index}>
						<Paper
							style={{ margin: '20px 0 20px 20px', backgroundColor: '#f7f7f7' }}
							zDepth={1}
						>
							<div className={style.arrayItemHead}>
								<Button
									label={messages.actions_delete}
									secondary={true}
									onClick={() => fields.remove(index)}
								/>

								{index > 0 && (
									<Button
										label={messages.actions_moveUp}
										onClick={() => fields.move(index, index - 1)}
									/>
								)}

								{index + 1 < fields.length && (
									<Button
										label={messages.actions_moveDown}
										onClick={() => fields.move(index, index + 1)}
									/>
								)}
							</div>

							<div className={style.arrayInnerBox}>
								{properties.map((property, propertyIndex) => {
									const fieldName = `${field}.${property.key}`;
									return (
										<DynamicEditControl
											key={propertyIndex}
											type={property.type}
											fieldName={fieldName}
											label={property.label}
											options={property.options}
											properties={property.properties}
										/>
									);
								})}
							</div>
						</Paper>
					</li>
				))}
			</ol>
		</div>
	);
};

export default ArrayEditor;
