
import React from 'react';
import { ProjectStatus } from '../type/type.js';
import { ArrowLeft, Calendar, User, DollarSign, Building2 } from 'lucide-react';

const ProjectDetail = ({ project, onBack }) => {
  if (!project) return null;

  const getStatusColor = (status) => {
    switch (status) {
      case ProjectStatus.ACTIVE: return 'bg-emerald-100 text-emerald-700';
      case ProjectStatus.ON_HOLD: return 'bg-amber-100 text-amber-700';
      case ProjectStatus.COMPLETED: return 'bg-blue-100 text-blue-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Navigation */}

      <button 
        onClick={onBack}
        className="flex items-center gap-2 cursor-pointer text-slate-500 hover:text-indigo-600 transition-colors mb-8 group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium">Back to Projects</span>
      </button>

      {/* Hero Section */}
      <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${getStatusColor(project.status)}`}>
              {project.status}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              {project.name}
            </h1>
            <div className="flex items-center gap-2 mt-2 text-slate-500">
              <Building2 className="w-4 h-4" />
              <span className="text-lg">{project.clientName}</span>
            </div>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <div className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-1">Total Budget</div>
            <div className="text-3xl font-bold text-indigo-600">
              ${project.budget.toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-indigo-600">
            <Calendar className="w-5 h-5" />
            <h3 className="font-bold text-slate-900">Timeline</h3>
          </div>
          <div className="space-y-3">
            <div>
              <label className="text-xs font-semibold text-slate-400 uppercase">Start Date</label>
              <p className="font-medium text-slate-800">{project.startDate}</p>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-400 uppercase">Target Completion</label>
              <p className="font-medium text-slate-800">{project.endDate || 'TBD'}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-indigo-600">
            <User className="w-5 h-5" />
            <h3 className="font-bold text-slate-900">Leadership</h3>
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-400 uppercase">Project Manager</label>
            <p className="font-medium text-slate-800 text-lg">{project.manager}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-indigo-600">
            <DollarSign className="w-5 h-5" />
            <h3 className="font-bold text-slate-900">Financials</h3>
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-400 uppercase">Budget Status</label>
            <p className="font-medium text-slate-800">On Track</p>
            <div className="w-full bg-slate-100 h-2 rounded-full mt-2">
              <div className="bg-indigo-500 h-2 rounded-full w-[65%]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h3 className="text-xl font-bold text-slate-900 mb-4">Project Overview</h3>
        <p className="text-slate-600 leading-relaxed text-lg">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectDetail;
