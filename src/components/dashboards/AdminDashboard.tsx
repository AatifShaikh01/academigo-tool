import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, GraduationCap, BookOpen, BarChart3, Plus, Settings } from "lucide-react";

export const AdminDashboard = () => {
  const stats = [
    { title: "Total Classes", value: "12", icon: BookOpen, color: "text-primary" },
    { title: "Total Teachers", value: "28", icon: Users, color: "text-accent" },
    { title: "Total Students", value: "450", icon: GraduationCap, color: "text-success" },
    { title: "Active Tests", value: "15", icon: BarChart3, color: "text-warning" },
  ];

  const quickActions = [
    { title: "Create New Class", icon: Plus, description: "Add a new class to the system" },
    { title: "Assign Teachers", icon: Users, description: "Assign teachers to classes" },
    { title: "Bulk Import Students", icon: GraduationCap, description: "Import students via CSV" },
    { title: "View Reports", icon: BarChart3, description: "Generate performance reports" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-hero text-primary-foreground shadow-elevated">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              <p className="text-primary-foreground/80 mt-2">Manage your school's test system</p>
            </div>
            <Button variant="secondary" className="bg-white/10 hover:bg-white/20 border-white/20">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gradient-card shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">{stat.title}</p>
                    <p className="text-3xl font-bold text-foreground mt-2">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => (
            <Card key={index} className="group bg-gradient-card shadow-card hover:shadow-elevated transition-smooth hover:-translate-y-1 cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                  <action.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">{action.title}</CardTitle>
                <CardDescription>{action.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button className="w-full bg-gradient-primary hover:shadow-button transition-smooth">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};