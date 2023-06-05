import React from "react";

export default function Checkout() {
  return (
    <div>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td>CHECKOUT</td>
          </tr>
          <tr>
            <td>
              <form className="form-horizontal">
                <div className="control-group">
                  <label className="span2 control-label" htmlFor="inputEmail">
                    Tên
                  </label>
                  <div className="controls">
                    <input type="text" placeholder="Country" />
                  </div>
                </div>
                <div className="control-group">
                  <label
                    className="span2 control-label"
                    htmlFor="inputPassword"
                  >
                    Địa chỉ
                  </label>
                  <div className="controls">
                    <input type="password" placeholder="Password" />
                  </div>
                </div>
                <div className="control-group">
                  <label
                    className="span2 control-label"
                    htmlFor="inputPassword"
                  >
                    Số điện thoại
                  </label>
                  <div className="controls">
                    <input type="password" placeholder="Password" />
                  </div>
                </div>
                <div className="control-group">
                  <div className="controls">
                    <button type="submit" className="shopBtn">
                      Đặt
                    </button>
                  </div>
                </div>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
