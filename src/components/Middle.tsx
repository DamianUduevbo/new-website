import React, { ReactElement, ReactNode } from 'react'

export interface IProps {
    title : string
    useDefaultClass?: boolean
    className?: string
    children?: any[] | ReactElement<any, any> | ReactNode | ReactNode[]
}

const mainStyle : string = 'relative top-10 align-middle text-center w-1/2 left-1/4 text-xl'
const nameStyle : string = `${mainStyle} font-bold text-7xl text-transparent bg-clip-text bg-gradient-to-br from-gray-400 to-green-300`

const Middle = (props : IProps) => {
  return (
    <div>
        <div className={nameStyle}>{props.title}</div>
        <br></br>
        
        {props.children}
    </div>
  )
}

export default Middle