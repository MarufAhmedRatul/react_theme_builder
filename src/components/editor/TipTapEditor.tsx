import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect } from 'react';

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
    <div className="border rounded-md p-2">
      <EditorContent editor={editor} className="prose prose-sm max-w-none min-h-[100px]" />
    </div>
  );
};