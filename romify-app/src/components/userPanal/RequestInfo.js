import React from 'react';

function RequestInfo() {
  return (
    <section className="flex flex-col items-center self-center mt-40 max-w-full w-[581px] max-md:mt-10">
      <div className="flex flex-col items-center w-full max-w-[581px] max-md:max-w-full">
        <div className="flex flex-col items-center w-full text-center text-slate-900">
          <div className="text-sm uppercase text-neutral-700 tracking-[2.8px]">
            open source project
          </div>
          <h2 className="mt-5 text-5xl font-bold max-md:max-w-full max-md:text-4xl">
            Request More Information
          </h2>
          <p className="mt-5 text-lg font-semibold leading-8 opacity-80 max-md:max-w-full">
            ROMIFY is a centralized platform for best and latest Custom ROMs available for various devices
          </p>
        </div>
        <button className="flex justify-center overflow-hidden mx-auto self-stretch px-6 py-4 mt-14 max-w-full text-xl font-semibold text-white bg-blue-500 border border-black border-solid min-h-[58px] rounded-[30px] w-[200px] max-md:px-5 max-md:mt-10">
          Join Now
        </button>
      </div>
      <div className="mt-10 text-sm tracking-wider text-center opacity-80 text-slate-900">
        © 2024 Romify, LLC
      </div>
    </section>
  );
}

export default RequestInfo;