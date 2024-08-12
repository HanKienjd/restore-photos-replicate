import styled from "styled-components";
import Link from "next/link";
import {Button} from "../ui/button";


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #f2f2f2;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const LogoComponent = () => {
    return (<div className={'uppercase text-xl font-bold'}>
        ZenoByte
    </div>)
}

const MenuComponent = () => {
    return (<div className={'flex space-x-4'}>
        <Link href={'#'} className={'text-gray-600 hover:text-gray-800'}>Pricing</Link>
    </div>)
}

export const Header = () => {
    return (<Container>
        <div className={'mx-auto w-1/2'}>
            <div className={'flex space-x-4 justify-between items-center'}>
                <LogoComponent/>
                <div className={'flex space-x-4 items-center'}>
                    <MenuComponent/>
                    <Button>Login</Button>
                </div>
            </div>
        </div>
    </Container>)
}
