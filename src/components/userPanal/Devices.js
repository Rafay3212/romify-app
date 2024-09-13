import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const mockDevices = [
    {
        brand: 'Google',
        name: 'Pixel 6',
        latestBuild: '2024/11/19',
        versions: ['14', '14 (Plus Edition)', '13', '12', '11']
    },
    {
        brand: 'Google',
        name: 'Pixel 5',
        latestBuild: '2024/11/18',
        versions: ['14', '13', '12', '11']
    },
    {
        brand: 'Samsung',
        name: 'Galaxy S22',
        latestBuild: '2024/11/20',
        versions: ['14', '13', '12']
    },
    {
        brand: 'Samsung',
        name: 'Galaxy Note 20',
        latestBuild: '2024/10/15',
        versions: ['14', '13', '12', '11']
    },
    {
        brand: 'Xiaomi',
        name: 'Mi 11 Ultra',
        latestBuild: '2024/11/21',
        versions: ['14', '13', '12', '11']
    },
    {
        brand: 'Xiaomi',
        name: 'Redmi Note 10 Pro',
        latestBuild: '2024/10/30',
        versions: ['14', '13', '12', '11', '10']
    },
    {
        brand: 'Nokia',
        name: 'Nokia XR20',
        latestBuild: '2024/10/28',
        versions: ['14', '13', '12']
    },
    {
        brand: 'Nokia',
        name: 'Nokia G50',
        latestBuild: '2024/09/25',
        versions: ['14', '13', '12', '11']
    },
    {
        brand: 'OnePlus',
        name: 'OnePlus 9 Pro',
        latestBuild: '2024/11/22',
        versions: ['14', '13', '12', '11']
    },
    {
        brand: 'OnePlus',
        name: 'OnePlus Nord 2',
        latestBuild: '2024/10/10',
        versions: ['14', '13', '12']
    },
    {
        brand: 'Lenovo',
        name: 'Lenovo Legion Duel 2',
        latestBuild: '2024/09/30',
        versions: ['14', '13', '12']
    },
    {
        brand: 'Lenovo',
        name: 'Lenovo K12 Pro',
        latestBuild: '2024/08/18',
        versions: ['13', '12', '11']
    },
    {
        brand: 'Asus',
        name: 'Asus ROG Phone 6',
        latestBuild: '2024/10/22',
        versions: ['14', '13', '12']
    },
    {
        brand: 'Asus',
        name: 'Asus Zenfone 8',
        latestBuild: '2024/09/27',
        versions: ['14', '13', '12', '11']
    },
    {
        brand: 'Nubia',
        name: 'Nubia Red Magic 6S Pro',
        latestBuild: '2024/11/01',
        versions: ['14', '13', '12']
    },
    {
        brand: 'Nubia',
        name: 'Nubia Z30 Pro',
        latestBuild: '2024/10/12',
        versions: ['14', '13', '12', '11']
    },
    {
        brand: 'Realme',
        name: 'Realme GT Master Edition',
        latestBuild: '2024/11/15',
        versions: ['14', '13', '12', '11']
    },
    {
        brand: 'Realme',
        name: 'Realme 9 Pro+',
        latestBuild: '2024/10/20',
        versions: ['14', '13', '12']
    }
];
    // Add more mock devices here...

const brands = ['Google', 'Samsung', 'Xiaomi', 'Nokia', 'OnePlus', 'Lenovo', 'Asus', 'Nubia', 'Realme'];




function Devices() {
    const [selectedBrand, setSelectedBrand] = useState('Google');
    const filteredDevices = mockDevices.filter(device => device.brand === selectedBrand);

    return (
        <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
                <div className="flex overflow-hidden flex-col mx-auto w-full bg-white  ">

                    <main className="flex flex-col self-stretch px-4 w-full max-md:max-w-full">


                        <div className="flex overflow-hidden flex-col justify-center items-center px-16 py-20 w-full text-xl font-semibold bg-sky-100 shadow-[0px_0px_16px_rgba(125,153,180,1)] text-neutral-300 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                            <form className="flex flex-wrap gap-4 items-center py-2.5 pr-2.5 pl-4 max-w-full bg-white rounded-lg border border-black border-solid shadow-[2px_2px_24px_rgba(177,216,255,1)] w-[640px]">
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f52c3b105956664fc55bd51109c16b90fb2343137fe4e4a3e0256349b933e89c?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
                                <label htmlFor="searchInput" className="sr-only">Search your Device</label>
                                <input
                                    type="search"
                                    id="searchInput"
                                    placeholder="Search your Device"
                                    className="self-stretch my-auto flex-grow bg-transparent border-none outline-none"
                                />
                            </form>
                        </div>
                        <div className="self-center mt-16 mr-7 w-full max-w-[1352px] max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col">
                                <aside className="flex flex-col w-[22%] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col px-11 py-8 rounded-lg border-2 border-gray-300 border-solid max-md:px-5 max-md:mt-10">
                                        <h2 className="self-start text-xl font-semibold tracking-wide text-neutral-400">
                                            Filter BY Brands
                                        </h2>
                                        <div className="flex flex-col mt-6 w-full text-2xl font-medium tracking-wide whitespace-nowrap text-neutral-600">
                                            {brands.map((brand) => (
                                                <button
                                                    key={brand}
                                                    onClick={() => setSelectedBrand(brand)}
                                                    className={`gap-2.5 self-stretch px-6 py-2.5 mt-6 max-w-full rounded-xl min-h-[48px] w-[200px] max-md:px-5 ${selectedBrand === brand ? 'text-white bg-blue-500' : 'bg-gray-100'
                                                        }`}
                                                >
                                                    {brand}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </aside>
                                <div className="flex flex-col ml-5 w-[78%] max-md:ml-0 max-md:w-full">
                                    <h1 className="self-start text-7xl font-semibold tracking-wider text-black max-md:text-4xl">
                                        {selectedBrand}
                                    </h1>
                                    <div className="mt-6 max-md:mr-0.5 max-md:max-w-full">
                                        <div className="flex flex-wrap gap-5">
                                            {filteredDevices.map((device, index) => (
                                                <div className="flex flex-col w-[calc(50%-10px)] max-md:w-full">
                                                    <div className="flex overflow-hidden overflow-x-auto flex-col px-8 pt-6 pb-3.5 w-full leading-none rounded-xl border border-blue-500 border-solid shadow-sm max-md:px-5 max-md:mt-4 max-md:max-w-full">
                                                        <Link to='/devices/view'>
                                                            <div className="flex gap-7 items-center">
                                                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf7c334c7b4701ebe06e00dc8b19a6ea2da2da7e50340fa6a7be9fa2f8a457b2?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[0.77] w-[69px]" />
                                                                <div className="flex flex-col self-stretch my-auto min-h-[125px] min-w-[240px] w-[302px]">
                                                                    <h3 className="flex-1 text-xl font-semibold tracking-wide text-black">{device.name}</h3>
                                                                    <div className="flex flex-1 gap-1 items-center mt-3 text-sm font-semibold tracking-normal size-full text-neutral-500">
                                                                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c95513adfa29722f522ec4f02dbb2beb02da7237d0f7765a11d471c10febda68?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5" alt="" className="object-contain shrink-0 self-stretch my-auto w-2 aspect-[0.57]" />
                                                                        <div className="self-stretch my-auto">
                                                                            Latest Build: <span className="text-zinc-600">{device.latestBuild}</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex flex-col mt-3 w-full max-w-[302px] min-h-[64px]">
                                                                        <div className="flex flex-1 gap-1 items-center text-sm font-semibold tracking-normal whitespace-nowrap size-full text-neutral-500">
                                                                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/50585b1648c2b544884919c4e685591e7267c67f480e30389eb65835d21259cc?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5" alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
                                                                            <div className="self-stretch my-auto">Version(s):</div>
                                                                        </div> <div className="flex flex-wrap gap-1 items-start mt-2 w-full text-xs tracking-normal text-sky-600">
                                                                            {device.versions.map((version, index) => (
                                                                                <span key={index} className="gap-2.5 self-stretch px-2 py-1 whitespace-nowrap bg-sky-100 rounded-2xl min-h-[18px]">
                                                                                    {version}
                                                                                </span>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div></div>
                            </div>
                        </div>
                    </main>
                    <section className="flex overflow-hidden flex-col justify-center items-center px-16 py-14 mt-28 w-full font-semibold bg-gray-100 max-w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1002px] max-md:max-w-full">
                            <div className="flex flex-col items-start my-auto max-md:max-w-full">
                                <h2 className="text-4xl font-bold tracking-wide leading-none text-black">Contribute</h2>
                                <p className="self-stretch mt-8 text-base tracking-normal leading-none text-zinc-600 max-md:max-w-full">
                                    Do you like our efforts? Show your support by donating
                                </p>
                                <button className="overflow-hidden gap-3.5 self-stretch px-9 py-3 mt-8 text-xl text-white bg-blue-500 rounded-2xl border border-black border-solid max-md:px-5">
                                    Join Now
                                </button> </div>
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/206ce75519109a539d8029f7bae9bd61bb00b080093b45d8ae673e25efc5af39?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5" alt="Contribution illustration" className="object-contain shrink-0 max-w-full aspect-[0.98] w-[221px]" />
                        </div>
                    </section>

                    <main className="flex flex-col items-center max-w-full pt-7">

                        <header className="flex flex-col items-center w-full text-center text-slate-900 max-md:max-w-full">
                            <p className="text-sm uppercase text-neutral-700 tracking-[2.8px]">open source project</p>
                            <h1 className="mt-5 text-5xl font-bold max-md:max-w-full max-md:text-4xl">Request More Information</h1>
                            <p className="mt-5 w-full text-lg font-semibold leading-8 opacity-80 max-md:max-w-full">
                                ROMIFY is a centerlized platform for best and latest Custom ROMs available for various devices
                            </p>

                        </header>
                        <button className="flex justify-center overflow-hidden mx-auto   self-stretch px-6 py-4 mt-14 max-w-full text-xl font-semibold text-white bg-blue-500 border border-black border-solid min-h-[58px] rounded-[30px] w-[200px] max-md:px-5 max-md:mt-10">
                            Join Now
                        </button>
                    </main>

                </div>
            </div>
        </div>

    )
}

export default Devices