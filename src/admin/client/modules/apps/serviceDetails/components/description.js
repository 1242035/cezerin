import React from 'react';
import { Link } from 'react-router-dom';

import messages from 'lib/text';
import style from './style.css';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';

const ServiceDescription = ({
	service,
	loadingEnableDisable,
	enableService,
	disableService
}) => {
	if (service) {
		return (
			<div style={{ maxWidth: 720, width: '100%' }}>
				<Paper className="paper-box" zDepth={1}>
					<div className={style.innerBox}>
						<div className="row">
							<div className="col-xs-4">
								<img
									src={service.cover_url}
									alt={service.name}
									className={style.cover}
								/>
							</div>
							<div className="col-xs-8">
								<h1 className={style.title}>{service.name}</h1>
								<div className={style.developer}>{service.developer.name}</div>
								{!service.enabled && (
									<Button
										variant="contained"
										label={messages.enable}
										primary={true}
										disabled={loadingEnableDisable}
										onClick={enableService}
									/>
								)}
								{service.enabled && (
									<Button
										variant="contained"
										label={messages.disable}
										disabled={loadingEnableDisable}
										onClick={disableService}
									/>
								)}
							</div>
						</div>
						<div
							className={style.description}
							dangerouslySetInnerHTML={{ __html: service.description }}
						/>
					</div>
				</Paper>
			</div>
		);
	} else {
		return null;
	}
};

export default ServiceDescription;
