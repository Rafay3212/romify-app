import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    const navItems = [
        { text: "Team", },
        { text: "Case Studies", },
        { text: "Publications", }
    ];
    return (


        <header className="flex overflow-hidden justify-end flex-col pt-9 pb-4 mx-auto w-full bg-white max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-wrap gap-10 self-center max-w-full w-[1310px]">
                <div className="grow shrink self-start mt-5 text-2xl font-extrabold leading-none text-blue-500 w-[102px]">
                    Romify
                </div>
                <nav className="flex gap-10 items-start text-base mr-20 font-bold min-w-[240px] text-slate-900">
                    <a href="#team">Team</a>
                    <a href="#case-studies">Case Studies</a>
                    <a href="#publications">Publications</a>
                </nav>
                <div className="flex gap-6 items-start">
                    <a href="#" aria-label="Facebook">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc5204d76ce4dbcb790950022bfaaf65ef8a185c8e00aa1759cb88c4fbd274a1?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5" alt="" className="object-contain shrink-0 aspect-[1.05] w-[45px]" />
                    </a>
                    <a href="#" aria-label="Twitter">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/91553fed23bb3f5752c77d4caa50ce3124bd36ae2ac7817e86e0d55de5a81233?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5" alt="" className="object-contain shrink-0 aspect-[1.05] w-[45px]" />
                    </a>
                    <a href="#" aria-label="Instagram">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8f4ec2f7cb0fec55d2b25ae9222b301f2e7b13a6131d51b2666dd831f4e3d3e?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5" alt="" className="object-contain shrink-0 aspect-[1.05] w-[45px]" />
                    </a>
                    <a href="#" aria-label="LinkedIn">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/42dbe28878c1916217059a0e34c4e4eb79e29c1b1f21ef4c4d9d2f6b2f9fe03e?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5" alt="" className="object-contain shrink-0 aspect-[1.05] w-[45px]" />
                    </a>
                </div></div >

        </header >

    );
}

export default Footer;