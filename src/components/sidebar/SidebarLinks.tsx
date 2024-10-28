import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsChevronDown } from "react-icons/bs";
import { IRouteItem, IRouteSection, ISidebarLinksProps } from "../interface";

export function SidebarLinks({ routes }: ISidebarLinksProps) {
  const pathname = usePathname();
  const isActiveRoute = (urlPath: string) => pathname.includes(urlPath);

  // Define the component to render each route section
  const RouteSection = ({ title, items }: IRouteSection) => {
    const [isExpanded, setIsExpanded] = useState(true);
    const toggleExpanded = () => setIsExpanded((prev) => !prev);
    const subroutes = items?.map((item) => item.subroutes);
    const titlePath = `${title.toLowerCase().replace(/\s+/g, "-")}`;

    return (
      <div className=" w-auto">
        <div
          className="mb-4 flex  cursor-pointer justify-between"
          onClick={toggleExpanded}
        >
          <p
            className={`ml-[2rem] text-[16px] font-semibold text-secondaryColor  ${
              isActiveRoute(titlePath)
                ? "text-primaryColor"
                : "text-secondaryColor"
            }`}
          >
            <Link href={titlePath}>{title}</Link>
          </p>
          {subroutes?.length > 0 && (
            <BsChevronDown
              size={14}
              color="#1C222F"
              className={`my-auto ml-[2rem] transition-transform`}
              style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0)" }}
            />
          )}
        </div>
        {isExpanded &&
          items?.map((route, index) => (
            <Link key={index} href={`${route.layout}/${route.path}`}>
              <div className="relative text-[14px] flex hover:cursor-pointer">
                <li
                  className={`ml-[1rem] flex items-center rounded-lg px-8 py-4`}
                >
                  <p
                    className={`leading-1 ml-4 ${
                      isActiveRoute(route.path)
                        ? "font-bold text-primaryColor"
                        : "text-secondaryColor"
                    }`}
                  >
                    {route.name}
                  </p>
                </li>
              </div>
            </Link>
          ))}
      </div>
    );
  };

  return (
    <>
      {routes
        // .filter((section) => section.items && section.items.length > 0)
        .map((section: IRouteSection) => (
          <RouteSection
            key={section.title}
            title={section.name}
            items={section.subRoutes}
          />
        ))}
    </>
  );
}

export default SidebarLinks;
