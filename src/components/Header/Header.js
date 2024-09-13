import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css';
import NavigationItem from './NavigationItem';
// import '../App.css';
function Header() {
    const navItems = [
        { name: 'Home', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/224068f014da3374803f94b5ba442f551b8991183cc3643c76156704d8ec65c3?placeholderIfAbsent=true&apiKey=cb1db43ffc26405789293b2cef5404b8', active: true },
        { name: 'Devices', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a25020bca9c88888237c5e651da761b584f18009bf30d6a911e9590f8e9297d4?placeholderIfAbsent=true&apiKey=cb1db43ffc26405789293b2cef5404b8' },
        { name: 'News', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7fc6dfcf38060fd576b64c566577559198b4138e1f59cc30d574c2a320eb8781?placeholderIfAbsent=true&apiKey=cb1db43ffc26405789293b2cef5404b8' },
        { name: 'Request', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b76de5d05ace8eb8d7bb4a4a31a997a51218bd9a0d980b75c088c20bc03ae51a?placeholderIfAbsent=true&apiKey=cb1db43ffc26405789293b2cef5404b8' },
        { name: 'Unbrick', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/36c2818a3ec4ea7e8b01e0d81cda87b28f7c1a8d8673944529d788bdf7f70c39?placeholderIfAbsent=true&apiKey=cb1db43ffc26405789293b2cef5404b8' },
        { name: 'Support', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4f76e93c2e1f2253f2a28401dc2abcc746136844776d0546016c2772b92ac3e1?placeholderIfAbsent=true&apiKey=cb1db43ffc26405789293b2cef5404b8' },
      ];
    
      return (
        <header className={styles.header}>
        <div className={styles.logoWrapper}>
          <h1 className={styles.logo}>Romify</h1>
        </div>
        <div className={styles.navigationWrapper}>
          <nav className={styles.navigation}>
            {navItems.map((item, index) => (
              <NavigationItem key={index} {...item} />
            ))}
          </nav>
          <button className={styles.joinButton}>Join Now</button>
        </div>
      </header>
        // <nav class="bg-white    border border-gray-200 shadow ">
        //     <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        //         <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        //             <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
        //             <span class="self-center text-2xl font-semibold whitespace-nowrap ">ROMIFY</span>
        //         </a>
        //         <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        //             <button type="button" class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 " id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        //                 <span class="sr-only">Open user menu</span>
        //                 <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
        //             </button>

        //             <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        //                 <div class="px-4 py-3">
        //                     <span class="block text-sm text-gray-900 ">Bonnie Green</span>
        //                     <span class="block text-sm  text-gray-500 truncate ">name@flowbite.com</span>
        //                 </div>
        //                 <ul class="py-2" aria-labelledby="user-menu-button">
        //                     <li>
        //                         <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Dashboard</a>
        //                     </li>
        //                     <li>
        //                         <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Settings</a>
        //                     </li>
        //                     <li>
        //                         <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Earnings</a>
        //                     </li>
        //                     <li>
        //                         <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Sign out</a>
        //                     </li>
        //                 </ul>
        //             </div>
        //             <button data-collapse-toggle="navbar-user" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
        //                 <span class="sr-only">Open main menu</span>
        //                 <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        //                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
        //                 </svg>
        //             </button>
        //         </div>
        //         <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
        //             <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white  ">
        //                 <li>
        //                     <Link to="/deshboard" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
        //                 </li>
        //                 <li>
        //                     <Link to="/devices" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Devices</Link>
        //                 </li>
        //                 <li>
        //                     <Link to='/news' class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">News</Link>
        //                 </li>
        //                 <li>
        //                     <Link to="/request" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Request</Link>
        //                 </li>
        //                 <li>
        //                     <Link to='/unbrick' class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Unbrick</Link>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>

    )
}

export default Header