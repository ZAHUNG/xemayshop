import React, { memo } from "react"


const Footer = () => {
  return (
    <div className="w-full ">
      <div className="h-[103px] w-full bg-main flex items-center py-4 justify-center text-black">
        <div className="w-main flex items-center flex-col lg:flex-row justify-center lg:justify-between">
        <h3 className="mb-[20px] mt-8 text-[30px] font-medium border-l-2 border-main pl-center">
              ABOUT US
        </h3>
          
        </div>
      </div>
      <div className="lg:h-full w-full bg-gray-500 flex items-center justify-center text-black text-[13px]">
        <div className="lg:w-main flex lg:flex-grow-0 flex-col">
          <div className="flex-2 flex flex-col gap-2">    
            <span>
              <span>Address: Cộng Hòa, Tân Bình, TPHCM </span>
              
            </span>
            <span>
              <span>Phone: </span>
              <span>(+84)0123456789</span>
            </span>
            <span>
              <span>Mail: </span>
              <span>cuahangxemaydientu@gmail.com</span>
            </span>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <h3 className="mb-[20px] mt-8 text-[15px] font-medium border-l-2 border-main pl-[15px]">
              INFORMATION
            </h3>
            <span>Typography</span>
            <span>Gallery</span>
            <span>Store Location</span>
            <span>Today's Deals</span>
            <span>Contacts</span>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <h3 className="mb-[20px] mt-8 text-[15px] font-medium border-l-2 border-main pl-[15px]">
              WHO WE ARE
            </h3>
            <span>Help</span>
            <span>Free Shipping</span>
            <span>FAQs</span>
            <span>Return & Exchange</span>
            <span>Testimonials</span>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default memo(Footer)
