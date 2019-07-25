import React from 'react';
import { Link } from 'react-router-dom';
import messages from 'lib/text';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

const Buttons = () => (
	<span>
		<Link to="/admin/pages/add">
			<IconButton
				touch={true}
				tooltipPosition="bottom-left"
				tooltip={messages.settings_addPage}
			>
				<Icon color="#fff" className="material-icons">
					add
				</Icon>
			</IconButton>
		</Link>
	</span>
);

export default Buttons;
