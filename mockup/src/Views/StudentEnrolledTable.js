import React, { Component } from 'react'
import {Button} from 'reactbulma'

class StudentEnrolledTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allcredit : 19
         }
        this.handleWithdraw1 = this.handleWithdraw1.bind(this)
        this.handleWithdraw2 = this.handleWithdraw2.bind(this)
        this.handleWithdraw3 = this.handleWithdraw3.bind(this)
        this.handleWithdraw4 = this.handleWithdraw4.bind(this)
        this.handleWithdraw5 = this.handleWithdraw5.bind(this)
        this.handleWithdraw6 = this.handleWithdraw6.bind(this)
        this.handleWithdraw7 = this.handleWithdraw7.bind(this)
    }
    handleWithdraw1(){
        if(window.confirm('Are you sure to withdraw this course ?')==true)
    {
            document.getElementById("c1").hidden="true"
            this.setState ({
                allcredit :this.state.allcredit-3
            })
    }
    }
    handleWithdraw2(){
        if(window.confirm('Are you sure to withdraw this course ?')==true)
    {
            document.getElementById("c2").hidden="true"
            this.setState ({
                allcredit :this.state.allcredit-3
            })
    }
    }
    handleWithdraw3(){
        if(window.confirm('Are you sure to withdraw this course ?')==true)
    {
            document.getElementById("c3").hidden="true"
            this.setState ({
                allcredit :this.state.allcredit-3
            })
    }
    }
    handleWithdraw4(){
        if(window.confirm('Are you sure to withdraw this course ?')==true)
    {
            document.getElementById("c4").hidden="true"
            this.setState ({
                allcredit :this.state.allcredit-3
            })
    }
    }

    handleWithdraw5(){
        if(window.confirm('Are you sure to withdraw this course ?')==true)
    {
            document.getElementById("c5").hidden="true"
            this.setState ({
                allcredit :this.state.allcredit-3
            })
    }
    }
    handleWithdraw7(){
        if(window.confirm('Are you sure to withdraw this course ?')==true)
		{
            document.getElementById("c7").hidden="true"
            this.setState ({
                allcredit : this.state.allcredit-1
            })
		}
    }

    handleWithdraw6(){
        if(window.confirm('Are you sure to withdraw this course ?')==true)
		{
            document.getElementById("c6").hidden="true"
            this.setState ({
                allcredit :this.state.allcredit-3
            })
		}
    }

    render() {
        return (
            <table className="table">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Course ID</th>
                            <th>Course Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Lecturer(s)</th>
                            <th>Credit(s)</th>
                            <th></th>
                        </tr>
                    </thead>
                        <tr id="c1">
                            <td>1</td>
                            <td>953213</td>
                            <td>Operating System Principle and LANG</td>
                            <td>TBA</td>
                            <td>TBA</td>
                            <td>Dr.Passakorn Pannachitta</td>
                            <td>3</td>
                            <td><Button danger onClick={this.handleWithdraw1}>Withdraw</Button></td>
                        </tr>
                        <tr id="c2">
                            <td>2</td>
                            <td>208255</td>
                            <td>Math for SE</td>
                            <td>Tuesday, Friday</td>
                            <td>9.30 - 11.00</td>
                            <td>Lect.Morakot Intanon</td>
                            <td>3</td>
                            <td><Button danger onClick={this.handleWithdraw2}>Withdraw</Button></td>
                        </tr>
                        <tr id="c3">
                            <td>3</td>
                            <td>953201</td>
                            <td>Algorithm Design and Analysis</td>
                            <td>Thursday</td>
                            <td>14.00 - 17.00</td>
                            <td>Dr.Pattama Longani</td>
                            <td>3</td>
                            <td><Button danger onClick={this.handleWithdraw3}>Withdraw</Button></td>
                        </tr>
                        <tr id="c4">
                            <td>4</td>
                            <td>001202</td>
                            <td>English in Sceince context</td>
                            <td>Monday, Thursday</td>
                            <td>8.00 - 9.30</td>
                            <td>Pierre Yanofsky</td>
                            <td>3</td>
                            <td><Button danger onClick={this.handleWithdraw4}>Withdraw</Button></td>
                        </tr>
                        <tr id="c5">
                            <td>5</td>
                            <td>207110</td>
                            <td>Physics:Scince that change the world</td>
                            <td>Monday, Thursday</td>
                            <td>9.30 - 11.00</td>
                            <td>Lect.Krit Sriphomsett, Lect.Prakarn Unachak</td>
                            <td>3</td>
                            <td><Button danger onClick={this.handleWithdraw5}>Withdraw</Button></td>
                        </tr>
                        <tr id="c6">
                            <td>6</td>
                            <td>751100</td>
                            <td>Economics in Everyday life</td>
                            <td>Tuesday, Friday</td>
                            <td>12.30 - 14.00</td>
                            <td>Lect.Rossasin Tangpolponsawasdi</td>
                            <td>3</td>
                            <td><Button danger onClick={this.handleWithdraw6}>Withdraw</Button></td>
                        </tr>
                        <tr id="c7">
                            <td>7</td>
                            <td>057128</td>
                            <td>Tennis for Life and Exercise</td>
                            <td>Wednesday</td>
                            <td>17.00 - 18.00</td>
                            <td>Lect.Pakorn Tuisri</td>
                            <td>1</td>
                            <td><Button danger onClick={this.handleWithdraw7}>Withdraw</Button></td>
                        </tr>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>All credits</th>
                            <th>{this.state.allcredit}</th>
                            <th></th>
                        </tr>
                </table>
         )
    }
}

export default StudentEnrolledTable;
