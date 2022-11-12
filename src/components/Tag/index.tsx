interface Props {
  url?: string;
  name: string;
}

export default function Tags({ name, url }: Props) {
  return (
    <a href={url} className="cursor-pointer">
      <span className="mr-4 mt-2 inline-block rounded-full bg-custom-purple px-3 py-1 text-xs font-semibold">
        {name as string}
      </span>
    </a>
  );
}
