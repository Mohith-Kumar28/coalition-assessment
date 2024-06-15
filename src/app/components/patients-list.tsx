"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Patient } from "@/types/Patient";

import { Ellipsis, SearchIcon } from "lucide-react";

interface PatientsListProps {
  patients: Patient[];
  setSelectedPatient: (patient: Patient) => void;
  selectedPatient: Patient | null;
}

const PatientsList: React.FC<PatientsListProps> = ({
  patients,
  setSelectedPatient,
  selectedPatient,
}) => {
  return (
    <Card className="h-full">
      <CardHeader className="sticky top-0 left-0 bg-white z-10 pb-5">
        <CardTitle className="flex justify-between">
          Patients <SearchIcon />
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-2">
        {patients.map((patient) => (
          <div
            key={patient.name}
            className={`flex items-center gap-4 p-4 cursor-pointer  ${
              patient === selectedPatient
                ? "bg-primary/30"
                : "hover:bg-gray-100"
            }`}
            onClick={() => setSelectedPatient(patient)}
          >
            <Avatar className="hidden size-9 sm:flex">
              <AvatarImage
                src={patient.profile_picture}
                alt={`Avatar ${patient.name}`}
              />
              <AvatarFallback>{patient.name[0]}</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none truncate">
                {patient.name}
              </p>
              <p className="text-sm text-muted-foreground">{`${patient.gender}, ${patient.age}`}</p>
            </div>
            <div className="ml-auto font-medium">
              <Ellipsis />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default PatientsList;
