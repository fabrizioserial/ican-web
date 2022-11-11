import React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './common/theme';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
// import { PersistGate } from "redux-persist/integration/react";
// import { sessionrkt } from ".//Session/sessionApi";
// import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
Sentry.init({
	dsn: 'https://bef9381320164f39849df689e6a97556@o4504134728220672.ingest.sentry.io/4504134745522177',
	integrations: [new BrowserTracing()],

	// Set tracesSampleRate to 1.0 to capture 100%
	// of transactions for performance monitoring.
	// We recommend adjusting this value in production
	tracesSampleRate: 1.0,
});

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<Provider store={store}>
			{/* <ApiProvider api={sessionrkt}> */}
			{/* <PersistGate persistor={persistor}> */}
			<App />
			{/* </PersistGate> */}
			{/* </ApiProvider> */}
		</Provider>
	</ThemeProvider>,
	document.getElementById('root'),
);

reportWebVitals(); // TODO utility?
