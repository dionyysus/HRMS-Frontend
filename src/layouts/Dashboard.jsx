import React from 'react'
import { Grid, GridRow } from 'semantic-ui-react'
import JobAdvertisementList from '../pages/JobAdvertisement/JobAdvertisementList'
import EmployeeList from '../pages/User/Employee/EmployeeList'
import EmployerList from '../pages/User/Employer/EmployerList'
import SideBar from './SideBar'
import { Route } from 'react-router'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import SignUp from './SignUp'
import JobAdDetail from '../pages/JobAdvertisement/JobAdDetail'
import JobAdForm from '../pages/JobAdvertisement/JobAdForm'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <GridRow>
                    <Grid.Column width={4}>
                        <SideBar />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Route path = "/employees" component = {EmployeeList}/>
                        <Route path = "/employers" component = {EmployerList}/>
                        <Route path = "/jobAdvertisements" component = {JobAdvertisementList}/>
                        <Route path = "/signIn" component = {SignedIn}/>
                        <Route path = "/signOut" component = {SignedOut}/>
                        <Route path = "/signUp" component = {SignUp}/>
                        <Route path = "/jobAdDetail:id" component = {JobAdDetail}/>
                        <Route path = "/jobAdForm" component = {JobAdForm}/>


                    </Grid.Column>
                </GridRow>
            </Grid>
        </div>
    )
}
