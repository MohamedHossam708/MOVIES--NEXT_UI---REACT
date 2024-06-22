import React from "react";
import {Card, CardBody,  Divider, } from "@nextui-org/react";

export default function App() {
  return (
    <Card className="w-full  bottom-0 left-0 right-0 h-[70px] flex justify-center items-center bg-slate-300 footer">
      
      <Divider/>
      <CardBody className="flex justify-center items-center">
        <h2 className="text-3xl font-bold">M <span className="text-red-700 font-semibold text-3xl">O</span> V I E S</h2>
      </CardBody>
      <Divider/>
      
    </Card>
  );
}
