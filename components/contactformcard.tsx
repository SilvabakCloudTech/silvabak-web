"use client";
import React from "react";
import { Card, CardBody, CardFooter, CardHeader, Textarea } from "@heroui/react";
import {Form, Input, Button} from "@heroui/react";

export default function ContactFormCard() {
  const [submitted, setSubmitted] = React.useState(null);

  const onSubmit = (e:any) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    setSubmitted(null);
  };
  return (
    <Card className="bg-slate-200 dark:bg-gray-950 my-1">
      <CardHeader>
        <p className="text-xl font-bold text-slate-700 dark:text-stone-100">
        Contact Us
        </p>
      </CardHeader>
      <CardBody className="">
        <div className="flex flex-row text-blue-950 text-sm">
    <Form className="w-full max-w-xs" onSubmit={onSubmit}>
      <Input
        isRequired
        errorMessage="Please enter a valid email"
        label="Email"
        labelPlacement="outside"
        name="email"
        placeholder="Enter your email"
        type="email"
      />
      <Textarea
      isClearable
      className="max-w-xs text-slate-700 dark:text-stone-100"
      defaultValue="Please type your message here..."
      label="Description"
      placeholder="Description"
      variant="bordered"
      // eslint-disable-next-line no-console
      onClear={() => console.log("textarea cleared")}
    />
      <Button type="submit" variant="bordered">
        Submit
      </Button>
      {submitted && (
        <div className="text-small text-default-500">
          You submitted: <code>{JSON.stringify(submitted)}</code>
        </div>
      )}
    </Form>
            </div>
      </CardBody>
    </Card>
  );
}
