import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

// SPINNER IMPORTED FROM MUI LIBRARY
// SPINNER WILL BE CALLED EVERY TIME WE TRY TO SEE PHONEDETAILSCOMPONENT

const Spinner = () => {
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default Spinner;
