import React from "react";
import { getBooksList } from "../../api";
class BookList extends React.Component(){
constructor(){
    super()
    this.state={
        type:"",
        name:"",
        description:"",
    }
}
componentDidMount(){//挂载 获取数据
const bookList=getBooksList;
this.setState({bookList})
}
render(){
    return(
        this.state
    )
}
}
export default BookList;