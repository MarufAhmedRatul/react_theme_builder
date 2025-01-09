import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useEffect } from "react";
import { ChromePicker } from "react-color";

interface EnhancedTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  onStyleChange: (style: any) => void;
  multiline?: boolean;
}

export const EnhancedTextEditor = ({
  value,
  onChange,
  onStyleChange,
  multiline,
}: EnhancedTextEditorProps) => {
  const [color, setColor] = React.useState("#000000");

  const extensions = [StarterKit];

  const editor = useEditor({
    extensions,
    content: value,
  });

  useEffect(() => {
    if (editor && editor.getHTML() !== value) {
      editor.commands.setContent(value);
    }
  }, [value, editor]);

  const handleColorChange = (color: any) => {
    setColor(color.hex);
    onStyleChange({ color: color.hex });
  };

  return (
    <>
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
                      boxShadow: "none",
                    },
                  },
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
        {multiline ? (
          <div className="flex flex-col gap-5 my-10">
            <div className="flex gap-4">
              <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className="border border-gray-400 bg-gray-300 p-1 rounded-md hover:bg-gray-400"
              >
                <strong>B</strong>
              </button>
              <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className="border border-gray-400 bg-gray-300 p-1 rounded-md hover:bg-gray-400"
              >
                <em>I</em>
              </button>
              <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={!editor.can().chain().focus().toggleStrike().run()}
                className="border border-gray-400 bg-gray-300 p-1 rounded-md hover:bg-gray-400"
              >
                <s>S</s>
              </button>
              <button
                onClick={() => editor.chain().focus().toggleCode().run()}
                disabled={!editor.can().chain().focus().toggleCode().run()}
                className="border border-gray-400 bg-gray-300 p-1 rounded-md hover:bg-gray-400"
              >
                Code
              </button>

              <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={
                  editor.isActive("bulletList")
                    ? "is-active border border-gray-400 bg-gray-300 p-1 rounded-md hover:bg-gray-400"
                    : "border border-gray-400 bg-gray-300 p-1 rounded-md hover:bg-gray-400"
                }
              >
                Bullet list
              </button>
              <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={
                  editor.isActive("orderedList")
                    ? "is-active border border-gray-400 bg-gray-300 p-1 rounded-md hover:bg-gray-400"
                    : "border border-gray-400 bg-gray-300 p-1 rounded-md hover:bg-gray-400"
                }
              >
                Ordered list
              </button>
              <button
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={
                  editor.isActive("codeBlock")
                    ? "is-active border border-gray-400 bg-gray-300 p-1 rounded-md hover:bg-gray-400"
                    : "border border-gray-400 bg-gray-300 p-1 rounded-md hover:bg-gray-400"
                }
              >
                Code block
              </button>
              <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={
                  editor.isActive("blockquote")
                    ? "is-active border border-gray-400 bg-gray-300 p-1 rounded-md hover:bg-gray-400"
                    : "border border-gray-400 bg-gray-300 p-1 rounded-md hover:bg-gray-400"
                }
              >
                Blockquote
              </button>
              <button
                onClick={() => editor.chain().focus().setHorizontalRule().run()}
                className="border border-gray-400 bg-gray-300 p-1 rounded-md hover:bg-gray-400"
              >
                Horizontal rule
              </button>
              <button
                onClick={() => editor.chain().focus().setHardBreak().run()}
                className="border border-gray-400 bg-gray-300 p-1 rounded-md hover:bg-gray-400"
              >
                Hard break
              </button>
              <button
                onClick={() => editor.chain().focus().undo().run()}
                disabled={!editor.can().chain().focus().undo().run()}
                className="border border-gray-400 bg-gray-300 p-1 rounded-md hover:bg-gray-400"
              >
                Undo
              </button>
              <button
                onClick={() => editor.chain().focus().redo().run()}
                disabled={!editor.can().chain().focus().redo().run()}
                className="border border-gray-400 bg-gray-300 p-1 rounded-md hover:bg-gray-400"
              >
                Redo
              </button>
            </div>
            <div className="bg-gray-50 p-2 rounded-md h-36">
              <EditorContent editor={editor} />
            </div>
          </div>
        ) : (
          <Input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full"
          />
        )}
      </div>
    </>
  );
};
