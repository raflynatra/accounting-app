import React, { useState } from 'react'
import { PerkiraanTable } from "../components/Perkiraan/PerkiraanTable";
import JurnalUmumPage from "../pages/JurnalUmumPage"



function DashboardPage() {

  return (
    <div className="container">
      
      <div className="col">
          <JurnalUmumPage type="dashboard"/>
        </div>
        <hr />
        <div className="col" >
          <PerkiraanTable type="dashboard"/>
        </div>

    </div>
  );
}

export default DashboardPage;
