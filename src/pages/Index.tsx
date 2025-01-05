import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ComponentSidebar } from '@/components/builder/ComponentSidebar';
import { BuilderCanvas } from '@/components/builder/BuilderCanvas';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export type ComponentType = {
  id: string;
  type: 'header' | 'hero' | 'grid' | 'services' | 'footer';
  content?: Record<string, string>;
};

const Index = () => {
  const [components, setComponents] = useState<ComponentType[]>([]);
  const { toast } = useToast();

  const handleDrop = (item: ComponentType) => {
    setComponents((prev) => [...prev, { ...item, id: Math.random().toString() }]);
    toast({
      title: "Success",
      description: "Component added successfully!"
    });
  };

  const handleRemove = (id: string) => {
    setComponents((prev) => prev.filter((comp) => comp.id !== id));
    toast({
      title: "Success",
      description: "Component removed successfully!"
    });
  };

  const handleReorder = (dragIndex: number, hoverIndex: number) => {
    setComponents((prev) => {
      const newComponents = [...prev];
      const draggedItem = newComponents[dragIndex];
      newComponents.splice(dragIndex, 1);
      newComponents.splice(hoverIndex, 0, draggedItem);
      return newComponents;
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex min-h-screen bg-secondary">
        <ComponentSidebar />
        <BuilderCanvas
          components={components}
          onDrop={handleDrop}
          onRemove={handleRemove}
          onReorder={handleReorder}
        />
      </div>
    </DndProvider>
  );
};

export default Index;