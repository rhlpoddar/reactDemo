
import dt from 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';

import React, { Component } from 'react';



const $= require('jquery');
$.DataTable= require('datatables.net');

export class Tbl  extends Component
{

    componentDidMount()
    {
        console.log(this.el)
        this.$el=$(this.el)
        this.$el.DataTable(
            {
                data:this.props.data,
                columns: [
                    { title: "" ,color:"red"},
                    { title: "Author" },
                    { title: "Labels" },
                    { title: "Projects" },
                    { title: "Start date" },
                    { title: "Team name" },
                    { title: "Sort" }
                ],
                columnDefs: [ {
                    targets: 0,
                    createdCell: function (td, cellData, rowData, row, col) {
                        
                            $(td).css('text-align', 'left');
                        
                    }
                } ]



            }



        )

        
    }

    componentWillUnmount()
    {

    }


    render()
    {
        return <div>
            <table className="display" width="100%" ref={el => this.el=el}>

            </table>
        </div>
    }
}
















