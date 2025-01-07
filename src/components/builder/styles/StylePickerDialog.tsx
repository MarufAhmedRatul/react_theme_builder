import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { StyleOption } from "./styleTypes";

interface StylePickerDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  options: StyleOption[];
  currentStyle: string;
  onStyleSelect: (styleId: string) => void;
}

export const StylePickerDialog = ({
  open,
  onOpenChange,
  options,
  currentStyle,
  onStyleSelect,
}: StylePickerDialogProps) => {
  // useEffect(() => {
  //   console.log(options);
  // }, [options]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Choose Style</DialogTitle>
          <DialogDescription>
            Select a style for this component
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4">
          {options.map((style) => (
            <button
              key={style.id}
              className={`p-4 border rounded-lg hover:border-primary transition-colors ${
                currentStyle === style.id ? "border-primary" : "border-gray-200"
              }`}
              onClick={() => onStyleSelect(style.id)}
            >
              <h3 className="font-semibold">{style.label}</h3>
              <p className="text-sm text-gray-500">{style.description}</p>
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
