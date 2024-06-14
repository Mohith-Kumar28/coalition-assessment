import { ScrollArea } from "@/components/ui/scroll-area";
import DiagnosticsList from "./components/diagnostics-list";
import LabResults from "./components/lab-results";
import Metrics from "./components/metrics";
import PatientsList from "./components/patients-list";
import { Profile } from "./components/profile";
import { Card } from "@/components/ui/card";

// import { getTranslations } from 'next-intl/server';

// export async function generateMetadata(props: { params: { locale: string } }) {
//   const t = await getTranslations({
//     locale: props.params.locale,
//     namespace: 'Dashboard',
//   });

//   return {
//     title: t('meta_title'),
//   };
// }
const Overview = () => (
  <main className="grid flex-1 items-start lg:h-screen overflow-hidden p-4 md:p-8  gap-4  sm:py-0 md:gap-8 lg:grid-cols-4 ">
    <div className=" h-[80vh]  ">
      <PatientsList />
    </div>

    {/* <div className="grid rows-3 h-[92vh] items-start gap-4 md:gap-8 lg:col-span-2 "> */}
    <ScrollArea className="lg:h-[80vh] grid lg:col-span-2">
      <Card className="grid rows-3 h-full items-start gap-4 md:gap-8   bg-background">
        {/* <ScrollArea className="grid rows-3 h-[92vh] items-start gap-4 md:gap-8 lg:col-span-2"> */}
        <Metrics />
        <DiagnosticsList />
        {/* </ScrollArea> */}
      </Card>
    </ScrollArea>
    {/* </div> */}
    <ScrollArea className="lg:h-[80vh] grid lg:col-span-1">
      <Card className="grid rows-3 h-full items-start gap-4 md:gap-8   bg-background">
        <Profile />
        <LabResults />
      </Card>
    </ScrollArea>
  </main>
);

export default Overview;
