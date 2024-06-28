import Link from "next/link";

type BreadcrumbsProps = {
  fragments: { title: string; href: string }[];
};

export const Breadcrumbs = (params: BreadcrumbsProps) => {
  return (
    <div className="text-sm breadcrumbs *:text-lg ml-[3.75%] mt-10 hidden lg:flex ">
      <ul>
        {params.fragments.map((fragment, index) => {
          return (
            <li key={index}>
              <Link
                style={{ textDecoration: "none" }}
                className={
                  index === params.fragments.length - 1
                    ? "text-background font-semibold"
                    : "font-semibold"
                }
                href={fragment.href}
              >
                {fragment.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
