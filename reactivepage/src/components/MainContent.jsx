import headerImage from "./icons/image.jpg";
import profileImage from "./icons/profile.jpg";

export function MainContent() {
  return (
    <div className="w-full">
      <div className="h-48 hidden md:block">
        <img src={headerImage} alt="image" className="w-full h-full object-cover" />
      </div>

      <div className="grid grid-cols-11 gap-8 p-8">
        
        {/* Profile */ }
        <div className="h-96 rounded-2xl shadow-lg bg-white md:col-span-2 -translate-y-24 col-span-11 hidden md:flex flex-col items-center p-6 border border-slate-100">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-sm bg-slate-200">
            <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <h2 className="mt-4 text-lg font-bold text-slate-800">Dharaneesh</h2>
          <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">web developer</p>

          <div className="mt-6 w-full space-y-3">
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 cursor-pointer transition-colors">
              <span className="text-sm font-medium text-slate-700">Projects</span>
              <span className="text-xs font-bold text-slate-400">23</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 cursor-pointer transition-colors">
              <span className="text-sm font-medium text-slate-700">Followers</span>
              <span className="text-xs font-bold text-slate-400">1.2k</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 cursor-pointer transition-colors">
              <span className="text-sm font-medium text-slate-700">Following</span>
              <span className="text-xs font-bold text-slate-400">250</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-9 col-span-11 ">
          <div className="mb-8">
            <p className="text-slate-500 text-sm font-medium">Monday, 10 February</p>
            <h1 className="text-3xl font-bold text-slate-800">Good Morning Dharaneesh! 👋</h1>
          </div>

          <div className="grid grid-cols-9 gap-8">
            <div className="h-96 rounded-3xl shadow-2xl md:col-span-6 col-span-9 p-8 flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                  <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-slate-200 font-medium">Monday, 14 October 2025</span>
                  <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className="flex space-x-2">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 cursor-pointer transition-colors">
                    <svg className="w-5 h-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                  </div>
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 cursor-pointer transition-colors">
                    <svg className="w-5 h-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l7 7m-7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Items */}
              <div className="space-y-6 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                {[
                  { time: "11.30 AM", title: "UX Webinar", type: "text" },
                  { time: "11.30 AM", title: "My First Webinar", type: "upcoming" },
                  { time: "11.30 AM", title: "Important Webinar", type: "upcoming" },
                  { time: "11.30 AM", title: "Webinar 1", type: "upcoming" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start group">
                    <div className="w-20 pt-1">
                      <p className="text-slate-400 text-sm font-medium">{item.time}</p>
                      {item.type === "upcoming" && <p className="text-slate-500 text-[10px]">{item.time}</p>}
                    </div>
                    <div className="mx-4 w-1.5 h-12 bg-white/10 rounded-full relative group-hover:bg-blue-400/50 transition-colors">
                      <div className="absolute top-0 left-0 w-full h-1/2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="flex-1">
                      {item.type === "upcoming" && (
                        <div className="flex items-center space-x-2 mb-1">
                          <div className="p-1 rounded bg-blue-500/20">
                            <svg className="w-3 h-3 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14v-4zM5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <span className="text-blue-400 text-[10px] font-bold uppercase tracking-wider">Upcoming</span>
                        </div>
                      )}
                      <h3 className="text-slate-200 font-semibold text-lg">{item.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-96 rounded-2xl shadow-lg bg-white md:col-span-3 col-span-9 border border-slate-100 p-6">
              <div className="h-full w-full bg-slate-50 rounded-xl flex items-center justify-center border border-dashed border-slate-200">
                <p className="text-slate-400 font-medium">Stats</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}