import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import messages from 'lib/text';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Icon from '@material-ui/core/Icon';

import General from 'modules/settings/general';
import GeneralLogo from 'modules/settings/generalLogo';
import Theme from 'modules/settings/theme';
import Shipping from 'modules/settings/shipping';
import ShippingEdit from 'modules/settings/shippingEdit';
import Payments from 'modules/settings/payments';
import PaymentsEdit from 'modules/settings/paymentsEdit';
import Tokens from 'modules/settings/tokens/list';
import TokensEdit from 'modules/settings/tokens/edit';
import Email from 'modules/settings/email';
import Smtp from 'modules/settings/smtp';
import EmailTemplate from 'modules/settings/emailTemplates';
import Checkout from 'modules/settings/checkout';
import CheckoutFields from 'modules/settings/checkoutFields';
import Webhooks from 'modules/settings/webhooks/list';
import WebhooksEdit from 'modules/settings/webhooks/edit';

const styles = {
	link: {
		color: 'inherit',
		textDecoration: 'none',
		fontWeight: 'inherit',
		display: 'block'
	},
	linkActive: {
		backgroundColor: 'rgba(0,0,0,0.1)'
	}
};

const SettingsMenu = () => (
	<List>
		<NavLink
			style={styles.link}
			activeStyle={styles.linkActive}
			to="/admin/settings"
			exact={true}
		>
			<ListItem
				primaryText={messages.settings_general}
				leftIcon={<Icon className="material-icons">settings</Icon>}
			/>
		</NavLink>
		<NavLink
			style={styles.link}
			activeStyle={styles.linkActive}
			to="/admin/settings/shipping"
		>
			<ListItem
				primaryText={messages.settings_shipping}
				leftIcon={<Icon className="material-icons">local_shipping</Icon>}
			/>
		</NavLink>
		<NavLink
			style={styles.link}
			activeStyle={styles.linkActive}
			to="/admin/settings/payments"
		>
			<ListItem
				primaryText={messages.settings_payments}
				leftIcon={<Icon className="material-icons">payment</Icon>}
			/>
		</NavLink>
		<NavLink
			style={styles.link}
			activeStyle={styles.linkActive}
			to="/admin/settings/theme"
		>
			<ListItem
				primaryText={messages.settings_theme}
				leftIcon={<Icon className="material-icons">palette</Icon>}
			/>
		</NavLink>
		<NavLink
			style={styles.link}
			activeStyle={styles.linkActive}
			to="/admin/settings/checkout"
		>
			<ListItem
				primaryText={messages.settings_checkout}
				leftIcon={<Icon className="material-icons">shopping_cart</Icon>}
			/>
		</NavLink>
		<NavLink
			style={styles.link}
			activeStyle={styles.linkActive}
			to="/admin/settings/email"
		>
			<ListItem
				primaryText={messages.settings_emails}
				leftIcon={<Icon className="material-icons">email</Icon>}
			/>
		</NavLink>
		<NavLink
			style={styles.link}
			activeStyle={styles.linkActive}
			to="/admin/settings/webhooks"
		>
			<ListItem
				primaryText={messages.webhooks}
				leftIcon={<Icon className="material-icons">http</Icon>}
			/>
		</NavLink>
		<NavLink
			style={styles.link}
			activeStyle={styles.linkActive}
			to="/admin/settings/tokens"
		>
			<ListItem
				primaryText={messages.settings_tokens}
				leftIcon={<Icon className="material-icons">vpn_key</Icon>}
			/>
		</NavLink>
		{/* <NavLink style={styles.link} activeStyle={styles.linkActive} to="/admin/settings/taxes"><ListItem primaryText={messages.settings_taxes} leftIcon={<Icon className="material-icons">attach_money</Icon>}/></NavLink>
    <NavLink style={styles.link} activeStyle={styles.linkActive} to="/admin/settings/security"><ListItem primaryText={messages.settings_security} leftIcon={<Icon className="material-icons">security</Icon>}/></NavLink> */}
	</List>
);

const Settings = ({ match }) => {
	return (
		<div className="row row--no-gutter col-full-height">
			<div className="col-xs-12 col-sm-4 col-md-3 col--no-gutter scroll col-full-height">
				<SettingsMenu />
			</div>
			<div className="col-xs-12 col-sm-8 col-md-9 col--no-gutter scroll col-full-height">
				<Switch>
					<Route path="/admin/settings" exact component={General} />
					<Route path="/admin/settings/general/logo" component={GeneralLogo} />
					<Route path="/admin/settings/theme" component={Theme} />
					<Route path="/admin/settings/shipping" exact component={Shipping} />
					<Route
						path="/admin/settings/shipping/add"
						exact
						component={ShippingEdit}
					/>
					<Route
						path="/admin/settings/shipping/:methodId"
						component={ShippingEdit}
					/>
					<Route path="/admin/settings/payments" exact component={Payments} />
					<Route
						path="/admin/settings/payments/add"
						exact
						component={PaymentsEdit}
					/>
					<Route
						path="/admin/settings/payments/:methodId"
						component={PaymentsEdit}
					/>
					<Route path="/admin/settings/tokens" exact component={Tokens} />
					<Route
						path="/admin/settings/tokens/add"
						exact
						component={TokensEdit}
					/>
					<Route
						path="/admin/settings/tokens/:tokenId"
						component={TokensEdit}
					/>
					<Route path="/admin/settings/email" exact component={Email} />
					<Route path="/admin/settings/email/smtp" component={Smtp} />
					<Route
						path="/admin/settings/email/templates/:templateName"
						component={EmailTemplate}
					/>
					<Route path="/admin/settings/checkout" exact component={Checkout} />
					<Route
						path="/admin/settings/checkout/fields/:fieldName"
						component={CheckoutFields}
					/>
					<Route path="/admin/settings/webhooks" exact component={Webhooks} />
					<Route
						path="/admin/settings/webhooks/add"
						exact
						component={WebhooksEdit}
					/>
					<Route
						path="/admin/settings/webhooks/:webhookId"
						component={WebhooksEdit}
					/>
				</Switch>
			</div>
		</div>
	);
};

export default Settings;
