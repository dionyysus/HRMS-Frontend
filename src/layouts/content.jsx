import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'


export default function content() {

    const[cities, setCities] = useState([]);
    
    const[selectedCity, setSelectedCity] = useState("Cities");

    return (
        <div>
            <Menu >
                <Dropdown text={selectedCity} search>
                    <Dropdown.Menu>
                        
                        <Dropdown.Item onClick={setSelectedCity}
                    </Dropdown.Menu>
                </Dropdown.Item>
               
            </Menu>
        </div>
    )
}
