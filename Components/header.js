import *as React from 'react'
import { StyleSheet } from 'react-native'
import {Header,Icon} from 'react-native-elements'


export default class AppHeader extends React.Component{
render(){
    return(
    <Header
    leftComponent={<Icon name='bars' type='font-awesome' color='#696969' /*onPress={() => props.navigation.toggleDrawer()}*//>}
    centerComponent={{text:this.props.title,style:{
        justifyContent:'center',
        alignItems:'center'
    }}}
    ></Header>
    )
}

}

const styles=StyleSheet.create({
    headerView:{
        justifyContent:'center',
        alignItems:'center'
    }
})