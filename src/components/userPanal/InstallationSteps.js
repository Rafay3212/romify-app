import React from 'react';

function InstallationSteps({ steps }) {
  return (
    <div>
      {steps.map((step, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl font-bold mb-4">{step.title}</h2>
          <p className="mb-4 whitespace-pre-line">{step.content}</p>

          {/* Check if there's a second content block (content1) and render it */}
          {step.content1 && (
            <p className="mb-4 whitespace-pre-line">{step.content1}</p>
          )}

          {/* Check if there's a warning block and render it */}
          {step.warning && (
            <div className="bg-yellow-100 text-yellow-800 p-4 mb-4">
              <strong>Warning:</strong>
              <p className="whitespace-pre-line">{step.warning}</p>
            </div>
          )}

          {/* Render the image if it exists */}
          {step.image && (
            <img
              src={step.image}
              alt={step.title}
              className="object-contain max-w-full my-4"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default InstallationSteps;
