import React, { ReactElement, ReactNode } from 'react'

export interface IProps {
    title : string
    useDefaultClass?: boolean
    className?: string
    children?: any[] | ReactElement<any, any> | ReactNode | ReactNode[]
}

const mainStyle : string = 'relative top-10 align-middle text-center bg-clip-text bg-gradient-to-br from-gray-400 to-green-300'
const nameStyle : string = `${mainStyle} font-bold text-transparent`

const Middle = (props : IProps) => {
  return (
    <span>
        <h1 className={nameStyle + ` table w-full pb-5 ` + props.className}>{props.title}</h1>
        {props.children}
    </span>
  )
}

export default Middle