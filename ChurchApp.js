import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ChurchApp() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto">
        <Card className="text-center p-6">
          <h1 className="text-2xl font-bold mb-4">Your Church Name</h1>
          <p className="mb-6">Welcome to our official church app! Stay connected and involved.</p>
          <CardContent className="space-y-4">
            <Button className="w-full" asChild>
              <a href="https://yourchurch.churchcenter.com/people/forms/12345" target="_blank" rel="noopener noreferrer">
                Volunteer Signup
              </a>
            </Button>
            <Button className="w-full" asChild>
              <a href="https://yourchurch.churchcenter.com/giving" target="_blank" rel="noopener noreferrer">
                Give Online
              </a>
            </Button>
            <Button className="w-full" asChild>
              <a href="https://yourchurch.churchcenter.com" target="_blank" rel="noopener noreferrer">
                Church Center Hub
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}