import React, { memo } from "react"

const Banner = () => {
  return (
    <div className="w-full">
      <img
        src="https://kuongngan.com/wp-content/uploads/2024/01/Fl5DEjjKFPzsWfKRcAIh-scaled.webp"
        alt="banner"
        className="md:h-[400px] w-full md:object-cover object-contain"
      />
    </div>
  )
}

export default memo(Banner)
