interface HeaderProps {
  label: string;
  subLabel?: string;
}

export const Header = ({
  label,
  subLabel = "Fill out the form",
}: HeaderProps) => {
  return (
    <div className="w-full text-center flex flex-col gap-y-4 items-center justify-center">
      <h1 className="text-3xl md:text-6xl text-zinc-800 dark:text-zinc-100 font-semibold">
        {label}
      </h1>
      <p className="text-zinc-800 dark:text-zinc-100">{subLabel}</p>
    </div>
  );
};
