
import "./HeaderCard.css"

const HeaderCard = ({title}:{title:string}) => {
  return (
    <div className="header">
        {title}
    </div>
  )
}

export default HeaderCard