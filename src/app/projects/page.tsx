import AboutHeroSection from '@/components/projects/AboutHeroSection';
import ProjectsSection from '@/components/projects/ProjectsSection';

const ProjectsPage = () => {
  return (
    <div className="space-y-[80px] md:space-y-[130px] lg:space-y-[160px]">
      <AboutHeroSection />
      <main>
        <ProjectsSection />
      </main>
    </div>
  );
};

export default ProjectsPage;
