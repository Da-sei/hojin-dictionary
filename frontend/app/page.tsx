import CompanySearch from "@/app/components/company-search";
import { COMPANIES } from "@/app/lib/companies";

export default function Home() {
  return <CompanySearch companies={COMPANIES} />;
}
