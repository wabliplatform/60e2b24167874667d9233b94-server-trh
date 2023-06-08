/**
 * The PatientsController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/PatientsService');
const createpatients = async (request, response) => {
  await Controller.handleRequest(request, response, service.createpatients);
};

const deletepatients = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletepatients);
};

const getAllpatients = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllpatients);
};

const getByParamspatients = async (request, response) => {
  await Controller.handleRequest(request, response, service.getByParamspatients);
};

const getpatients = async (request, response) => {
  await Controller.handleRequest(request, response, service.getpatients);
};

const updatepatients = async (request, response) => {
  await Controller.handleRequest(request, response, service.updatepatients);
};


module.exports = {
  createpatients,
  deletepatients,
  getAllpatients,
  getByParamspatients,
  getpatients,
  updatepatients,
};
