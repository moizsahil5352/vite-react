import Card from "../../components/ui/Card";

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card>Total Users: 120</Card>
      <Card>Active Sessions: 18</Card>
      <Card>System Status: OK</Card>
    </div>
  );
}
