import React from 'react'

const About = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            Beliy StressWear
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            Chào mừng đến với Beliy Stress Wear - nơi kết nối phong cách và sự thư giãn! Beliy
            Stress Wear không chỉ là một thương hiệu thời trang, mà còn là một triết lý sống, một
            cách để bạn tạo ra cân bằng và giảm căng thẳng trong cuộc sống hiện đại. "Beliy" - từ
            tiếng Nga, nghĩa là "trắng" - biểu trưng cho sự trong sáng và tinh khiết. Chúng tôi tin
            rằng mỗi ngày, trong cuộc sống đầy áp lực, bạn cần một không gian yên tĩnh và thoải mái
            để giảm căng thẳng. Beliy Stress Wear mang đến cho bạn bộ sưu tập thời trang “trắng” -
            sự kết hợp hoàn hảo giữa phong cách và sự thư giãn. "Stress Wear" - Tại thương hiệu của
            chúng tôi, chúng tôi không chỉ tạo ra những sản phẩm đẹp mắt mà còn xây dựng một trải
            nghiệm mua sắm đáng nhớ. Chúng tôi hiểu rằng thời trang không chỉ là về việc mặc đẹp, mà
            còn là về cảm giác tự tin và thoải mái mỗi khi bạn diện lên mình những thiết kế của
            chúng tôi. Chúng tôi cam kết đem đến cho bạn những sản phẩm chất lượng tốt nhất từ chất
            liệu tỉ mỉ và sự khéo léo trong từng đường kim mũi chỉ. Mỗi bộ trang phục được thiết kế
            bởi những nhà thiết kế tài ba, kết hợp giữa xu hướng thời trang đương đại và sự sáng tạo
            độc đáo.
          </p>
        </div>
        <div className="w-full lg:w-4/12 ">
          <img className="w-full h-full" src="/logo_2.png" alt="A group of People" />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            Câu chuyện đặc biệt
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            Điều đặc biệt về thương hiệu của chúng tôi là sự đa dạng và linh hoạt trong phong cách.
            Từ những bộ trang phục thời trang hàng ngày đến những trang phục dành cho các sự kiện
            đặc biệt, chúng tôi có những lựa chọn phong phú để bạn tỏa sáng trong mọi dịp. Beliy
            Stress Wear không chỉ là về thời trang mà còn là về cách bạn quản lý căng thẳng và thể
            hiện cái tôi của mình. Chúng tôi tin rằng phong cách và sự thư giãn có thể hòa quyện với
            nhau, và Beliy Stress Wear là điểm đến để bạn tìm thấy sự cân bằng đó. Hãy đồng hành
            cùng Beliy Stress Wear và khám phá thế giới thời trang mang đến sự thư giãn và tự tin.
            Hãy chọn Beliy Stress Wear để thể hiện cái tôi của bạn trong sự thoải mái và phong cách
            tuyệt đẹp.
          </p>
        </div>
        <div className="w-full lg:w-8/12 lg:pt-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden rounded-lg h-36 w-36"
                src="/hb.png"
                alt="Alexa featured Img"
              />
              <img
                className="md:hidden block rounded-lg h-36 w-36"
                src="/hb.png"
                alt="Alexa featured Img"
              />
              <p className="font-medium text-sm leading-5 text-gray-800 mt-4">Quốc Huy</p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden h-36 w-36 object-cover rounded-lg"
                src="/nhat.png"
                alt="Olivia featured Img"
              />
              <img
                className="md:hidden block h-36 w-36 object-cover rounded-lg"
                src="/nhat.png"
                alt="Olivia featured Img"
              />
              <p className="font-medium text-sm leading-5 text-gray-800 mt-4">Hoàng Nhật</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
