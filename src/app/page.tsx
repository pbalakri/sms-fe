import Counter from "@/components/card/counter/counter";
import BarChart from "@/components/chart/bar-chart";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-wrap gap-4">
          <Counter title="Total Students" value={2799.23} />
          <Counter title="Paid Fees" value={10000000} type="currency"/>
          <Counter title="Overdue Fees" value={33000} type="currency"/>
          <Counter title="Unpaid Fees" value={5000000} type="currency"/>
          <Counter title="Total Staff" value={782} />
          <Counter title="Courses Offered" value={67} />
        </div>
        <BarChart />
      </main>
    </div>
  );
}
