import React from 'react';

const New = () => {
  const data = [
    { column1: 'Row 1 Col 1', column2: 'Row 1 Col 2' },
    { column1: 'Row 2 Col 1', column2: 'Row 2 Col 2' },
    { column1: 'Row 3 Col 1', column2: 'Row 3 Col 2' },
    { column1: 'Row 4 Col 1', column2: 'Row 4 Col 2' },
    { column1: 'Row 5 Col 1', column2: 'Row 5 Col 2' },
  ];

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Balance</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                  <td className="py-4 px-5">{row.column1}</td>
                  <td className="py-4 px-5">{row.column2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default New;
