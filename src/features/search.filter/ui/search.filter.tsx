import { Input } from "@/shared/ui";

type SearchFilterProps = {
  onFilterByTitle: (title: string) => void;
};

export const SearchFilter = (props: SearchFilterProps) => {
  const { onFilterByTitle } = props;

  return <Input changeCallback={onFilterByTitle} />;
};
