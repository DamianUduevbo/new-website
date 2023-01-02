import React, { ReactElement, ReactNode } from 'react'

export interface IProps {
  rows: string
  columns: string
  spacing?: string
  useDefaultClass?: boolean
  className?: string | undefined
  children?: any | any[] | ReactElement<any, any> | ReactNode | ReactNode[] | (() => JSX.Element[]) | undefined
}

/*
export interface IGridProps extends IProps {
  rows : string
  columns : string
  spacing? : string
}

export interface IGridTileProps extends IProps {
  rows : string
  columns : string
  spacing? : string
}

${props.spacing !== undefined ? props.spacing : '4'}`}
*/

const Grid = (props: IProps) => {
  //const cn = `relative text-center h-2/5 grid grid-rows-${props.rows} grid-cols-${props.columns} grid-flow-col gap-4`
  // `${props.className} grid grid-rows-${props.rows} grid-cols-${props.columns} grid-flow-col gap-4`

  return (
    <div className={props.className}>
      {props.children}
    </div>
  )
}

export interface IGridTileProps {
  title : string
  year? : string
  className? : string
  children : string
  bubbleTags? : string[]
}

export const GridTile = (props: IGridTileProps) => {
  const children : any = []

  props.bubbleTags?.forEach(v => {
    children.push(
      <button className='box-content px-2 border border-white rounded-lg group-hover/g1:bg-white group-hover/g1:border-black group-hover/g1:bg-opacity-0 group-hover/g1:text-black '>
        {v}
      </button>
    )})
  
  return (
    <div className={`group/g1 p-3 rounded-lg h-full  border border-white bg-white bg-opacity-10
          hover:rounded hover:border-black hover:text-black hover:bg-white hover:bg-opacity-90 hover:scale-105 ease-in-out duration-300 `}>
      {props.title} (<text>{props.year}</text>)
      <p>{props.children}</p>
      
      <div className='mt-10 space-x-2 text-center space-y-2 '>
        {children}
      </div>
    </div>
  )
}

export default Grid