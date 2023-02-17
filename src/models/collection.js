'use strict';

class Collection {
  constructor(model) {
    this.model = model;
  }

  async create(json) {
    try {
      const record = await this.model.create(json);
      return record;
    } catch (error) {
      console.error('error in the collection interface');
      return error;
    }
  }

  async read(id = null) {
    try {
      if (!id) {
        //get all
        const records = await this.model.findAll();
        return records;
      } else {
        //get by id
        const singleRecord = await this.model.findByPk(id);
        return singleRecord;
      }
    } catch (error) {
      console.error('error in the collection interface');
      return error;
    }
  }

  async update(json, id) {
    try {
      const record = await this.model.update(json, { where: { id } });
      return record;
    } catch (error) {
      console.error('error in the collection interface');
      return error;
    }
  }

  async delete(id) {
    try {
      const record = await this.model.destroy({ where: { id } });
      return record;
    } catch (error) {
      console.error('error in the collection interface');
      return error;
    }
  }
}

module.exports = Collection;
