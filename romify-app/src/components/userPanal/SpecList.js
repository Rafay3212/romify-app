import React from 'react';

function SpecList({ specs }) {
  return (
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
  );
}

export default SpecList;