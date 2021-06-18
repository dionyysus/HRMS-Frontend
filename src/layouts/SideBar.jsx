import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default function SideBar() {
    return (
        <div>
            <Menu vertical inverted size="top">

                <Menu.Item as={Link} to={"/employees"}
                    name='user'

                >

                    <p>Employee</p>
                </Menu.Item>

                <Menu.Item as={Link} to={"/jobAdvertisements"}
                    name='jobAdvertisement'

                >

                    <p>Job Advertisements</p>
                </Menu.Item>

                <Menu.Item as={Link} to={"/employers"}
                    name='user'

                >

                    <p>Employer</p>
                </Menu.Item>

                <Menu.Item as={Link} to={"/jobAdConfirm"}
                    name='jobAdvertisement'

                >

                    <p> Confirm Job Advertisement</p>
                </Menu.Item>
            </Menu>

        </div>
    )
}
