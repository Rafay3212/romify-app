import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Devices() {
    const [selectedBrand, setSelectedBrand] = useState('Apple');

    const brands = [
        'Apple',
        'Samsung',
        'Google',
        'OnePlus',
        'Sony',
        'Huawei',
        'Xiaomi',
        'Oppo',
        'Motorola',
        'Nokia',
    ];
    return (
        <>
            <form class="max-w-md mx-auto mt-2">
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                <div class="relative flex items-center">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Mobile..." required />
                    <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
                </div>
            </form>
            <div className="flex">
                {/* Brand List */}
                <div className="w-1/4 m-2 p-4 bg-white   ">
                    <div className=' border border-gray-200 shadow'>
                        <h2 className="text-2xl font-bold mb-4">Filter by Brand</h2>
                        <ul className="space-y-2 ">
                            {brands.map(brand => (
                                <li key={brand}>
                                    <button
                                        onClick={() => setSelectedBrand(brand)}
                                        className={`block py-2 px-4 w-full  text-xl text-left rounded hover:bg-gray-200 ${selectedBrand === brand ? 'bg-blue-100' : ''
                                            }`}
                                    >
                                        {brand}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Selected Brand */}
                <div className="w-3/4 p-4">
                    {/* <h2 className="text-xl font-bold mb-4">Selected Brand</h2> */}
                    <div className="text-xl font-bold mb-4">
                        {selectedBrand ? (
                            <div className="flex flex-col items-start">
                                <p className="text-5xl font-bold mb-4">{selectedBrand}</p>
                                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

                                    <Link to='/devices/view'> <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow flex flex-col md:flex-row mb-4">
                                        <a href="#" className="flex-shrink-0">
                                            <img className="rounded-lg md:rounded-t-lg md:rounded-none md:rounded-l-lg w-full md:w-48 h-48 object-cover"
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0praxNFT7dTQYuQlpiE9nl6gbXzpnY0kSRg&s"
                                                alt="Device Image" />
                                        </a>
                                        <div className="p-4 flex flex-col justify-between">
                                            <div>
                                                <a href="#">
                                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
                                                </a>
                                                <p className="mb-3 text-gray-700">Select a version:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="inline-block py-1 px-2 text-xs font-medium text-white rounded-lg" style={{ backgroundColor: 'rgb(190, 210, 255)' }}>14</span>
                                                    <span className="inline-block py-1 px-2 text-xs font-medium text-white rounded-lg" style={{ backgroundColor: 'rgb(190, 210, 255)' }}>14 Plus</span>
                                                    <span className="inline-block py-1 px-2 text-xs font-medium text-white rounded-lg" style={{ backgroundColor: 'rgb(190, 210, 255)' }}>14 Edition</span>
                                                </div>
                                            </div>
                                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 mt-4">
                                                Read more
                                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div></Link>
                                    <Link to='/devices/view'> <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow flex flex-col md:flex-row mb-4">
                                        <a href="#" className="flex-shrink-0">
                                            <img className="rounded-lg md:rounded-t-lg md:rounded-none md:rounded-l-lg w-full md:w-48 h-48 object-cover"
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0praxNFT7dTQYuQlpiE9nl6gbXzpnY0kSRg&s"
                                                alt="Device Image" />
                                        </a>
                                        <div className="p-4 flex flex-col justify-between">
                                            <div>
                                                <a href="#">
                                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
                                                </a>
                                                <p className="mb-3 text-gray-700">Select a version:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="inline-block py-1 px-2 text-xs font-medium text-white rounded-lg" style={{ backgroundColor: 'rgb(190, 210, 255)' }}>14</span>
                                                    <span className="inline-block py-1 px-2 text-xs font-medium text-white rounded-lg" style={{ backgroundColor: 'rgb(190, 210, 255)' }}>14 Plus</span>
                                                    <span className="inline-block py-1 px-2 text-xs font-medium text-white rounded-lg" style={{ backgroundColor: 'rgb(190, 210, 255)' }}>14 Edition</span>
                                                </div>
                                            </div>
                                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 mt-4">
                                                Read more
                                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div></Link>
                                    <Link to='/devices/view'> <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow flex flex-col md:flex-row mb-4">
                                        <a href="#" className="flex-shrink-0">
                                            <img className="rounded-lg md:rounded-t-lg md:rounded-none md:rounded-l-lg w-full md:w-48 h-48 object-cover"
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0praxNFT7dTQYuQlpiE9nl6gbXzpnY0kSRg&s"
                                                alt="Device Image" />
                                        </a>
                                        <div className="p-4 flex flex-col justify-between">
                                            <div>
                                                <a href="#">
                                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
                                                </a>
                                                <p className="mb-3 text-gray-700">Select a version:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="inline-block py-1 px-2 text-xs font-medium text-white rounded-lg" style={{ backgroundColor: 'rgb(190, 210, 255)' }}>14</span>
                                                    <span className="inline-block py-1 px-2 text-xs font-medium text-white rounded-lg" style={{ backgroundColor: 'rgb(190, 210, 255)' }}>14 Plus</span>
                                                    <span className="inline-block py-1 px-2 text-xs font-medium text-white rounded-lg" style={{ backgroundColor: 'rgb(190, 210, 255)' }}>14 Edition</span>
                                                </div>
                                            </div>
                                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 mt-4">
                                                Read more
                                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div></Link>
                                    <Link to='/devices/view'> <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow flex flex-col md:flex-row mb-4">
                                        <a href="#" className="flex-shrink-0">
                                            <img className="rounded-lg md:rounded-t-lg md:rounded-none md:rounded-l-lg w-full md:w-48 h-48 object-cover"
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0praxNFT7dTQYuQlpiE9nl6gbXzpnY0kSRg&s"
                                                alt="Device Image" />
                                        </a>
                                        <div className="p-4 flex flex-col justify-between">
                                            <div>
                                                <a href="#">
                                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
                                                </a>
                                                <p className="mb-3 text-gray-700">Select a version:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="inline-block py-1 px-2 text-xs font-medium text-white rounded-lg" style={{ backgroundColor: 'rgb(190, 210, 255)' }}>14</span>
                                                    <span className="inline-block py-1 px-2 text-xs font-medium text-white rounded-lg" style={{ backgroundColor: 'rgb(190, 210, 255)' }}>14 Plus</span>
                                                    <span className="inline-block py-1 px-2 text-xs font-medium text-white rounded-lg" style={{ backgroundColor: 'rgb(190, 210, 255)' }}>14 Edition</span>
                                                </div>
                                            </div>
                                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 mt-4">
                                                Read more
                                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div></Link>
                                    <Link to='/devices/view'> <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow flex flex-col md:flex-row mb-4">
                                        <a href="#" className="flex-shrink-0">
                                            <img className="rounded-lg md:rounded-t-lg md:rounded-none md:rounded-l-lg w-full md:w-48 h-48 object-cover"
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0praxNFT7dTQYuQlpiE9nl6gbXzpnY0kSRg&s"
                                                alt="Device Image" />
                                        </a>
                                        <div className="p-4 flex flex-col justify-between">
                                            <div>
                                                <a href="#">
                                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
                                                </a>
                                                <p className="mb-3 text-gray-700">Select a version:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="inline-block py-1 px-2 text-xs font-medium text-white rounded-lg" style={{ backgroundColor: 'rgb(190, 210, 255)' }}>14</span>
                                                    <span className="inline-block py-1 px-2 text-xs font-medium text-white rounded-lg" style={{ backgroundColor: 'rgb(190, 210, 255)' }}>14 Plus</span>
                                                    <span className="inline-block py-1 px-2 text-xs font-medium text-white rounded-lg" style={{ backgroundColor: 'rgb(190, 210, 255)' }}>14 Edition</span>
                                                </div>
                                            </div>
                                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 mt-4">
                                                Read more
                                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div></Link>
                                    <Link to='/devices/view'> <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow flex flex-col md:flex-row mb-4">
                                        <a href="#" className="flex-shrink-0">
                                            <img className="rounded-lg md:rounded-t-lg md:rounded-none md:rounded-l-lg w-full md:w-48 h-48 object-cover"
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0praxNFT7dTQYuQlpiE9nl6gbXzpnY0kSRg&s"
                                                alt="Device Image" />
                                        </a>
                                        <div className="p-4 flex flex-col justify-between">
                                            <div>
                                                <a href="#">
                                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
                                                </a>
                                                <p className="mb-3 text-gray-700">Select a version:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="inline-block py-1 px-2 text-xs font-medium text-white rounded-lg" style={{ backgroundColor: 'rgb(190, 210, 255)' }}>14</span>
                                                    <span className="inline-block py-1 px-2 text-xs font-medium text-white rounded-lg" style={{ backgroundColor: 'rgb(190, 210, 255)' }}>14 Plus</span>
                                                    <span className="inline-block py-1 px-2 text-xs font-medium text-white rounded-lg" style={{ backgroundColor: 'rgb(190, 210, 255)' }}>14 Edition</span>
                                                </div>
                                            </div>
                                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 mt-4">
                                                Read more
                                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div></Link>
                                    <Link to='/devices/view'> <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow flex flex-col md:flex-row mb-4">
                                        <a href="#" className="flex-shrink-0">
                                            <img className="rounded-lg md:rounded-t-lg md:rounded-none md:rounded-l-lg w-full md:w-48 h-48 object-cover"
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0praxNFT7dTQYuQlpiE9nl6gbXzpnY0kSRg&s"
                                                alt="Device Image" />
                                        </a>
                                        <div className="p-4 flex flex-col justify-between">
                                            <div>
                                                <a href="#">
                                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
                                                </a>
                                                <p className="mb-3 text-gray-700">Select a version:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="inline-block py-1 px-2 text-xs font-medium text-white rounded-lg" style={{ backgroundColor: 'rgb(190, 210, 255)' }}>14</span>
                                                    <span className="inline-block py-1 px-2 text-xs font-medium text-white rounded-lg" style={{ backgroundColor: 'rgb(190, 210, 255)' }}>14 Plus</span>
                                                    <span className="inline-block py-1 px-2 text-xs font-medium text-white rounded-lg" style={{ backgroundColor: 'rgb(190, 210, 255)' }}>14 Edition</span>
                                                </div>
                                            </div>
                                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 mt-4">
                                                Read more
                                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div></Link>
                                    <Link to='/devices/view'> <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow flex flex-col md:flex-row mb-4">
                                        <a href="#" className="flex-shrink-0">
                                            <img className="rounded-lg md:rounded-t-lg md:rounded-none md:rounded-l-lg w-full md:w-48 h-48 object-cover"
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0praxNFT7dTQYuQlpiE9nl6gbXzpnY0kSRg&s"
                                                alt="Device Image" />
                                        </a>
                                        <div className="p-4 flex flex-col justify-between">
                                            <div>
                                                <a href="#">
                                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
                                                </a>
                                                <p className="mb-3 text-gray-700">Select a version:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="inline-block py-1 px-2 text-xs font-medium text-white rounded-lg" style={{ backgroundColor: 'rgb(190, 210, 255)' }}>14</span>
                                                    <span className="inline-block py-1 px-2 text-xs font-medium text-white rounded-lg" style={{ backgroundColor: 'rgb(190, 210, 255)' }}>14 Plus</span>
                                                    <span className="inline-block py-1 px-2 text-xs font-medium text-white rounded-lg" style={{ backgroundColor: 'rgb(190, 210, 255)' }}>14 Edition</span>
                                                </div>
                                            </div>
                                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 mt-4">
                                                Read more
                                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div></Link>

                                </div>
                            </div>
                        ) : (
                            <p className="text-gray-500">No brand selected</p>
                        )}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Devices