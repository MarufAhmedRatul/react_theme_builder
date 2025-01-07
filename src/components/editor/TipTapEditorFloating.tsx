import {
  EditorProvider,
  FloatingMenu,
  BubbleMenu,
  useEditor,
  EditorContent,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { ListOrdered } from "lucide-react";
function TipTapEditorFloating({value,onChange}) {
  const extensions = [StarterKit];
    const editor = useEditor({
      extensions,
      content: value,
      onUpdate: ({ editor }) => {
        onChange(editor.getHTML());
      },
      editorProps: {
        attributes: {
          class: "prose focus:outline-none max-w-none",
        },
      },
    });
  return (
    <div className='border rounded-md p-4 min-h-[100px]'>
{editor && (
  <>
    <FloatingMenu
      editor={editor}
      tippyOptions={{ duration: 100 }}
      className='bg-white shadow-lg border rounded-md p-2 flex gap-2'
    >
      <button
        className='p-1 hover:bg-gray-100 rounded'
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        Bold
      </button>
      <button
        className='p-1 hover:bg-gray-100 rounded'
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        Italic
      </button>
      <button
        onClick={() =>
          editor.chain().focus().toggleOrderedList().run()
        }
        className={`p-2 rounded hover:bg-gray-100 ${
          editor.isActive("orderedList") ? "bg-gray-200" : ""
        }`}
      >
        <ListOrdered className='w-4 h-4' />
      </button>
    </FloatingMenu>
    <BubbleMenu
      editor={editor}
      tippyOptions={{ duration: 100 }}
      className='bg-white shadow-lg border rounded-md p-2 flex gap-2'
    >
      <button
        className='p-1 hover:bg-gray-100 rounded'
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        Bold
      </button>
      <button
        className='p-1 hover:bg-gray-100 rounded'
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        Italic
      </button>
      <button
        onClick={() =>
          editor.chain().focus().toggleOrderedList().run()
        }
        className={`p-2 rounded hover:bg-gray-100 ${
          editor.isActive("orderedList") ? "bg-gray-200" : ""
        }`}
      >
        <ListOrdered className='w-4 h-4' />
      </button>
    </BubbleMenu>
  </>
)}
<EditorContent editor={editor} />
</div>
  )
}

export default TipTapEditorFloating

