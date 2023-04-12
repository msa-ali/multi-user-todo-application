import NavBar from "./navbar";

type Props = {
    children: React.ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <div className="container mx-8 my-3">
            <NavBar />
            {children}
        </div>
    );
}