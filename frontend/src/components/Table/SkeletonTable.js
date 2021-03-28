import { makeStyles, Toolbar } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Skeleton } from "@material-ui/lab";
import React from "react";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 750,
  },
  title: {
    flex: "1 1 100%",
  },
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
}));

const SkeletonTable = () => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Toolbar className={classes.root}>
        <Skeleton variant="text" animation="pulse" height={40} width="10%" />
      </Toolbar>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Skeleton
                variant="text"
                animation="pulse"
                height={30}
                width="50%"
              />
            </TableCell>
            <TableCell>
              <Skeleton
                variant="text"
                animation="pulse"
                height={30}
                width="50%"
              />
            </TableCell>
            <TableCell>
              <Skeleton
                variant="text"
                animation="pulse"
                height={30}
                width="50%"
              />
            </TableCell>
            <TableCell>
              <Skeleton
                variant="text"
                animation="pulse"
                height={30}
                width="50%"
              />
            </TableCell>
            <TableCell>
              <Skeleton
                variant="text"
                animation="pulse"
                height={30}
                width="50%"
              />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              <Skeleton
                variant="text"
                animation="pulse"
                height={30}
                width="80%"
              />
            </TableCell>
            <TableCell align="right">
              <Skeleton
                variant="text"
                animation="pulse"
                height={30}
                width="80%"
              />
            </TableCell>
            <TableCell align="right">
              <Skeleton
                variant="text"
                animation="pulse"
                height={30}
                width="80%"
              />
            </TableCell>
            <TableCell align="right">
              <Skeleton
                variant="text"
                animation="pulse"
                height={30}
                width="80%"
              />
            </TableCell>
            <TableCell align="right">
              <Skeleton
                variant="text"
                animation="pulse"
                height={30}
                width="80%"
              />
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
              <Skeleton
                variant="text"
                animation="pulse"
                height={30}
                width="80%"
              />
            </TableCell>
            <TableCell align="right">
              <Skeleton
                variant="text"
                animation="pulse"
                height={30}
                width="80%"
              />
            </TableCell>
            <TableCell align="right">
              <Skeleton
                variant="text"
                animation="pulse"
                height={30}
                width="80%"
              />
            </TableCell>
            <TableCell align="right">
              <Skeleton
                variant="text"
                animation="pulse"
                height={30}
                width="80%"
              />
            </TableCell>
            <TableCell align="right">
              <Skeleton
                variant="text"
                animation="pulse"
                height={30}
                width="80%"
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              <Skeleton
                variant="text"
                animation="pulse"
                height={30}
                width="80%"
              />
            </TableCell>
            <TableCell align="right">
              <Skeleton
                variant="text"
                animation="pulse"
                height={30}
                width="80%"
              />
            </TableCell>
            <TableCell align="right">
              <Skeleton
                variant="text"
                animation="pulse"
                height={30}
                width="80%"
              />
            </TableCell>
            <TableCell align="right">
              <Skeleton
                variant="text"
                animation="pulse"
                height={30}
                width="80%"
              />
            </TableCell>
            <TableCell align="right">
              <Skeleton
                variant="text"
                animation="pulse"
                height={30}
                width="80%"
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SkeletonTable;
