import *as React from 'react'
import AppHeader from '../Components/header.js'
import firebase from 'firebase'
import db from '../config.js'

export default class RecevierDetails extends React.Component{
    constructor(){
        super()
        this.state={
            recevierfirstName:'',
            recevierlastName:'',
            recevieraddress:'',
            receviercontactNo:'',
            title:this.props.navigation.getParam('details')['title'],
            reason:this.props.navigation.getParam('details')['reason'],
            userID:firebase.auth().currentUser.email,
            recevierId:this.props.navigation.getParam('details')['userId'],
            requestId:this.props.navigation.getParam('details')['requestId']
        }
    }

    componentDidMount(){
        this.getRecevierDetails()
    }

    render(){
        return(
            <AppHeader title='RecevierDetails' navigation={this.props.navigation}></AppHeader>
        )
    }
    getRecevierDetails=()=>{
        db
        .collection('users')
        .where('email','==',this.state.recevierId)
        .get()
        .then((data)=>{
            console.log(data)
        })
    }
}