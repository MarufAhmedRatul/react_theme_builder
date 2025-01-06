import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect } from 'react';

interface TipTapEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export const TipTapEditor2 = ({ value, onChange }: TipTapEditorProps) => {
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
      <div className="mb-2">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleBold()
              .run()
          }
          className={editor.isActive('bold') ? 'is-active mr-2' : 'mr-2'}
        >
          Bold
        </button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()} className="mr-2">
          Italic
        </button>
        <button onClick={() => editor.chain().focus().toggleStrike().run()} className="mr-2">
          Strike
        </button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className="mr-2">
          H1
        </button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className="mr-2">
          H2
        </button>
        <button onClick={() => editor.chain().focus().toggleBulletList().run()} className="mr-2">
          Bullet List
        </button>
        <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className="mr-2">
          Ordered List
        </button>
      </div>
      <EditorContent editor={editor} 
      className="prose prose-sm max-w-none min-h-[100px] bg-green-100" />
    </div>
  );
};

