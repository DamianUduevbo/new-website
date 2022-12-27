
export interface IProps {
    title : string
}

const Header = (props : IProps) => {
  return (
    <header>
        <h1>{props.title}</h1>
    </header>
  )
}

export default Header
