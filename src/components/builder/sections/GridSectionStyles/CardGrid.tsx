import TipTapEditorFloating from '@/components/editor/TipTapEditorFloating';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


const CardGrid = ({isEditing,styles,content,onContentChange,onStyleChange,gridCount}) => {
  return (
    <div className="bg-white p-8" style={styles.background || {}}>
    {isEditing ? (
      <div className="space-y-4">
        <TipTapEditorFloating
          value={content.gridTitle || 'Grid Title'}
          onChange={(value) => onContentChange('gridTitle', value)}
        />
        <Select
          value={content.gridCount || '3'}
          onValueChange={(value) => onContentChange('gridCount', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select grid layout" />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4, 5].map((count) => (
              <SelectItem key={count} value={count.toString()}>
                {count} Column{count > 1 ? 's' : ''}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: gridCount }).map((_, index) => (
            <div key={index} className="space-y-2">
              <Input
                type="url"
                placeholder={`Image URL ${index + 1}`}
                value={content[`gridImage${index}`] || ''}
                onChange={(e) => onContentChange(`gridImage${index}`, e.target.value)}
              />
              <TipTapEditorFloating
                value={content[`gridText${index}`] || `Grid Item ${index + 1}`}
                onChange={(value) => onContentChange(`gridText${index}`, value)}
              />
            </div>
          ))}
        </div>
      </div>
    ) : (
      <div>
        <h2 
          className="text-2xl  mb-6 text-center" 
          style={styles.gridTitle || {}}
          dangerouslySetInnerHTML={{ __html: content.gridTitle || 'Grid Title' }}
        />
        <div className={`grid gap-4 grid-cols-1 md:grid-cols-${gridCount}`}>
          {Array.from({ length: gridCount }).map((_, index) => (
            <Card key={index} className="overflow-hidden">
            <img
              src={content[`gridImage${index}`]||"https://via.placeholder.com/550"}
              alt={`Grid item ${index + 1}`}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: content[`gridText${index}`] || `Grid Item ${index + 1}` }}>
              </CardTitle>
              {/* <CardDescription>{card.description}</CardDescription> */}
            </CardHeader>
            <CardFooter>
              <Button className="w-full">Learn More</Button>
            </CardFooter>
          </Card>
          ))}
        </div>
      </div>
    )}
  </div>
  )
}

export default CardGrid