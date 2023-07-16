const express = require('express');
const membersBLL = require('../BLL/membersBLL');

const membersRouter = express.Router();

//Entry Point 'http://localhost:8000/members'

membersRouter.route('/').get(async (req, res) => {
  try {
    const members = await membersBLL.getAllMembers();
    res.json(members);
  } catch (error) {
    res.json(error);
  }
});

membersRouter.route('/:id').get(async (req, res) => {
  try {
    const { id } = req.params;
    const member = await membersBLL.getMemberById(id);
    res.json(member);
  } catch (error) {
    res.json(error);
  }
});

membersRouter.route('/').post(async (req, res) => {
  try {
    const obj = req.body;
    const result = await membersBLL.addMember(obj);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

membersRouter.route('/:id').put(async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await membersBLL.updateMember(id, obj);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

membersRouter.route('/:id').delete(async (req, res) => {
  try {
    const { id } = req.params;
    const result = await membersBLL.deleteMember(id);
    res.json(result);
  } catch (error) {
    res.json(`the error is: ${error}`);
  }
});

module.exports = membersRouter;
