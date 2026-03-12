import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CarDetails from "./CarDetails";
import ViewInquiries from "./ViewInquiries";
import ManageVehicles from "./ManageVehicles";
import ViewTestDrives from "./ViewTestDrives";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/car/:id" element={<CarDetails />} />
                <Route path="/inquiries" element={<ViewInquiries />} />
                <Route path="/manage-vehicles" element={<ManageVehicles />} />
                <Route path="/test-drives" element={<ViewTestDrives />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;