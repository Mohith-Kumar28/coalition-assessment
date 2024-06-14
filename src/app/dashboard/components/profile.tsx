import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Phone, Shield, User } from "lucide-react";

const notifications = [
  {
    icon: <Calendar size={20} />,
    title: "August 23, 1996",
    description: "Date Of Birth",
  },
  {
    icon: <User size={20} />,
    title: "Female",
    description: "Gender",
  },
  {
    icon: <Phone size={20} />,
    title: "(415) 555-1234",
    description: "Contact Info.",
  },
  {
    icon: <Phone size={20} />,
    title: "(415) 555-5678",
    description: "Emergency Contacts",
  },
  {
    icon: <Shield size={20} />,
    title: "Sunrise Health Assurance",
    description: "Insurance Provider",
  },
];

type CardProps = React.ComponentProps<typeof Card>;

export function Profile({ className, ...props }: CardProps) {
  return (
    <Card className={cn("", className)} {...props}>
      <CardHeader className="flex flex-col gap-4  justify-center align-middle">
        <Avatar className=" size-28 mx-auto flex ">
          <AvatarImage src="/assets/people/01.png" alt="Avatar" />
          <AvatarFallback>JT</AvatarFallback>
        </Avatar>
        <CardTitle className="text-center ">Jessica Taylor</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="pb-3 px-3">
          {notifications.map((notification, index) => (
            <div
              key={index}
              className=" grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              {/* <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" /> */}
              <div className="rounded-full flex justify-center align-middle bg-background p-2 aspect-square size-10">
                {notification.icon}
              </div>

              <div className="space-y-1 ml-8">
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="mx-auto">Share all information</Button>
      </CardFooter>
    </Card>
  );
}
