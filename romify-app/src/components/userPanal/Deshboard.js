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

                        <section className="flex flex-col items-start pl-16 mt-14 w-full max-md:pl-5 max-md:mt-10 max-md:max-w-full">
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Deshboard;
