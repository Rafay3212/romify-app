import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    const navItems = [
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/39605f61eb60b9b227c7385613416ec71655b85e38f9fb9920b57feaf43a615c?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5", text: "Home", to: "/dashboard", active: true },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c3942a1c1043922378c4ed7c0876f3f6b7da4858951456a307ba12fbb0374888?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5", text: "Devices", to: "/devices", },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/498741480896b4e3c4611103a15c2245fe7fdf5aa44597faac99a8d8171b4585?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5", text: "News", to: "/news", },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9654fb32d0c9e14e30bf7f346a7a0bec04b5945b076fcf38ae0215a0b48e8872?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5", text: "Request", to: "/request", },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/80d859bf7b975074183a4ab8938790c0887957e604feb7e660441b9810fa9b15?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5", text: "Unbrick", to: "/unbrick", },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3a4c9940ca27dcd54330f6a53b8d983902ecd0e3806805056f7d0a7239860aa3?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5", text: "Support", to: "/dashboard", }
    ];
    return (


        <header className="flex overflow-hidden flex-col pt-4 mx-auto w-full bg-white max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-wrap gap-10 self-center max-w-full w-[1310px]">
                <div className="grow shrink self-start mt-5 mb-3 text-2xl font-extrabold leading-none text-blue-500 w-[102px]">
                    Romify
                </div>
                <nav className="flex flex-wrap gap-10 max-md:max-w-full">
                    <div className="flex flex-wrap flex-auto gap-7 items-end text-base font-bold text-black whitespace-nowrap max-md:max-w-full">
                        {navItems.map((item, index) => (
                            <Link to={item.to}><div className={`flex relative gap-2.5 justify-center items-center p-2.5 ${item.active ? 'text-sky-600' : ''}`}>
                                <img loading="lazy" src={item.icon} alt="" className="object-contain z-0 shrink-0 self-stretch my-auto w-5 aspect-[0.91]" />
                                <div className="z-0 self-stretch my-auto">{item.text}</div>
                                {/* <div className={`absolute bottom-1.5 z-0 shrink-0 self-start h-0 border-2 ${item.active ? 'border-sky-600' : 'border-black'} border-solid left-[15px] w-[72px]`} /> */}
                            </div></Link>

                        ))}
                    </div>
                    <button className="overflow-hidden gap-2.5 self-stretch px-6 py-2 my-auto text-sm font-semibold text-white bg-blue-500 rounded-2xl border border-black border-solid">
                        Join Now
                    </button>
                </nav>
            </div >
        </header >

    )
}

export default Header