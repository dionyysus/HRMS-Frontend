import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Container, Menu, Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom";



export default function Navi() {


    const [isAuthenticated, setIsAuthenticated] = useState(true);

    const history = useHistory()

    function handleSignOut() {
        setIsAuthenticated(false);
        history.push("/");
    }

    function handleSignIn() {
        setIsAuthenticated(true);
    }

    return (
        <div>

            <Menu size="large" inverted stackable>
                <Container>

                    <Menu.Item name="Home" as={Link} to={"/"}>
                        <Icon name="home" />Home
                    </Menu.Item>
                    
                    <Menu.Item name='user' as={Link} to={"/employees"}
                    >
                        <p>Employee</p>
                    </Menu.Item>

                    <Menu.Item
                        name='jobAdvertisement' as={Link} to={"/jobAdvertisements"}
                    >
                        <p>Job Advertisements</p>
                    </Menu.Item>

                    <Menu.Item
                        name='user' as={Link} to={"/employers"}
                    >
                        <p>Employer</p>   
                    </Menu.Item>

                    <Menu.Menu position="right" style={{ margin: '0.5em' }}>
                        <Button primary as={Link} to={"/jobAdForm"}>
                            Add Job Advertisement
                        </Button>
                        <Button.Group>
                            <Button as={Link} to={"/signIn"}>Sign In</Button>
                            <Button.Or />
                            <Button positive as={Link} to={"/signUp"}>Sign Up</Button>
                        </Button.Group>
                    </Menu.Menu>
                </Container>
            </Menu>
            {/* <Menu inverted fixed="top" >
                <Container>
                    <Menu.Item
                        name='home'
                    />
                    <Menu.Item
                        name='messages'
                    />
                    <Menu.Menu position='right'>
                        {isAuthenticated ? <SignedIn signOut={handleSignOut} bisey = "1" />
                            : <SignedOut signIn={handleSignIn} />}
                    </Menu.Menu>
                </Container>
            </Menu> */}
        </div>
    )
}
