import Color from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

interface ColorPickerProps {
  onChange: (color: string) => void;
  initialColor?: string;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
  onChange,
  initialColor = "#000000",
}) => {
  const editor = useEditor({
    extensions: [StarterKit, Color, TextStyle],
    content: "<p>Pick a color</p>",
    onUpdate: ({ editor }) => {
      const color = editor.getAttributes("textStyle").color;
      if (color) {
        onChange(color);
      }
    },
  });

  return (
    <div>
      <input
        type="color"
        onInput={(event) => {
          const color = (event.target as HTMLInputElement).value;
          editor?.chain().focus().setColor(color).run();
          onChange(color);
        }}
        value={initialColor}
        data-testid="setColor"
      />
      <EditorContent editor={editor} />
    </div>
  );
};
