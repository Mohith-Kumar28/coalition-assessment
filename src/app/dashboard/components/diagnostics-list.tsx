import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Patient } from "@/types/Patient";

interface DiagnosticsListProps {
  selectedPatient: Patient | null;
}

const DiagnosticsList: React.FC<DiagnosticsListProps> = ({
  selectedPatient,
}) => {
  if (!selectedPatient || !selectedPatient.diagnostic_list.length) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Diagnostics List</CardTitle>
        </CardHeader>
        <CardContent>
          <p>No diagnostics available.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="grid">
      <CardHeader className="px-7">
        <CardTitle>Diagnostics List</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="bg-background rounded-full overflow-hidden w-full">
              {/* <div className="bg-background rounded-full overflow-hidden w-full flex flex-grow"> */}
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Status</TableHead>
              {/* </div> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {selectedPatient.diagnostic_list.map((diagnostic, index) => (
              <TableRow key={index}>
                <TableCell>{diagnostic.name}</TableCell>
                <TableCell>{diagnostic.description}</TableCell>
                <TableCell>
                  <Badge className="text-xs bg-gray-50" variant="secondary">
                    {diagnostic.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default DiagnosticsList;
