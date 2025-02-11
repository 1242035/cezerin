import React from 'react';

import messages from 'lib/text';
import style from './style.css';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';

const AppDescription = ({
	name,
	description,
	coverUrl,
	developer,
	enabled
}) => (
	<div style={{ maxWidth: 720, width: '100%' }}>
		<Paper className="paper-box" zDepth={1}>
			<div className={style.innerBox}>
				<div className="row">
					<div className="col-xs-4">
						<img src={coverUrl} alt={name} className={style.cover} />
					</div>
					<div className="col-xs-8">
						<h1 className={style.title}>{name}</h1>
						<div className={style.developer}>{developer}</div>
						{/* {!enabled &&
              <Button variant="contained" label={messages.enable} primary={true} disabled={loadingEnableDisable} onClick={enableService} />
            }
            {enabled &&
              <Button variant="contained" label={messages.disable} disabled={loadingEnableDisable} onClick={disableService} />
            } */}
					</div>
				</div>
				<div
					className={style.description}
					dangerouslySetInnerHTML={{ __html: description }}
				/>
			</div>
		</Paper>
	</div>
);

export default AppDescription;
