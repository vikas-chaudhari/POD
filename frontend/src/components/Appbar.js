import React from "react";
import { Button } from "@mui/material";
const Appbar = () => {
  return (
    <div className="Navbar w-full flex justify-between items-center h-14 px-5 py-5 text-white bg-slate-900 shadow-md shadow-slate-900">
      <div className="logo">
        <h1 className="text-3xl font-bold text-blue-500">POD</h1>
      </div>
      <div className="flex gap-5">
        <Button variant="contained" size="large">
          Signup
        </Button>

        <Button variant="contained" size="large">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Appbar;
