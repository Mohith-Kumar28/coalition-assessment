import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import LineChart from "./line-chart";
import { Patient } from "@/types/Patient";

interface Props {
  selectedPatient: Patient | null;
}

const Metrics = ({ selectedPatient }: Props) => {
  // Function to decide which arrow to show based on the level
  const getArrowIcon = (level: string) => {
    switch (level.toLowerCase()) {
      case "higher than average":
        return <GoTriangleUp className="text-lg" />;
      case "lower than average":
        return <GoTriangleDown className="text-lg" />;
      default:
        return null; // No arrow for 'normal'
    }
  };

  // Extract the latest diagnosis history entry
  const latestDiagnosis = selectedPatient?.diagnosis_history[0];

  // Default values in case there's no diagnosis history
  const systolicValue = latestDiagnosis?.blood_pressure?.systolic.value ?? "-";
  const systolicLevel = latestDiagnosis?.blood_pressure?.systolic.levels ?? "";
  const diastolicValue =
    latestDiagnosis?.blood_pressure?.diastolic.value ?? "-";
  const diastolicLevel =
    latestDiagnosis?.blood_pressure?.diastolic.levels ?? "";
  const heartRateValue = latestDiagnosis?.heart_rate?.value ?? "-";
  const heartRateLevel = latestDiagnosis?.heart_rate?.levels ?? "";
  const respiratoryRateValue = latestDiagnosis?.respiratory_rate?.value ?? "-";
  const respiratoryRateLevel = latestDiagnosis?.respiratory_rate?.levels ?? "";
  const temperatureValue = latestDiagnosis?.temperature?.value ?? "-";
  const temperatureLevel = latestDiagnosis?.temperature?.levels ?? "";

  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Diagnosis History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid auto-rows-max items-start gap-4 md:gap-4 lg:col-span-2">
          <Card className="bg-fuchsia-100">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Blood Pressure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex md:flex-row flex-col">
                <div className="md:w-3/4 w-full">
                  <LineChart selectedPatient={selectedPatient} />{" "}
                  {/* Assuming this chart is generic and doesn't require dynamic data */}
                </div>
                <div className="divide-y-2 divide-zinc-300 -mt-16">
                  <Card className="border-0 bg-transparent">
                    <CardHeader className="pb-2">
                      <CardDescription className="flex gap-2 font-bold">
                        <span className="rounded-full size-3 mt-1 bg-fuchsia-500"></span>
                        Systolic
                      </CardDescription>
                      <CardTitle className="text-xl">{systolicValue}</CardTitle>
                    </CardHeader>
                    <CardFooter>
                      <div className="text-xs text-muted-foreground flex gap-1">
                        {getArrowIcon(systolicLevel)}
                        {systolicLevel}
                      </div>
                    </CardFooter>
                  </Card>
                  <Card className="border-0 bg-transparent">
                    <CardHeader className="pb-2">
                      <CardDescription className="flex gap-2 font-bold">
                        <span className="rounded-full bg-indigo-500 size-3 mt-1"></span>
                        Diastolic
                      </CardDescription>
                      <CardTitle className="text-xl">
                        {diastolicValue}
                      </CardTitle>
                    </CardHeader>
                    <CardFooter>
                      <div className="text-xs text-muted-foreground flex gap-1">
                        {getArrowIcon(diastolicLevel)}
                        {diastolicLevel}
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
            <Card className="w-full bg-sky-100">
              <CardHeader className="pb-2">
                <Avatar className="size-12 mb-2">
                  <AvatarImage src="/assets/metrics/HeartBPM.svg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <CardDescription className="text-base">
                  Respiratory Rate
                </CardDescription>
                <CardTitle className="text-xl">
                  {respiratoryRateValue} bpm
                </CardTitle>
              </CardHeader>
              <CardFooter>
                <div className="text-sm text-muted-foreground flex gap-1">
                  {getArrowIcon(respiratoryRateLevel)}
                  {respiratoryRateLevel}
                </div>
              </CardFooter>
            </Card>
            <Card className="w-full bg-rose-100">
              <CardHeader className="pb-2">
                <Avatar className="size-12 mb-2">
                  <AvatarImage src="/assets/metrics/Temperature.svg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <CardDescription className="text-base">
                  Temperature
                </CardDescription>
                <CardTitle className="text-xl">{temperatureValue} F</CardTitle>
              </CardHeader>
              <CardFooter>
                <div className="text-sm text-muted-foreground flex gap-1">
                  {getArrowIcon(temperatureLevel)}
                  {temperatureLevel}
                </div>
              </CardFooter>
            </Card>
            <Card className="w-full bg-pink-100">
              <CardHeader className="pb-2">
                <Avatar className="size-12 mb-2">
                  <AvatarImage src="/assets/metrics/Respiratory-Rate.svg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <CardDescription className="text-base">
                  Heart Rate
                </CardDescription>
                <CardTitle className="text-xl">{heartRateValue} bpm</CardTitle>
              </CardHeader>
              <CardFooter>
                <div className="text-sm text-muted-foreground flex gap-1">
                  {getArrowIcon(heartRateLevel)}
                  {heartRateLevel}
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Metrics;
