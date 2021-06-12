import React from 'react'
import { Grid, GridRow } from 'semantic-ui-react'
import JobAdvertisementList from '../pages/JobAdvertisement/JobAdvertisementList'
import EmployeeList from '../pages/User/Employee/EmployeeList'
import EmployerList from '../pages/User/Employer/EmployerList'
import SideBar from './SideBar'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <GridRow>
                    <Grid.Column width={4}>
                        <SideBar />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <EmployeeList />
                        <EmployerList />
                        <JobAdvertisementList />
                    </Grid.Column>
                </GridRow>
            </Grid>
        </div>
    )
}
