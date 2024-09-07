import React, { useState } from 'react'
const mockDevices = [
    {
        brand: 'Google',
        name: 'Pixel 6',
        latestBuild: '2024/11/19',
        versions: ['14', '14 (Plus Edition)', '13', '13 (Plus Edition)', '12', '11', '11 (Plus Edition)']
    },
    {
        brand: 'Google',
        name: 'Pixel 5',
        latestBuild: '2024/11/18',
        versions: ['14', '13', '12', '11']
    },
    // Add more mock devices here...
];
const brands = ['Google', 'Samsung', 'Xiaomi', 'Nokia', 'OnePlus', 'Lenovo', 'Asus', 'Nubia', 'Realme'];
const androidVersions = [
    { version: '14', status: 'Continue', color: 'bg-orange-500' },
    { version: '13', status: 'Completed', color: 'bg-orange-300' },
    { version: '12', status: 'Completed', color: 'bg-orange-300' },
    { version: '11', status: 'Completed', color: 'bg-orange-300' },
    { version: '10', status: 'Discontinued', color: 'bg-rose-600' },
    { version: '9', status: 'Discontinued', color: 'bg-rose-600' },
];
function DeviceView() {
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
                        <section className="mt-32 w-full max-w-full max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col">
                                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                                    <div className="flex overflow-hidden flex-col px-5 py-7 w-full text-sm font-bold tracking-normal leading-none text-sky-600 rounded-2xl border-2 border-solid border-stone-300 shadow-[0px_0px_14px_rgba(0,0,0,0.4)] max-md:pl-5 max-md:mt-8 max-md:max-w-full">
                                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/49fca48145caa2960eb657c24025b51990d25a15f3acc0d7607f15a8ed24fa6e?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5" alt="Device image" className="object-contain self-center max-w-full aspect-[0.77] w-[230px]" />
                                        <div className="flex gap-4 mt-8 w-full">
                                            <button className="overflow-hidden gap-2.5 self-stretch px-4 py-1 text-white bg-blue-500 rounded-2xl border border-solid border-slate-400">
                                                Custom ROMs
                                            </button>
                                            <button className="overflow-hidden gap-2.5 self-stretch px-4 py-1 bg-sky-100 rounded-2xl">
                                                Install Guide
                                            </button>
                                            <button className="overflow-hidden gap-2.5 self-stretch px-4 py-1 bg-sky-100 rounded-2xl">
                                                Stock ROM
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* <DeviceInfo /> */}
                                <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col w-full max-md:mt-8 max-md:max-w-full">
                                        <div className="flex flex-wrap gap-3 max-w-full font-bold w-[794px]">
                                            <h1 className="flex-auto text-5xl tracking-wide text-black max-md:max-w-full max-md:text-4xl">
                                                Samsung Galaxy S9(Korea)
                                            </h1>
                                            <div className="gap-2.5 self-stretch px-4 py-1 my-auto text-base tracking-normal leading-none text-sky-600 whitespace-nowrap bg-sky-100 rounded-2xl min-h-[24px]">
                                                Starlte
                                            </div>
                                        </div>
                                        <div className="flex overflow-hidden flex-wrap gap-10 items-start pt-3.5 pr-20 pb-6 pl-6 mt-6 rounded-lg border border-solid border-stone-300 max-md:px-5 max-md:max-w-full">
                                            <div className="flex flex-col">
                                                <div className="flex gap-1 justify-center items-center p-2.5 text-sm font-medium text-zinc-950">
                                                    <div className="self-stretch my-auto">
                                                        <span className="font-bold text-zinc-950">Last ROM</span>
                                                    </div>
                                                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0275940c0b64dd06f9547cd10afcc6572f55df60e5bb99363729546946a104a?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]" />
                                                </div>
                                                <div className="z-10 self-start -mt-2 ml-2.5 text-xs text-neutral-400">
                                                    <span className="font-bold text-neutral-400">5 days ago</span>
                                                </div>
                                            </div>    <div className="flex flex-col justify-center items-center mt-2.5">
                                                <div className="text-sm font-medium text-zinc-950">
                                                    <span className="font-bold text-zinc-950">Contributor(s)</span>
                                                </div>
                                                <div className="mt-1.5 text-xs text-neutral-400">
                                                    <span className="font-bold text-neutral-400">Shahmeer, Umair</span>
                                                </div>
                                            </div>
                                        </div> <h2 className="self-start mt-8 text-base font-bold text-zinc-950">Android Version</h2>
                                        {androidVersions.map((version, index) => (

                                            <div className="flex flex-wrap gap-6 justify-center items-center pr-6 pl-8 mt-3 w-full bg-gray-50 rounded-lg border border-solid border-stone-300 min-h-[60px] shadow-[0px_2px_4px_rgba(0,0,0,0.3)] max-md:px-5 max-md:max-w-full">
                                                <div className="flex-1 shrink self-stretch my-auto text-xs font-semibold text-black basis-8 max-md:max-w-full">
                                                    {version.version}
                                                </div>
                                                <div className={`gap-2.5 self-stretch px-4 py-1 my-auto text-base font-bold tracking-normal leading-none text-white whitespace-nowrap ${version.color} rounded-2xl min-h-[24px]`}>
                                                    {version.status}
                                                </div>
                                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/170da4021e3802e3db823de940413516cb8c386b4ea24d93a4b3bea297a050a3?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[17px]" />
                                            </div>

                                        ))}
                                    </div>
                                </div>



                            </div>
                        </section>










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

                    <main className="flex flex-col items-center max-w-full">

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

export default DeviceView