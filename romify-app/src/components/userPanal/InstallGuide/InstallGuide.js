import React from 'react';
import SpecList from '../SpecList';
import InstallationSteps from '../InstallationSteps';
import RequestInfo from '../RequestInfo';

function InstallGuide() {
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
                <InstallationSteps steps={steps} />
              </div>
            </div>
          </section>
          <section className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full text-base font-semibold tracking-tight max-md:mt-10">
              <img 
                loading="lazy" 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c202f318a7425bf079174e220414370a2703ba8e2e10cabcba3681905e17b4c?placeholderIfAbsent=true&apiKey=cb1db43ffc26405789293b2cef5404b8" 
                alt="Samsung Galaxy S9 (Korea)" 
                className="object-contain self-center max-w-full aspect-[0.77] w-[295px]" 
              />
              <h2 className="self-center mt-4 text-xl tracking-tight text-neutral-400">Samsung Galaxy S9 (Korea)</h2>
              <SpecList specs={specs} />
            </div>
          </section>
        </div>
      </main>
      <RequestInfo />
    </div>
  );
}

export default InstallGuide;