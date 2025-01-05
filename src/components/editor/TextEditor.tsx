import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

interface TextEditorProps {
  value: string;
  onChange: (value: string) => void;
  onStyleChange: (style: any) => void;
}

export const TextEditor = ({ value, onChange, onStyleChange }: TextEditorProps) => {
  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <Select onValueChange={(val) => onStyleChange({ fontSize: val })}>
          <SelectTrigger className="w-24">
            <SelectValue placeholder="Size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="text-sm">Small</SelectItem>
            <SelectItem value="text-base">Normal</SelectItem>
            <SelectItem value="text-lg">Large</SelectItem>
            <SelectItem value="text-xl">XLarge</SelectItem>
          </SelectContent>
        </Select>
        
        <Select onValueChange={(val) => onStyleChange({ textAlign: val })}>
          <SelectTrigger className="w-24">
            <SelectValue placeholder="Align" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="text-left">Left</SelectItem>
            <SelectItem value="text-center">Center</SelectItem>
            <SelectItem value="text-right">Right</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={(val) => onStyleChange({ color: val })}>
          <SelectTrigger className="w-24">
            <SelectValue placeholder="Color" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="text-primary">Primary</SelectItem>
            <SelectItem value="text-gray-600">Gray</SelectItem>
            <SelectItem value="text-black">Black</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full"
      />
    </div>
  );
};