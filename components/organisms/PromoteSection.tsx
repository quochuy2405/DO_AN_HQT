export default function PromoteSection() {
  return (
    <div className="relative overflow-hidden bg-white pt-4">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="font text-4xl uppercase font-extrabold font-sans tracking-tight text-gray-900 sm:text-6xl">
              we are beliy
            </h1>
            <p className="my-2 text-lg  font-extrabold text-gray-900 uppercase">
              Thời trang dành cho người stress
            </p>
            <video height="240" loop autoPlay muted className="rounded-lg overflow-hidden w-full">
              <source src="/beliywear.mp4" type="video/mp4" className="h-11 w-full" />
            </video>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100  bg-[url('/JACKET1-2.png')] bg-cover bg-no-repeat"></div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg  bg-[url('/JACKET4-2.png')] bg-cover bg-no-repeat"></div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg  bg-[url('/JACKET2-2.png')] bg-cover bg-no-repeat"></div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg  bg-[url('/JACKET2-1.png')] bg-cover bg-no-repeat"></div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg  bg-[url('/JACKET3-1.png')] bg-cover bg-no-repeat"></div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg  bg-[url('/JACKET3-2.png')] bg-cover bg-no-repeat"></div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg  bg-[url('/JACKET4-1.png')] bg-cover bg-no-repeat"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
