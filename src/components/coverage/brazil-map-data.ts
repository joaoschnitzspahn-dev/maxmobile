import brazilMap from "@svg-maps/brazil";

type BrazilLocation = (typeof brazilMap.locations)[number];

export const BRAZIL_VIEWBOX = brazilMap.viewBox;

export const BRAZIL_STATES: BrazilLocation[] = brazilMap.locations;

export const COVERAGE_POINTS = [
  { id: "norte", label: "Norte", cx: 248, cy: 198, delay: 0 },
  { id: "nordeste", label: "Nordeste", cx: 518, cy: 268, delay: 0.15 },
  { id: "centro-oeste", label: "Centro-Oeste", cx: 368, cy: 338, delay: 0.3 },
  { id: "sudeste", label: "Sudeste", cx: 448, cy: 448, delay: 0.45 },
  { id: "sul", label: "Sul", cx: 358, cy: 568, delay: 0.6 },
] as const;

export const COVERAGE_CONNECTIONS = [
  "M 248 198 L 368 338 L 448 448 L 358 568",
  "M 518 268 L 448 448",
  "M 248 198 L 518 268",
] as const;
