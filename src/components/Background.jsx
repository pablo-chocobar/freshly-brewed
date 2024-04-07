import React, { useState, useEffect } from 'react';

const BackgroundAnimation = () => {
  const [isAnimationWorking, setIsAnimationWorking] = useState(true);
  const [blobPosition, setBlobPosition] = useState({
    blob1: 'top-0 left-0',
    blob2: 'bottom-0 right-0',
  });

  return (
    <div className="relative max-w-screen min-w-screen max-h-screen min-h-screen overflow-hidden">
      {isAnimationWorking ? (
        <>
          <div
            className={`absolute bg-primary w-[380px] h-[380px] rounded-full shadow-primary shadow-2xl backdrop-blur-3xl blur-[350px] animate-blob1 ${blobPosition.blob1}`}
          />
          <div
            className={`bg-secondary w-[380px] h-[380px] rounded-full shadow-secondary shadow-2xl backdrop-blur-3xl blur-[350px] animate-blob2 ${blobPosition.blob2}`}
          />
        </>
      ) : (
        <>
          <div className="absolute top-0 left-0 bg-primary w-[380px] h-[380px] rounded-full shadow-primary shadow-2xl blur-[350px]" />
          <div className="absolute bottom-0 right-0 bg-secondary w-[380px] h-[380px] rounded-full shadow-secondary shadow-2xl blur-[350px]" />
        </>
      )}
    </div>
  );
};

export default BackgroundAnimation;

