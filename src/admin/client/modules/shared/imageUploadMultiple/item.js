import React from 'react';
import messages from 'lib/text';
import style from './style.css';

import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

const GalleryItem = ({ url, alt, id, onDelete, onImageEdit }) => (
	<Paper zDepth={1} rounded={false}>
		<div className={style.preview}>
			<img src={url} title={alt} />
		</div>
		<div className={style.footer}>
			<IconButton
				touch={true}
				tooltip={messages.edit}
				tooltipPosition="top-right"
				onClick={onImageEdit}
			>
				<Icon color="rgba(0,0,0,0.5)" className="material-icons">
					create
				</Icon>
			</IconButton>
			<IconButton
				touch={true}
				tooltip={messages.actions_delete}
				tooltipPosition="top-right"
				onClick={() => {
					onDelete(id);
				}}
			>
				<Icon color="rgba(0,0,0,0.5)" className="material-icons">
					delete
				</Icon>
			</IconButton>
		</div>
	</Paper>
);

export default GalleryItem;
