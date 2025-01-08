import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";

interface TipTapEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export const TipTapEditor = ({ value, onChange }: TipTapEditorProps) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [value, editor]);

  return (
    <div className="text-black flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm">
      <EditorContent
        editor={editor}
        className="prose prose-sm max-w-none border-white"
      />
    </div>
    // <>
    //   <Input
    //     type="text"
    //     value={value}
    //     onChange={(e) => onChange(e.target.value)}
    //     className="w-full"
    //   />
    //   <EditorContent
    //     editor={editor}
    //     className="prose prose-sm max-w-none border-white"
    //   />
    // </>
  );
};
