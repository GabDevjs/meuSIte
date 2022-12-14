interface SectionProps {
    children: React.ReactNode;
}

export const Section = (props: SectionProps) => {
    const {children, ...rest} = props;
    return (
        <section className="flex h-full w-full  justify-center items-center  ">
            {children}
        </section>
    );
}