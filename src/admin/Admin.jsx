import React from "react";
import TopNav from "./components/TopNav";
import Menu from "./components/Menu";

export default function Admin() {
  var ss=document.createElement("link")
  ss.rel="stylesheet"
  ss.href="/admin/dist/css/adminlte.min.css"
  ss.type="text/css"
  document.head.appendChild(ss)
  return (
    <div className="wrapper">
      <TopNav/>
      <Menu/>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Fixed Layout</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
