import admins from "../schema/admin.js";

const resolvers = {
  Record: {
    id: (parent) => parent.id ?? parent._id,
  },
  Query: {
    async record(_, { id }) {
      let query = { _id: id };
      let record = await admins.findOne(query);
      return record;
    },
    async records(_, __, context) {
      const records = await admins.find({});
      return { ...records, permissions: "permissions" };
    },
  },
  Mutation: {
    async createRecord(
      _,
      {
        username,
        password,
        email,
        phoneNumber,
        role,
        permissions,
        firstName,
        lastName,
        address,
      },
      context
    ) {
      // let collection = await db.collection("records");
      const insert = await new admins({
        username,
        password,
        email,
        phoneNumber,
        role,
        permissions,
        firstName,
        lastName,
        address,
      });
      const recordSave = await insert.save();
      console.log("recordSave : ", recordSave);
      if (recordSave)
        return {
          data: JSON.stringify(recordSave),
        };
      return null;
    },
    async updateRecord(_, args, context) {
      const id = new ObjectId(args.id);
      let query = { _id: new ObjectId(id) };
      let collection = await db.collection("records");
      const update = await collection.updateOne(query, { $set: { ...args } });

      if (update.acknowledged) return await collection.findOne(query);

      return null;
    },
    async deleteRecord(_, { id }, context) {
      let collection = await db.collection("records");
      const dbDelete = await collection.deleteOne({ _id: new ObjectId(id) });
      return dbDelete.acknowledged && dbDelete.deletedCount == 1 ? true : false;
    },
  },
};

export default resolvers;
