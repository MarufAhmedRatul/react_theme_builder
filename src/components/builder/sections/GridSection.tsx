import BasicGrid from "./GridSectionStyles/BasicGrid";

interface GridSectionProps {
  content: Record<string, string>;
  styles: Record<string, any>;
  isEditing: boolean;
  onContentChange: (key: string, value: string) => void;
  onStyleChange: (key: string, value: any) => void;
}

export const GridSection = ({
  content,
  styles,
  isEditing,
  onContentChange,
  onStyleChange,
}: GridSectionProps) => {
  const layout=content.style||'basic'
  const gridCount = parseInt(content.gridCount || '3', 10);

  return (
    <>
    {layout==='basic'&&<BasicGrid content={content} 
          styles={styles}
          isEditing={isEditing}
          onContentChange={onContentChange} 
          onStyleChange={onStyleChange}
          gridCount={gridCount}
          ></BasicGrid>}
    </>

  );
};