/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Patients } = require('../models/Patients');

/**
* Creates the data
*
* patients Patients data to be created
* returns patients
* */
const createpatients = ({ patients }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Patients(patients).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* patientsId String the Id parameter
* no response value expected for this operation
* */
const deletepatients = ({ patientsId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Patients.findOneAndDelete({ _id:patientsId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAllpatients = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Patients.find().exec();
      // this is a test
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data based on user query
*
* filter String the query based on which the search is performed
* returns Object
* */
const getByParamspatients = ({ filter }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Patients.find(JSON.parse( filter )).exec();
      // this is a test
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* patientsId String the Id parameter
* returns patients
* */
const getpatients = ({ patientsId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Patients.findById(patientsId)
      .exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* patientsId String the Id parameter
* patients Patients data to be updated (optional)
* returns patients
* */
const updatepatients = ({ patientsId, patients }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Patients.findOneAndUpdate({ _id:patientsId },patients).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createpatients,
  deletepatients,
  getAllpatients,
  getByParamspatients,
  getpatients,
  updatepatients,
};
