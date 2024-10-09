import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Devices() {
  const [selectedBrand, setSelectedBrand] = useState("Select any brand");
  const [selectedBrandid, setSelectedBrandid] = useState();
  const [brands, setBrands] = useState([]);
  const [devices, setDevices] = useState([]);
  const [filteredDevices, setFilteredDevices] = useState([]);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
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
  useEffect(() => {
    // Fetch brands from the PHP API on component load
    const fetchBrands = async () => {
      try {
        const response = await axios.get('http://localhost/my-romify-app/get_brands.php');
        if (response.data.status === 'success') {
          setBrands(response.data.brands); // Set the fetched brands to state
        } else {
          setError('Failed to fetch brands');
        }
      } catch (error) {
        setError('Error fetching brands from server');
      }
    };

    fetchBrands();
  }, []); // Empty dependency array means this effect runs once on component load

  useEffect(() => {
    const fetchDevices = async () => {
        try {
            const response = await axios.get('http://localhost/my-romify-app/get_devices.php');
            
            if (response.data.status === 'success') {
                setDevices(response.data.devices); // Store devices in state
            } else {
                setError('Failed to fetch devices');
            }
        } catch (error) {
            setError('Error fetching devices from server');
        }
    };

    fetchDevices();
}, []);  // Fetch devices once

  useEffect(() => {
    // Filter devices whenever selectedBrandid or devices change
    const filtered = devices.filter((device) => device.brandid === selectedBrandid);
    setFilteredDevices(filtered);
  }, [selectedBrandid, devices]);

  function brandseting(brandid, brand_name) {
    setSelectedBrand(brand_name);
    setSelectedBrandid(brandid);
  }

  return (
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
        <div className="flex overflow-hidden flex-col mx-auto w-full bg-white">
          <main className="flex flex-col self-stretch px-4 w-full max-md:max-w-full">
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
                          key={brand.brandid} // Use brandid as the unique key
                          onClick={() => brandseting(brand.brandid, brand.brand_name)} // Set the selected brand
                          className={`gap-2.5 self-stretch px-6 py-2.5 mt-6 max-w-full rounded-xl min-h-[48px] w-[200px] max-md:px-5 ${selectedBrand === brand.brand_name ? 'text-white bg-blue-500' : 'bg-gray-100'}`}
                        >
                          {brand.brand_name} {/* Display the brand_name */}
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
                      {filteredDevices.length > 0 ? filteredDevices.map((device, index) => (
                        <div key={index} className="flex flex-col w-[calc(50%-10px)] max-md:w-full">
                          <div className="flex overflow-hidden overflow-x-auto flex-col px-8 pt-6 pb-3.5 w-full leading-none rounded-xl border border-blue-500 border-solid shadow-sm max-md:px-5 max-md:mt-4 max-md:max-w-full">
                            <Link to={`/devices/view/${device.deviceid}`}>
                              <div className="flex gap-7 items-center">
                                <img loading="lazy" src={device.device_image_url} alt={device.device_name} className="object-contain shrink-0 self-stretch my-auto aspect-[0.77] w-[69px]" />
                                <div className="flex flex-col self-stretch my-auto min-h-[125px] min-w-[240px] w-[302px]">
                                  <h3 className="flex-1 text-xl font-semibold tracking-wide text-black">{device.device_name}</h3>
                                  <div className="flex flex-1 gap-1 items-center mt-3 text-sm font-semibold tracking-normal size-full text-neutral-500">
                                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c95513adfa29722f522ec4f02dbb2beb02da7237d0f7765a11d471c10febda68?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5" alt="" className="object-contain shrink-0 self-stretch my-auto w-2 aspect-[0.57]" />
                                    <div className="self-stretch my-auto">
                                      Latest Build: <span className="text-zinc-600">{device.build_date}</span>
                                    </div>
                                  </div>
                                  <div className="flex flex-col mt-3 w-full max-w-[302px] min-h-[64px]">
                                    <div className="flex flex-1 gap-1 items-center text-sm font-semibold tracking-normal whitespace-nowrap size-full text-neutral-500">
                                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5055d1555a2f2c29b7a35818bcf3193c5187ac4ffb595c3e30918c351fc26463?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5" alt="" className="object-contain shrink-0 self-stretch my-auto w-2 aspect-[0.57]" />
                                      <span className="text-sm text-neutral-500">Android Versions: 
                                      {device.versions.map((version, index) => (
                                                                                <span key={index} className="gap-2.5 self-stretch px-2 py-1 whitespace-nowrap bg-sky-100 rounded-2xl min-h-[18px]">
                                                                                    {version.version}
                                                                                </span>
                                                                            ))} 
                                      </span>
                                      {/* {device.versions.map((version, idx) => (
                                        <span key={idx} className="gap-2.5 self-stretch px-2 py-1 whitespace-nowrap bg-sky-100 rounded-2xl ">
                                          {version.version}
                                        </span>
                                      ))} */}
                                    
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      )) : (
                        <p>No devices found for the selected brand.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Devices;
