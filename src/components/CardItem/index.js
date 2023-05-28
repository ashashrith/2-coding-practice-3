// Write your code here.
import './index.css'

const UserProfile = props => {
  const {userDetails, id} = props
  const {title, description, imgUrl, className} = userDetails

  return (
    <l1 className={className}>
      <h1 className="head">{title}</h1>
      <p className="p">{description}</p>
      <div className="cont">
        <img src={imgUrl} className="img" alt={title} />
      </div>
    </l1>
  )
}

export default UserProfile
