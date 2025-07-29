const units: Array<{
  unit: Intl.RelativeTimeFormatUnit;
  milliseconds: number;
}> = [
  { unit: "year", milliseconds: 1000 * 60 * 60 * 24 * 365 },
  { unit: "month", milliseconds: 1000 * 60 * 60 * 24 * 30 },
  { unit: "day", milliseconds: 1000 * 60 * 60 * 24 },
  { unit: "hour", milliseconds: 1000 * 60 * 60 },
  { unit: "minute", milliseconds: 1000 * 60 },
  { unit: "second", milliseconds: 1000 },
];

const formatTime = (time: Date) => {
  const diff = time.getTime() - Date.now();

  for (const { unit, milliseconds } of units) {
    const ratio = diff / milliseconds;
    if (Math.abs(ratio) >= 1) {
      const rtf = new Intl.RelativeTimeFormat("en-US", {
        numeric: "auto",
        style: "short",
      });
      return rtf.format(Math.round(ratio), unit);
    }
  }
  return 'now';
};

export { formatTime };
