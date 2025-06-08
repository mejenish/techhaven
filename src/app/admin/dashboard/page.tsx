
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      <Card>
        <CardHeader>
          <CardTitle>Welcome to the Admin Panel</CardTitle>
          <CardDescription>
            This is a placeholder dashboard. More features coming soon!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>You can manage products, view orders (not yet implemented), and configure settings (not yet implemented).</p>
        </CardContent>
      </Card>
    </div>
  );
}
