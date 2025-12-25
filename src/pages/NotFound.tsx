import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="font-display text-8xl font-bold text-foreground mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Oops! This page seems to have wandered off.
        </p>
        <Button asChild>
          <a href="/">
            <ArrowLeft className="w-4 h-4" />
            Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
