import React from 'react'

const newsItems = [
    {
        author: { name: "Ralph Edwards", avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/26bcc9e237be583fdd2aced439abc36520b0bc3e840b543bf81488a16580e18f?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5" },
        date: { day: "10 Apr", year: "2024" },
        title: "Fabulous fourtten, and some fond farewell",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris."
    },
    {
        author: { name: "Ralph Edwards", avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/fb72674c6a5e3826c2ff38eb061befdbdee64a8e49ff35f34baf7c12391a92fb?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5" },
        date: { day: "10 Apr", year: "2024" },
        title: "Lorem ipsum dolor sit amet consectetur.",
        content: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum."
    },
    {
        author: { name: "Marx Hershey", avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/f86b30b8f875ee662430b09c4eb98fd99744a75ec2f0e7b71a7fc829c87e17c5?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5" },
        date: { day: "10 Apr", year: "2024" },
        title: "Fabulous fourtten, and some fond farewell",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris."
    },
    {
        author: { name: "Rochel Foose", avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/022f3fa5e74047924ac2a5f62a5c70457431e02f6520fecfcc18de5a0b086e24?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5" },
        date: { day: "10 Apr", year: "2024" },
        title: "Lorem ipsum dolor sit amet consectetur adipiscing.",
        content: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.."
    },
    {
        author: { name: "Chantal Shelburne", avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/42e521c04c686c0c225d8a6704569b6b036dbe5a7c9bc833144329dfb912e03c?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5" },
        date: { day: "10 Apr", year: "2024" },
        title: "Fabulous fourtten, and some fond farewell",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris."
    },
    {
        author: { name: "Marci Senter", avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/37ec41f86400aae0d683cf0e8a658d7a42a1366f805c221232b1e6677be41cb2?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5" },
        date: { day: "10 Apr", year: "2024" },
        title: "Lorem ipsum dolor sit amet consectetur.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris."
    }
];

function News() {
    return (
        <div className="flex flex-col px-16 pt-3 pb-14 bg-white max-md:px-5">
            <section className="mt-24 max-md:mt-10 max-md:ml-0.5">
                <h2 className="text-4xl font-semibold tracking-tighter text-black">Latest News</h2>
                <div className="mt-8 max-md:mr-0.5 max-md:max-w-full">
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-4 max-md:flex-col">
                        {newsItems.map((item, index) => (
                            <article className="flex flex-col w-full max-md:ml-0 max-md:w-full">
                                <div className="flex overflow-hidden flex-col py-9 w-full rounded-2xl border border-solid border-stone-400 max-md:mt-10 max-md:max-w-full">
                                    <div className="flex gap-2 items-center self-start ml-36 text-sm font-medium text-neutral-800 max-md:ml-2.5">
                                        <img loading="lazy" src={item.author.avatar} alt={`${item.author.name}'s avatar`} className="object-contain shrink-0 self-stretch my-auto w-6 rounded-full aspect-square" />
                                        <div className="self-stretch my-auto">{item.author.name}</div>
                                    </div>
                                    <div className="flex flex-col px-6 mt-5 w-full max-md:px-5 max-md:max-w-full">
                                        <div className="max-md:max-w-full"><div className="flex gap-5 max-md:flex-col">
                                            <div className="flex flex-col w-[15%] max-md:ml-0 max-md:w-full">
                                                <div className="flex flex-col items-center self-stretch my-auto max-md:mt-10">
                                                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e693a321cddb53845f4d780830559318e6ef05e501cc7efe0142f6797af9110b?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5" alt="" className="object-contain aspect-square w-[33px]" />
                                                    <div className="flex flex-col items-center mt-3">
                                                        <div className="text-2xl font-bold text-zinc-600">{item.date.day}</div>
                                                        <div className="mt-1 text-base font-semibold text-zinc-400">{item.date.year}</div>
                                                    </div>
                                                </div></div>
                                            <div className="flex flex-col ml-5 w-[85%] max-md:ml-0 max-md:w-full">
                                                <div className="flex flex-col grow text-black min-h-[197px] max-md:mt-8 max-md:max-w-full">
                                                    <h3 className="flex-1 text-3xl font-bold tracking-tighter max-md:max-w-full">{item.title}</h3>
                                                    <p className="mt-4 text-base font-medium max-md:max-w-full">{item.content}</p>
                                                </div>
                                            </div> </div>
                                        </div>
                                        <div className="flex gap-10 self-end mt-4 mr-7 max-w-full text-sm font-medium w-[441px] max-md:mr-2.5">
                                            <div className="flex flex-1 gap-3 items-start text-black">
                                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/208ae4732d7debbf2d289e07f967bbbb9d2213aa6b59ccd3f43ceebf6b37a29a?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5" alt="" className="object-contain shrink-0 w-4 aspect-square" />
                                                <div>148 Comments</div> </div>
                                            <div className="flex flex-1 gap-3 justify-center items-end text-blue-500">
                                                <div>Continue Reading</div>
                                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c97315146c48af14ec1dfe3c93438eaacbfa6282bd5d05e8eced84123a4d116?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5" alt="" className="object-contain shrink-0 w-3.5 aspect-square" />
                                            </div>
                                        </div>
                                    </div> </div>
                            </article>
                        ))}
                    </div>
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


    )
}

export default News