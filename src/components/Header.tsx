import { ReactElement } from "react"

export interface IProps {
    title : string
    className?: string
    children?: any[] | ReactElement<any, any>
}

const Header = (props : IProps) => {
  return (
    <header className={props.className}>
      <button className='font-sans align-middle '>{props.title}</button>
      <button className='font-mono align-middle absolute left-48'>Mid-Left Button</button>
      <button className='font-bold align-middle absolute font-thin right-5'>Right Button</button>
      <button className='font-bold align-middle absolute right-48'>Right Button</button>
      {props.children}
    </header>
  )
}

export default Header
