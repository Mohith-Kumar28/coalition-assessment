import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Patient } from "@/types/Patient";

import { Download } from "lucide-react";

// interface LabResultProps {
//   selectedPatient: Patient | null;
// }

interface LabResultProps extends React.ComponentProps<typeof Card> {
  selectedPatient: Patient | null;
}

export default function lab_results({ selectedPatient }: LabResultProps) {
  if (!selectedPatient || !selectedPatient.lab_results) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between">Lab Results</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-8">
          <p>No lab results available.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between">Lab Results</CardTitle>
      </CardHeader>
      <ScrollArea className="h-32">
        <CardContent className="grid ">
          {selectedPatient.lab_results.map((result, index) => (
            <div
              key={index}
              className="flex items-center gap-4 hover:bg-gray-100 p-3 "
            >
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">{result}</p>
              </div>
              <div className="ml-auto font-medium">
                <Download />
              </div>
            </div>
          ))}
        </CardContent>
      </ScrollArea>
    </Card>
  );
}
