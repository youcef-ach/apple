import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://85b5dfd4d6e37065c75691e3c55c3493@o4507918872936448.ingest.de.sentry.io/4507918883487824",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.metrics.metricsAggregatorIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration(
      {
        useEffect: React.useEffect 
      }
    ),
    Sentry.replayIntegration(),
  ],

  tracesSampleRate: 1.0, 

  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],

  replaysSessionSampleRate: 0.1, 

  replaysOnErrorSampleRate: 1.0, 

});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)