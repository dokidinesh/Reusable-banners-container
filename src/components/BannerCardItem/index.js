// Write your code here.
import './index.css'

const BannerCard = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <div className={`banner-card-container ${className}`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button type="button" className="button">
          Show More
        </button>
      </div>
    </div>
  )
}
export default BannerCard
