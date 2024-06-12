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

type Props = {};

const Metrics = (props: Props) => {
  return (
    <Card className="" x-chunk="dashboard-05-chunk-0">
      <CardHeader>
        <CardTitle>Diagnosis History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <Card className="bg-fuchsia-100">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Blood Pressure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex md:flex-row flex-col">
                <div className="md:w-3/4 w-full">
                  <LineChart />
                </div>
                <div className="divide-y-2 divide-gray-300">
                  <Card className="border-0 bg-transparent ">
                    <CardHeader className="pb-2">
                      <CardDescription className="flex gap-2 font-bold">
                        <span className="size-4 rounded-full bg-fuchsia-500"></span>
                        Systolic
                      </CardDescription>
                      <CardTitle className="text-4xl">160</CardTitle>
                    </CardHeader>
                    <CardContent></CardContent>
                    <CardFooter>
                      <div className="text-sm text-muted-foreground flex gap-1">
                        <GoTriangleUp className="text-lg" />
                        Higher than average
                      </div>
                    </CardFooter>
                  </Card>

                  <Card className="border-0 bg-transparent">
                    <CardHeader className="pb-2">
                      <CardDescription className="flex gap-2 font-bold">
                        <span className="size-4 rounded-full bg-indigo-500"></span>
                        This Week
                      </CardDescription>
                      <CardTitle className="text-4xl">160</CardTitle>
                    </CardHeader>
                    <CardContent></CardContent>
                    <CardFooter>
                      <div className="text-sm text-muted-foreground flex gap-1">
                        <GoTriangleDown className="text-lg" />
                        Lower than average
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
                <Avatar className="size-16 mb-2">
                  <AvatarImage src="/assets/metrics/HeartBPM.svg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <CardDescription className="text-lg">
                  Respiratory Rate
                </CardDescription>
                <CardTitle className="text-4xl">60 bpm</CardTitle>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter>
                <div className="text-sm text-muted-foreground flex gap-1">
                  {/* <GoTriangleDown className="text-lg" /> */}
                  Normal
                </div>
              </CardFooter>
            </Card>{" "}
            <Card className="w-full bg-rose-100">
              <CardHeader className="pb-2">
                <Avatar className="size-16 mb-2">
                  <AvatarImage src="/assets/metrics/Temperature.svg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <CardDescription className="text-lg">
                  Temperature
                </CardDescription>
                <CardTitle className="text-4xl">98.6 F</CardTitle>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter>
                <div className="text-sm text-muted-foreground flex gap-1">
                  {/* <GoTriangleDown className="text-lg" /> */}
                  Normal
                </div>
              </CardFooter>
            </Card>{" "}
            <Card className="w-full bg-pink-100">
              <CardHeader className="pb-2">
                <Avatar className="size-16 mb-2">
                  <AvatarImage src="/assets/metrics/Respiratory-Rate.svg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <CardDescription className="text-lg">
                  Heart Rate
                </CardDescription>
                <CardTitle className="text-4xl">78 bpm</CardTitle>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter>
                <div className="text-sm text-muted-foreground flex gap-1">
                  <GoTriangleDown className="text-lg" />
                  Lower than average
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
