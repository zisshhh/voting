import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, BarChart2, Briefcase, User, Settings, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function App() {
  const sidebarNavItems = [
    { name: "Dashboard", icon: <Home className="h-4 w-4" />, href: "#", current: true },
    { name: "Elections", icon: <BarChart2 className="h-4 w-4" />, href: "#", current: false },
    { name: "Results", icon: <Briefcase className="h-4 w-4" />, href: "#", current: false },
    { name: "Profile", icon: <User className="h-4 w-4" />, href: "#", current: false },
    { name: "Settings", icon: <Settings className="h-4 w-4" />, href: "#", current: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 flex flex-col">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="mx-auto flex max-w-full items-center justify-between p-4 px-8">
          <div className="flex items-center space-x-2 text-xl font-bold">
            <span className="text-blue-500">::</span>
            <span>logo</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-sm font-medium text-blue-500 border-b-2 border-blue-500">
              Dashboard
            </a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Elections
            </a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Results
            </a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Help
            </a>
            <Avatar>
              <AvatarImage src="https://placehold.co/40x40/e2e8f0/64748b?text=JD" alt="User Profile" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </nav>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <aside className="w-64 bg-white p-4 pt-6 shadow-md">
          <div className="space-y-2">
            {sidebarNavItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-3 p-3 rounded-lg ${
                  item.current ? 'bg-blue-50 text-blue-500 font-semibold' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <h1 className="text-4xl font-bold mb-2">Welcome to VoteSecure!</h1>
          <p className="text-lg text-gray-600 mb-8">
            Your comprehensive platform for secure and transparent online elections.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="rounded-xl shadow-lg h-full">
              <CardHeader className="p-6 pb-2">
                <CardTitle className="text-xl font-bold">Your Dashboard</CardTitle>
                <CardDescription className="mt-1 text-sm text-gray-500">
                  Quick access to your voting activities and election overview.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="text-sm text-gray-600 mb-4">
                  Check your election status, view upcoming elections, and access results.
                </p>
                <Button className="bg-slate-900 text-white hover:bg-slate-800">
                  Go to Dashboard
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-lg h-full">
              <CardHeader className="p-6 pb-2">
                <CardTitle className="text-xl font-bold">Elections</CardTitle>
                <CardDescription className="mt-1 text-sm text-gray-500">
                  Browse all ongoing and upcoming elections.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="text-sm text-gray-600 mb-4">
                  Participate in open elections or review past voting processes.
                </p>
                <Button variant="outline" className="text-gray-900 border-gray-300 hover:bg-gray-100">
                  View Elections
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-lg h-full">
              <CardHeader className="p-6 pb-2">
                <CardTitle className="text-xl font-bold">Results & Analytics</CardTitle>
                <CardDescription className="mt-1 text-sm text-gray-500">
                  Explore detailed election outcomes.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="text-sm text-gray-600 mb-4">
                  Analyze voting trends and transparency reports for all elections.
                </p>
                <Button variant="outline" className="text-gray-900 border-gray-300 hover:bg-gray-100">
                  See Results
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="rounded-xl shadow-lg">
            <CardHeader className="p-6 pb-2">
              <CardTitle className="text-xl font-bold">Need Help?</CardTitle>
              <CardDescription className="mt-1 text-sm text-gray-500">
                Find answers to your questions.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-sm text-gray-600 mb-4">
                Our comprehensive help center provides guides, FAQs, and support contact information.
              </p>
              <Button variant="link" className="text-blue-500 p-0 h-auto">
                Visit Help Center
              </Button>
            </CardContent>
          </Card>
        </main>
      </div>

      {/* Footer */}
      <footer className="mt-auto bg-white p-4 text-sm text-gray-500 shadow-sm border-t border-gray-200">
        <div className="mx-auto flex max-w-full items-center justify-between px-8">
          <div className="flex space-x-6">
            <a href="#">Resources</a>
            <a href="#">Legal</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
