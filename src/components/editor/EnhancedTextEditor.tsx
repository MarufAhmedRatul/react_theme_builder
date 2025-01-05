import React, { useEffect, useRef } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChromePicker } from 'react-color';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface EnhancedTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  onStyleChange: (style: any) => void;
  multiline?: boolean;
}

export const EnhancedTextEditor = ({ value, onChange, onStyleChange, multiline = false }: EnhancedTextEditorProps) => {
  const [color, setColor] = React.useState('#000000');

  const handleColorChange = (color: any) => {
    setColor(color.hex);
    onStyleChange({ color: color.hex });
  };

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
      </div>
      {multiline ? (
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full min-h-[100px]"
        />
      ) : (
        <Input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full"
        />
      )}
    </div>
  );
};