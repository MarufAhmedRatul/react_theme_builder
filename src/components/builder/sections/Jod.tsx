// // export const HeaderSection = ({
// //   content,
// //   styles,
// //   isEditing,
// //   onContentChange,
// //   onStyleChange,
// // }: HeaderSectionProps) => {
// //   const menuItems = ["Home", "About", "Services", "Contact"];

// //   return (
// //     <div className="flex gap-6">
// //       {content.style === "transparent" ? (
// //         <div className="flex-1 text-center">
// //           {menuItems.map((item, i) => (
// //             <div key={item} className="inline-block mx-4">
// //               <MenuItem
// //                 item={item}
// //                 index={i}
// //                 isEditing={isEditing}
// //                 content={content}
// //                 onContentChange={onContentChange}
// //               />
// //             </div>
// //           ))}
// //         </div>
// //       ) : content.style === "centered" ? (
// //         <div className="flex flex-col items-center">
// //           <div className="text-lg font-bold mb-4">
// //             {isEditing ? (
// //               <TipTapEditor
// //                 value={content.logo || "Logo"}
// //                 onChange={(value) => onContentChange("logo", value)}
// //               />
// //             ) : (
// //               <span
// //                 dangerouslySetInnerHTML={{
// //                   __html: content.logo || "Logo",
// //                 }}
// //               />
// //             )}
// //           </div>
// //           <div className="flex gap-6">
// //             {menuItems.map((item, i) => (
// //               <MenuItem
// //                 key={item}
// //                 item={item}
// //                 index={i}
// //                 isEditing={isEditing}
// //                 content={content}
// //                 onContentChange={onContentChange}
// //               />
// //             ))}
// //           </div>
// //         </div>
// //       ) : (
// //         menuItems.map((item, i) => (
// //           <MenuItem
// //             key={item}
// //             item={item}
// //             index={i}
// //             isEditing={isEditing}
// //             content={content}
// //             onContentChange={onContentChange}
// //           />
// //         ))
// //       )}
// //     </div>
// //   );
// // };

// <nav
// className={`p-6 ${headerStyle.className} flex justify-center`}
// style={styles.background || {}}
// >
// {isEditing && (
//   <div className="mb-4 space-y-4">
//     <Button variant="outline" onClick={() => setShowStylePicker(true)}>
//       Change Header Style
//     </Button>
//   </div>
// )}

// <div className="flex gap-6">
//   {content.style === "transparent" ? (
//     <div className="flex-1 text-center">
//       {menuItems.map((item, i) => (
//         <div key={item} className="inline-block mx-4">
//           <MenuItem
//             item={item}
//             index={i}
//             isEditing={isEditing}
//             content={content}
//             onContentChange={onContentChange}
//           />
//         </div>
//       ))}
//     </div>
//   ) : content.style === "centered" ? (
//     <div className="">
//       <div className="text-lg font-bold mb-4">
//         {isEditing ? (
//           <TipTapEditor
//             value={content.logo || "Logo"}
//             onChange={(value) => onContentChange("logo", value)}
//           />
//         ) : (
//           <span
//             dangerouslySetInnerHTML={{
//               __html: content.logo || "Logo",
//             }}
//           />
//         )}
//       </div>
//       <div className="flex gap-6">
//         {menuItems.map((item, i) => (
//           <MenuItem
//             key={item}
//             item={item}
//             index={i}
//             isEditing={isEditing}
//             content={content}
//             onContentChange={onContentChange}
//           />
//         ))}
//       </div>
//     </div>
//   ) : (
//     menuItems.map((item, i) => (
//       <MenuItem
//         key={item}
//         item={item}
//         index={i}
//         isEditing={isEditing}
//         content={content}
//         onContentChange={onContentChange}
//       />
//     ))
//   )}
// </div>
// </nav>
