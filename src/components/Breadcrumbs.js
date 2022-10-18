import React from "react";

function Breadcrumbs({ pathname }) {
  let name = "";
  let currPath = `/${window.location.pathname.split("/").pop()}`;

  let items = pathname.map((item) => {
    if (item.includes("-")) {
      const words = item.split("-");

      name = words
        .map((word) => {
          return word[0].toUpperCase() + word.substring(1);
        })
        .join(" ");
    } else if (item !== "") {
      name = item[0].toUpperCase() + item.substring(1);
    } else {
      name = "Dashboard";
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
          {items.map((item, index) => {
            if (item.path !== currPath) {
              return (
                <li className="breadcrumb-item" key={index}>
                  <a
                    href={item.path}
                    style={{ textDecoration: "none", fontWeight: 600 }}
                  >
                    {item.name}
                  </a>
                </li>
              );
            } else {
              return (
                <li
                  className="breadcrumb-item active"
                  key={index}
                  aria-current="page"
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
