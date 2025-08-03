import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LayoutDashboard, BarChart2, Briefcase, Settings, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const ongoingElections = [
  {
    title: "Student Council Election 2024",
    description: "Vote for your representatives in the annual Student Council elections. Your voice matters!",
    status: "Ongoing",
    statusColor: "bg-blue-500",
    time: "Ends in 5 days",
    image: "https://placehold.co/300x200/e2e8f0/64748b?text=Student+Council",
  },
  {
    title: "Community Fund Referendum",
    description: "Decide how community funds should be allocated for local projects. Review proposals now.",
    status: "Ongoing",
    statusColor: "bg-blue-500",
    time: "Ends in 12 days",
    image: "https://placehold.co/300x200/e2e8f0/64748b?text=Community+Fund",
  },
  {
    title: "Department Head Selection",
    description: "Elect the new head for the Computer Science department. Candidate profiles available.",
    status: "Ongoing",
    statusColor: "bg-blue-500",
    time: "Ends in 8 days",
    image: "https://placehold.co/300x200/e2e8f0/64748b?text=Department+Head",
  },
  {
    title: "University Policy Amendment",
    description: "Cast your vote on the proposed changes to the university's academic integrity policy.",
    status: "Ongoing",
    statusColor: "bg-blue-500",
    time: "Ends in 3 days",
    image: "https://placehold.co/300x200/e2e8f0/64748b?text=University+Policy",
  },
];

const pastElections = [
  {
    title: "Annual Board Member Selection",
    description: "Results are in for the Annual Board Member Elections. View the new appointments.",
    status: "Completed",
    statusColor: "bg-green-500",
    date: "Closed on March 15, 2024",
    image: "https://placehold.co/300x200/e2e8f0/64748b?text=Board+Member",
  },
  {
    title: "Campus Facilities Survey",
    description: "The survey on campus facilities improvements has concluded. See the compiled feedback.",
    status: "Completed",
    statusColor: "bg-green-500",
    date: "Closed on Feb 28, 2024",
    image: "https://placehold.co/300x200/e2e8f0/64748b?text=Facilities+Survey",
  },
  {
    title: "Local Development Proposal",
    description: "The referendum on the new urban development project has been finalized. Access the full report.",
    status: "Completed",
    statusColor: "bg-green-500",
    date: "Closed on Jan 10, 2024",
    image: "https://placehold.co/300x200/e2e8f0/64748b?text=Development+Proposal",
  },
];

export default function App() {
  const sidebarNavItems = [
    { name: "Dashboard", icon: <LayoutDashboard className="h-4 w-4" />, href: "/dashboard", current: false },
    { name: "My Elections", icon: <BarChart2 className="h-4 w-4" />, href: "election", current: true },
    { name: "Results", icon: <Briefcase className="h-4 w-4" />, href: "#", current: false },
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
            <a href="dashboard" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Dashboard
            </a>
            <a href="/election" className="text-sm font-medium text-blue-500 border-b-2 border-blue-500">
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
          <h1 className="text-4xl font-bold mb-2">Welcome back, John Doe!</h1>
          <p className="text-lg text-gray-600 mb-8">
            Here's an overview of your election activities.
          </p>

          {/* Ongoing Elections */}
          <h2 className="text-2xl font-bold mb-6">Ongoing Elections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {ongoingElections.map((election, index) => (
              <Card key={index} className="rounded-xl shadow-lg flex flex-col h-full">
                <CardHeader className="p-0 relative">
                  {/* Replaced Next.js Image component with a standard img tag */}
                  <img src={election.image} alt={election.title} className="rounded-t-xl w-full h-auto object-cover" />
                </CardHeader>
                <CardContent className="p-4 flex-grow flex flex-col">
                  <h3 className="text-lg font-semibold mb-2">{election.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 flex-grow">{election.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <Badge className={`${election.statusColor} text-white px-2 py-0.5 rounded-full`}>
                      {election.status}
                    </Badge>
                    <span>{election.time}</span>
                  </div>
                  <Button className="w-full bg-slate-900 text-white hover:bg-slate-800">
                    Vote Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Past Elections */}
          <h2 className="text-2xl font-bold mb-6">Past Elections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastElections.map((election, index) => (
              <Card key={index} className="rounded-xl shadow-lg flex flex-col h-full">
                <CardHeader className="p-0 relative">
                  {/* Replaced Next.js Image component with a standard img tag */}
                  <img src={election.image} alt={election.title} className="rounded-t-xl w-full h-auto object-cover" />
                </CardHeader>
                <CardContent className="p-4 flex-grow flex flex-col">
                  <h3 className="text-lg font-semibold mb-2">{election.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 flex-grow">{election.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <Badge className={`${election.statusColor} text-white px-2 py-0.5 rounded-full`}>
                      {election.status}
                    </Badge>
                    <span>{election.date}</span>
                  </div>
                  <Button variant="outline" className="w-full text-gray-900 border-gray-300 hover:bg-gray-100">
                    View Results
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
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
