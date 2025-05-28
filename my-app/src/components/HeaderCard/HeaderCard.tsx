
import "./HeaderCard.css"

const HeaderCard = ({title,endAdornment}:{title:string,endAdornment?: React.ReactNode;}) => {
  return (
    <div className="header">
        <h2>{title}</h2>
        {endAdornment ? endAdornment : null}

    </div>
  )
}

export default HeaderCard