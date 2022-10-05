/*
import React, {Component} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import {DataGrid} from '@mui/x-data-grid';
import {SERVER_URL} from '../constants.js'
import TextField from '@mui/material/TextField';


class AddStudent extends Component {
    constructor(props) {
    super(props);
    this.state = {open: false, student:{ } };
  };
  
  handleClickOpen = () => {
    this.setState( {open:true} );
  };

  handleClose = () => {
    this.setState( {open:false} );
  };

  handleChange = (event) => {
    this.setState({course:{student_id: event.target.value}});
  }

// Save course and close modal form
  handleAdd = () => {
     this.props.AddStudent(this.state.course);
     this.handleClose();
  }

  render()  { 
    return (
        <div>
          <Button variant="outlined" color="primary" style={{margin: 10}} onClick={this.handleClickOpen}>
            Add Student
          </Button>
          <Dialog open={this.state.open} onClose={this.handleClose}>
              <DialogTitle>Add Student</DialogTitle>
              <DialogContent  style={{paddingTop: 20}} >
                <TextField autoFocus fullWidth label="Student Id" name="student_id" onChange={this.handleChange}  /> 
              </DialogContent>
              <DialogActions>
                <Button color="secondary" onClick={this.handleClose}>Cancel</Button>
                <Button id="Add" color="primary" onClick={this.handleAdd}>Add</Button>
              </DialogActions>
            </Dialog>      
        </div>
    ); 
  }
}

// required property:  addStudent is a function to call to perform the Add action
AddStudent.propTypes = {
addStudent : PropTypes.func.isRequired
}

export default AddStudent;
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


// properties addCoure is required, function called when Add clicked.
class AddCourse extends Component {
      constructor(props) {
      super(props);
      this.state = {open: false, course:{ } };
    };
    
    handleClickOpen = () => {
      this.setState( {open:true} );
    };

    handleClose = () => {
      this.setState( {open:false} );
    };

    handleChange = (event) => {
      this.setState({course:{course_id: event.target.value}});
    }

  // Save course and close modal form
    handleAdd = () => {
       this.props.addCourse(this.state.course);
       this.handleClose();
    }

    render()  { 
      return (
          <div>
            <Button variant="outlined" color="primary" style={{margin: 10}} onClick={this.handleClickOpen}>
              Add Student
            </Button>
            <Dialog open={this.state.open} onClose={this.handleClose}>
                <DialogTitle>Add Student</DialogTitle>
                <DialogContent  style={{paddingTop: 20}} >
                  <TextField autoFocus fullWidth label="Student Name" name="student_name" onChange={this.handleChange}  /> 
                  <TextField autoFocus fullWidth label="Student Email" name="student_email" onChange={this.handleChange}  /> 
                </DialogContent>
                <DialogActions>
                  <Button color="secondary" onClick={this.handleClose}>Cancel</Button>
                  <Button id="Add" color="primary" onClick={this.handleAdd}>Add</Button>
                </DialogActions>
              </Dialog>      
          </div>
      ); 
    }
}

// required property:  addCourse is a function to call to perform the Add action
AddCourse.propTypes = {
  addCourse : PropTypes.func.isRequired
}

export default AddCourse;