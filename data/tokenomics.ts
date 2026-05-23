import type { TokenAllocation, WeeklyScheduleItem } from "@/types/tokenomics";

export const tokenAllocations: TokenAllocation[] = [
  {
    label: "Dev Wallet",
    percentage: 70,
    summary: "Development and operations",
    description:
      "Used for development, infrastructure, operations, marketplace expansion, SDK work, security, hosting and long-term Modulr growth.",
    icon: "dev",
    walletAddress: "8KmTMWadv8cF11rYWmzcPRvu8Kvwc7YWFW2aTtJDFcTu"
  },
  {
    label: "Buyback Wallet",
    percentage: 15,
    summary: "Weekly buybacks",
    description:
      "Used for weekly $MODU buybacks. Bought-back $MODU is locked for 6 months to support long-term ecosystem alignment.",
    icon: "buyback",
    walletAddress: "7ruKgwFFMjwSb3vuQjtioiUFU4wLvUR37Wu6UY7THtqF",
    moduLocked: "0"
  },
  {
    label: "Giveaway Wallet",
    percentage: 15,
    summary: "Community rewards",
    description: "Used for weekly community giveaways and ecosystem rewards.",
    icon: "giveaway",
    walletAddress: "9NTQLapaZJNruaB7hyDubjKvdyX1ZqN8y7fzsFL4kswq"
  }
];

export const weeklySchedule: WeeklyScheduleItem[] = [
  {
    day: "Friday",
    time: "10:00 CET",
    title: "Giveaways open",
    details: ["Giveaways open for the week."]
  },
  {
    day: "Saturday",
    title: "Creator fee distribution",
    details: [
      "Creator fees are claimed from pump.fun volume.",
      "15% is sent to the buyback wallet.",
      "Buybacks are executed.",
      "Bought-back $MODU is locked for 6 months.",
      "15% is sent to the giveaway wallet."
    ]
  },
  {
    day: "Sunday",
    time: "20:00 CET",
    title: "Winner announced",
    details: ["The weekly giveaway winner is announced."]
  }
];
