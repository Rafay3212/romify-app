import React from 'react'

function Request() {
    return (
        <main>
            <section className="mt-32 ml-14 max-md:mt-10 max-md:ml-5">
                <h1 className="font-medium tracking-tighter text-black text-[180px] max-md:max-w-full max-md:text-4xl">
                    Coming Soon
                </h1>
                <p className="mt-8 text-2xl font-semibold tracking-tight text-black w-[602px] max-md:max-w-full">
                    Subscribe to be the first to know about all the events and dates when we are going live it!
                </p>
                <form className="flex flex-wrap gap-6 mt-14 max-w-full whitespace-nowrap w-[601px] max-md:mt-10">
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="example@email.com"
                        className="grow px-8 py-4 text-lg font-medium tracking-tight bg-white border border-solid border-stone-300 rounded-[29px] text-zinc-400 w-fit max-md:px-5"
                        required
                    />
                    <div className="flex flex-col"> <button type="submit" className="gap-1.5 px-12 py-5 text-base font-medium leading-none bg-white rounded-[40px] shadow-[0px_4px_45px_rgba(50,186,229,0.6)] text-zinc-800 max-md:px-5">
                        Subscribe
                    </button>

                    </div>
                </form>

                <div className="flex shrink-0 mt-32 bg-blue-400 rounded-full h-[21px] w-[21px] max-md:mt-10" aria-hidden="true" />
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
        </main>
    )
}

export default Request