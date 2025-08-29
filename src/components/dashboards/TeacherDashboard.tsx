import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Users, CheckCircle, Clock, Plus, Eye } from "lucide-react";

export const TeacherDashboard = () => {
  const stats = [
    { title: "My Classes", value: "3", icon: Users, color: "text-primary" },
    { title: "Active Tests", value: "5", icon: FileText, color: "text-warning" },
    { title: "Pending Reviews", value: "12", icon: Clock, color: "text-accent" },
    { title: "Completed Tests", value: "28", icon: CheckCircle, color: "text-success" },
  ];

  const recentTests = [
    { title: "Mathematics Quiz", class: "Class 10-A", students: 25, pending: 3, date: "Today" },
    { title: "Physics Chapter 5", class: "Class 11-B", students: 30, pending: 8, date: "Yesterday" },
    { title: "Chemistry Test", class: "Class 12-A", students: 28, pending: 0, date: "2 days ago" },
  ];

  const quickActions = [
    { title: "Create New Test", icon: Plus, description: "Design MCQ or subjective tests" },
    { title: "Review Answers", icon: Eye, description: "Check pending subjective answers" },
    { title: "Manage Students", icon: Users, description: "View and manage class students" },
    { title: "Publish Results", icon: CheckCircle, description: "Release test results to students" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-hero text-primary-foreground shadow-elevated">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Teacher Dashboard</h1>
              <p className="text-primary-foreground/80 mt-2">Manage your classes and tests</p>
            </div>
            <Button variant="secondary" className="bg-white/10 hover:bg-white/20 border-white/20">
              <Plus className="w-4 h-4 mr-2" />
              New Test
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
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Tests */}
          <Card className="bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle>Recent Tests</CardTitle>
              <CardDescription>Monitor your active and recent tests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTests.map((test, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-smooth">
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{test.title}</h4>
                      <p className="text-muted-foreground text-sm">{test.class} • {test.students} students</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{test.date}</p>
                      {test.pending > 0 ? (
                        <p className="text-warning font-medium">{test.pending} pending</p>
                      ) : (
                        <p className="text-success font-medium">Complete</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quickActions.map((action, index) => (
              <Card key={index} className="group bg-gradient-card shadow-card hover:shadow-elevated transition-smooth hover:-translate-y-1 cursor-pointer">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-bounce">
                    <action.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-base">{action.title}</CardTitle>
                  <CardDescription className="text-sm">{action.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button size="sm" className="w-full bg-gradient-primary hover:shadow-button transition-smooth">
                    Open
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};