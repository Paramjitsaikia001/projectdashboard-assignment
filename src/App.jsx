
import React, { useState, useMemo } from 'react';
import { MOCK_PROJECTS } from './data/mockprojects.js';
import { ProjectStatus } from './type/type.js';
import ProjectFilters from './component/Projectfilter.jsx';
import ProjectDetail from './component/Projectdetails.jsx';
import { ArrowRight, LayoutDashboard } from 'lucide-react';

const Dashboard = () => {

  const [view, setView] = useState('list');

  const [filters, setFilters] = useState({
    search: '',
    status: [ProjectStatus.ACTIVE, ProjectStatus.ON_HOLD, ProjectStatus.COMPLETED],
  });

  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const normalize = (str = '') =>
  str
    .toLowerCase()
    .replace(/[-_]/g, '')   
    .replace(/\s+/g, '')   
    .trim();


 const filteredProjects = useMemo(() => {
  const search = normalize(filters.search);

  return MOCK_PROJECTS.filter((p) => {
    const nameMatch = normalize(p.name).includes(search);
    const clientMatch = normalize(p.clientName).includes(search);
    const statusMatch = filters.status.includes(p.status);

    return (nameMatch || clientMatch) && statusMatch;
  });
}, [filters]);


  const selectedProject = useMemo(() => 
    MOCK_PROJECTS.find(p => p.id === selectedProjectId) || null
  , [selectedProjectId]);

  const handleProjectClick = (projectId) => {
    setSelectedProjectId(projectId);
    setView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setView('list');
    setSelectedProjectId(null);
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case ProjectStatus.ACTIVE:
        return <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">Active</span>;
      case ProjectStatus.ON_HOLD:
        return <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">On Hold</span>;
      case ProjectStatus.COMPLETED:
        return <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">Completed</span>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 transition-colors duration-300">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={handleBackToList}
          >
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">ProTrack</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={handleBackToList}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${view === 'list' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-500 hover:bg-slate-100'}`}
            >
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {view === 'list' ? (
          <div className="animate-in fade-in duration-500">
            <div className="mb-8">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Project Dashboard</h2>
              <p className="text-slate-500">Overview of your current engagement lifecycle and performance.</p>
            </div>

            <div className="mb-10">
              <ProjectFilters filters={filters} onFilterChange={setFilters} />
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">Project</th>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">Client</th>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">Status</th>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">Budget</th>
                      <th scope="col" className="relative px-6 py-4"><span className="sr-only">View</span></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    {filteredProjects.length > 0 ? (
                      filteredProjects.map((project) => (
                        <tr 
                          key={project.id} 
                          onClick={() => handleProjectClick(project.id)}
                          className="group hover:bg-slate-50 cursor-pointer transition-all"
                        >
                          <td className="px-6 py-5 whitespace-nowrap">
                            <div className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors truncate max-w-70">
                              {project.name}
                            </div>
                            <div className="text-xs text-slate-400 mt-0.5">
                               {project.startDate}
                            </div>
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap">
                            <div className="text-sm font-medium text-slate-600">{project.clientName}</div>
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap">
                            {getStatusBadge(project.status)}
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap text-sm font-mono text-slate-600">
                            ${project.budget.toLocaleString()}
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap text-right text-sm font-medium">
                            <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-indigo-600 transition-all group-hover:translate-x-1" />
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className="px-6 py-20 text-center text-slate-500">
                          <div className="flex flex-col items-center">
                            <LayoutDashboard className="w-12 h-12 text-slate-200 mb-4" />
                            <p className="text-lg font-medium">No results found</p>
                            <p className="text-sm opacity-70">Try adjusting your search or filters</p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <ProjectDetail 
            project={selectedProject} 
            onBack={handleBackToList} 
          />
        )}
      </main>
    </div>
  );
};

const App = () => {
  return <Dashboard />;
};

export default App;
