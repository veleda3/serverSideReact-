import React from 'react'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {renderRoutes} from 'react-router-config'
import Routes from '../client/components/Routes'


export default (req, store) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter context={{}} location={req.path}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    )
    return `
        <!doctype html>
        <html lang="en">
            <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.INITIAL_STATE = ${JSON.stringify(store.getState())}
                </script>
                <script src="bundle.js"></script>
            </body>
        </html>
    `
}