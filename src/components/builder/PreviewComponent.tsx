import { ComponentType } from '@/pages/Index';
import { X, GripVertical } from 'lucide-react';
import { useRef, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Button } from "@/components/ui/button";
import { HeaderSection } from './sections/HeaderSection';
import { HeroSection } from './sections/HeroSection';
import { GridSection } from './sections/GridSection';
import { ServicesSection } from './sections/ServicesSection';
import { FooterSection } from './sections/FooterSection';
import { StylePickerDialog } from './styles/StylePickerDialog';
import { componentStyles } from './styles/styleTypes';

interface PreviewComponentProps {
  component: ComponentType;
  index: number;
  onRemove: (id: string) => void;
  onReorder: (dragIndex: number, hoverIndex: number) => void;
}

export const PreviewComponent = ({ component, index, onRemove, onReorder }: PreviewComponentProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(component.content || {});
  const [styles, setStyles] = useState<Record<string, any>>({});
  const [showStylePicker, setShowStylePicker] = useState(!content.style);
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag({
    type: 'reorder',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'reorder',
    hover: (item: { index: number }) => {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;
      onReorder(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  drag(drop(ref));

  const handleContentChange = (key: string, value: string) => {
    setContent((prev) => ({ ...prev, [key]: value }));
    component.content = { ...content, [key]: value };
  };

  const handleStyleChange = (key: string, value: any) => {
    
    setStyles((prev) => ({ ...prev, [key]: {
      ...(prev[key] || {}), 
      ...value             
    }}));
  };

  const handleStyleSelect = (styleId: string) => {
    setContent((prev) => ({ ...prev, style: styleId }));
    component.content = { ...content, style: styleId };
    setShowStylePicker(false);
  };

  const renderComponent = () => {
    switch (component.type) {
      case 'header':
        return (
          <HeaderSection
            content={content}
            styles={styles}
            isEditing={isEditing}
            onContentChange={handleContentChange}
            onStyleChange={handleStyleChange}
          />
        );
      case 'hero':
        // console.log('hero section rendering');
        return (
          <HeroSection
            content={content}
            styles={styles}
            isEditing={isEditing}
            onContentChange={handleContentChange}
            onStyleChange={handleStyleChange}
          />
        );
      case 'grid':
        return (
          <GridSection
            content={content}
            styles={styles}
            isEditing={isEditing}
            onContentChange={handleContentChange}
            onStyleChange={handleStyleChange}
          />
        );
      case 'services':
        return (
          <ServicesSection
            content={content}
            styles={styles}
            isEditing={isEditing}
            onContentChange={handleContentChange}
            onStyleChange={handleStyleChange}
          />
        );
      case 'footer':
        return (
          <FooterSection
            content={content}
            styles={styles}
            isEditing={isEditing}
            onContentChange={handleContentChange}
            onStyleChange={handleStyleChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div
      ref={ref}
      className="group relative rounded-lg shadow-sm"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <StylePickerDialog
        open={showStylePicker}
        onOpenChange={setShowStylePicker}
        options={componentStyles[component.type] || []}
        currentStyle={content.style || ''}
        onStyleSelect={handleStyleSelect}
      />
      <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? '✓' : '✎'}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onRemove(component.id)}
        >
          <X className="w-4 h-4 text-gray-500 hover:text-red-500" />
        </Button>
      </div>
      <div className="absolute top-1/2 left-2 -translate-y-1/2 cursor-move opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <GripVertical className="w-4 h-4 text-gray-400" />
      </div>
      {renderComponent()}
    </div>
  );
};