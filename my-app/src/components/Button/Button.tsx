import './Button.css'
const Button = ({ variant, children } : { variant: string, children: React.ReactNode }) => {
  return (
    <div className={`btn btn-${variant}`}>{children}</div>
  )
}

export default Button