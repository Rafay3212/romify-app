// src/components/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    InputGroup, InputGroupAddon, InputGroupText
} from "reactstrap";

export default function Login() {

    return (
        <div className="flex overflow-hidden flex-col pt-9 pb-24 pl-16 bg-white max-md:pl-5">
            <div className="self-start text-2xl font-medium tracking-wider text-amber-600">
                Romify
            </div>
            <div className="self-end mt-5 w-full max-w-[1278px] max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col mt-20 w-full max-md:mt-10 max-md:max-w-full">
                            <div className="flex flex-col items-center max-w-full w-[435px]">
                                <div className="flex flex-col w-full min-h-[140px]">
                                    <div className="flex-1 text-6xl font-semibold tracking-wide text-black max-md:max-w-full max-md:text-4xl">
                                        SignIn                                    </div>
                                    <div className="flex-1 mt-5 text-lg font-medium tracking-wide text-center text-black text-opacity-70 max-md:max-w-full">
                                        Get your hands on latest community
                                        <br />builds with Romify
                                    </div>
                                </div>
                                <button className="flex gap-2.5 justify-center items-center self-center px-3 py-2.5 mt-9 ml-6 max-w-full text-base font-medium text-black rounded-3xl border border-black border-solid min-h-[46px] w-[343px]">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9256e35f0cfcabcb390a1021de418c1108214a34cc0bf14f724ae9fde62da909?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5"
                                        alt=""
                                        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[27px]"
                                    />
                                    <span className="self-stretch my-auto">Login with Google</span>
                                </button>
                            </div>
                            <div className="flex gap-3.5 justify-center items-center self-start mt-14 ml-2.5 text-2xl font-medium text-black whitespace-nowrap max-md:mt-10">
                                <div className="shrink-0 self-stretch my-auto border-solid border-[3px] border-stone-300 h-[3px] w-[206px]" />
                                <span className="self-stretch my-auto">or</span>
                                <div className="shrink-0 self-stretch my-auto border-solid border-[3px] border-stone-300 h-[3px] w-[206px]" />
                            </div>
                            <form className="flex flex-col mt-10 w-full max-md:max-w-full">

                                <div className="mb-6">
                                    <label htmlFor="email" className="block text-lg text-black mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="flex-1 shrink gap-3 py-3 pr-3 pl-7 mt-1 max-w-full text-base font-medium tracking-normal rounded-3xl border border-black border-solid min-h-[44px] text-gray-950 text-opacity-30 w-[471px] max-md:pl-5 max-md:max-w-full"
                                        placeholder="example@email.com"
                                    />
                                </div>
                                <div className="flex flex-col mt-6 w-full max-md:max-w-full">
                                    <label htmlFor="passwordInput" className="text-lg text-black">
                                        Password
                                    </label>
                                    <div className="flex relative gap-10 items-center py-3.5 pr-3 pl-7 mt-1.5 max-w-full text-base font-medium tracking-normal rounded-3xl border border-black border-solid min-h-[46px] text-gray-950 text-opacity-30 w-[487px] max-md:pl-5">
                                        <input
                                            type="password"
                                            id="passwordInput"
                                            placeholder="Enter your password"
                                            className="z-0 self-stretch my-auto bg-transparent border-none outline-none w-full"
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ffca560a8624e052e36507150239846546664361b763d084b2afdbbe50c583dd?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5"
                                            alt=""
                                            className="object-contain z-0 shrink-0 self-stretch my-auto aspect-[1.1] w-[21px]" />
                                    </div>
                                </div>
                                <div className="flex gap-3.5 mt-7 text-lg">
                                    <input type="checkbox" id="terms" className="shrink-0 self-start mt-1.5 w-5 h-5 bg-white border border-solid border-stone-400" />
                                    <label htmlFor="terms" className="flex flex-col grow shrink-0 basis-0 w-fit">
                                        <span className="text-black">
                                            I agree to all <span className="font-medium">terms and conditions</span> of Romify.
                                        </span>
                                    </label>
                                </div>
                                <button type="submit" className="gap-3 self-center px-3 py-2.5 mt-5 max-w-full font-medium whitespace-nowrap bg-sky-600 rounded-3xl border border-black border-solid min-h-[44px] text-zinc-50 w-[332px]">
                                    Signup
                                </button>
                                <p className="self-end mt-2.5 mr-20 text-base text-red-600 max-md:mr-2.5">
                                    <Link to="/signup">    Don't have an account?</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
                        <div className="flex relative flex-col px-16 pt-20 pb-8 w-full rounded-3xl min-h-[846px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dd87ab3f279a46922406abbc60b60f9b0d454f2f8d921efc20e4ee162c2b1393?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd87ab3f279a46922406abbc60b60f9b0d454f2f8d921efc20e4ee162c2b1393?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd87ab3f279a46922406abbc60b60f9b0d454f2f8d921efc20e4ee162c2b1393?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd87ab3f279a46922406abbc60b60f9b0d454f2f8d921efc20e4ee162c2b1393?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd87ab3f279a46922406abbc60b60f9b0d454f2f8d921efc20e4ee162c2b1393?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd87ab3f279a46922406abbc60b60f9b0d454f2f8d921efc20e4ee162c2b1393?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd87ab3f279a46922406abbc60b60f9b0d454f2f8d921efc20e4ee162c2b1393?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd87ab3f279a46922406abbc60b60f9b0d454f2f8d921efc20e4ee162c2b1393?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5"
                                className="object-cover absolute inset-0 size-full"
                            />
                            <div className="relative self-center ml-3.5 text-3xl leading-9 text-center text-zinc-50">
                                Enter the world of Custom Roms
                            </div>
                            <div className="flex relative flex-wrap gap-5 justify-between w-full text-2xl font-semibold tracking-wide mt-[616px] text-white text-opacity-70 max-md:mt-10 max-md:max-w-full">
                                <div className="flex gap-2.5 justify-between items-center p-2.5 text-center min-h-[56px]">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ed5a196f4e19e4d9611c0f986124bfab26cb4a33553872b89ac0b66748af5ca?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5"
                                        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                                    />
                                    <div className="self-stretch my-auto">100% Trusted ROM</div>
                                </div>
                                <div className="flex gap-2.5 items-center p-2.5">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d95297e5774db05298ee19bb270bf9e21eea7d382e5b844ffb52c9b35b578ec3?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5"
                                        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
                                    />
                                    <div className="self-stretch my-auto">Community Support</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
}
