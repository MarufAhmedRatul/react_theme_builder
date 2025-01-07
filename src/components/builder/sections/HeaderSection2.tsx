// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { useState } from "react";
// import { TipTapEditor } from "../../editor/TipTapEditor";
// import { MenuItem } from "./MenuItem";

// interface HeaderSectionProps {
//   content: Record<string, string>;
//   styles: Record<string, any>;
//   isEditing: boolean;
//   onContentChange: (key: string, value: string) => void;
//   onStyleChange: (key: string, value: any) => void;
// }

// const headerStyles = [
//   {
//     id: "classic",
//     label: "Classic",
//     className: "bg-white border-b",
//     preview: "Simple and clean header with logo and navigation",
//   },
//   {
//     id: "modern",
//     label: "Modern",
//     className: "bg-gradient-to-r from-blue-500 to-purple-500 text-white",
//     preview: "Gradient background with modern styling",
//   },
//   {
//     id: "minimal",
//     label: "Minimal",
//     className: "bg-white border-b",
//     preview: "Minimalistic design with essential elements",
//   },
//   {
//     id: "dark",
//     label: "Dark",
//     className: "bg-gray-800 text-white",
//     preview: "Dark theme with contrasting elements",
//   },
//   {
//     id: "transparent",
//     label: "Transparent",
//     className: "bg-transparent backdrop-blur-sm",
//     preview: "Transparent background with blur effect",
//   },
// ];

// export const HeaderSection = ({
//   content,
//   styles,
//   isEditing,
//   onContentChange,
//   onStyleChange,
// }: HeaderSectionProps) => {
//   const [showStylePicker, setShowStylePicker] = useState(!content.headerStyle);
//   const currentStyle = content.headerStyle || "classic";
//   const headerStyle =
//     headerStyles.find((style) => style.id === currentStyle) || headerStyles[0];
//   const menuItems = ["Home", "About", "Services", "Contact"];

//   const handleStyleSelect = (styleId: string) => {
//     onContentChange("headerStyle", styleId);
//     setShowStylePicker(false);
//   };

//   const Logo = () => (
//     <div className="font-bold">
//       {isEditing ? (
//         <TipTapEditor
//           value={content.logo || "Logo"}
//           onChange={(value) => onContentChange("logo", value)}
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

//   const MenuItems = () => (
//     <>
//       {menuItems.map((item, i) => (
//         <div key={item}>
//           <MenuItem
//             item={item}
//             index={i}
//             isEditing={isEditing}
//             content={content}
//             onContentChange={onContentChange}
//           />
//         </div>
//       ))}
//     </>
//   );

//   const StylePickerButton = () =>
//     isEditing && (
//       <div className="mb-4">
//         <Button variant="destructive" onClick={() => setShowStylePicker(true)}>
//           Change Header Style
//         </Button>
//       </div>
//     );

//   const renderHeader = () => {
//     switch (content.style) {
//       case "modern":
//         return (
//           <nav
//             className={`p-6 ${headerStyle.className} flex justify-between items-center`}
//             style={styles.background || {}}
//           >
//             <StylePickerButton />
//             <Logo />
//             <div className="flex items-center gap-5">
//               <MenuItems />
//             </div>
//           </nav>
//         );
//       case "centered":
//         return (
//           <nav
//             className={`p-6 ${headerStyle.className} flex justify-center gap-5 items-center`}
//             style={styles.background || {}}
//           >
//             <StylePickerButton />
//             <Logo />
//             <div className="flex items-center gap-5">
//               <MenuItems />
//             </div>
//           </nav>
//         );
//       case "minimal":
//         return (
//           <nav
//             className={`p-4 ${headerStyle.className} flex justify-between items-start`}
//             style={styles.background || {}}
//           >
//             <StylePickerButton />
//             <Logo />
//             <div className="flex items-center gap-5 text-sm">
//               <MenuItems />
//             </div>
//           </nav>
//         );
//       case "dark":
//         return (
//           <nav
//             className={`p-6 ${headerStyle.className} flex justify-between items-center`}
//             style={styles.background || {}}
//           >
//             <StylePickerButton />
//             <Logo />
//             <div className="flex items-center gap-5">
//               <MenuItems />
//             </div>
//           </nav>
//         );
//       case "transparent":
//         return (
//           <nav
//             className={`p-6 ${headerStyle.className} flex justify-between items-center`}
//             style={styles.background || {}}
//           >
//             <StylePickerButton />
//             <Logo />
//             <div className="flex items-center gap-5">
//               <MenuItems />
//             </div>
//           </nav>
//         );
//       default:
//         return null;
//     }
//   };

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

//       {renderHeader()}
//     </>
//   );
// };
