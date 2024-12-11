import { Star } from 'lucide-react'

function StarRating() {
  return (
    <div>
         <div className="flex items-center gap-0 ">
              <div className="star-container">
                <Star size={14} color="#FFC416" />
              </div>
              <div className="star-container">
                <Star size={14} color="#FFC416" />
              </div>
              <div className="star-container">
                <Star size={14} color="#FFC416" />
              </div>
              <div className="star-container">
                <Star size={14} color="#FFC416" />
              </div>
              <div className="star-container">
                <Star size={14} color="#FFC416" />
              </div>
              <span className="text-[#151875] text-[14px] font-josefin leading-[29px]">
                (22)
              </span>
        </div>
    </div>
  )
}

export default StarRating