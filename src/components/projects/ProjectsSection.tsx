import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BrandingTab from './BrandingTab';
import WebDevelopmentTab from './WebDevelopmentTab';

const ProjectsSection = () => {
  return (
    <div className="mx-auto max-w-[1300px] px-6">
      <Tabs defaultValue="branding">
        <TabsList>
          <TabsTrigger value="branding">Branding</TabsTrigger>
          <TabsTrigger value="web-development">Web development</TabsTrigger>
        </TabsList>
        <TabsContent value="branding">
          <BrandingTab />
        </TabsContent>
        <TabsContent value="web-development">
          <WebDevelopmentTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProjectsSection;
