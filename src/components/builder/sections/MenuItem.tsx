import { Input } from "@/components/ui/input";
import { TipTapEditor } from "../../editor/TipTapEditor";

interface MenuItemProps {
  item: string;
  index: number;
  isEditing: boolean;
  content: Record<string, string>;
  onContentChange: (key: string, value: string) => void;
}

export const MenuItem = ({
  item,
  index,
  isEditing,
  content,
  onContentChange,
}: MenuItemProps) => (
  <div>
    {isEditing ? (
      <div className="space-y-2">
        <TipTapEditor
          value={content[`menuItem${index}`] || item}
          onChange={(value) => onContentChange(`menuItem${index}`, value)}
        />
        <Input
          type="url"
          placeholder="URL"
          value={content[`menuUrl${index}`] || ""}
          onChange={(e) => onContentChange(`menuUrl${index}`, e.target.value)}
        />
      </div>
    ) : (
      <a
        href={content[`menuUrl${index}`] || "#"}
        className="hover:text-primary transition-colors"
        dangerouslySetInnerHTML={{
          __html: content[`menuItem${index}`] || item,
        }}
      />
    )}
  </div>
);