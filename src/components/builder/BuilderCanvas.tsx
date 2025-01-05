import { useDrop } from 'react-dnd';
import { ComponentType } from '@/pages/Index';
import { PreviewComponent } from './PreviewComponent';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

interface BuilderCanvasProps {
  components: ComponentType[];
  onDrop: (item: any) => void;
  onRemove: (id: string) => void;
  onReorder: (dragIndex: number, hoverIndex: number) => void;
}

export const BuilderCanvas = ({ components, onDrop, onRemove, onReorder }: BuilderCanvasProps) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ['component', 'reorder'],
    drop: (item: any) => {
      if (item.type) onDrop(item);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`flex-1 p-8 min-h-screen transition-colors ${
        isOver ? 'bg-primary/10' : 'bg-secondary'
      }`}
    >
      {components.length === 0 ? (
        <div className="h-full flex items-center justify-center">
          <p className="text-lg text-gray-500">
            Drag and drop components here to build your page
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {components.map((component, index) => (
            <PreviewComponent
              key={component.id}
              index={index}
              component={component}
              onRemove={onRemove}
              onReorder={onReorder}
            />
          ))}
        </div>
      )}
    </div>
  );
};