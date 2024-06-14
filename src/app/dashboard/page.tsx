"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import DiagnosticsList from "./components/diagnostics-list";
import LabResults from "./components/lab-results";
import Metrics from "./components/metrics";
const PatientsList = dynamic(() => import("./components/patients-list"), {
  ssr: false, // This line is crucial. It disables server-side rendering for the PatientsList component.
});
import { Profile } from "./components/profile";
import { Card } from "@/components/ui/card";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { fetchPatientData } from "@/services/api";
import { Patient } from "@/types/Patient";

const Overview = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPatientData();
      setPatients(data);
      console.log("Patients Data : ", data);

      // Find Jessica Taylor in the fetched patients and set her as the selected patient by default
      const jessicaTaylor = data.find(
        (patient) => patient.name === "Jessica Taylor"
      );
      if (jessicaTaylor) {
        setSelectedPatient(jessicaTaylor);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="grid flex-1 items-start lg:h-screen overflow-hidden p-4 md:p-8 gap-4 sm:py-0 md:gap-8 lg:grid-cols-4">
      <ScrollArea className="h-[80vh]">
        <PatientsList
          patients={patients}
          setSelectedPatient={setSelectedPatient}
          selectedPatient={selectedPatient}
        />
      </ScrollArea>

      <ScrollArea className="lg:h-[80vh] grid lg:col-span-2">
        <Card className="grid rows-3 h-full items-start gap-4 md:gap-8 bg-background">
          <Metrics />
          <DiagnosticsList selectedPatient={selectedPatient} />
        </Card>
      </ScrollArea>

      <ScrollArea className="lg:h-[80vh] grid lg:col-span-1">
        <Card className="grid rows-3 h-full items-start gap-4 md:gap-8 bg-background">
          <Profile selectedPatient={selectedPatient} />
          <LabResults selectedPatient={selectedPatient} />
        </Card>
      </ScrollArea>
    </main>
  );
};

export default Overview;
