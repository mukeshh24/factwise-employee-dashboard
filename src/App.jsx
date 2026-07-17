import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { dashboardPageRoute } from "./routes";
import Dashboard from "./pages/Dashboard";
import WebLayout from "./layouts/WebLayout";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WebLayout />}>
          <Route path={dashboardPageRoute} element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
