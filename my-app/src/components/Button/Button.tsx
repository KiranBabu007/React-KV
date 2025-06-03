import './Button.css'
const Button = ({ variant, children,onClick,disabled } : { variant: string, children: React.ReactNode,onClick?:()=>void ,disabled?:boolean }) => {
  return (
    <button type='submit' disabled={disabled} className={`btn btn-${variant}`} onClick={onClick}>{children}</button>
  )
}

export default Button