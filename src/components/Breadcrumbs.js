import React from "react";
import { Link, useLocation } from "react-router-dom";
import { color } from "../utils/Helper";

const styles = {
  crumbs: {
    textDecoration: "none",
    fontWeight: 600,
    color: color.primary,
  },
  crumbsActive: {
    color: color.primary,
  },
};

function Breadcrumbs({ pathname }) {
  let location = useLocation();
  let currPath = `/${location.pathname.split("/").pop()}`;

  let items = pathname.map((item) => {
    let name = "";
    if (item.includes("-")) {
      const words = item.split("-");

      name = words
        .map((word) => {
          return word[0].toUpperCase() + word.substring(1);
        })
        .join(" ");
    } else if (item !== "") {
      name = item[0].toUpperCase() + item.substring(1);
    }

    return {
      path: `/${item}`,
      name: name,
    };
  });

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {pathname.length > 0 ? (
            <li className="breadcrumb-item">
              <Link to="/" style={styles.crumbs}>
                Dashboard
              </Link>
            </li>
          ) : (
            <></>
          )}
          {items.map((item, index) => {
            if (item.path !== currPath) {
              return (
                <li className="breadcrumb-item" key={index}>
                  <Link to={item.path} style={styles.crumbs}>
                    {item.name}
                  </Link>
                </li>
              );
            } else {
              return (
                <li
                  className="breadcrumb-item active"
                  key={index}
                  aria-current="page"
                  style={styles.crumbsActive}
                >
                  {item.name}
                </li>
              );
            }
          })}
        </ol>
      </nav>
    </div>
  );
}

export default Breadcrumbs;
