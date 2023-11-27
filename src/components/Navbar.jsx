import { useState } from "react"
const Navbar = () => {
  let [open, setopen] = useState(false)
  const menus = [

    { name: "Home" },
    { name: "About" },
    { name: "Our Service" },
    { name: "Contact Us" },
    { name: "Online admisson" },
    { name: "Course" },
  ]
  return (
    <div>
      <nav className="container mx-auto flex items-center justify-between ">
        <img src={open ? "https://icon-library.com/images/svg-close-icon/svg-close-icon-13.jpg" : "https://www.logolynx.com/images/logolynx/06/06fee1bb83691b548d7aa0c4b7fa1258.jpeg"} className="md:hidden  fixed right-5 cursor-pointer h-4 z-20 top-6" onClick={() => setopen(!open)} />
        <div className="px-5">
          <img className="h-[100px] w-[100px] msm:h-14 msm:w-25" src="image/g.jpg" alt="" />
          {/* <h1 className="text-3xl  text-green-900">Imagine InfoTech</h1> */}
        </div>

        <ul className={` backdrop-blur-md msm:bg-blue-gray-200 md:static fixed duration-500 ease-linear top-0 md:h-auto h-screen z-10 ${!open ? 'right-[-100%] ' : 'right-0'}`}>
          {
            menus.map((menu, index) => (
              <li key={index} className="md:inline-block  md:ml-10 ml-5 md:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300">
                <a className="text-slate-200 cursor-pointer font-Barlow font-normal inline-block md:py-5 py-3">
                  <span className="font-bold text-3xl "></span>  {menu.name}</a>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}
export default Navbar