import DiagnosticsList from "./components/diagnostics-list";
import Metrics from "./components/metrics";
import PatientsList from "./components/patients-list";

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
  <main className="grid flex-1 items-start gap-4  sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
    <PatientsList />
    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
      <Metrics />
      <DiagnosticsList />
    </div>
  </main>
);

export default Overview;
