"use client";

import { usePathname, useRouter } from "next/navigation";
import { getPersianNumber } from "@/utils/getPersianNumber";

const Breadcrumb = ({ data, className }) => {
  const path = usePathname();
  const { push } = useRouter();

  return (
    <nav>
      {path.includes("/panel") ? (
        <ol
          className={`lg:flex hidden list-none py-4 pl-4 rounded flex-wrap bg-grey-light lg:text-xl sm:text-sm text-[9px] text-dark-title font-IranYekan-500 ${className}`}
        >
          {data.map((item, idx) => (
            <>
              <li
                className={`text-black px-2 cursor-pointer`}
                key={idx}
                onClick={() => push(item.href)}
              >
                {item.breadcrumb}
              </li>
              {idx !== data.length - 1 && <li>»</li>}
            </>
          ))}
        </ol>
      ) : (
        <>
          <ol
            className={`lg:flex hidden list-none py-4 pl-4 rounded flex-wrap bg-grey-light lg:text-base sm:text-sm text-[9px] text-dark-title font-IranYekan-500 ${className}`}
          >
            شما اینجا هستید:
            {data.map((item, idx) => (
              <>
                <li
                  className={`${idx === data.length - 1 ? "text-red-pink-breadcrumb" : "cursor-pointer"} px-2`}
                  key={item.id}
                  onClick={() =>
                    idx !== data.length - 1
                      ? push(
                          `/products/${item.slug}?category=${item.category_id}`,
                        )
                      : null
                  }
                >
                  {getPersianNumber(item.title)}
                </li>
                {idx !== data.length - 1 && <li key={item.id + 10}>»</li>}
              </>
            ))}
          </ol>
          <ol
            className={`lg:hidden flex list-none py-4 pl-4 rounded flex-wrap gap-1 bg-grey-light lg:text-base sm:text-sm text-[9px] text-dark-title font-IranYekan-500 ${className}`}
          >
            {data.map((item, idx) => (
              <>
                <li
                  key={item.id}
                  className={idx !== data.length - 1 ? `cursor-pointer` : ""}
                  onClick={() =>
                    idx !== data.length - 1
                      ? push(
                          `/products/${item.slug}?category=${item.category_id}`,
                        )
                      : null
                  }
                >
                  {getPersianNumber(item.title)}
                </li>
                {idx !== data.length - 1 && <li key={item.id + 100}>/</li>}
              </>
            ))}
          </ol>
        </>
      )}
    </nav>
  );
};

export default Breadcrumb;
