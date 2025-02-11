import { z } from "zod";
import { BellOff, Bell, Disc2, CreditCard } from "lucide-react";
import { FaPaypal, FaApple } from "react-icons/fa";

export const formSchema = z.object({
  email: z.string().min(2, {
    message: "enter your email",
  }),
  password: z.string().min(2, {
    message: "password must be at least 5 characters long.",
  }),
});

export const paymentType = [
  {
    id: "1",
    name: "Card",
    icon: CreditCard,
  },
  {
    id: "2",
    name: "Paypal",
    icon: FaPaypal,
  },
  {
    id: "3",
    name: "apple",
    icon: FaApple,
  },
];

export const teamMembers = [
  {
    id: "1",
    name: "sofia davis",
    email: "sofia@gmail.com",
    status: "owner",
    image: "/",
  },
  {
    id: "2",
    name: "Jackson Lee",
    email: "Jackson@gmail.com",
    status: "member",
    image: "/",
  },
];

export const shareDocument = [
  {
    id: "1",
    name: "sofia davis",
    email: "sofia@gmail.com",
    status: "can view",
    image: "/",
  },
  {
    id: "2",
    name: "Jackson Lee",
    email: "Jackson@gmail.com",
    status: "can edit",
    image: "/",
  },
  {
    id: "3",
    name: "Olivia Martin",
    email: "Olivia@gmail.com",
    status: "can edit",
    image: "/",
  },
];

export const notificationData = [
  {
    id: "1",
    name: "everything",
    desc: "email digest,mentions & all activity",
    icon: Bell,
  },
  {
    id: "2",
    name: "avaible",
    desc: "only memntions and comments",
    icon: Disc2,
  },
  {
    id: "3",
    name: "ignoring",
    desc: "turn off all notifications",
    icon: BellOff,
  },
];

export const paymentSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  card: z.string().min(2, {
    message: "you must enter your card number",
  }),
  month: z.string().min(2, {
    message: "you must enter your card number",
  }),
  cvv: z.string().min(2, {
    message: "you must enter your card number",
  }),
  year: z.string().min(2, {
    message: "you must enter your card number",
  }),
});
