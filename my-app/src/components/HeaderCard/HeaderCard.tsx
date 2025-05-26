
import "./HeaderCard.css"

const HeaderCard = ({title}:{title:string}) => {
  return (
    <div className="header">
        <h2>{title}</h2>
    </div>
  )
}

export default HeaderCard