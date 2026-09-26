import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import ProjectCard from "./ProjectCard";

const INITIAL_COUNT = 4;

const ProjectsSection = ({ projects }) => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const hiddenCount = projects.length - INITIAL_COUNT;

  return (
    <section id="projects" className="relative py-16 lg:py-24 bg-dark-100">
      <div className="container">
        <SectionHeader index="02" label="Projects" title="Professional work">
          Production apps I built or led and shipped to the Play Store and
          App Store. Tap any screenshot to view it full size.
        </SectionHeader>

        <div className="space-y-8 lg:space-y-10">
          {visible.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {hiddenCount > 0 && (
          <div className="text-center mt-10">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="btn-secondary inline-flex items-center gap-2"
              aria-expanded={showAll}
            >
              {showAll ? (
                <>
                  <ChevronUp className="w-5 h-5" aria-hidden="true" />
                  Show fewer projects
                </>
              ) : (
                <>
                  <ChevronDown className="w-5 h-5" aria-hidden="true" />
                  Show {hiddenCount} more projects
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
