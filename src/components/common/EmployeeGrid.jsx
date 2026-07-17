import React, { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";

const EmployeeGrid = ({ search, rowData }) => {
  const columnDefs = useMemo(
    () => [
      {
        field: "id",
        headerName: "ID",
        width: 90,
        sortable: true,
        filter: true,
      },
      {
        field: "firstName",
        headerName: "First Name",
        sortable: true,
        filter: true,
      },
      {
        field: "lastName",
        headerName: "Last Name",
        sortable: true,
        filter: true,
      },
      {
        field: "department",
        sortable: true,
        filter: true,
      },
      {
        field: "position",
        sortable: true,
        filter: true,
      },
      {
        field: "salary",
        sortable: true,
        valueFormatter: ({ value }) => `$${value.toLocaleString()}`,
        filter: "agNumberColumnFilter",
      },
      {
        field: "isActive",
        headerName: "Status",
        minWidth: 130,
        cellRenderer: ({ value }) => (
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              value ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            {value ? "Active" : "Inactive"}
          </span>
        ),
      },
    ],
    [],
  );

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      floatingFilter: true,
      resizable: true,
      minWidth: 140,
      flex: 1,
    }),
    [],
  );

  return (
    <div
      className="ag-theme-quartz"
      style={{
        height: 560,
        width: "100%",
      }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        pagination
        paginationPageSize={10}
        paginationPageSizeSelector={[10, 20, 50]}
        rowSelection={"multiple"}
        animateRows
        quickFilterText={search}
        overlayNoRowsTemplate="No employees found"
      />
    </div>
  );
};

export default EmployeeGrid;
