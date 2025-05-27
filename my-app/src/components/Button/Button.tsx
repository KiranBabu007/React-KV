import './Button.css'
const Button = ({ variant, children,onClick } : { variant: string, children: React.ReactNode,onClick?:()=>void }) => {
  return (
    <div className={`btn btn-${variant}`} onClick={onClick}>{children}</div>
  )
}

export default Button