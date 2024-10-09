import React, { useEffect, useRef, useState } from 'react';
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useLocation } from 'react-router-dom'; // To get the state passed from Login
import { toast, ToastContainer } from 'react-toastify'; // Importing toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Importing toast styles
import 'swiper/css';
import 'swiper/css/navigation';
import axios from 'axios';

function Deshboard() {
    const cardData = [
        {
            title: "Open Source",
            content: "Source Code of all Custom Roms are available on Github.",
            className: "w-[307px] pb-32 max-md:px-5 max-md:pb-24"
        },
        {
            title: "Battery Life",
            content: "Optimizations done at source code level to keep the OS battery-friendly",
            className: "flex-1 shrink self-stretch px-17 pb-24 my-auto basis-0 min-w-[240px] max-md:px-5"
        },
        {
            title: "Devices",
            content: "Available for a wide range of devices with support from developers in forums.",
            className: "flex-1 shrink self-stretch px-12 py-20 my-auto basis-0 min-w-[307px] max-md:px-5"
        },
        {
            title: "Security patch",
            content: "Romify has best collection of latest community Roms with latest security patches giving older devices a new life",
            className: "flex-1 shrink self-stretch px-12 py-14 my-auto basis-7 min-w-[240px] max-md:px-5"
        },
        {
            title: "E-waste",
            content: "Romify recommend stable smoother and more modern operating system. This helps reduce e-waste by giving these devices a new lease on life.",
            className: "w-[307px] px-8 py-16 max-md:px-5"
        }
    ];  
    const location = useLocation(); // Access the state passed from Login

    useEffect(() => {
        if (location.state && location.state.message) {
            toast.success('Login Successful!');
        }
    }, [location.state]);

    const [devices, setDevices] = useState([]); // Store devices from the API
    const [searchTerm, setSearchTerm] = useState(''); // Store the search query
    const [filteredDevices, setFilteredDevices] = useState([]); // Store the filtered device suggestions

    useEffect(() => {
        const fetchDevices = async () => {
            try {
                const response = await axios.get('http://localhost/my-romify-app/get_devices.php');
                
                if (response.data.status === 'success') {
                    setDevices(response.data.devices); // Store devices in state
                } else {
                    console.error('Failed to fetch devices');
                }
            } catch (error) {
                console.error('Error fetching devices from server');
            }
        };

        fetchDevices();
    }, []);

    // Filter devices based on the search term
    useEffect(() => {
        if (searchTerm) {
            const filtered = devices.filter(device =>
                device.device_name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredDevices(filtered);
        } else {
            setFilteredDevices([]); // Clear suggestions when search input is empty
        }
    }, [searchTerm, devices]);

    return (
        <div>
            <ToastContainer />

            <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/34380b61637e95eec28d0fe1a61a90d3ce3eb9d83946d681f42660aaf5a428ad?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5" alt="Hero image" className="object-contain mt-9 w-full aspect-[1.88] max-md:max-w-full" />
                 
                    <div className="flex overflow-hidden flex-col mx-auto w-full bg-white">
                    <div className="flex overflow-visible flex-col justify-center items-center px-16 py-20 w-full text-xl font-semibold bg-sky-100 shadow-[0px_0px_16px_rgba(125,153,180,1)] text-neutral-300 max-md:px-5 max-md:mt-10 max-md:max-w-full">
    <form className="relative flex flex-wrap gap-4 items-center py-2.5 pr-2.5 pl-4 max-w-full bg-white rounded-lg border border-black border-solid shadow-[2px_2px_24px_rgba(177,216,255,1)] w-[640px]">
        <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f52c3b105956664fc55bd51109c16b90fb2343137fe4e4a3e0256349b933e89c?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5" 
            alt="Search Icon" 
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" 
        />
        <label htmlFor="searchInput" className="sr-only">Search your Device</label>
        <input
            type="search"
            id="searchInput"
            placeholder="Search your Device"
            className="self-stretch my-auto flex-grow bg-transparent border-none outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update the search term
            autoComplete="off" 
        />

        {filteredDevices.length > 0 && (
            <ul
                className="absolute top-full mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-md z-50"
                style={{ overflowY: 'auto', maxHeight: '200px' }} // Ensures a scrollable dropdown if too many items
            >
                {filteredDevices.map((device) => (
                    <li key={device.deviceid} className="p-2 hover:bg-gray-100">
                        <Link to={`/devices/view/${device.deviceid}`} className="block text-black">
                            {device.device_name}
                        </Link>
                    </li>
                ))}
            </ul>
        )}
    </form>
</div>

                        <section className="flex flex-col items-start pl-16 mt-14 pb-5 w-full max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                            <h2 className="text-4xl font-bold tracking-wide text-black">Latest Devices</h2>

                            <div className="mt-14 max-md:mt-10 w-full">
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={1}
                                    navigation={true}
                                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                                    modules={[Navigation, Autoplay]}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 2,
                                        },
                                        768: {
                                            slidesPerView: 3,
                                        },
                                        1024: {
                                            slidesPerView: 4,
                                        },
                                    }}
                                >
                                    {devices.map((device) => (
                                        <SwiperSlide key={device.deviceid}>
                                            <div className="flex flex-col w-full max-md:w-full">
                                                <div className="flex flex-col grow px-6 pt-6 pb-4 text-base font-bold tracking-normal leading-none rounded-2xl border border-blue-500 shadow-sm max-md:px-5 max-md:mt-4">
                                                    <Link to={`/devices/view/${device.deviceid}`}>
                                                        <div className="flex flex-col items-center">
                                                            <img loading="lazy" src={device.device_image_url} alt={`Image of ${device.device_name}`} className="object-contain max-w-full aspect-[0.77] w-[110px]" />
                                                            <div className="flex flex-col items-center mt-6">
                                                                <h3 className="text-xl tracking-wide text-black">{device.device_name}</h3>
                                                                <div className="px-4 py-1 mt-4 text-sky-600 bg-sky-100 rounded-2xl min-h-[24px] w-[100px] text-center">
                                                                    {device.brand_name}
                                                                </div>
                                                                <div className="mt-4 font-semibold text-neutral-500">
                                                                    {device.total_downloads} Downloads
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </section>
                        <section className="flex overflow-hidden flex-col justify-center items-center px-16 py-20 mt-12 w-full bg-neutral-800 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        <div className="max-w-full w-[1084px]">
                            <div className="flex gap-5 max-md:flex-col">
                                <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col items-start self-stretch my-auto w-full font-semibold text-white max-md:mt-10">
                                        <h2 className="text-3xl font-bold">Security</h2>
                                        <p className="mt-4 text-xl w-[280px]">
                                            Get latest Security patches with new updates, we enhance existing privacy touchpoints around the OS and keep you informed of how the system shares your data.
                                        </p>
                                        <div className="flex gap-5 self-stretch mt-9 text-base">
                                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/593673b7e332a2d5bcdf8941a41c6f60634d3a91d44e9c72c7697b862ea63625?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5" alt="" className="object-contain shrink-0 self-start w-12 aspect-square" />
                                            <p className="flex-auto w-[270px]">
                                                Trust helps you understand the state of your device's security and warns you about possible threats.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
                                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/124bc376e986aac995b7ac4d64a6626d5572fc6aa28216b7aeb2f86563d12f5c?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5" alt="Security illustration" className="object-contain w-full aspect-square max-md:mt-10 max-md:max-w-full" />
                                </div>
                            </div>
                        </div>
                    </section>
                        <main className="flex justify-center items-center min-h-screen p-4 bg-gray-100 ">
                        <section className="flex overflow-hidden flex-col items-center text-white max-w-[992px]">
                            <div className={`flex overflow-hidden flex-col px-14 py-14 bg-sky-600 rounded-2xl border-solid shadow-sm border-[3px] border-zinc-100 ${cardData[0].className}`}>
                                <h2 className="text-3xl font-bold tracking-wide leading-none">{cardData[0].title}</h2>
                                <p className="mt-10 text-xl font-semibold tracking-wide leading-6 text-center">{cardData[0].content}</p>
                            </div>
                            <div className="flex flex-wrap gap-7 items-center self-stretch mt-7 w-full max-md:max-w-full">
                                {cardData.slice(1, 4).map((card, index) => (
                                    <div className={`flex overflow-hidden flex-col px-14 py-14 bg-sky-600 rounded-2xl border-solid shadow-sm border-[3px] border-zinc-100 ${card.className}`}>
                                        <h2 className="text-3xl font-bold tracking-wide leading-none">{card.title}</h2>
                                        <p className="mt-10 text-xl font-semibold tracking-wide leading-6 text-center">{card.content}</p>
                                    </div>
                                ))}
                            </div>
                            <div className={`flex overflow-hidden flex-col px-14 py-14 bg-sky-600 rounded-2xl border-solid shadow-sm border-[3px] border-zinc-100 ${cardData[4].className}`}>
                                <h2 className="text-3xl font-bold tracking-wide leading-none">{cardData[4].title}</h2>
                                <p className="mt-10 text-xl font-semibold tracking-wide leading-6 text-center">{cardData[4].content}</p>
                            </div>
                        </section>
                    </main>
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
        </div>
    );
}

export default Deshboard;
