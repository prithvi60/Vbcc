import React from "react";

const Tablet = ({ headers, data }) => {
    // Render the headers dynamically
    const renderHeaders = () => {
        return headers.map((header, index) => (
            <th className="px-4 py-2 text-sm font-semibold text-center border border-primary" key={index}>{header}</th>
        ));
    };

    // Render rows dynamically based on the headers
    const renderRows = () => {
        return data.map((row, rowIndex) => (
            <tr key={rowIndex}>
                {headers.map((header, colIndex) => (
                    <td className="px-4 py-2 text-sm text-center bg-white border border-primary text-primary" key={colIndex}>{row[header] || 'N/A'}</td>
                ))}
            </tr>
        ));
    };

    return (
        <div className="h-full overflow-x-auto thumbnail max-h-96 sm:max-h-[640px] md:max-h-full">
            <table className="w-full border border-collapse border-gray-300">
                <thead className="sticky z-10 -top-1 text-primary bg-info">
                    <tr>
                        {renderHeaders()}
                        {/* {specs.thead.map((list, idx) => (
                            <th className="px-4 py-2 text-sm font-semibold text-center border border-primary" key={idx}>{list}</th>
                        ))} */}
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                    {/* {specs.tbody.map((item, index) => (
                        <tr key={index}>
                            <td className="px-4 py-2 text-sm text-center bg-white border border-primary text-primary">{item.model}</td>
                            <td className="px-4 py-2 text-sm text-center bg-white border border-primary text-primary">{item.maxTemp}</td>
                            <td className="px-4 py-2 text-sm text-center bg-white border border-primary text-primary">{item.innerDimensions}</td>
                            <td className="px-4 py-2 text-sm text-center bg-white border border-primary text-primary">{item.volume}</td>
                            <td className="px-4 py-2 text-sm text-center bg-white border border-primary text-primary">{item.outerDimensions}</td>
                            <td className="px-4 py-2 text-sm text-center bg-white border border-primary text-primary">{item.maxPower}</td>
                            <td className="px-4 py-2 text-sm text-center bg-white border border-primary text-primary">{item.phase}</td>
                            <td className="px-4 py-2 text-sm text-center bg-white border border-primary text-primary">{item.weight}</td>
                        </tr>
                    ))} */}
                </tbody>
            </table>
        </div>
    );
};

export default Tablet;


