import styles from './styles.module.css';

//tipagem de props
type HeadingProps = {
    children: React.ReactNode;
    // attr: number;
    // attr2: string;
}

// export function Heading(props: HeadingProps) {
//     const { children } = props;
//     return <h1 className={styles.heading}>{children}</h1>
// } 
export function Heading({ children }: HeadingProps) {
    return <h1 className={styles.heading}>{children}</h1>
} 