interface SectionProps {
    children: React.ReactNode;
}

export const Section = (props: SectionProps) => {
    const {children, ...rest} = props;
    return (
        <section className="flex flex-col justify-center items-center my-3">
            {children}
        </section>
    );
}