import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CustomBodyCell from "../../components/Table/CustomBodyShell";
import SkeletonTable from "../../components/Table/SkeletonTable";
import SimpleAlerts from "../../components/UI/Alerts/Alerts";
import { listUsers } from "../../store/actions/userActions";

const UserListPage = ({ history }) => {
  const [responsive, setResponsive] = useState("standard");
  const [tableBodyHeight, setTableBodyHeight] = useState("");
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");

  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  console.log(users);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo]);

  const columns = [
    {
      name: "_id",
      label: "Order #",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "email",
      label: "Email",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <Link to={`mailto:${tableMeta.rowData[2]}`}>
              {tableMeta.rowData[2]}
            </Link>
          );
        },
      },
    },
    {
      name: "isAdmin",
      label: "Admin",
      options: {
        filter: true,
        customBodyRender: (value) => <CustomBodyCell value={!value} />,
        sort: true,
      },
    },
    {
      name: "Action",
      options: {
        filter: true,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div>
              <IconButton
                aria-label="edit"
                size="small"
                color="primary"
                onClick={() => {
                  window.alert(
                    //take the id
                    `Clicked "Edit" for row ${tableMeta.rowData[0]}`
                  );
                }}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                aria-label="delete"
                size="small"
                color="secondary"
                onClick={() => {
                  window.alert(
                    //take the id
                    `Clicked "Edit" for row ${tableMeta.rowData[0]}`
                  );
                }}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          );
        },
      },
    },
  ];

  const options = {
    filter: true,
    filterType: "dropdown",
  };

  return (
    <React.Fragment>
      {loading ? (
        <SkeletonTable />
      ) : error ? (
        <SimpleAlerts
          severity="error"
          title="Error"
          message="Sorry, there is no matching data to display"
        />
      ) : (
        <MUIDataTable
          title={"Users list"}
          data={users}
          columns={columns}
          options={options}
        />
      )}
    </React.Fragment>
  );
};

export default UserListPage;
