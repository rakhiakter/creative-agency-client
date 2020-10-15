import React from 'react';
import AdminBar from '../AdminBar/AdminBar';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
const Style = {
  backgroundColor: "#F4FDFB",
  height: "100%",
};
const MakeAdmin = () => {
    return (
      <section>
        <AdminBar></AdminBar>
        <div style={Style} className="container-fluid row">
          <div className="col-md-2 bar">
            <AdminSideBar></AdminSideBar>
          </div>
          <div className="col-md-5 ">
              <form class="form-inline">
   <div class="form-group mx-sm-3 mb-2">
    <input type="email" class="form-control" id="inputPassword2" placeholder="rak@gmail.com"/>
  </div>
  <button type="submit" class="btn btn-primary mb-2">Submit</button>
</form>
</div>
          <div className="col-md-5"></div>
        </div>
      </section>
    );
};

export default MakeAdmin;