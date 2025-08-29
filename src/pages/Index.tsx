import { useNavigate } from "react-router-dom";
import { RoleCard } from "@/components/RoleCard";
import { Shield, BookOpen, GraduationCap } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Index = () => {
  const navigate = useNavigate();

  const roles = [
    {
      title: "Admin",
      description: "School-level management and oversight",
      icon: Shield,
      features: [
        "Create and manage classes",
        "Assign teachers to classes", 
        "Add/import students",
        "View overall reports"
      ],
      path: "admin"
    },
    {
      title: "Teacher", 
      description: "Class management and test creation",
      icon: BookOpen,
      features: [
        "Manage class students",
        "Create MCQ/Subjective tests",
        "Review and grade answers",
        "Publish results"
      ],
      path: "teacher"
    },
    {
      title: "Student",
      description: "Take tests and track progress", 
      icon: GraduationCap,
      features: [
        "Attempt assigned tests",
        "View results and grades",
        "Track academic progress",
        "Receive notifications"
      ],
      path: "student"
    }
  ];

  const handleRoleSelect = (rolePath: string) => {
    navigate(`/dashboard?role=${rolePath}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Educational technology and learning"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              School Test Management
              <span className="block text-primary-glow">Made Simple</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Streamline your academic assessment process with our comprehensive test management platform
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                <span>Easy Test Creation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                <span>Automated Grading</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                <span>Real-time Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role Selection */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Choose Your Role</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select your role in the educational system to access your personalized dashboard
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {roles.map((role) => (
              <RoleCard
                key={role.title}
                title={role.title}
                description={role.description}
                icon={role.icon}
                features={role.features}
                onSelect={() => handleRoleSelect(role.path)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Our Platform?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built specifically for modern educational institutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Easy Test Creation</h3>
              <p className="text-muted-foreground">Create both MCQ and subjective tests with time limits and custom grading</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Student Progress Tracking</h3>
              <p className="text-muted-foreground">Monitor individual and class performance with detailed analytics</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Secure & Reliable</h3>
              <p className="text-muted-foreground">Role-based access control ensures data security and privacy</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
