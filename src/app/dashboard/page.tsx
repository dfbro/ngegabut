// src/app/dashboard/page.tsx

export default function DashboardPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-cyan-400">Dashboard</h1>
        <p className="text-gray-400">Welcome back, Admin!</p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Stats Card 1 */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-2">Total Users</h2>
          <p className="text-5xl font-bold">1,234</p>
        </div>

        {/* Stats Card 2 */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-2">Revenue</h2>
          <p className="text-5xl font-bold">$56,789</p>
        </div>

        {/* Stats Card 3 */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-2">New Orders</h2>
          <p className="text-5xl font-bold">345</p>
        </div>

        {/* Recent Activity */}
        <div className="md:col-span-2 lg:col-span-3 bg-gray-800 rounded-lg p-6 shadow-lg">
           <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
           <ul>
             <li className="border-b border-gray-700 py-2">User 'JohnDoe' signed up.</li>
             <li className="border-b border-gray-700 py-2">Order #1234 was placed.</li>
             <li className="py-2">User 'JaneSmith' updated her profile.</li>
           </ul>
        </div>
      </main>
    </div>
  );
}
