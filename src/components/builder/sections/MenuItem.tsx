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
      <div className="flex flex-col justify-end gap-2 text-black">
        <input
          className="rounded-md p-1"
          value={content[`menuItem${index}`] || item}
          onChange={(e) => onContentChange(`menuItem${index}`, e.target.value)}
        />
        <input
          className="rounded-md p-1"
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
