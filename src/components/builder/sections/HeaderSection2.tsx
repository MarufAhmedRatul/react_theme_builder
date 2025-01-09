// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import React, { useEffect, useState } from "react";
// import { ChromePicker } from "react-color";
// import { MenuItem } from "./MenuItem";

// interface HeaderSectionProps {
//   content: Record<string, string>;
//   styles: Record<string, any>;
//   isEditing: boolean;
//   onContentChange: (key: string, value: any) => void;
//   onStyleChange: (key: string, value: any) => void;
// }

// export const HeaderSection = ({
//   content,
//   styles,
//   isEditing,
//   onContentChange,
//   onStyleChange,
// }: HeaderSectionProps) => {
//   const [showStylePicker, setShowStylePicker] = useState(!content.headerStyle);
//   const [layout, setLayout] = useState(content.style);
//   const currentStyle = content.headerStyle || "classic";
//   const [color, setColor] = React.useState<string>("");
//   const [textColor, setTextColor] = React.useState<string>("");
//   const headerStyles = [
//     {
//       id: "classic",
//       label: "Classic",
//       className: color ? "border-b" : "bg-slate-400 border-b",
//       // textColorClass: textColor ? textColor : "",
//       preview: "Simple and clean header with logo and navigation",
//     },
//     {
//       id: "modern",
//       label: "Modern",
//       className: color ? "" : "bg-gradient-to-r from-blue-500 to-purple-500 ",
//       // textColorClass: textColor ? textColor : "text-white",
//       preview: "Gradient background with modern styling",
//     },
//     {
//       id: "minimal",
//       label: "Minimal",
//       className: color ? "border-b" : "bg-lime-100",
//       // textColorClass: textColor ? textColor : "",
//       preview: "Minimalistic design with essential elements",
//     },
//     {
//       id: "dark",
//       label: "Dark",
//       className: color ? "" : "bg-gray-800",
//       // textColorClass: textColor ? textColor : "text-white",
//       preview: "Dark theme with contrasting elements",
//     },
//     {
//       id: "transparent",
//       label: "Transparent",
//       className: "bg-transparent backdrop-blur-sm",
//       // textColorClass: textColor ? textColor : "",
//       preview: "Transparent background with blur effect",
//     },
//   ];
//   const headerStyle =
//     headerStyles.find((style) => style.id === currentStyle) || headerStyles[0];

//   const handleStyleSelect = (styleId: string) => {
//     setColor("");
//     onContentChange("headerStyle", styleId);
//     setShowStylePicker(false);
//   };

//   const handleColorChange = (color: any) => {
//     console.log(color);
//     setColor(color.hex);
//   };

//   const handleTextColorChange = (textColor: any) => {
//     setTextColor(textColor.hex);
//   };

//   const layoutHandler = (e: any) => {
//     content.style = e;
//     setLayout(content.style);
//   };

//   const ShowLogo = () => (
//     <div className="font-bold">
//       {isEditing ? (
//         <input
//           className="rounded-md p-1 text-black"
//           value={content.logo || "Logo"}
//           onChange={(e) => onContentChange("logo", e.target.value)}
//         />
//       ) : (
//         <span
//           dangerouslySetInnerHTML={{
//             __html: content.logo || "Logo",
//           }}
//         />
//       )}
//     </div>
//   );

//   const EditHeaderLayout = () =>
//     isEditing && (
//       <div className="flex gap-4">
//         {["Center", "Start", "End", "Between"].map((position) => (
//           <Button
//             key={position}
//             variant="outline"
//             onClick={() => layoutHandler(position.toLowerCase())}
//           >
//             {position}
//           </Button>
//         ))}
//       </div>
//     );

//   const EditHeaderStyle = () =>
//     isEditing && (
//       <div>
//         <Button variant="destructive" onClick={() => setShowStylePicker(true)}>
//           Change Header Style
//         </Button>
//       </div>
//     );

//   const EditHeaderColor = () =>
//     isEditing && (
//       <Popover>
//         <PopoverTrigger asChild>
//           <button
//             type="button"
//             className="px-3 py-1 border rounded flex items-center gap-2"
//           >
//             <div
//               className="w-4 h-4 rounded-sm border"
//               style={{ backgroundColor: color }}
//             />
//             Color
//           </button>
//         </PopoverTrigger>
//         <PopoverContent className="p-0 border-none">
//           <ChromePicker
//             color={color}
//             onChange={handleColorChange}
//             styles={{
//               default: {
//                 picker: {
//                   boxShadow: "none",
//                 },
//               },
//             }}
//           />
//         </PopoverContent>
//       </Popover>
//     );

//   const EditTextColor = () =>
//     isEditing && (
//       <Popover>
//         <PopoverTrigger asChild>
//           <button
//             type="button"
//             className="px-3 py-1 border rounded flex items-center gap-2"
//           >
//             <div
//               className="w-4 h-4 rounded-sm border"
//               style={{ backgroundColor: textColor }}
//             />
//             Text Color
//           </button>
//         </PopoverTrigger>
//         <PopoverContent className="p-0 border-none">
//           <ChromePicker
//             color={textColor}
//             onChange={handleTextColorChange}
//             styles={{
//               default: {
//                 picker: {
//                   boxShadow: "none",
//                 },
//               },
//             }}
//           />
//         </PopoverContent>
//       </Popover>
//     );

//   useEffect(() => {
//     setLayout(content.style);
//     console.log(content);
//   }, [content]);

//   return (
//     <>
//       <Dialog open={showStylePicker} onOpenChange={setShowStylePicker}>
//         <DialogContent className="max-w-3xl">
//           <DialogHeader>
//             <DialogTitle>Choose Header Style</DialogTitle>
//           </DialogHeader>
//           <div className="grid grid-cols-2 gap-4 p-4">
//             {headerStyles.map((style) => (
//               <button
//                 key={style.id}
//                 className={`p-4 border rounded-lg hover:border-primary transition-colors ${
//                   currentStyle === style.id
//                     ? "border-primary"
//                     : "border-gray-200"
//                 }`}
//                 onClick={() => handleStyleSelect(style.id)}
//               >
//                 <div className={`h-20 rounded-md mb-2 ${style.className}`}>
//                   <div className="flex justify-between items-center p-4">
//                     <div className="font-bold">Logo</div>
//                     <div className="flex gap-4">
//                       <span>Menu</span>
//                       <span>Menu</span>
//                     </div>
//                   </div>
//                 </div>
//                 <h3 className="font-semibold">{style.label}</h3>
//                 <p className="text-sm text-gray-500">{style.preview}</p>
//               </button>
//             ))}
//           </div>
//         </DialogContent>
//       </Dialog>

//       <div className="flex justify-start items-center gap-5 my-4">
//         <EditHeaderStyle />
//         <EditHeaderLayout />
//         <EditHeaderColor />
//         <EditTextColor />
//       </div>
//       {/* <h1>{color}</h1> */}
//       <nav
//         className={`flex p-5 gap-5 ${
//           layout === "start"
//             ? "justify-start"
//             : layout === "end"
//             ? "justify-end"
//             : layout === "center"
//             ? "justify-center"
//             : layout === "between"
//             ? "justify-between"
//             : ""
//         } items-center ${headerStyle.className}`}
//         style={{ background: color, color: textColor }}
//       >
//         <ShowLogo />
//         <div className="flex gap-6">
//           {["Home", "About", "Services", "Contact"].map((item, i) => (
//             <div key={item}>
//               <MenuItem
//                 item={item}
//                 index={i}
//                 isEditing={isEditing}
//                 content={content}
//                 onContentChange={onContentChange}
//               />
//             </div>
//           ))}
//         </div>
//       </nav>
//     </>
//   );
// };
