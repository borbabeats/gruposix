export default function Section({children, className}: {children: React.ReactNode, className?: string}){
    return(
        <section className={`flex flex-col items-center justify-center py-10 px-8 ${className || ''}`}>
            {children}
        </section>
    )
}