import React, { ReactElement, ReactNode } from 'react'

export interface IProps {
    rows : string
    columns : string
    spacing? : string 
    useDefaultClass?: boolean
    className?: string
    children?: any[] | ReactElement<any, any> | ReactNode | ReactNode[]
}

const Grid = (props : IProps) => {
  return (
    <div className={`${props.className} grid grid-rows-${props.rows} grid-cols-${props.columns} grid-flow-col gap-${props.spacing !== undefined ? props.spacing : '4'}`}>
        {props.children}
    </div>
  )
}

export default Grid