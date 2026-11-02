import type { DeviceIcon } from "@/data/devices";

type P = { className?: string };
const s = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "square" as const,
  strokeLinejoin: "miter" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

const device: Record<DeviceIcon, React.ReactNode> = {
  ocak: (<><path d="M3 9h18v11H3z" /><circle cx="8" cy="14.5" r="2" /><circle cx="16" cy="14.5" r="2" /><path d="M8 3v3M12 3v3M16 3v3" /></>),
  yerocagi: (<><path d="M5 9h14v4H5zM7 13l-2 8M17 13l2 8" /><path d="M9 5c0-1 1-2 1-2s1 1 1 2M13 5c0-1 1-2 1-2s1 1 1 2" /></>),
  buzdolabi: (<><path d="M6 2h12v20H6zM6 10h12" /><path d="M9 5v2M9 13v3" /></>),
  fritoz: (<><path d="M4 9h16v11H4z" /><path d="M8 9V5h8v4M2 5h6M8 14h8M8 17h8" /></>),
  benmari: (<><path d="M2 10h20M4 10l1 9h14l1-9" /><path d="M7 10V7h4v3M13 10V7h4v3" /></>),
  firin: (<><path d="M3 3h18v18H3zM3 8h18" /><path d="M7 12h10v5H7z" /><path d="M7 5.5h1M10 5.5h1" /></>),
  pizza: (<><path d="M12 3 3 21h18z" /><path d="M6 16c3.5-1.4 8.5-1.4 12 0" /><path d="M11 11h.01M13 15h.01" /></>),
  makarna: (<><path d="M4 9h16v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" /><path d="M2 9h20M9 4v2M12 3v3M15 4v2" /></>),
  izgara: (<><path d="M3 9h18v9H3zM7 9v9M11 9v9M15 9v9M19 9v9" /><path d="M8 3v3M12 3v3M16 3v3" /></>),
  bulasik: (<><path d="M4 2h16v20H4zM4 7h16" /><circle cx="12" cy="14" r="4" /><path d="M7 4.5h1" /></>),
};

export const DevIcon = ({ name, className = "h-6 w-6" }: { name: DeviceIcon } & P) => <svg {...s} className={className}>{device[name]}</svg>;

export const IPhone = ({ className = "h-5 w-5" }: P) => (
  <svg {...s} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2" />
  </svg>
);
export const IWa = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1-.8 1-1 1.2-.4.2-.7.1a8.2 8.2 0 0 1-4-3.5c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.8.4 3.5 3.5 0 0 0-1.1 2.6 6 6 0 0 0 1.3 3.2 13.8 13.8 0 0 0 5.3 4.7c2 .8 2.7.9 3.7.7a3.1 3.1 0 0 0 2-1.4 2.5 2.5 0 0 0 .2-1.4c-.1-.1-.3-.2-.6-.3zM12 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zm8.4-18.2A11.8 11.8 0 0 0 1.8 17.8L.1 24l6.3-1.7a11.8 11.8 0 0 0 5.6 1.4A11.8 11.8 0 0 0 20.4 3.6z" />
  </svg>
);
export const IArrow = ({ className = "h-4 w-4" }: P) => (<svg {...s} className={className}><path d="M4 12h15M13 6l6 6-6 6" /></svg>);
export const ICheck = ({ className = "h-4 w-4" }: P) => (<svg {...s} strokeWidth={2.6} className={className}><path d="m4 12 5 5L20 6" /></svg>);
export const IPlus = ({ className = "h-4 w-4" }: P) => (<svg {...s} className={className}><path d="M12 4v16M4 12h16" /></svg>);
export const IMenu = ({ className = "h-6 w-6" }: P) => (<svg {...s} className={className}><path d="M3 6h18M3 12h18M3 18h12" /></svg>);
export const IClose = ({ className = "h-6 w-6" }: P) => (<svg {...s} className={className}><path d="M5 5l14 14M19 5 5 19" /></svg>);
export const IClock = ({ className = "h-5 w-5" }: P) => (<svg {...s} className={className}><circle cx="12" cy="12" r="9" /><path d="M12 7v5h4" /></svg>);
export const IPin = ({ className = "h-5 w-5" }: P) => (<svg {...s} className={className}><path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z" /><circle cx="12" cy="10" r="2" /></svg>);
export const ITool = ({ className = "h-5 w-5" }: P) => (<svg {...s} className={className}><path d="M14 6a4 4 0 0 0 5 5l2 2-8 8-2-2 6-6M10 14 4 20" /></svg>);
export const IBook = ({ className = "h-5 w-5" }: P) => (<svg {...s} className={className}><path d="M4 4h7v16H4zM13 4h7v16h-7" /></svg>);
export const ICal = ({ className = "h-5 w-5" }: P) => (<svg {...s} className={className}><path d="M3 5h18v16H3zM3 10h18M8 3v4M16 3v4" /></svg>);
export const IAlert = ({ className = "h-5 w-5" }: P) => (<svg {...s} className={className}><path d="M12 3 2 21h20zM12 10v5M12 18h.01" /></svg>);
