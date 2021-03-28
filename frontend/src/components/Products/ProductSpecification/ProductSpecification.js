import { Box, Typography } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import MoreVertRoundedIcon from "@material-ui/icons/MoreVertRounded";
import React from "react";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import AlertDialogSlide from "../../UI/Modal/CustomModal";
import classes from "./styles.module.css";

function createData(attribute, value) {
  return { attribute, value };
}

const items = [
  createData("Đường kính mặt:", 159),
  createData("Chất liệu mặt:", "Kính khoáng (Mineral)"),
  createData("Chất liệu khung viền:", "Thép không gỉ"),
  createData("Độ dày mặt:", "Dày 9 mm"),
  createData("Chất liệu dây:", "Da"),
];

export default function ProductSpecification(item) {
  const { width } = useWindowDimensions();
  return (
    <Box m="0 0.5rem">
      <Box className={classes.flex}>
        <Typography variant="h5">Specifications</Typography>

        <AlertDialogSlide
          title="Specifications"
          iconAnchor={<MoreVertRoundedIcon className={classes.iconAnchor} />}
          component={
            <Box>
              <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                  <TableBody>
                    {items.map((item) => (
                      <TableRow key={item.attribute} className={classes.row}>
                        <TableCell
                          component="th"
                          scope="row"
                          style={{ width: "50%", padding: "1rem 1rem 1rem 0" }}
                        >
                          {item.attribute}
                        </TableCell>
                        <TableCell align="left">{item.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          }
          disagreeButton={false}
          fullScreen={width <= 768 ? true : false}
        />
      </Box>

      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.attribute}>
                <TableCell
                  component="th"
                  scope="row"
                  style={{ width: "50%", padding: "1rem 1rem 1rem 0" }}
                >
                  {item.attribute}
                </TableCell>
                <TableCell align="left">{item.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box m="1rem 0"></Box>
    </Box>
  );
}
