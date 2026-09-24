import type { SVGProps } from "react";

type IconName =
  | "arrow"
  | "phone"
  | "pin"
  | "message"
  | "car"
  | "bike"
  | "truck"
  | "van"
  | "change"
  | "fitting"
  | "alignment"
  | "balance"
  | "nitrogen";

export function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const drawings: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M4 12h15M13 5l7 7-7 7" /></>,
    phone: <><path d="M7 3H4a2 2 0 0 0-2 2c0 9.4 7.6 17 17 17a2 2 0 0 0 2-2v-3l-5-2-2.3 2.2a16 16 0 0 1-6.9-6.9L9 8z" /></>,
    pin: <><path d="M20 10c0 5.5-8 12-8 12S4 15.5 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    message: <><path d="M4 18 2 22l5-2a10 10 0 1 0-3-2Z" /><path d="M8 9c1 3 3 5 6 6l2-2" /></>,
    car: <><path d="m4 14 2-5h12l2 5M3 14h18v5H3zM6 19v2m12-2v2M7 16h2m6 0h2" /></>,
    bike: <><circle cx="5" cy="18" r="3" /><circle cx="19" cy="18" r="3" /><path d="m5 18 4-9 5 9H5m9 0 4-7h-4m-5-2h3m6 2 1-2h2" /></>,
    truck: <><path d="M2 6h12v12H2zM14 10h4l4 4v4h-8z" /><circle cx="6" cy="19" r="2" /><circle cx="18" cy="19" r="2" /></>,
    van: <><path d="M2 8h13l5 5v6H2zM15 8v5h5M5 13h6" /><circle cx="6" cy="19" r="2" /><circle cx="17" cy="19" r="2" /></>,
    change: <><circle cx="12" cy="12" r="7" /><circle cx="12" cy="12" r="3" /><path d="M3 6l2-3 3 2M21 18l-2 3-3-2M5 3a10 10 0 0 0-2 9m16 9a10 10 0 0 0 2-9" /></>,
    fitting: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><path d="M12 4v4m0 8v4M4 12h4m8 0h4" /></>,
    alignment: <><path d="M3 7h18M3 17h18M7 3v18m10-18v18M10 12h4" /></>,
    balance: <><path d="M12 3v18M4 7h16M6 7l-3 7h6zm12 0-3 7h6zM8 21h8" /></>,
    nitrogen: <><path d="M12 2c3.5 5 7 9 7 13a7 7 0 0 1-14 0c0-4 3.5-8 7-13Z" /><path d="M9 16h6M10 12l4 8" /></>,
  };

  return <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" {...common} {...props}>{drawings[name]}</svg>;
}
