import React from "react";
import { Button, TextField} from "@mui/material";

const Login = () => {
  return (
    <div className=" mt-20 w-[600px]">
      <div className="my-2 mx-1">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
      </div>
      <div className="my-2 mx-1">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Password"
          variant="outlined"
        />
      </div>
      <div className="my-2 mx-1">
        <Button size="large" variant="contained">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
