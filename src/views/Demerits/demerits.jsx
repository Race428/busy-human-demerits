import React, { Component } from "react";
import { withRouter, Link, Route } from "react-router-dom";
import "./demerits.scss"
import axios from 'axios'

class Demerits extends Component {
    constructor() {
        super();

        this.state = {
            newName: '',
            names: []
        };
    }

    // shouldComponentUpdate(nextProps, nextState){
    //   console.log(this.props.channels != nextProps.channels)
    //   return this.props.channels != nextProps.channels
    //   // console.log('flkdsjflk dsjfkldsj kf', nextProps.channels)
    //   // if(this.props.channels == nextProps.channels){
    //   //   console.log('same props')
    //   //   return false
    //   // }else{
    //   //   console.log("different")
    //   //   return true;
    //   // }

    // }
    componentDidMount = async () => {
        console.log("before axios")
        await axios.get('/getUsers').then(res => {
            this.setState({
                names: res.data
            })
        })

        setInterval(
           this.getUsers
            , 60000
        )
    };

    getUsers = async () => {
        console.log('ran')
        await axios.get('/getUsers').then(res => {
            this.setState({
                names: res.data
            })


        })
    }  //console.log('sup')

    nameHandle = (value) => {
        this.setState({
            newName: value
        })
    }

    addName = async () => {
        await axios.post('/addUser', { name: this.state.newName }).then(res => {
            console.log(res.data)
            var oldNames = this.state.names;
            var updatedNames = [...oldNames, res.data[0]]
            this.setState({
                names: updatedNames,
                newName: '',
            })
        })
        document.getElementById('newNameInput').value = ""
    }

    addDemerit = async (index) => {
        var user = this.state.names[index];
        await axios.post('/addDemerit', { name: user, count: +user.demerit_count + 1 }).then(res => {
            console.log(res.data)
            var names = this.state.names
            names[index] = res.data[0]
            this.setState({
                names: names
            })
        })

        // await axios.post('/addDemerit', {user_id: user.id})
    }

    subDemerit = async (index) => {
        var user = this.state.names[index];

        await axios.post('/subDemerit', { name: user, count: +user.demerit_count - 1 }).then(res => {
            console.log(res.data)
            var names = this.state.names
            names[index] = res.data[0]
            this.setState({
                names: names
            })
        })
    }


    render() {
var names = this.state.names
names.sort(function(a,b){
    if(a.name < b.name){
        return -1
    } 
    if(a.name > b.name){
        return 1
    }
})

         names = this.state.names.map((element, index) => {
            return <div className="demerit-user" key={index}>
                <h1 onClick={() => this.subDemerit(index)}>-</h1>
                <h1>{element.name}</h1>
                <h1 onClick={() => this.addDemerit(index)}>+</h1>

                <h1>{element.demerit_count}</h1>

            </div>
        })

        return (
            <>
                <div className="demerits-view">
                    <input id="newNameInput" onChange={e => this.nameHandle(e.target.value)} placeholder="Add Name" />
                    <button onClick={this.addName}>add</button>
                    {names}

                </div>

            </>
        );
    }
}
export default Demerits