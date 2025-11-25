import React from 'react'
import { useMatches } from 'react-router-dom'
import { BreadcrumbHandle } from './IBreadcrumb.ts'

export const Breadcrumbs: React.FC = () => {
  const matches = useMatches()

  const crumbs = matches.flatMap((match) => {
    const handle = match.handle as BreadcrumbHandle

    if (handle?.crumb && typeof handle.crumb === 'function') {
      const result = handle.crumb(match.data)

      if (Array.isArray(result)) {
        return result.map((crumbFn) => (typeof crumbFn === 'function' ? crumbFn() : crumbFn))
      }

      return [result]
    }

    return []
  })

  return (
    <nav className="breadcrumbs">
      {crumbs.map((crumb, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span className="breadcrumb-separator">/</span>}
          {crumb}
        </React.Fragment>
      ))}
    </nav>
  )
}
