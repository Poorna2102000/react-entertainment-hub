import React from "react";
import Pagination from '@mui/material/Pagination';
//import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { createTheme , ThemeProvider } from '@material-ui/core/styles'
const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});

export default function CustomPagination({ setPage, numOfPages = 10 }) {
  // Scroll to top when page changes
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination
          onChange={(e) => handlePageChange(e.target.textContent)}
          count={numOfPages}
          color="primary"
          hideNextButton
          hidePrevButton
        />
      </ThemeProvider>
    </div>
  );
}
