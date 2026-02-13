import headerImage from "./icons/image.jpg";
import profileImage from "./icons/profile.jpg";
import { Calender } from "./icons/Calender";
import { Chevron } from "./icons/Chevron";
import { Leftarrow } from "./icons/Leftarrow";
import { Rightarrow } from "./icons/Rightarrow";
import { Videocamera } from "./icons/Videocamera";
import { Plus } from "./icons/Plus";

export function MainContent() {
  return (
    <div className="w-full">
      <div className="h-48 hidden md:block">
        <img src={headerImage} alt="image" className="w-full h-full object-cover" />
      </div>

      <div className="grid grid-cols-11 gap-8 p-8">

        {/* Profile */}
        <div className="h-fit rounded-2xl shadow-sm bg-mischka-100 xl:col-span-2 md:col-span-3 -translate-y-19 col-span-11 hidden md:flex flex-col items-center p-4 border border-mischka-200">
          <div className="w-24 h-24 flex-shrink-0 rounded-full overflow-hidden shadow-md border-4 border-white">
            <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
          </div>

          <div className="text-center mt-4 space-y-1">
            <h2 className="text-xl font-bold text-mischka-900 tracking-wide">Dharaneesh D</h2>
            <div className="pt-1 space-y-1">
              <p className="text-xs text-mischka-600">dharaneesh@gmail.com</p>
              <p className="text-xs text-mischka-600">+91 9999955555</p>
              <p className="text-xs text-mischka-600 font-medium">Tamilnadu, India</p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-9 md:col-span-8 col-span-11 ">
          <div className="mb-8 pt-20 md:pt-0">
            <p className="text-mischka-600 text-sm font-medium">Monday, 10 February</p>
            <h1 className="text-3xl font-bold text-mischka-900 leading-tight">Good Morning Dharaneesh! 👋</h1>
          </div>

          <div className="grid grid-cols-9 gap-8">
            <div className="h-[28rem] rounded-3xl shadow-sm bg-mischka-100 lg:col-span-6 col-span-9 p-8 flex flex-col border border-mischka-200">
              {/* Header */}
              <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
                <div className="flex items-center space-x-4 bg-mischka-50 px-4 py-2 rounded-xl border border-mischka-200 w-full sm:w-auto">
                  <Calender className="w-5 h-5 text-mischka-600" />
                  <span className="text-mischka-900 font-medium whitespace-nowrap">Monday, 10 February 2025</span>
                  <Chevron className="w-4 h-4 text-mischka-600" />
                </div>
                <div className="flex space-x-2">
                  <div className="p-2 rounded-lg bg-mischka-50 border border-mischka-200 hover:bg-mischka-200 cursor-pointer transition-colors">
                    <Leftarrow className="w-5 h-5 text-mischka-600" />
                  </div>
                  <div className="p-2 rounded-lg bg-mischka-50 border border-mischka-200 hover:bg-mischka-200 cursor-pointer transition-colors">
                    <Rightarrow className="w-5 h-5 text-mischka-600" />
                  </div>
                </div>
              </div>

              {/* Items */}
              <div className="space-y-8 flex-1 overflow-y-auto pr-4 custom-scrollbar">
                {[
                  { time: "11.30 AM", title: "UX Webinar", type: "live" },
                  { time: "11.30 AM", title: "My First Webinar", type: "upcoming" },
                  { time: "11.30 AM", title: "Important Webinar", type: "upcoming" },
                  { time: "11.30 AM", title: "Webinar 1", type: "upcoming" },
                  { time: "12.00 PM", title: "Design Systems", type: "upcoming" },
                  { time: "01.30 PM", title: "React Masterclass", type: "upcoming" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    {/* Time Column */}
                    <div className="w-20 flex-shrink-0">
                      <p className="text-mischka-900 text-sm font-medium">11.30 AM</p>
                      <p className="text-mischka-600 text-xs mt-0.5">11.30 AM</p>
                    </div>

                    {/* Vertical Divider */}
                    <div className="w-[2px] h-10 bg-mischka-200 mx-4 sm:mx-6 flex-shrink-0"></div>

                    {/* Content Column */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <div className={`p-1.5 rounded-lg flex-shrink-0 ${item.type === 'live' ? 'bg-red-500' : 'bg-mischka-600'}`}>
                          <Videocamera className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-mischka-600 text-xs font-semibold truncate">
                          {item.type === 'live' ? 'Live' : 'Upcoming'}
                        </span>
                      </div>
                      <h3 className="text-mischka-900 font-semibold text-lg truncate">{item.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="h-[28rem] rounded-3xl shadow-sm bg-mischka-100 lg:col-span-3 col-span-9 p-6 flex flex-col gap-4 border border-mischka-200">
              <div className="flex gap-4 h-1/2">
                <div className="flex-1 bg-mischka-50 rounded-2xl border border-mischka-200 hover:bg-mischka-200 transition-colors cursor-pointer flex flex-col items-center justify-center p-4 group min-w-0">
                  <div className="p-3 bg-mischka-200 rounded-xl mb-3 group-hover:scale-110 transition-transform flex-shrink-0">
                    <Calender className="w-6 h-6 text-mischka-600" />
                  </div>
                  <span className="text-mischka-900 text-[10px] sm:text-xs font-semibold text-center leading-tight">Schedule a Webinar</span>
                </div>

                <div className="flex-1 bg-mischka-50 rounded-2xl border border-mischka-200 hover:bg-mischka-200 transition-colors cursor-pointer flex flex-col items-center justify-center p-4 group min-w-0">
                  <div className="p-3 bg-mischka-200 rounded-xl mb-3 group-hover:scale-110 transition-transform flex-shrink-0">
                    <Plus className="w-6 h-6 text-mischka-600" />
                  </div>
                  <span className="text-mischka-900 text-[10px] sm:text-xs font-semibold text-center leading-tight">Join a Webinar</span>
                </div>
              </div>

              <div className="h-1/2 bg-mischka-50 rounded-2xl border border-mischka-200 hover:bg-mischka-200 transition-colors cursor-pointer flex flex-col items-center justify-center p-4 group min-w-0">
                <div className="p-3 bg-mischka-200 rounded-xl mb-3 group-hover:scale-110 transition-transform flex-shrink-0">
                  <Videocamera className="w-6 h-6 text-mischka-600" />
                </div>
                <span className="text-mischka-900 text-sm font-semibold text-center truncate">Open Recordings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}