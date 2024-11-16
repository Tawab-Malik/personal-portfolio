"use client";
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";

const PhotoCompare = ({ originalImg, avatarImg }: { originalImg: string; avatarImg: string }) => {
  const [sliderPosition, setSliderPosition] = useState(50); // Start in the center
  const [isDragging, setIsDragging] = useState(false); // Track if the dragger is being dragged

  // Function to handle dragging
  const handleDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return; // Only update slider position if dragging the button

    const container = (e.target as HTMLElement).closest(".photo-compare-container") as HTMLElement;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const newPosition = ((clientX - rect.left) / rect.width) * 100;

    // Ensure slider stays within bounds
    setSliderPosition(Math.min(100, Math.max(0, newPosition)));
  };

  // Start dragging
  const startDragging = () => {
    setIsDragging(true);
  };

  // Stop dragging
  const stopDragging = () => {
    setIsDragging(false);
  };

  // Disable default drag behavior to prevent image selection
  const preventDrag = (e: React.DragEvent) => {
    e.preventDefault();
  };

  // Swipeable handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => setSliderPosition((prev) => Math.max(prev - 5, 0)),
    onSwipedRight: () => setSliderPosition((prev) => Math.min(prev + 5, 100)),
    trackMouse: true,
  });

  return (
    <div
      className="photo-compare-container relative w-[300px] md:w-full max-w-lg h-[400px] md:h-[600px] mx-5 md:mx-auto mb-10 select-none" // Added `select-none` to disable text/image selection
      {...handlers}
      onMouseMove={handleDrag}
      onTouchMove={handleDrag}
      onMouseUp={stopDragging} // Stop dragging on mouse up
      onTouchEnd={stopDragging} // Stop dragging on touch end
      onMouseLeave={stopDragging} // Stop dragging if the mouse leaves the container
      onDragStart={preventDrag} // Prevent default drag behavior
    >
      {/* Images */}
      <div className="relative w-[300px] md:w-full h-[400px] md:h-full">
        {/* Right Image (Avatar) */}
        <Image
          src={avatarImg}
          alt="Avatar"
          className="absolute top-0 w-[300px] md:!w-full h-[400px] md:h-full left-0 object-cover z-0"
          height={500}
          width={400}
          draggable={false} // Disable drag on image
        />

        {/* Left Image (Original) */}
        <Image
          src={originalImg}
          alt="Original"
          className="absolute top-0 left-0 w-[300px] md:!w-full h-[400px] md:h-full object-cover z-10"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          height={500}
          width={400}
          draggable={false} // Disable drag on image
        />
      </div>

      {/* Dragger */}
      <div
        className="absolute top-0 z-30 h-full w-1 bg-gray-800 opacity-75"
        style={{ left: `${sliderPosition}%` }}
      >
        <div
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white border-2 border-gray-800 rounded-full shadow-md cursor-pointer"
          onMouseDown={startDragging} // Start dragging on mouse down
          onTouchStart={startDragging} // Start dragging on touch start
        ></div>
      </div>
    </div>
  );
};

export default PhotoCompare;
