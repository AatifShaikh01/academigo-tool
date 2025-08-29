import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Trophy, Clock, TrendingUp, Play, Eye } from "lucide-react";

export const StudentDashboard = () => {
  const stats = [
    { title: "Tests Completed", value: "24", icon: FileText, color: "text-success" },
    { title: "Average Score", value: "87%", icon: Trophy, color: "text-warning" },
    { title: "Pending Tests", value: "3", icon: Clock, color: "text-accent" },
    { title: "Class Rank", value: "#5", icon: TrendingUp, color: "text-primary" },
  ];

  const upcomingTests = [
    { title: "Mathematics Final", subject: "Mathematics", class: "Class 10-A", date: "Tomorrow", time: "10:00 AM", duration: "2 hours", status: "upcoming" },
    { title: "Physics Quiz", subject: "Physics", class: "Class 10-A", date: "Dec 25", time: "2:00 PM", duration: "1 hour", status: "upcoming" },
    { title: "Chemistry Lab Test", subject: "Chemistry", class: "Class 10-A", date: "Dec 27", time: "11:00 AM", duration: "1.5 hours", status: "upcoming" },
  ];

  const recentResults = [
    { title: "Biology Test", score: 92, total: 100, grade: "A+", date: "Dec 20" },
    { title: "English Essay", score: 85, total: 100, grade: "A", date: "Dec 18" },
    { title: "History Quiz", score: 78, total: 100, grade: "B+", date: "Dec 15" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-hero text-primary-foreground shadow-elevated">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Student Dashboard</h1>
              <p className="text-primary-foreground/80 mt-2">Track your academic progress</p>
            </div>
            <Badge variant="secondary" className="bg-white/10 text-primary-foreground border-white/20">
              Class 10-A
            </Badge>
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
          {/* Upcoming Tests */}
          <Card className="bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle>Upcoming Tests</CardTitle>
              <CardDescription>Tests you need to attempt</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingTests.map((test, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-smooth">
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{test.title}</h4>
                      <p className="text-muted-foreground text-sm">{test.subject} • {test.duration}</p>
                      <p className="text-accent text-sm font-medium">{test.date} at {test.time}</p>
                    </div>
                    <Button size="sm" className="bg-gradient-primary hover:shadow-button transition-smooth">
                      <Play className="w-4 h-4 mr-1" />
                      Start
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Results */}
          <Card className="bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle>Recent Results</CardTitle>
              <CardDescription>Your latest test performances</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentResults.map((result, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-smooth">
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{result.title}</h4>
                      <p className="text-muted-foreground text-sm">{result.date}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-foreground">{result.score}/{result.total}</span>
                        <Badge variant={result.grade.startsWith('A') ? 'default' : 'secondary'} className="bg-success text-success-foreground">
                          {result.grade}
                        </Badge>
                      </div>
                      <Button size="sm" variant="outline" className="mt-2">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};