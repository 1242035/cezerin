import React from 'react';
import { Link } from 'react-router-dom';
import messages from 'lib/text';
import style from './style.css';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Icon from '@material-ui/core/Icon';

const styles = {
	card: {
		width: 280,
		marginBottom: 15,
		marginRight: 15
	},
	textContainer: {
		paddingBottom: 0
	},
	title: {
		color: '#212121',
		fontSize: '15px',
		lineHeight: '18px',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap'
	},
	subtitle: {
		color: '#616161',
		fontSize: '13px',
		lineHeight: '16px',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		marginTop: 5
	},
	link: {
		textDecoration: 'none'
	}
};

const Item = ({ path, coverUrl, title, developer, enabled }) => {
	return (
		<Link to={path} style={styles.link}>
			<Card
				style={styles.card}
				containerStyle={styles.textContainer}
				className={style.card}
			>
				<CardMedia
					className={style.servicesCover}
					style={{ backgroundImage: `url(${coverUrl})` }}
				/>
				<CardHeader
					title={title}
					subtitle={
						<div>
							{developer}
							{enabled && (
								<Icon
									style={{ color: '#FF9900', float: 'right' }}
									className="material-icons"
								>
									check_circle
								</Icon>
							)}
						</div>
					}
					titleStyle={styles.title}
					subtitleStyle={styles.subtitle}
				/>
			</Card>
		</Link>
	);
};

export default Item;
