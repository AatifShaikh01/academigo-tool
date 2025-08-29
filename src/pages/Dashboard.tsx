import { useSearchParams } from "react-router-dom";
import { AdminDashboard } from "@/components/dashboards/AdminDashboard";
import { TeacherDashboard } from "@/components/dashboards/TeacherDashboard";
import { StudentDashboard } from "@/components/dashboards/StudentDashboard";

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role");

  const renderDashboard = () => {
    switch (role) {
      case "admin":
        return <AdminDashboard />;
      case "teacher":
        return <TeacherDashboard />;
      case "student":
        return <StudentDashboard />;
      default:
        return (
          <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-foreground mb-4">Invalid Role</h1>
              <p className="text-muted-foreground">Please select a valid role to continue.</p>
            </div>
          </div>
        );
    }
  };

  return renderDashboard();
};

export default Dashboard;