# Node.js Application with Morgan, Winston, and Datadog Logging

This application demonstrates structured logging of HTTP requests to the console and Datadog using Morgan and Winston in ExpressJs.

## Configuration

The application expects the following environment variables to be set:

```
DD_API_KEY=
DD_SERVICE=nodejs-morgan-datadog-logger

DD_AGENT_HOST=my-dd-agent.example.com
DD_TRACE_AGENT_HOSTNAME=my-dd-agent.example.com

DD_LOGS_ENABLED=true
DD_LOGS_INJECTION=true
DD_APM_ENABLED=true

```

## Usage

```
npm install
npm start

```

The application will start on port 3000.

## Logging

The Morgan middleware is used to log HTTP requests in a structured JSON format. This is piped to a Winston logger that outputs to console and Datadog logs.

## Tracing

The application initializes the Datadog APM tracer. Distributed traces will be generated and sent to the configured Datadog agent.
