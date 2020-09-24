import React from "react";
import axios from "axios";
import {baseUrl}  from '../baseUrl';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import blue from "@material-ui/core/colors/blue";
import Paper from "@material-ui/core/Paper";
import '../css/livestats.css';
import AOS from "aos";
import "aos/dist/aos.css";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#060830",
    color: theme.palette.common.white,
 
  },
  body: {
    backgroundColor: "#fff",
    paddingBottom: 0,
    fontSize: 14,

  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: `${theme.palette.action.hover} !important`,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});
class LiveStatsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }
  componentDidMount() {
    AOS.init({
      duration: 2000,
    });
    axios.get(`${baseUrl}api/livestats`).then((res) => {
      const data = res.data;
      this.setState({ data:data.list });
    });
  }
  render() {
    const { classes } = this.props;
    if(this.state.data){
     const head = this.state.data[0];
      const boby=this.state.data.slice(1);
    return (
      <div className="table-live">
        <section id="hero">
          <div className="container">
            <div className="row">
              <div className="col-12 d-flex align-items-center justify-content-center">
                <div data-aos="zoom-out">
                  <h2>Rankings of Infinity 2020 </h2>
                </div>
              </div>
            </div>
          </div>

          <svg
            className="hero-waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28 "
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="wave-path"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="wave1">
              <use
                xlinkHref="#wave-path"
                x="50"
                y="3"
                fill="rgba(255,255,255,0.1)"
              />
            </g>
            <g className="wave2">
              <use
                xlinkHref="#wave-path"
                x="50"
                y="0"
                fill="rgba(255,255,255, .2)"
              />
            </g>
            <g className="wave3">
              <use xlinkHref="#wave-path" x="50" y="9" fill="none" />
            </g>
          </svg>
        </section>
        <div>
          <div className=" table-all d-flex align-item-center">
            <Paper className={classes.root}>
              <TableContainer component={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead className="table-in">
                    <TableRow>
                      <StyledTableCell>{head[0]}</StyledTableCell>
                      <StyledTableCell align="right">
                        {head[1]}
                        {head[2]}
                      </StyledTableCell>
                      <StyledTableCell align="right">{head[3]}</StyledTableCell>
                      <StyledTableCell align="right">{head[4]}</StyledTableCell>
                      <StyledTableCell align="right">{head[5]}</StyledTableCell>
                      <StyledTableCell align="right">{head[6]}</StyledTableCell>
                      <StyledTableCell align="right">{head[7]}</StyledTableCell>
                      <StyledTableCell align="right">{head[8]}</StyledTableCell>
                      <StyledTableCell align="right">{head[9]}</StyledTableCell>
                      <StyledTableCell align="right">
                        {head[10]}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {head[11]}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {head[12]}
                      </StyledTableCell>
                      {/* <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                  <StyledTableCell align="right">Calories</StyledTableCell>
                  <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                  <StyledTableCell align="right">
                    Carbs&nbsp;(g)
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    Protein&nbsp;(g)
                  </StyledTableCell> */}
                    </TableRow>
                  </TableHead>
                  <TableBody className="content">
                    {boby.map((row, index) => (
                      <StyledTableRow key={row[0]}>
                        <StyledTableCell component="th" scope="row">
                          {row[0]}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {row[1]}
                          <br />
                          <span style={{ fontSize: "9px" }}>
                            {row[2].length > 25
                              ? row[2].substring(0, 25) + "..."
                              : row[2]}
                          </span>
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row[3]}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row[4]}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row[5]}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row[6]}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row[7]}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row[8]}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row[9]}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row[10]}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row[11]}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row[12]}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>
        </div>
      </div>
    );
                }else
        return <div>...Loading</div>;
  }
}
export default  withStyles(useStyles)(LiveStatsComponent);
