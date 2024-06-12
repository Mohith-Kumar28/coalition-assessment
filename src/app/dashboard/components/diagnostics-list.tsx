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

const DiagnosticsList = () => {
  return (
    <Card x-chunk="dashboard-05-chunk-3">
      <CardHeader className="px-7">
        <CardTitle>Diagnostics List</CardTitle>
        {/* <CardDescription>Overview of your subscriptions.</CardDescription> */}
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader className="bg-background rounded-full overflow-hidden">
            <TableRow>
              <TableHead className="hidden sm:table-cell">
                Problem/Diagnosis
              </TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="font-medium">Liam Johnson</div>
                {/* <div className="hidden text-sm text-muted-foreground md:inline">
                  liam@example.com
                </div> */}
              </TableCell>
              <TableCell className="hidden sm:table-cell">Sale</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Fulfilled
                </Badge>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default DiagnosticsList;
