import React from "react";
import { Table } from "react-bootstrap";

const TableCompo = () => {
  return (
    <Table striped bordered hover className="my-5 text-center w-100">
      <thead>
        <tr className="row">
          <th className=" col-2 text-center ident">E / M</th>
          <th className=" col-2 ">JAN</th>
          <th className=" col-2 ">FEB</th>
          <th className=" col-2 ">MAR</th>
          <th className=" col-2 ">APR</th>
          <th className=" col-2 ">MAY</th>
        </tr>
      </thead>
      <tbody>
        <tr className="row">
          <td className="text-start col-2">Ahmed Mostafa</td>
          <td className="col-2 ">250$</td>
          <td className="col-2 ">270$</td>
          <td className="col-2 ">300$</td>
          <td className="col-2 ">350$</td>
          <td className="col-2 ">400$</td>
        </tr>
        <tr className="row">
          <td className="text-start col-2">Karim Khaled</td>
          <td className="col-2 ">150$</td>
          <td className="col-2 ">170$</td>
          <td className="col-2 ">200$</td>
          <td className="col-2 ">250$</td>
          <td className="col-2 ">300$</td>
        </tr>{" "}
        <tr className="row">
          <td className="text-start col-2">Mohamed Soliman</td>
          <td className="col-2 ">350$</td>
          <td className="col-2 ">390$</td>
          <td className="col-2 ">400$</td>
          <td className="col-2 ">450$</td>
          <td className="col-2 ">450$</td>
        </tr>{" "}
        <tr className="row">
          <td className="text-start col-2">Mahmoud Samy</td>
          <td className="col-2 ">170$</td>
          <td className="col-2 ">190$</td>
          <td className="col-2 ">200$</td>
          <td className="col-2 ">200$</td>
          <td className="col-2 ">250$</td>
        </tr>{" "}
        <tr className="row">
          <td className="text-start col-2">Petar Soliman</td>
          <td className="col-2 ">350$</td>
          <td className="col-2 ">350$</td>
          <td className="col-2 ">400$</td>
          <td className="col-2 ">450$</td>
          <td className="col-2 ">500$</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TableCompo;
