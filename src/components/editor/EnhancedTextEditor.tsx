import { Input } from "@/components/ui/input";
import { ChromePicker } from "react-color";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ButtonSizeDropdown } from "../ui/btn-size-dropdown";
import TipTapEditorFloating from "./TipTapEditorFloating";
import React from "react";

interface EnhancedTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  onStyleChange: (style: any) => void;
  multiline?: boolean;
  placeholder?: string;
  styles: Record<string, any>;
  componentName: string;
  onShadCNPropChange?: (prop: any) => void;
  fontSize?:number;
}

export const EnhancedTextEditor = ({
  value,
  onChange,
  onStyleChange,
  multiline = false,
  placeholder = "default placeholder",
  styles,
  componentName,
  onShadCNPropChange,
  fontSize=0
}: EnhancedTextEditorProps) => {
  // console.log(fontSize);
  const [color, setColor] = React.useState(
    styles?.[componentName]?.color || {}
  );
  const [btnColor, setBtnColor] = React.useState(
    styles?.[componentName]?.["background-color"] || {}
  );

  const handleColorChange = (color: any) => {
    setColor(color.hex);
    onStyleChange({ color: color.hex });
  };
  const handleBtnColorChange = (color: any) => {
    setBtnColor(color.hex);
    onStyleChange({ "background-color": color.hex });
  };
  const buttonSizes = ["default", "sm", "lg", "icon"] as const;
  type TBtnSize = (typeof buttonSizes)[number];

  const handleBtnSizeChange = (size: TBtnSize) => {
    onShadCNPropChange({ size: size });
  };

  return (
    <div className='space-y-2'>
      <div className='flex gap-2 items-center'>
        <Input
          type='number'
          placeholder='Font size (px)'
          className='w-24'
          onChange={(e) => onStyleChange({ fontSize: `${e.target.value}px` })}
          defaultValue={fontSize}
        />
        <Popover>
          <PopoverTrigger asChild>
            <button
              type='button'
              className='px-3 py-1 border rounded flex items-center gap-2'
            >
              <div
                className='w-4 h-4 rounded-sm border'
                style={{ backgroundColor: color }}
              />
              Color
            </button>
          </PopoverTrigger>
          <PopoverContent className='p-0 border-none'>
            <ChromePicker
              color={color}
              onChange={handleColorChange}
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
        {componentName === "heroButtonText" && (
          <Popover>
            <PopoverTrigger asChild>
              <button
                type='button'
                className='px-3 py-1 border rounded flex items-center gap-2'
              >
                <div
                  className='w-4 h-4 rounded-sm border'
                  style={{ backgroundColor: btnColor }}
                />
                Button Color
              </button>
            </PopoverTrigger>
            <PopoverContent className='p-0 border-none'>
              <ChromePicker
                color={btnColor}
                onChange={handleBtnColorChange}
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
        )}
        {componentName === "heroButtonText" && (
          <ButtonSizeDropdown
            initialSize={styles.heroButtonTextShadCN?.size}
            onChange={handleBtnSizeChange}
          ></ButtonSizeDropdown>
        )}
      </div>
      {multiline ? (
        <TipTapEditorFloating value={value} onChange={onChange}></TipTapEditorFloating>
      ) : (
        <Input
          type='text'
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className='w-full'
        />
      )}
    </div>
  );
};
