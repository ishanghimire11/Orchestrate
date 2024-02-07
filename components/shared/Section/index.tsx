import React from "react";

const Section = ({
  children,
  className: classes,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => {
  return (
    <section id={id} className="px-4 md:px-12 lg:px-16">
      <div className={`max-w-screen-2xl mx-auto ${classes}`}>{children}</div>
    </section>
  );
};

export default Section;
