// Write your code here.
import './index.css'
const BannerCardItem = props => {
  const {bannerDetails} = props

  const {className, paraText, heading} = bannerDetails
  return (
    <li className={`${className} banner-card-item`}>
      <div>
        <h1 className="heading">{heading}</h1>
        <p className="para">{paraText}</p>
        <button className="show-more-button" type="button">
          Show more
        </button>
      </div>
    </li>
  )
}
export default BannerCardItem
