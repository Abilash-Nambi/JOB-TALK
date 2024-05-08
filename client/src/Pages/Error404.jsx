import React from "react";
import { useRouter } from "../Hooks/useRouter";
import Button from "../components/Button";

const Error404 = () => {
  const { navigate } = useRouter();
  return (
    <div>
      <section className="bg-[#FAFAFA] h-screen flex items-center">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
              Something's missing.
            </p>
            <p className="mb-4 text-lg font-light text-gray-900 dark:text-gray-400">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.{" "}
            </p>

            <Button
              onClick={() => navigate("/")}
              title="Back to Homepage"
              className="inline-flex text-white hover:text-primary bg-blue hover:bg-sky-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  my-4"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error404;
