import { PropsWithChildren } from "react";

export const HeroOrbit = ({
  children,
  size,
  rotation,
  speed, // Speed for the orbit rotation
  childSpeed, // Speed for the child's rotation
}: PropsWithChildren<{ size: number; rotation: number; speed: number; childSpeed?: number }>) => {
  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-red-500"
      style={{ height: `${size}px`, width: `${size}px` }}
    >
      {/* Outer rotating container with dynamic speed */}
      <div
        className="animate-spin"
        style={{
          height: `${size}px`,
          width: `${size}px`,
          animationDuration: `${speed}s`, // Dynamic speed for orbit
        }}
      >
        {/* Inner container to counter-rotate the children */}
        <div
          className="flex items-start justify-start"
          style={{
            transform: `rotate(${rotation}deg)`,
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          {/* Counter-rotate the children to keep them stable */}
          <div
            className="outline-red-500"
            style={{
              transform: `rotate(${rotation * -1}deg)`,
            }}
          >
            {/* Add rotation to the child */}
            <div
              className="animate-spin"
              style={{
                animationDuration: `${childSpeed}s`, // Dynamic speed for child
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};