import React, { Component } from 'react';
import DataTable from '../common/DataTable';
import TextInput from '../common/TextInput';

const FormComponent = (props) => {
    return (
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <form className="form-horizontal" autoComplete="off" onSubmit={e => {
                    e.preventDefault();
                    props.onSave(e);
                }}>
                    <fieldset>
                        <legend className="text-center text-secondary text-uppercase font-weight-bold">Add/Edit Employee Information</legend>
                        <hr className="mt-0" />

                        <TextInput label={"Id"} name={"id"} value={props.employee.id}
                            onChange={props.updateState} readOnly={props.readOnly} type={"number"} />
                        <TextInput label={"Name"} name={"name"} value={props.employee.name}
                            onChange={props.updateState} />
                        <TextInput label={"Designation"} name={"designation"} value={props.employee.designation}
                            onChange={props.updateState} />
                        <TextInput label={"Salary"} name={"salary"} value={props.employee.salary}
                            onChange={props.updateState} />

                        <div className="d-grid gap-2 mx-auto mt-3">
                            <button type="submit" className="btn btn-success">Save</button>
                            <button type="reset" className="btn btn-primary">Reset</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

class CrudAssignment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            employee: { id: 1, name: "", designation: "", salary: "" },
            edit: false
        };
        this.updateState = this.updateState.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
        this.selectEmployee = this.selectEmployee.bind(this);
        this.removeEmployee = this.removeEmployee.bind(this);
    }

    updateState(e) {
        const field = e.target.id;
        var newEmployee = { ...this.state.employee };
        if ((field === "id") && e.target.value)
            newEmployee[field] = parseInt(e.target.value);
        else if ((field === "salary") && e.target.value)
            newEmployee[field] = parseInt(e.target.value);
        else
            newEmployee[field] = e.target.value;
        this.setState({ employee: newEmployee });
    }

    saveEmployee(e) {
        if (this.state.edit) {
            var temp_employees = [...this.state.employees];
            var itemIndex = temp_employees.findIndex(e => e.id === parseInt(this.state.employee.id));
            temp_employees.splice(itemIndex, 1, { ...this.state.employee });
            this.setState({
                employees: [...temp_employees],
                employee: { id: this.getNextId(this.state.employees), name: "", designation: "", salary: "" },
                edit: false
            });
        } else {
            this.setState({ employees: [...this.state.employees, { ...this.state.employee }] }, () => {
                this.setState({ employee: { id: this.getNextId(this.state.employees), name: "", designation: "", salary: "" } });
            });
        }
    }

    getNextId(employees) {
        return employees.length ? employees[employees.length - 1].id + 1 : 1;
    }

    selectEmployee(item, allowEdit) {
        this.setState({ employee: { ...item }, edit: allowEdit });
    }

    removeEmployee(id) {
        this.setState({
            employees: [...this.state.employees.filter(item => item.id !== id)]
        }, () => {
            this.setState({ employee: { id: this.getNextId(this.state.employees), name: "", designation: "", salary: "" } });
        });
    }

    render() {
        return (
            <div>
                <FormComponent employee={this.state.employee} updateState={this.updateState}
                    onSave={this.saveEmployee} />
                <div className="mt-3 mb-3"></div>
                <DataTable items={this.state.employees} onSelect={this.selectEmployee} onDelete={this.removeEmployee}>
                    <h5 className="text-primary text-uppercase font-weight-bold">Employees Table</h5>
                </DataTable>
            </div>
        );
    }
}

export default CrudAssignment;