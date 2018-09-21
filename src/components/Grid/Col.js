import React from 'react'

export const Col = ({sm,md,lg,children}) => {
  return (
  <div className={`col s${sm?sm:'12'} m${md?md:''} ${lg?lg:''}`}>{children}</div>
)};