import React, { useState } from 'react';
import { ROADMAP_YEARS, YearData } from './data/roadmapData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { RoadmapOverview } from './components/RoadmapOverview';
import { YearDetailView } from './components/YearDetailView';
import { DSAPatternsExplorer } from './components/DSAPatternsExplorer';
import { OutreachStudio } from './components/OutreachStudio';
import { CareerTiersExplorer } from './components/CareerTiersExplorer';
import { ProgressTrackerModal } from './components/ProgressTrackerModal';
import { AssessmentModal } from './components/AssessmentModal';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedYearNumber, setSelectedYearNumber] = useState<1 | 2 | 3 | 4>(1);
  const [isTrackerOpen, setIsTrackerOpen] = useState<boolean>(false);
  const [isQuizOpen, setIsQuizOpen] = useState<boolean>(false);

  // Persistent storage under CareerStack
  const [completedMilestones, setCompletedMilestones] = useState<string[]>(() => {
    try {
      const saved =
        localStorage.getItem('careerstack_completed_milestones') ||
        localStorage.getItem('devcadence_completed_milestones');
      return saved ? JSON.parse(saved) : ['m-y1-1', 'm-y1-2'];
    } catch {
      return ['m-y1-1', 'm-y1-2'];
    }
  });

  const allMilestonesCount = ROADMAP_YEARS.flatMap((y) => y.milestones).length;

  const handleToggleMilestone = (id: string) => {
    setCompletedMilestones((prev) => {
      const next = prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id];
      try {
        localStorage.setItem('careerstack_completed_milestones', JSON.stringify(next));
      } catch (e) {
        console.error('Failed to save to localStorage', e);
      }
      return next;
    });
  };

  const handleResetMilestones = () => {
    setCompletedMilestones([]);
    try {
      localStorage.removeItem('careerstack_completed_milestones');
      localStorage.removeItem('devcadence_completed_milestones');
    } catch (e) {
      console.error(e);
    }
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectYear = (yearNumber: 1 | 2 | 3 | 4) => {
    setSelectedYearNumber(yearNumber);
    const detailEl = document.getElementById('detailed-roadmap');
    if (detailEl) detailEl.scrollIntoView({ behavior: 'smooth' });
  };

  const selectedYearData: YearData =
    ROADMAP_YEARS.find((y) => y.yearNumber === selectedYearNumber) || ROADMAP_YEARS[0];

  return (
    <div className="min-h-screen bg-[#060911] text-slate-100 flex flex-col font-sans selection:bg-blue-600/30 selection:text-blue-200">
      <Navbar
        onNavigate={handleNavigate}
        onOpenTracker={() => setIsTrackerOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
        completedMilestonesCount={completedMilestones.length}
        totalMilestonesCount={allMilestonesCount}
      />

      <main className="flex-1">
        <HeroSection
          onExplore={() => handleNavigate('timeline')}
          onStartJourney={() => setIsQuizOpen(true)}
          onSelectYear={handleSelectYear}
        />

        <RoadmapOverview
          years={ROADMAP_YEARS}
          selectedYearNumber={selectedYearNumber}
          onSelectYear={handleSelectYear}
          completedMilestones={completedMilestones}
        />

        <YearDetailView
          yearData={selectedYearData}
          completedMilestones={completedMilestones}
          onToggleMilestone={handleToggleMilestone}
          onSelectYear={setSelectedYearNumber}
        />

        <DSAPatternsExplorer />
        <OutreachStudio />
        <CareerTiersExplorer />
      </main>

      <ProgressTrackerModal
        isOpen={isTrackerOpen}
        onClose={() => setIsTrackerOpen(false)}
        completedMilestones={completedMilestones}
        onToggleMilestone={handleToggleMilestone}
        onResetMilestones={handleResetMilestones}
      />

      <AssessmentModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onSelectRecommendedYear={(yearNum) => {
          setSelectedYearNumber(yearNum);
          handleNavigate('detailed-roadmap');
        }}
      />

      <Footer onSelectYear={setSelectedYearNumber} onNavigate={handleNavigate} />
    </div>
  );
}
