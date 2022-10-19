import React from "react";
import { PerkiraanTable } from "../components/Perkiraan/PerkiraanTable";
import { color } from "../utils/Helper";
import { Link } from "react-router-dom";


const styles = {
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "20px 0",
  },
  button: {
    backgroundColor: color.primary,
    color: color.white,
    textDecoration: "none",
    "&:hover": {
      backgroundColor: color.secondary,
    },
  },
};

function PerkiraanPage() {

  return (
 

      <div>
        <PerkiraanTable />
      </div>
  )
}

export default PerkiraanPage;
