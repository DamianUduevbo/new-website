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
  link? : string
  private? : boolean
}

export const GridTile = (props: IGridTileProps) => {
  const children : any = []

  props.bubbleTags?.forEach(v => {
    children.push(
      <button className='box-content shadow-sm shadow-black h-8 px-2 border text-base border-white rounded-lg group-hover/g1:bg-white group-hover/g1:border-black group-hover/g1:bg-opacity-0 group-hover/g1:text-black '>
        {v}
      </button>
    )})
  
  return (
    <div className={`relative group/g1 p-3 rounded-lg h-full  border border-white bg-white bg-opacity-10
          hover:rounded hover:border-black hover:text-black hover:bg-white hover:bg-opacity-90 hover:scale-105 ease-in-out duration-300 `}>
      {props.title} (<>{props.year}</>)
      <p className='mt-1 mb-5'>{props.children}</p>

      <div className='bottom-0'>

      <a className='py-1 shadow-sm bg-white bg-opacity-10 shadow-black box-content h-7 px-2 text-sm rounded-lg 
      group-hover/g1:bg-slate-500 group-hover/g1:bg-gradient-to-t group-hover/g1:from-slate-800 group-hover/g1:text-white 
      group-hover/g1:hover:bg-slate-600' href={props.link}>
        { props.private === true ? 'Private Project' : 'View on GitHub'}
      </a>
      <div className='relative mt-8 space-x-2 text-center space-y-2'>
        {children}
      </div>

      </div>
    </div>
  )
}

export default Grid