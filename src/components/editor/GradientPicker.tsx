import { ChromePicker } from "react-color";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";

interface GradientPickerProps {
  onStyleChange: (style: any) => void;
  styles: Record<string, any>;
  componentName: string;
}

export const GradientPicker = ({
  onStyleChange,
  styles,
  componentName,
}: GradientPickerProps) => {

  const [colorFrom, setColorFrom] = React.useState(
    styles?.[componentName]?.colorFrom || "#a855f7"
  );
  const [colorTo, setColorTo] = React.useState(
    styles?.[componentName]?.colorTo || "#ec4899"
  );
  const handleColorFromChange = (color: any) => {
    setColorFrom(color.hex);
    onStyleChange({ colorFrom: color.hex });
  };
  const handleColorToChange = (color: any) => {
    setColorTo(color.hex);
    onStyleChange({ colorTo: color.hex });
  };
  console.log(styles.heroGradient);


  return (
    <div className='space-y-2'>
      <p>Gradient Color Picker</p>
      <div className='flex gap-2 items-center'>
        <Popover>
          <PopoverTrigger asChild>
            <button
              type='button'
              className='px-3 py-1 border rounded flex items-center gap-2'
            >
              <div
                className='w-4 h-4 rounded-sm border'
                style={{ backgroundColor: colorFrom }}
              />
              From
            </button>
          </PopoverTrigger>
          <PopoverContent className='p-0 border-none'>
            <ChromePicker
              color={colorFrom}
              onChange={handleColorFromChange}
              styles={{
                default: {
                  picker: {
                    boxShadow: "none",
                  },
                },
              }}
            />
          </PopoverContent>
        </Popover>
 
        <Popover>
          <PopoverTrigger asChild>
            <button
              type='button'
              className='px-3 py-1 border rounded flex items-center gap-2'
            >
              <div
                className='w-4 h-4 rounded-sm border'
                style={{ backgroundColor: colorTo }}
              />
              To
            </button>
          </PopoverTrigger>
          <PopoverContent className='p-0 border-none'>
            <ChromePicker
              color={colorTo}
              onChange={handleColorToChange}
              styles={{
                default: {
                  picker: {
                    boxShadow: "none",
                  },
                },
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
      
    </div>
  );
};
