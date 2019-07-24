import React from 'react';
import { Link } from 'react-router-dom';
import messages from 'lib/text';

import FontIcon from '@material-ui/core/FontIcon';
import IconMenu from '@material-ui/core/IconMenu';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';

const WebStoreMenu = () => {
	return (
		<IconMenu
			iconButtonElement={
				<IconButton touch={true}>
					<FontIcon color="#fff" className="material-icons">
						more_vert
					</FontIcon>
				</IconButton>
			}
			targetOrigin={{ horizontal: 'right', vertical: 'top' }}
			anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
		>
			<MenuItem
				containerElement={<Link to="/admin/apps/account" />}
				primaryText={messages.account}
			/>
		</IconMenu>
	);
};

export default WebStoreMenu;
