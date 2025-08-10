"use client";

import React from "react";
import { Card, CardBody, Input, Textarea, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

const ContactSection: React.FC = () => {
  return (
    <section className="mt-16 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6 text-foreground">
        Contact Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Card>
            <CardBody>
              <form className="space-y-4">
                <Input
                  label="Name"
                  placeholder="Enter your name"
                  variant="bordered"
                />
                <Input
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  variant="bordered"
                />
                <Textarea
                  label="Message"
                  placeholder="Enter your message"
                  variant="bordered"
                />
                <Button color="primary" type="submit">
                  Send Message
                </Button>
              </form>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card>
            <CardBody>
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon
                    icon="lucide:phone"
                    className="text-primary mr-3 text-xl"
                  />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-default-500">+27 72 990 7902</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon
                    icon="lucide:mail"
                    className="text-primary mr-3 text-xl"
                  />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-default-500">silvabakcloudtech@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon
                    icon="lucide:map-pin"
                    className="text-primary mr-3 text-xl"
                  />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-default-500">
                      10 Grasvoel Crescent, Liefde En Vrede, Johannesburg
                    </p>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
