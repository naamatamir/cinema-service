const Member = require('../models/memberModel');
const { fetchUsersData } = require('../API/membersAPI');

const populateMembersCollection = async () => {
  try {
    const apiData = await fetchUsersData();
    const filteredData = apiData.map(({ name, email, address: { city }}) => ({ name, email, city}));

    await Member.bulkWrite(
      filteredData.map((fd) => ({
        updateOne: {
          filter: { name: fd.name },
          update: fd,
          upsert: true,
        },
      }))
    );

    console.log('Members collection populated');
  } catch (error) {
    console.error('Failed to populate members collection', error);
    throw error;
  }
};

const getAllMembers = () => {
  try {
    return Member.find({});
  } catch (error) {
    throw error;
  }
};

const getMemberById = (id) => {
  try {
    return Member.findById({ _id: id });
  } catch (error) {
    throw error;
  }
};

const addMember = async (obj) => {
  try {
    const newMember = new Member(obj);
    await newMember.save();
    return 'created new Member';
  } catch (error) {
    throw error;
  }
};

const updateMember = async (id, obj) => {
  try {
    await Member.findByIdAndUpdate(id, obj);
    return `updated Member with id: ${id}`;
  } catch (error) {
    throw error;
  }
};

const deleteMember = async (id) => {
  try {
    await Member.findByIdAndDelete(id);
    return `deleted Member with id: ${id}`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  populateMembersCollection,
  getAllMembers,
  getMemberById,
  addMember,
  updateMember,
  deleteMember,
};
