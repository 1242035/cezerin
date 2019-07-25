import React from 'react';
import { Link } from 'react-router-dom';
import messages from 'lib/text';

import Icon from '@material-ui/core/Icon';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';

const WebStoreMenu = () => {
	return (
		<Menu
			iconButtonElement={
				<IconButton touch={true}>
					<Icon color="#fff" className="material-icons">
						more_vert
					</Icon>
				</IconButton>
			}
			targetOrigin={{ horizontal: 'right', vertical: 'top' }}
			anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
		>
			<MenuItem
				containerElement={<Link to="/admin/apps/account" />}
				primaryText={messages.account}
			/>
		</Menu>
	);
};

export default WebStoreMenu;
