interface overviewNumber {
  id: number;
  number: string;
  title: string;
  discount: string;
}
export interface datatype {
  month: string;
  value: number;
}
export const overviewNumber: overviewNumber[] = [
  {
    id: 1,
    number: "124,854",
    title: "Total Sales",
    discount: "+1.51% this week",
  },
  {
    id: 2,
    number: "23,283.5",
    title: "net sales",
    discount: "+0.49% this week",
  },
  {
    id: 3,
    number: "23,283.5",
    title: "net sales",
    discount: "+0.49% this week",
  },
  {
    id: 4,
    number: "23,283.5",
    title: "net sales",
    discount: "+0.49% this week",
  },
];
export const marktingNumber: overviewNumber[] = [
  {
    id: 1,
    number: "124,854",
    title: "Total Sales",
    discount: "+1.51% this week",
  },
  {
    id: 2,
    number: "23,283.5",
    title: "net sales",
    discount: "+0.49% this week",
  },
  {
    id: 3,
    number: "46,827",
    title: "Orders",
    discount: "-0.91% this week",
  },
  {
    id: 4,
    number: "89,935",
    title: "Subscribers",
    discount: "+1.01% this week",
  },
];
export const data: datatype[] = [
  { month: "Jan", value: 200 },
  { month: "Feb", value: 350 },
  { month: "Mar", value: 400 },
  { month: "Apr", value: 550 },
  { month: "May", value: 600 },
  { month: "Jun", value: 700 },
];
