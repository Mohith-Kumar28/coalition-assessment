"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";

export default function LabResults() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between">Lab results</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8">
        <div className="flex items-center gap-4">
          <div className="grid gap-1">
            {/* <p className="text-sm font-medium leading-none">Olivia Martin</p> */}
            <p className=" text-muted-foreground">Female, 18</p>
          </div>
          <div className="ml-auto font-medium">
            <Download />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
