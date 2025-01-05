import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface SpacingControlsProps {
  onChange: (spacing: { margin?: string; padding?: string }) => void;
}

export const SpacingControls = ({ onChange }: SpacingControlsProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <Label>Margin</Label>
        <Input
          type="text"
          placeholder="e.g., 4px or 1rem"
          onChange={(e) => onChange({ margin: e.target.value })}
        />
      </div>
      <div>
        <Label>Padding</Label>
        <Input
          type="text"
          placeholder="e.g., 4px or 1rem"
          onChange={(e) => onChange({ padding: e.target.value })}
        />
      </div>
    </div>
  );
};