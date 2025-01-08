import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
import { useEffect, useState } from "react";
// import { ChromePicker } from "react-color";
import { TipTapEditor } from "../../editor/TipTapEditor";
import { MenuItem } from "./MenuItem";

interface HeaderSectionProps {
  content: Record<string, string>;
  styles: Record<string, any>;
  isEditing: boolean;
  onContentChange: (key: string, value: string) => void;
  onStyleChange: (key: string, value: any) => void;
}

const headerStyles = [
  {
    id: "classic",
    label: "Classic",
    // className: "",
    className: "bg-slate-400 border-b",
    preview: "Simple and clean header with logo and navigation",
  },
  {
    id: "modern",
    label: "Modern",
    // className: "",
    className: "bg-gradient-to-r from-blue-500 to-purple-500 text-white",
    preview: "Gradient background with modern styling",
  },
  {
    id: "minimal",
    label: "Minimal",
    // className: "",
    className: "bg-lime-100 border-b",
    preview: "Minimalistic design with essential elements",
  },
  {
    id: "dark",
    label: "Dark",
    // className: "",
    className: "bg-gray-800 text-white",
    preview: "Dark theme with contrasting elements",
  },
  {
    id: "transparent",
    label: "Transparent",
    // className: "",
    className: "bg-transparent backdrop-blur-sm",
    preview: "Transparent background with blur effect",
  },
];

export const HeaderSection = ({
  content,
  styles,
  isEditing,
  onContentChange,
  onStyleChange,
}: HeaderSectionProps) => {
  const [showStylePicker, setShowStylePicker] = useState(!content.headerStyle);
  const [layout, setLayout] = useState(content.style);
  const currentStyle = content.headerStyle || "classic";
  // const [color, setColor] = React.useState("#000000");
  const headerStyle =
    headerStyles.find((style) => style.id === currentStyle) || headerStyles[0];

  const handleStyleSelect = (styleId: string) => {
    onContentChange("headerStyle", styleId);
    setShowStylePicker(false);
  };

  // const handleColorChange = (color: any) => {
  //   setColor(color.hex);
  //   console.log(color.hex);
  //   // onStyleChange({ color: color.hex });
  // };

  const layoutHandler = (e: any) => {
    content.style = e;
    setLayout(content.style);
  };

  const ShowLogo = () => (
    <div className="font-bold">
      {isEditing ? (
        <TipTapEditor
          value={content.logo || "Logo"}
          onChange={(value) => onContentChange("logo", value)}
        />
      ) : (
        <span
          dangerouslySetInnerHTML={{
            __html: content.logo || "Logo",
          }}
        />
      )}
    </div>
  );

  const EditHeaderLayout = () =>
    isEditing && (
      <div className="flex gap-4">
        {["Center", "Start", "End", "Between"].map((position) => (
          <Button
            key={position}
            variant="outline"
            onClick={() => layoutHandler(position.toLowerCase())}
          >
            {position}
          </Button>
        ))}
      </div>
    );

  const EditHeaderStyle = () =>
    isEditing && (
      <div>
        <Button variant="destructive" onClick={() => setShowStylePicker(true)}>
          Change Header Style
        </Button>
      </div>
    );

  // const EditHeaderColor = () =>
  //   isEditing && (
  //     <Popover>
  //       <PopoverTrigger asChild>
  //         <button
  //           type="button"
  //           className="px-3 py-1 border rounded flex items-center gap-2"
  //         >
  //           <div
  //             className="w-4 h-4 rounded-sm border"
  //             style={{ backgroundColor: color }}
  //           />
  //           Color
  //         </button>
  //       </PopoverTrigger>
  //       <PopoverContent className="p-0 border-none">
  //         <ChromePicker
  //           color={color}
  //           onChange={handleColorChange}
  //           styles={{
  //             default: {
  //               picker: {
  //                 boxShadow: "none",
  //               },
  //             },
  //           }}
  //         />
  //       </PopoverContent>
  //     </Popover>
  //   );

  useEffect(() => {
    setLayout(content.style);
    console.log(content);
  }, [content]);

  return (
    <>
      <Dialog open={showStylePicker} onOpenChange={setShowStylePicker}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Choose Header Style</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4 p-4">
            {headerStyles.map((style) => (
              <button
                key={style.id}
                className={`p-4 border rounded-lg hover:border-primary transition-colors ${
                  currentStyle === style.id
                    ? "border-primary"
                    : "border-gray-200"
                }`}
                onClick={() => handleStyleSelect(style.id)}
              >
                <div className={`h-20 rounded-md mb-2 ${style.className}`}>
                  <div className="flex justify-between items-center p-4">
                    <div className="font-bold">Logo</div>
                    <div className="flex gap-4">
                      <span>Menu</span>
                      <span>Menu</span>
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold">{style.label}</h3>
                <p className="text-sm text-gray-500">{style.preview}</p>
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      <div className="flex justify-start items-center gap-5 my-4">
        <EditHeaderStyle />
        <EditHeaderLayout />
        {/* <EditHeaderColor /> */}
      </div>
      {/* <h1>{color}</h1> */}
      <nav
        className={`flex p-5 gap-5 ${
          layout === "start"
            ? "justify-start"
            : layout === "end"
            ? "justify-end"
            : layout === "center"
            ? "justify-center"
            : layout === "between"
            ? "justify-between"
            : ""
        } items-center ${headerStyle.className}`}
        style={styles.background || {}}
      >
        <ShowLogo />
        <div className="flex gap-6">
          {["Home", "About", "Services", "Contact"].map((item, i) => (
            <div key={item}>
              <MenuItem
                item={item}
                index={i}
                isEditing={isEditing}
                content={content}
                onContentChange={onContentChange}
              />
            </div>
          ))}
        </div>
      </nav>
    </>
  );
};
