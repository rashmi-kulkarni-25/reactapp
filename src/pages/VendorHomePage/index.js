import React from "react";
import { Link } from "react-router-dom";
import VendorTiffins from "../../components/Vendor/vendorTiffins";

function VendorHomePage() {
  const vendorId = sessionStorage.getItem("vendorId");
  //var isLoggedIn = sessionStorage.getItem("vendorId");

  // if (isLoggedIn) {
  return (
    <div>
      <VendorTiffins vendorId={vendorId} />
      <nav>
        <ul>
          <li>
            <Link to="/vendor-dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/vendor-tiffins">My Tiffins</Link>
          </li>
          <li>
            <Link to="/vendor-addtiffin">Add Tiffin</Link>
          </li>
          <li>
            <Link to="/vendor-profile">Profile</Link>
          </li>
          <li>
            <Link to="/vendor-orders">My Orders</Link>
          </li>
          {/* <br />
          <li>
            <Link to="/vendor-login">Vendor Login</Link>
            <br />
            <Link to="/vendor-register">Vendor Register</Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
  //   } else {
  //     return (
  //       <>
  //         <li>
  //           <Link to="/vendor-login">Vendor Login</Link>
  //         </li>
  //       </>
  //     );
  //   }
}

export default VendorHomePage;
