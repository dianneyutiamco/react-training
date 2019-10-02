import React from "react";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: "",
            dayOfWeek: "Wednesday"
        };
    }
 
    handleChange = (event) => {
        // we can use computed property name or use the state key directly
        let targetName = event.target.name;
        this.setState({
            [targetName]: event.target.value
        });
    }

    handleSubmitClick = (event) => {
        console.log(this.state.todo);
        event.preventDefault();
    }

    render() {
        return(
            <form>
                <input type="text" name="todo" value={this.state.todo} onChange={this.handleChange}/>
                <select name="dayOfWeek" value={this.state.dayOfWeek} onChange={this.handleChange}>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                </select>
                <input type="submit" value="Submit" onClick={this.handleSubmitClick}/>
            </form>
        );
    }
}

export default TodoForm;