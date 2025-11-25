/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import { useRouteError, Link } from 'react-router-dom'

export function ErrorPage() {
  const error: any = useRouteError()

  return (
    <div className="error-page">
      <h1>Oops! Something went wrong.</h1>
      <p>{error.statusText || error.message}</p>
      <Link to="/">Go back to homepage</Link>
    </div>
  )
}

/* eslint-enable @typescript-eslint/no-explicit-any */
