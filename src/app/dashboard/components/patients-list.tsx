"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ellipsis, SearchIcon } from "lucide-react";

export default function PatientsList() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex justify-between">
          Patients <SearchIcon />
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8">
        <div className="flex items-center gap-4">
          <Avatar className="hidden size-9 sm:flex">
            <AvatarImage src="/assets/people/01.png" alt="Avatar" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">Olivia Martin</p>
            <p className="text-sm text-muted-foreground">Female, 18</p>
          </div>
          <div className="ml-auto font-medium">
            <Ellipsis />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
