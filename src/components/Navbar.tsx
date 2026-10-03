import React from 'react';
import { CheckCircle2, Award } from 'lucide-react';
import { CareerStackLogo } from './CareerStackLogo';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  onOpenTracker: () => void;
  onOpenQuiz: () => void;
  completedMilestonesCount: number;
  totalMilestonesCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigate,
  onOpenTracker,
  onOpenQuiz,
  completedMilestonesCount,
  totalMilestonesCount
}) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#070b14]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Zone */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="hover:opacity-90 transition-opacity"
        >
          <CareerStackLogo size={32} />
        </a>

        {/* Clean Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <button onClick={() => onNavigate('timeline')} className="hover:text-white transition-colors cursor-pointer">
            4-Year Timeline
          </button>
          <button onClick={() => onNavigate('detailed-roadmap')} className="hover:text-white transition-colors cursor-pointer">
            Year Curriculum
          </button>
          <button onClick={() => onNavigate('dsa-system')} className="hover:text-white transition-colors cursor-pointer">
            DSA Mastery
          </button>
          <button onClick={() => onNavigate('outreach')} className="hover:text-white transition-colors cursor-pointer">
            Outreach Studio
          </button>
          <button onClick={() => onNavigate('compensation')} className="hover:text-white transition-colors cursor-pointer">
            Salary Tiers
          </button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenQuiz}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-slate-200 bg-slate-900/90 border border-slate-700/80 rounded-lg hover:border-slate-600 hover:text-white transition-colors whitespace-nowrap cursor-pointer"
          >
            <Award className="h-3.5 w-3.5 text-cyan-400" />
            <span>Check My Year</span>
          </button>
          <button
            onClick={onOpenTracker}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm shadow-blue-600/30 transition-all whitespace-nowrap cursor-pointer"
          >
            <CheckCircle2 className="h-3.5 w-3.5" />
            <span>Tracker</span>
            <span className="font-mono text-[11px] text-blue-200">
              {completedMilestonesCount}/{totalMilestonesCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
