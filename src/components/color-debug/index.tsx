import * as React from "react";

import { cn } from "@/lib/utils";
import {
  tailwindCustomColors,
  rawCustomColors,
  rawShadColors,
  tailwindShadColors,
} from "./constants";

const ColorItem = ({ color }: { color: string }) => (
  <div className="flex gap-2 items-center">
    <div className={cn(["rounded w-4 h-4", color])} />
    <div className={"font-sans text-md"}>{color}</div>
  </div>
);

const ColorItemRaw = ({
  color,
  useHsl = false,
}: {
  color: string;
  useHsl?: boolean;
}) => {
  const varInner = `var(--${color})`;
  const colorVar = useHsl ? `hsl(${varInner})` : varInner;
  return (
    <div className="flex gap-2 items-center">
      <div
        className={cn(["rounded w-4 h-4"])}
        style={{
          backgroundColor: colorVar,
        }}
      />
      <div className={"typography-4"}>{color}</div>
    </div>
  );
};

type ColorDebugProps = {
  showTailwind?: boolean;
  showRaw?: boolean;
  showShad?: boolean;
  showCustom?: boolean;
};

export const ColorDebug = ({
  showTailwind = true,
  showRaw = true,
  showShad = false,
  showCustom = true,
}: ColorDebugProps) => {
  //
  return (
    <div className="p-24 border border-red-500 flex gap-16">
      {/* Raw Collection */}
      {showRaw && (
        <div className="flex flex-col gap-8">
          <div className="typography-2">raw</div>
          {/* Colors Row */}
          <div className="flex gap-4">
            {showShad && (
              <div className="flex flex-col gap-2">
                <div className="typography-2">shad</div>

                {rawShadColors.map((color, i) => (
                  <ColorItemRaw key={i} color={color} useHsl />
                ))}
              </div>
            )}
            {showCustom && (
              <div className="flex flex-col gap-2">
                <div className="typography-2">custom</div>
                {rawCustomColors.map((color, i) => (
                  <ColorItemRaw key={i} color={color} useHsl={false} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Taiwlind Collection */}
      {showTailwind && (
        <div className="flex flex-col gap-8">
          <div className="typography-2">tailwind</div>
          {/* Colors Row */}
          <div className="flex gap-4">
            {showShad && (
              <div className="flex flex-col gap-2">
                <div className="typography-2">shad</div>
                {tailwindShadColors.map((color, i) => (
                  <ColorItem key={i} color={color} />
                ))}
              </div>
            )}
            {showCustom && (
              <div className="flex flex-col gap-2">
                <div className="typography-2">custom</div>
                {tailwindCustomColors.map((color, i) => (
                  <ColorItem key={i} color={color} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
