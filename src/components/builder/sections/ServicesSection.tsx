import { Input } from "@/components/ui/input";
import { EnhancedTextEditor } from "../../editor/EnhancedTextEditor";

interface ServicesSectionProps {
  content: Record<string, string>;
  styles: Record<string, any>;
  isEditing: boolean;
  onContentChange: (key: string, value: string) => void;
  onStyleChange: (key: string, value: any) => void;
}

export const ServicesSection = ({
  content,
  styles,
  isEditing,
  onContentChange,
  onStyleChange,
}: ServicesSectionProps) => {
  return (
    <div className="bg-white p-8" style={styles.background || {}}>
      {isEditing ? (
        <div className="space-y-4">
          <EnhancedTextEditor
            value={
              content.servicesTitle !== undefined &&
              content.servicesTitle !== null
                ? content.servicesTitle
                : "Our Services"
            }
            multiline={false}
            onChange={(value) => onContentChange("servicesTitle", value)}
            onStyleChange={(style) => onStyleChange("servicesTitle", style)}
          />
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="space-y-2 border border-primary bg-gray-200 p-4 rounded-xl"
            >
              <EnhancedTextEditor
                value={
                  content[`serviceTitle${index}`] !== undefined &&
                  content[`serviceTitle${index}`] !== null
                    ? content[`serviceTitle${index}`]
                    : `Service ${index}`
                }
                multiline={true}
                onChange={(value) =>
                  onContentChange(`serviceTitle${index}`, value)
                }
                onStyleChange={(style) =>
                  onStyleChange(`serviceTitle${index}`, style)
                }
              />

              <EnhancedTextEditor
                value={
                  content[`serviceDescription${index}`] ||
                  `Description ${index}`
                }
                multiline={true}
                onChange={(value) =>
                  onContentChange(`serviceDescription${index}`, value)
                }
                onStyleChange={(style) =>
                  onStyleChange(`serviceTitle${index}`, style)
                }
              />
              <Input
                type="url"
                placeholder="Service URL"
                value={content[`serviceUrl${index}`] || ""}
                onChange={(e) =>
                  onContentChange(`serviceUrl${index}`, e.target.value)
                }
              />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2
            className="text-3xl font-bold mb-8 text-center"
            style={styles.servicesTitle || {}}
          >
            {content.servicesTitle || "Our Services"}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5].map((index) => (
              <a
                key={index}
                href={content[`serviceUrl${index}`] || "#"}
                className="block p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3
                  className="text-xl font-semibold mb-4"
                  style={styles[`serviceTitle${index}`] || {}}
                >
                  {content[`serviceTitle${index}`] || `Service ${index}`}
                </h3>
                <div
                  className="prose prose-sm max-w-none text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html:
                      content[`serviceDescription${index}`] ||
                      `Description ${index}`,
                  }}
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
