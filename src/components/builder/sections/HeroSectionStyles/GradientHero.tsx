import { EnhancedTextEditor } from "@/components/editor/EnhancedTextEditor";
import { GradientPicker } from "@/components/editor/GradientPicker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function GradientHero({
  isEditing,
  styles,
  content,
  onContentChange,
  onStyleChange,
}) {
  const colorFrom = styles.heroGradient?.colorFrom || "#a855f7";
  const colorTo = styles.heroGradient?.colorTo || "#ec4899";
  return (
    <>
      {isEditing ? (
        <div className='space-y-4'>
          <EnhancedTextEditor
            styles={styles}
            componentName='heroTitle'
            value={content.heroTitle}
            fontSize={
              styles.heroTitle?.fontSize
                ? parseInt(styles.heroTitle.fontSize, 10)
                  ? parseInt(styles.heroTitle.fontSize, 10)
                  : 36
                : 36
            }
            placeholder='Title here'
            onChange={(value) => onContentChange("heroTitle", value)}
            onStyleChange={(style) => onStyleChange("heroTitle", style)}
          />
          <EnhancedTextEditor
            styles={styles}
            componentName='heroSubtitle'
            value={content.heroSubtitle}
            onChange={(value) => onContentChange("heroSubtitle", value)}
            onStyleChange={(style) => onStyleChange("heroSubtitle", style)}
            placeholder='Subtitle here'
            fontSize={
              styles.heroSubtitle?.fontSize
                ? parseInt(styles.heroSubtitle.fontSize, 10)
                  ? parseInt(styles.heroSubtitle.fontSize, 10)
                  : 20
                : 20
            }
            multiline
          />
          <GradientPicker
            styles={styles}
            componentName='heroGradient'
            onStyleChange={(style) => onStyleChange("heroGradient", style)}
          />

          <Input
            type='url'
            placeholder='Button URL'
            value={content.heroButtonUrl || ""}
            onChange={(e) => onContentChange("heroButtonUrl", e.target.value)}
          />
          <EnhancedTextEditor
            styles={styles}
            componentName='heroButtonText'
            value={content.heroButtonText}
            placeholder='Button Text'
            fontSize={
              styles.heroButtonText?.fontSize
                ? parseInt(styles.heroButtonText.fontSize, 10)
                  ? parseInt(styles.heroButtonText.fontSize, 10)
                  : 16
                : 16
            }
            onChange={(value) => onContentChange("heroButtonText", value)}
            onStyleChange={(style) => onStyleChange("heroButtonText", style)}
            onShadCNPropChange={(prop) =>
              onStyleChange("heroButtonTextShadCN", prop)
            }
          />
        </div>
      ) : (
        <div>
          <div
            style={{
              background: `linear-gradient(to right, ${colorFrom}, ${colorTo})`,
            }}
            className='min-h-screen flex flex-col items-center justify-center text-center'
          >
            <h1
              className='text-4xl font-bold mb-4 text-white'
              style={styles.heroTitle || {}}
            >
              {content.heroTitle || " Welcome to Our Website"}
            </h1>
            <div
              className='text-xl text-white mb-8 prose prose-slate max-w-none
            [&>ol]:list-decimal [&>ul]:list-disc [&>ul]:ml-8 [&>ol]:ml-8 flex-none
          '
              style={styles.heroSubtitle || {}}
              dangerouslySetInnerHTML={{
                __html:
                  content.heroSubtitle || " Discover Amazing thing with us",
              }}
            />
            <a href={content.heroButtonUrl || "#"}>
              <Button
                {...styles.heroButtonTextShadCN}
                style={styles.heroButtonText || {}}
              >
                {content.heroButtonText || "Lets Go 🚀"}
              </Button>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
export default GradientHero;
