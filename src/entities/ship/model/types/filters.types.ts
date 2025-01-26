export type Filters = {
  nations: FilterItem[];
  levels: FilterItem[];
  classes: FilterItem[];
};

export type FilterItem = {
  label: string;
  value: string;
  isChecked: boolean;
};

export type OnFilterChangeType = <T>(key: keyof Filters, value: T) => void;
