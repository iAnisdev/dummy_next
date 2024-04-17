import React from 'react';

const Settings = () => {
  const dataTableData = [
    { id: 1, name: 'Item 1', value: '123' },
    { id: 2, name: 'Item 2', value: '456' },
    // Add more data as needed
  ];

  // Sample data for the inner table within the summary card
  const summaryTableData = [
    { id: 1, detail: 'Detail 1', quantity: '10' },
    { id: 2, detail: 'Detail 2', quantity: '15' },
    { id: 3, detail: 'Detail 3', quantity: '20' },
    { id: 4, detail: 'Detail 4', quantity: '25' },
    { id: 5, detail: 'Detail 5', quantity: '30' },
    { id: 6, detail: 'Detail 6', quantity: '35' },
    { id: 7, detail: 'Detail 7', quantity: '40' },
  ];

  return (
    <div className="flex flex-row p-4">
      <div className="w-2/3 p-2">
        <div className="bg-white/30 backdrop-blur-lg shadow-lg rounded-lg border border-gray-200 p-4">
          <h2 className="font-semibold text-lg mb-2">Data Table</h2>
          <div>
            {dataTableData.map((item) => (
              <div key={item.id} className="border p-2">
                {item.name}: {item.value}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-1/3 p-2">
        <div className="bg-white/30 backdrop-blur-lg shadow-lg rounded-lg border border-gray-200 p-4">
          <h2 className="font-semibold text-lg mb-2">Summary</h2>
          {/* Inner data table within the summary card */}
          <div className="overflow-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="text-left font-medium">Detail</th>
                  <th className="text-left font-medium">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {summaryTableData.map((row) => (
                  <tr key={row.id} className="border-b">
                    <td className="py-1">{row.detail}</td>
                    <td className="py-1">{row.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white/30 backdrop-blur-lg shadow-lg rounded-lg border border-gray-200 p-4">
          <h2 className="font-semibold text-lg mb-2">Summary</h2>
          {/* Inner data table within the summary card */}
          <div className="overflow-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="text-left font-medium">Detail</th>
                  <th className="text-left font-medium">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {summaryTableData.map((row) => (
                  <tr key={row.id} className="border-b">
                    <td className="py-1">{row.detail}</td>
                    <td className="py-1">{row.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
