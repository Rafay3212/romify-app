import React from 'react';

function Installguide() {
   
    const specs = [
        { label: 'Release', value: 'Release' },
        { label: 'SOC', value: 'Exynos 9810\nQualcomm Snapdragon 845' },
        { label: 'RAM', value: '4/6 GB' },
        { label: 'CPU', value: 'Octa-core Mongoose M3\n& Cortex-A55\n4x2.8 GHz & 4x1.7 GHz' },
        { label: 'Architecture', value: 'Arm64v8a' },
        { label: 'GPU', value: 'Mali-G72 MP18 (EX)\nAdreno 630(QLM)' },
        { label: 'Network', value: '2G GSM\n3G H+\n4G LTE' },
        { label: 'Storage', value: '64/128/256' },
        { label: 'SD Card', value: 'Upto 512 GB' },
        { label: 'Screen', value: 'Super AMOLED, HDR10\n5.8 inches, 84.8 cm2\n1440 x 2960 pixels' },
        { label: 'Bluetooth', value: '5.0, A2DP, LE, aptX' },
        { label: 'Wifi', value: 'Wi-Fi 802.11 a/b/g/n/ac\ndual-band, Wi-Fi Direct' },
        { label: 'Peripherals', value: 'Iris scanner\nFingerprint\nAccelerometer\nGyroscope\nproximity\nCompass\nBarometer\nHeart rate\nSpO2 ANT+\nSamsung Pay' },
        { label: 'Camera', value: '12 MP, f/1.5-2.4\n26mm (wide), 1/2.55"\n1.4µm, dual pixel PDAF, OIS' },
        { label: 'Battery', value: 'Li-Ion 3000 mAh' },
        { label: 'Maintainer', value: 'Unknown' },
        { label: 'Supported Models', value: 'G960F\nG960F/DS\nG960U\nG960W\nG9600' },
        { label: 'Current Versions', value: 'Android 12, 13' },
      ];
      
    const steps = [
      {
        title: 'STEP 1: Unlock Bootloader on Galaxy S9',
        content: `Unlocking the bootloader on a Samsung Galaxy S9 can allow you to install custom firmware, root your device, and make other modifications. However, it also comes with some risks, such as voiding your warranty, losing data, and potentially bricking your device. Here's how you can do it:
    
    Step 1: Backup Your Data
    Unlocking the bootloader will erase all data on your device. Make sure to back up everything important before proceeding.
    
    Step 2: Enable Developer Options
    1. Go to Settings > About Phone > Software Information.
    2. Tap Build Number seven times until you see a message saying "Developer mode has been enabled."
    3. Go back to Settings and now you should see Developer Options.
    
    Step 3: Enable OEM Unlock
    1. In Developer Options, look for OEM Unlocking and enable it.
    2. Confirm any warning that appears.`,
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/af6df71c95343f6afd17c2aec8cf82cd8e6f6b83f5c6783d2de8eb474940fb62?placeholderIfAbsent=true&apiKey=cb1db43ffc26405789293b2cef5404b8',
      },
      {
        title: 'STEP 2: Download TWRP for Galaxy S9',
        content: `Next up, download the official TWRP TAR file [and not IMG] for your device from below:
    • TWRP for Galaxy S9 (Exynos): Download Link
    • TWRP for Galaxy S9+ (Exynos): Download Link
    
    STEP 3: Download Odin
    • After that, you will have to get hold of Odin so as to flash the TWRP TAR file to your Galaxy S9/S9+ device. So download it and then extract it to any convenient location on your PC.`,
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bebd4cd8ab0b4454641f4d96a179f72a8e9666f9e6363d3a27057a47976eb495?placeholderIfAbsent=true&apiKey=cb1db43ffc26405789293b2cef5404b8',
      },
      {
        title: 'STEP 4: Boot Galaxy S9 Download Mode',
        content: `1. To begin with, power off your device.
    2. Then press and hold Vol Down + Bixby + Power keys together for 15 seconds.`,
        warning: `Warning: Follow these Steps carefully
    1. Before clicking start click on top left option button from options uncheck auto reboot
    
    Now click on start
    After flashing done .
    click power button+volume down+bixby key
    when screen goes black release all keys and immediately click power+bixby+volume up
    if you failed to do it immediately you have to repeat all steps from step 4.`,
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/eb4449972e6f012e703aec7b801e4514a3d2756cc54c80fbbf6196ed3039a58a?placeholderIfAbsent=true&apiKey=cb1db43ffc26405789293b2cef5404b8',
      },
      {
        title: 'STEP 6: Initialize TWRP on Galaxy S9/S9+',
        content: `1. TWRP will ask if you want to allow system modifications, select "Keep /system RO".
    2. After that, go to Wipe and tap on Format Data.
    3. Then type in YES in the space provided and hit Enter. Your device will undergo a format.
    4. Once done, go to Reboot and select Recovery. Your device will reboot to TWRP`,
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7c3a9b3a5a6c78202f69f88c3aa221bcbfb5977bfaaeca2918356dd911cbcd88?placeholderIfAbsent=true&apiKey=cb1db43ffc26405789293b2cef5404b8',
      },
    ];
    
    
    
 
   

  return (
    <div className="flex flex-col items-start px-11 pt-9 pb-14 bg-white max-md:px-5">
   <main className="self-stretch mt-24 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
      <section className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col items-start pr-12 pl-5 text-xl font-semibold text-neutral-400 max-md:pr-5 max-md:max-w-full">
              <h1 className="text-5xl tracking-tighter max-md:max-w-full max-md:text-4xl">
                Samsung Galaxy S9 (Korea)
              </h1>
              <div className="tracking-tight text-slate-600">SM-G960N</div>
              <h2 className="mt-6 text-3xl font-medium tracking-tighter">
                Download(s):
              </h2>
              <div className="mt-5 tracking-tight text-indigo-300">
                Get build here
              </div>
              <h2 className="mt-6 text-3xl font-medium tracking-tighter">
                Installation process:
              </h2>
              {steps.map((step, index) => (
                <div className="mt-8">
                <h3 className="tracking-tight text-black">{step.title}</h3>
                <div className="mt-4 text-base font-medium leading-5 text-neutral-600 max-md:max-w-full">
                  {step.content}
                </div>
                {step.image && (
                  <img 
                    loading="lazy" 
                    src={step.image} 
                    alt={`Illustration for ${step.title}`} 
                    className="object-contain mt-9 w-full aspect-[2.06] max-md:max-w-full" 
                  />
                )}
                {step.warning && (
                  <div className="mt-9 text-base font-medium leading-5 text-rose-600 max-md:max-w-full">
                    {step.warning}
                  </div>
                )}
              </div>
              ))}
            </div>
          </div>
        </section>
        <section className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col w-full text-base font-semibold tracking-tight max-md:mt-10">
      <img 
      loading="lazy" 
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fe4aa21e17abb0e065a1802dcdf84bb15e5ee24302de057ccef34f99b046e58?placeholderIfAbsent=true&apiKey=cb1db43ffc26405789293b2cef5404b8" 
      alt="Samsung Galaxy S9 (Korea)" 
      className="object-contain self-center max-w-full aspect-[0.77] w-[295px]" 
    />
        <h2 className="self-center mt-4 text-xl tracking-tight text-neutral-400">Samsung Galaxy S9 (Korea)</h2>
        <>
      {specs.map((spec, index) => (
        <React.Fragment key={index}>
          <div className="shrink-0 mt-3 ml-3 max-w-full h-px border border-solid border-neutral-200 w-[350px] max-md:mr-1.5 max-md:ml-2.5" />
          <div className="flex gap-5 justify-between self-center mt-3 max-w-full w-[330px]">
            <div className="text-black">{spec.label}</div>
            <div className="text-right text-stone-400 whitespace-pre-line">{spec.value}</div>
          </div>
        </React.Fragment>
      ))}
    </>
      </div>
    </section>
      </div>
    </main>
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
        <button className="overflow-hidden gap-2.5 self-stretch px-6 py-4 mt-14 max-w-full text-xl font-semibold text-white bg-blue-500 border border-black border-solid min-h-[58px] rounded-[30px] w-[200px] max-md:px-5 max-md:mt-10">
          Join Now
        </button>
      </div>
      <div className="mt-10 text-sm tracking-wider text-center opacity-80 text-slate-900">
        © 2024 Romify, LLC
      </div>
    </section>
  </div>
  );
}

export default Installguide;