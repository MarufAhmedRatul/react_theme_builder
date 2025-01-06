import React, { useEffect, useRef } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChromePicker } from 'react-color';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ButtonSizeDropdown } from '../ui/btn-size-dropdown';
import { TipTapEditor2 } from './TipTapEditor2';

interface EnhancedTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  onStyleChange: (style: any) => void;
  multiline?: boolean;
  placeholder?:string;
  styles:Record<string, any>;
  componentName:string;
}

export const EnhancedTextEditor = ({ value, onChange, onStyleChange, multiline = false,placeholder="default placeholder",styles, componentName }: EnhancedTextEditorProps) => {
  console.log(styles);
  const [color, setColor] = React.useState(styles?.[componentName]?.color || {});
  const [btnColor, setBtnColor] = React.useState(styles?.[componentName]?.["background-color"] || {});

  const handleColorChange = (color: any) => {
    setColor(color.hex);
    onStyleChange({ color: color.hex });
  };
  const handleBtnColorChange= (color: any) => {
    setBtnColor(color.hex);
    onStyleChange({ "background-color": color.hex });
  };
  console.log(styles);

  return (
    <div className="space-y-2">
      <div className="flex gap-2 items-center">
        <Input
          type="number"
          placeholder="Font size (px)"
          className="w-24"
          onChange={(e) => onStyleChange({ fontSize: `${e.target.value}px` })}
        />
        <Popover>
          <PopoverTrigger asChild>
            <button
              type="button"
              className="px-3 py-1 border rounded flex items-center gap-2"
            >
              <div 
                className="w-4 h-4 rounded-sm border"
                style={{ backgroundColor: color }} 
              />
              Color
            </button>
          </PopoverTrigger>
          <PopoverContent className="p-0 border-none">
            <ChromePicker 
              color={color} 
              onChange={handleColorChange}
              styles={{
                default: {
                  picker: {
                    boxShadow: 'none',
                  }
                }
              }}
            />
          </PopoverContent>
        </Popover>
        {componentName==="heroButtonText"&&
        <Popover>
          <PopoverTrigger asChild>
            <button
              type="button"
              className="px-3 py-1 border rounded flex items-center gap-2"
            >
              <div 
                className="w-4 h-4 rounded-sm border"
                style={{ backgroundColor: btnColor }} 
              />
              Button Color
            </button>
          </PopoverTrigger>
          <PopoverContent className="p-0 border-none">
            <ChromePicker 
              color={btnColor} 
              onChange={handleBtnColorChange}
              styles={{
                default: {
                  picker: {
                    boxShadow: 'none',
                  }
                }
              }}
            />
          </PopoverContent>
        </Popover>
        }
        {componentName==="heroButtonText"&&
        <ButtonSizeDropdown></ButtonSizeDropdown>
        }
      </div>
      {multiline ? (
        // <Textarea
        //   value={value}
        //   placeholder={placeholder}
        //   onChange={(e) => onChange(e.target.value)}
        //   className="w-full min-h-[100px] "
        // />
        <TipTapEditor2
        value={value}
        onChange={onChange}
        // placeholder={placeholder} // Pass the placeholder prop
      />
      ) : (
        <Input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="w-full"
        />
      )}
    </div>
  );
};