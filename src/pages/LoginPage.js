import React from "react";
import loginIllu from "../assets/img/logo-illu.jpg";
import { color } from "../utils/Helper";

const styles = {
  container: {
    backgroundColor: color.tierary,
    height: "100vh",
  },
  row: {
    backgroundColor: color.white,
    width: "90vw",
    height: "90vh",
    boxSizing: "border-box",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "10px",
    boxShadow: "5px 5px 20px gray",
  },
};

function LoginPage() {
  return (
    <div style={styles.container}>
      <div className="container">
        <div className="row" style={styles.row}>
          <div className="col-md-8">
            <img src={loginIllu} alt="login-illu" style={{ width: "100%" }} />
          </div>
          <div className="col-md-4">
            <form>
              <input type="text" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
