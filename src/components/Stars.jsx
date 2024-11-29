export default function Stars({movieScore}) {
  
  const score = Math.floor(Number(movieScore / 2))        
  const stars = Array(score).fill('bi-star-fill')
  const noFillStars = Array(5 - score).fill('bi-star')
  

  return (
    <>
      <div className="score">
        {stars.map(star => <i className={`bi ${star} text-warning`}></i>)} {/* for filled stars */}
        {noFillStars.map(star => <i className={`bi ${star} text-warning`}></i>)} {/* for non filled stars */}
      </div>
    </>
  )

}