import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Phone, Shield, User } from "lucide-react";
import { Patient } from "@/types/Patient";

interface ProfileProps extends React.ComponentProps<typeof Card> {
  selectedPatient: Patient | null;
}

export function Profile({
  selectedPatient,
  className,
  ...props
}: ProfileProps) {
  if (!selectedPatient) {
    return null; // Optionally render a placeholder or loading state
  }

  // Dynamically generate notifications based on selectedPatient data
  const notifications = [
    {
      icon: <Calendar size={20} />,
      title: selectedPatient.date_of_birth,
      description: "Date Of Birth",
    },
    {
      icon: <User size={20} />,
      title: selectedPatient.gender,
      description: "Gender",
    },
    {
      icon: <Phone size={20} />,
      title: selectedPatient.phone_number,
      description: "Contact Info.",
    },
    {
      icon: <Phone size={20} />,
      title: selectedPatient.emergency_contact,
      description: "Emergency Contacts",
    },
    {
      icon: <Shield size={20} />,
      title: selectedPatient.insurance_type,
      description: "Insurance Provider",
    },
    // Add more notifications as needed
  ];

  return (
    <>
      <Card className={cn("", className)} {...props}>
        <CardHeader className="flex flex-col gap-4 justify-center align-middle">
          <Avatar className="size-28 mx-auto flex">
            <AvatarImage
              src={selectedPatient.profile_picture}
              alt={`Avatar ${selectedPatient.name}`}
            />
            <AvatarFallback>{selectedPatient.name[0]}</AvatarFallback>
          </Avatar>
          <CardTitle className="text-center">{selectedPatient.name}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="pb-3 px-3">
            {notifications.map((notification, index) => (
              <div
                key={index}
                className="grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <div className="rounded-full flex justify-center align-middle bg-background p-2 aspect-square size-10">
                  {notification.icon}
                </div>
                <div className="space-y-1 ml-8">
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                  <p className="text-sm font-medium leading-none">
                    {notification.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="mx-auto">Share all information</Button>
        </CardFooter>
      </Card>
    </>
  );
}
