import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React, { useEffect, useState } from "react";
import { SketchPicker } from "react-color";
import ImageUploading, { ImageListType } from "react-images-uploading";
import reactCSS from "reactcss";
import { MenuItem } from "./MenuItem";

interface HeaderSectionProps {
  content: Record<string, string>;
  styles: Record<string, any>;
  isEditing: boolean;
  onContentChange: (key: string, value: any) => void;
  onStyleChange: (key: string, value: any) => void;
}

export const HeaderSection = ({
  content,
  styles,
  isEditing,
  onContentChange,
  onStyleChange,
}: HeaderSectionProps) => {
  const [showStylePicker, setShowStylePicker] = useState(!content.headerStyle);
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [displayColorPicker2, setDisplayColorPicker2] = useState(false);
  const [layout, setLayout] = useState(content.style);
  const currentStyle = content.headerStyle || "classic";
  const [color, setColor] = React.useState<string>("");
  const [textColor, setTextColor] = React.useState<string>("");
  const [logo, setLogo] = useState([]);
  // const [logoLink, setLogoLink] = useState(""); // State to capture the link input

  const headerStyles = [
    {
      id: "classic",
      label: "Classic",
      className: color ? "border-b" : "bg-slate-400 border-b",
      // textColorClass: textColor ? textColor : "",
      preview: "Simple and clean header with logo and navigation",
    },
    {
      id: "modern",
      label: "Modern",
      className: color ? "" : "bg-gradient-to-r from-blue-500 to-purple-500 ",
      // textColorClass: textColor ? textColor : "text-white",
      preview: "Gradient background with modern styling",
    },
    {
      id: "minimal",
      label: "Minimal",
      className: color ? "border-b" : "bg-lime-100",
      // textColorClass: textColor ? textColor : "",
      preview: "Minimalistic design with essential elements",
    },
    {
      id: "dark",
      label: "Dark",
      className: color ? "" : "text-white bg-gray-800",
      // textColorClass: textColor ? textColor : "text-white",
      preview: "Dark theme with contrasting elements",
    },
    {
      id: "transparent",
      label: "Transparent",
      className: "bg-transparent backdrop-blur-sm",
      // textColorClass: textColor ? textColor : "",
      preview: "Transparent background with blur effect",
    },
  ];
  const headerStyle =
    headerStyles.find((style) => style.id === currentStyle) || headerStyles[0];

  const handleStyleSelect = (styleId: string) => {
    setColor("");
    setTextColor("");
    onContentChange("headerStyle", styleId);
    setShowStylePicker(false);
  };

  const colorPickerStyle = reactCSS({
    default: {
      color: {
        width: "36px",
        height: "14px",
        borderRadius: "2px",
        background: color,
      },
      color2: {
        width: "36px",
        height: "14px",
        borderRadius: "2px",
        background: textColor,
      },
      swatch: {
        padding: "5px",
        background: "#fff",
        borderRadius: "1px",
        boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
        display: "inline-block",
        cursor: "pointer",
      },
      popover: {
        position: "absolute",
        zIndex: "10",
      },
      cover: {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
      },
    },
  });

  const layoutHandler = (e: any) => {
    content.style = e;
    setLayout(content.style);
  };

  // const handleLinkChange = (event) => {
  //   setLogoLink(event.target.value); // Update link state as the user types
  // };

  // const handleSubmitLink = () => {
  //   setLogoLink(logoLink); // Set the logo state to the input value
  // };

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // console.log(logo, imageList, addUpdateIndex);
    setLogo(imageList);
  };

  const ShowLogo = () => (
    <div className="font-bold">
      {isEditing ? (
        <ImageUploading multiple={false} value={logo} onChange={onChange}>
          {({ imageList, onImageUpload, onImageRemove }) => (
            <div className="flex flex-col gap-2">
              <div className="upload__image-wrapper flex items-center justify-center gap-2">
                <button
                  onClick={onImageUpload}
                  className="p-2 bg-green-700 text-white border border-white rounded-md"
                >
                  Upload
                </button>
                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <div className="flex justify-center items-center gap-2">
                      <img
                        className="rounded-md"
                        src={image.dataURL}
                        alt=""
                        width="50"
                      />
                      <button
                        className="p-2 bg-red-500 border border-white rounded-md"
                        onClick={() => onImageRemove(index)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              {/* <div className="flex flex-col bg-slate-100 rounded-md p-1">
                <input
                  className=""
                  placeholder="Link"
                  type="text"
                  onChange={handleLinkChange}
                />
                <button
                  className="p-2"
                  value={logoLink}
                  onClick={handleSubmitLink}
                >
                  Submit Link
                </button>
              </div> */}
            </div>
          )}
        </ImageUploading>
      ) : (
        <>
          {logo && logo.length > 0 && logo[0]?.dataURL ? (
            <div>
              <a href={"#"} target="_blank" rel="noopener noreferrer">
                <img
                  className="rounded-md"
                  src={logo[0]?.dataURL}
                  alt="Logo"
                  width="50"
                />
              </a>
            </div>
          ) : null}
        </>
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

  const EditHeaderColor = () =>
    isEditing && (
      <div className="flex justify-center gap-1">
        <p>Color</p>
        <div
          style={colorPickerStyle.swatch}
          onClick={() => setDisplayColorPicker((prev) => !prev)}
        >
          <div style={colorPickerStyle.color} />
        </div>
        {displayColorPicker ? (
          <div style={colorPickerStyle.popover}>
            <div
              style={colorPickerStyle.cover}
              onClick={() => setDisplayColorPicker(false)}
            />
            <SketchPicker
              color={color}
              onChange={(color) => setColor(color.hex)}
            />
          </div>
        ) : null}
      </div>
    );

  const EditTextColor = () =>
    isEditing && (
      <div className="flex justify-center gap-1">
        <p>Text Color</p>
        <div
          style={colorPickerStyle.swatch}
          onClick={() => setDisplayColorPicker2((prev) => !prev)}
        >
          <div style={colorPickerStyle.color2} />
        </div>
        {displayColorPicker2 ? (
          <div style={colorPickerStyle.popover}>
            <div
              style={colorPickerStyle.cover}
              onClick={() => setDisplayColorPicker2(false)}
            />
            <SketchPicker
              color={textColor}
              onChange={(textColor) => setTextColor(textColor.hex)}
            />
          </div>
        ) : null}
      </div>
    );

  useEffect(() => {
    setLayout(content.style);
    // console.log(content);
    // console.log(logoLink);
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
        <EditHeaderColor />
        <EditTextColor />
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
        style={{
          background: color,
          color: textColor,
        }}
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
