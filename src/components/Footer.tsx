import React from 'react';
import { ArrowUp } from 'lucide-react';
import { CareerStackLogo } from './CareerStackLogo';

// ...
<div className="md:col-span-4">
  <div className="mb-3">
    <CareerStackLogo size={28} showTagline={true} />
  </div>
  <p className="text-xs text-slate-400 leading-relaxed max-w-sm mt-3">
    The premier interactive 4-year undergraduate blueprint for computer science and engineering students targeting high-paying software engineering roles.
  </p>
  <div className="mt-4 text-[11px] font-mono text-slate-500">
    Stack Skills. Build Your Career.
  </div>
</div>
// ...
<div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
  <div>
    © {new Date().getFullYear()} CareerStack. Stack Skills. Build Your Career.
  </div>
  <div className="flex items-center gap-4 text-slate-400">
    <span>Open Source Mindset</span>
    <span>·</span>
    <span>No Fluff Curriculum</span>
    <span>·</span>
    <span>Zero Unrealistic Promises</span>
  </div>
</div>
