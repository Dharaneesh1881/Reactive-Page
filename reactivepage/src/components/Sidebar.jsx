import { SidebarToggle } from "./icons/SidebarToggle";
import { Home } from "./icons/Home";
import { User } from "./icons/User";
import { Setting } from "./icons/Setting";
import { Creditcard } from "./icons/Credit-card";
import { Usergroup } from "./icons/User-group";
import profileImage from "./icons/profile.jpg";

export function Sidebar({ sidebarOpen, setSidebarOpen }) {
  if (!sidebarOpen) {
    return (
      <div className="fixed top-6 left-6 z-50">
        <div
          className="cursor-pointer bg-mischka-50 text-mischka-900 p-2 rounded-xl shadow-lg hover:bg-mischka-100 transition-all hover:scale-105 active:scale-95 border border-mischka-200"
          onClick={() => setSidebarOpen(true)}
        >
          <SidebarToggle className="w-8 h-8 rotate-180" />
        </div>
      </div>
    );
  }

  const menuItems = [
    { name: "Home", icon: Home },
    { name: "User", icon: User },
    { name: "Settings", icon: Setting },
    { name: "Billing", icon: Creditcard },
    { name: "Webinar", icon: Usergroup },
  ];

  return (
    <div className="w-80 h-screen bg-mischka-100 border-r border-mischka-200 text-mischka-900 flex flex-col p-8 fixed top-0 left-0 md:sticky md:top-0 z-50">
      {/* Upper Toggle Icon */}
      <div className="flex justify-end mb-4">
        <div
          className="cursor-pointer text-mischka-400 hover:text-mischka-400 transition-colors"
          onClick={() => setSidebarOpen(false)}
        >
          <SidebarToggle className="w-8 h-8" />
        </div>
      </div>

      {/* Header with Avatar */}
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-2xl font-bold tracking-tight text-mischka-900">Webinar.gg</h1>
        <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-mischka-200 shadow-sm">
          <img src={profileImage} alt="Avatar" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 space-y-8">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between group cursor-pointer"
          >
            <span className="text-xl font-medium text-mischka-600 group-hover:text-mischka-900 transition-colors">
              {item.name}
            </span>
            <div className="text-mischka-400 group-hover:text-mischka-600 transition-colors">
              <item.icon className="w-7 h-7" />
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
}
