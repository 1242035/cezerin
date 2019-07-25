import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Head from 'modules/head';
import Login from 'routes/login';
import Logout from 'routes/logout';
import Home from 'routes/home';
import NotFound from 'routes/notFound';
import Products from 'routes/products';
import ProductDetails from 'routes/products/edit';
import ProductCategories from 'routes/products/categories';
import Customers from 'routes/customers';
import CustomerDetails from 'routes/customers/edit';
import CustomerGroups from 'routes/customers/groups';
import Orders from 'routes/orders';
import OrderDetails from 'routes/orders/edit';
import OrderStatuses from 'routes/orders/statuses';
import Pages from 'routes/pages';
import PagesDetails from 'routes/pages/edit';
import Settings from 'routes/settings';
import Apps from 'routes/apps';
import Files from 'routes/files';

import blue from '@material-ui/core/colors/blue';
import cyan from '@material-ui/core/colors/cyan';
import grey from '@material-ui/core/colors/grey';
import pink from '@material-ui/core/colors/pink';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const muiTheme = createMuiTheme({
	fontFamily: 'Roboto, sans-serif',
	palette: {
		primary1Color: blue[700],
		primary2Color: cyan[700],
		primary3Color: grey[400],
		accent1Color: pink['A200'],
		accent2Color: grey[100],
		accent3Color: blue[700],
		textColor: '#000',
		alternateTextColor: '#fff',
		canvasColor: '#fff',
		borderColor: grey[300],
		pickerHeaderColor: blue700,
		shadowColor: '#000'
	},
	appBar: {}
});

export default () => (
	<Router>
		<MuiThemeProvider muiTheme={muiTheme}>
			<div id="container">
				<div id="headContainer">
					<Head />
				</div>
				<div id="bodyContainer">
					<Switch>
						<Route path="/admin/" exact component={Home} />
						<Route path="/admin/login" component={Login} />
						<Route path="/admin/logout" component={Logout} />
						<Route path="/admin/products" exact component={Products} />
						<Route
							path="/admin/products/categories"
							exact
							component={ProductCategories}
						/>
						<Route path="/admin/orders" exact component={Orders} />
						<Route
							path="/admin/orders/statuses"
							exact
							component={OrderStatuses}
						/>
						<Route
							path="/admin/order/:orderId"
							exact
							component={OrderDetails}
						/>
						<Route path="/admin/customers" exact component={Customers} />
						<Route
							path="/admin/customers/groups"
							exact
							component={CustomerGroups}
						/>
						<Route
							path="/admin/customer/:customerId"
							exact
							component={CustomerDetails}
						/>
						<Route
							path="/admin/product/:productId"
							component={ProductDetails}
						/>
						<Route path="/admin/pages" exact component={Pages} />
						<Route path="/admin/pages/add" exact component={PagesDetails} />
						<Route path="/admin/pages/:pageId" component={PagesDetails} />
						<Route path="/admin/settings" component={Settings} />
						<Route path="/admin/apps" component={Apps} />
						<Route path="/admin/files" exact component={Files} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</div>
		</MuiThemeProvider>
	</Router>
);
