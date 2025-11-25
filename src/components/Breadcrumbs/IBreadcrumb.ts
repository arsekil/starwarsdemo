import React from 'react'

/* eslint-disable @typescript-eslint/no-explicit-any */

export interface BreadcrumbHandle {
  crumb?:
    | ((data: any) => (() => React.ReactNode)[] | React.ReactNode[])
    | ((() => React.ReactNode)[] | React.ReactNode[])
}

/* eslint-enable @typescript-eslint/no-explicit-any */
