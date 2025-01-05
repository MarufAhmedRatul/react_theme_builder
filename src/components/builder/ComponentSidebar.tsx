import { useDrag } from 'react-dnd';
import { LayoutGrid, Type, Grid3X3, Blocks, FootprintsIcon } from 'lucide-react';

const components = [
  { type: 'header', icon: Type, label: 'Header with Menu' },
  { type: 'hero', icon: LayoutGrid, label: 'Hero Section' },
  { type: 'grid', icon: Grid3X3, label: 'Grid Layout with Images' },
  { type: 'services', icon: Blocks, label: 'Services Section' },
  { type: 'footer', icon: FootprintsIcon, label: 'Footer with Links' },
];

const DraggableComponent = ({ type, icon: Icon, label }: any) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'component',
    item: { type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`flex items-center gap-2 p-4 mb-2 bg-white rounded-lg cursor-move transition-all ${
        isDragging ? 'opacity-50' : 'opacity-100'
      } hover:shadow-md`}
    >
      <Icon className="w-5 h-5 text-primary" />
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
};

export const ComponentSidebar = () => {
  return (
    <div className="w-64 bg-white p-4 border-r">
      <h2 className="text-lg font-semibold mb-4">Components</h2>
      <div className="space-y-2">
        {components.map((comp) => (
          <DraggableComponent key={comp.type} {...comp} />
        ))}
      </div>
    </div>
  );
};