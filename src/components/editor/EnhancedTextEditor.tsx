import React, { useEffect, useRef, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChromePicker } from 'react-color';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ButtonSizeDropdown } from '../ui/btn-size-dropdown';
import { TipTapEditor2 } from './TipTapEditor2'
import StarterKit from '@tiptap/starter-kit';
const extensions = [StarterKit];
import { EditorProvider, FloatingMenu, BubbleMenu, useEditor, EditorContent } from '@tiptap/react'
import { ListOrdered } from 'lucide-react';

interface EnhancedTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  onStyleChange: (style: any) => void;
  multiline?: boolean;
  placeholder?:string;
  styles:Record<string, any>;
  componentName:string;
  onShadCNPropChange?:(prop: any) => void;
}

export const EnhancedTextEditor = ({ value, onChange, onStyleChange, multiline = false,placeholder="default placeholder",styles, componentName,onShadCNPropChange }: EnhancedTextEditorProps) => {
  const [color, setColor] = React.useState(styles?.[componentName]?.color || {});
  const [btnColor, setBtnColor] = React.useState(styles?.[componentName]?.["background-color"] || {});

  const handleColorChange = (color: any) => {
    setColor(color.hex);
    onStyleChange({ color: color.hex });
  };
  const handleBtnColorChange= (color: any) => {
    setBtnColor(color.hex);
    onStyleChange({ "background-color": color.hex });
  };
  const buttonSizes = ['default', 'sm', 'lg', 'icon'] as const
type TBtnSize = typeof buttonSizes[number]

const handleBtnSizeChange=(size:TBtnSize)=>{
  onShadCNPropChange({"size":size})
  }
  const editor = useEditor({
    extensions,
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose focus:outline-none max-w-none',
      },
    },
  });

  useEffect(() => {
    if (editor && editor.getHTML() !== value) {
      editor.commands.setContent(value);
    }
  }, [value, editor]);

  // console.log("ini",styles?.heroButtonTex?.heroButtonTextShadCN);


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
        {componentName==="heroButtonText"&&
        <Popover>
          <PopoverTrigger asChild>
            <button
              type="button"
              className="px-3 py-1 border rounded flex items-center gap-2"
            >
              <div 
                className="w-4 h-4 rounded-sm border"
                style={{ backgroundColor: btnColor }} 
              />
              Button Color
            </button>
          </PopoverTrigger>
          <PopoverContent className="p-0 border-none">
            <ChromePicker 
              color={btnColor} 
              onChange={handleBtnColorChange}
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
        }
        {componentName==="heroButtonText"&&
        <ButtonSizeDropdown initialSize={styles?.heroButtonTex?.heroButtonTextShadCN} onChange={handleBtnSizeChange}
        ></ButtonSizeDropdown>
        }
      </div>
      {multiline ? (
        <div className="border rounded-md p-4 min-h-[100px]">
          {editor && (
            <>
              <FloatingMenu 
                editor={editor} 
                tippyOptions={{ duration: 100 }}
                className="bg-white shadow-lg border rounded-md p-2 flex gap-2"
              >
                <button 
                  className="p-1 hover:bg-gray-100 rounded"
                  onClick={() => editor.chain().focus().toggleBold().run()}
                >
                  Bold
                </button>
                <button 
                  className="p-1 hover:bg-gray-100 rounded"
                  onClick={() => editor.chain().focus().toggleItalic().run()}
                >
                  Italic
                </button>
                <button
      onClick={() => editor.chain().focus().toggleOrderedList().run()}
      className={`p-2 rounded hover:bg-gray-100 ${
        editor.isActive('orderedList') ? 'bg-gray-200' : ''
      }`}
    >
      <ListOrdered className="w-4 h-4" />
    </button>
                
              </FloatingMenu>
              <BubbleMenu 
                editor={editor}
                tippyOptions={{ duration: 100 }}
                className="bg-white shadow-lg border rounded-md p-2 flex gap-2"
              >
                <button 
                  className="p-1 hover:bg-gray-100 rounded"
                  onClick={() => editor.chain().focus().toggleBold().run()}
                >
                  Bold
                </button>
                <button 
                  className="p-1 hover:bg-gray-100 rounded"
                  onClick={() => editor.chain().focus().toggleItalic().run()}
                >
                  Italic
                </button>
                <button
      onClick={() => editor.chain().focus().toggleOrderedList().run()}
      className={`p-2 rounded hover:bg-gray-100 ${
        editor.isActive('orderedList') ? 'bg-gray-200' : ''
      }`}
    >
      <ListOrdered className="w-4 h-4" />
    </button>
              </BubbleMenu>
            </>
          )}
          <EditorContent editor={editor} />
        </div>
      ) : (
        <Input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="w-full"
        />
      )}
    </div>
  );
};