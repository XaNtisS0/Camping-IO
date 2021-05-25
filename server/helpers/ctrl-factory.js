const mongoose = require("mongoose");
const capitalize = require("./capitalize");

const factoryCreateEndpoint = (model, additionalLogic) => async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: `You must provide ${capitalize(
        model.collection.name.slice(0, -1)
      )}.`,
    });
  }

  if (additionalLogic) {
    try {
      for (const element in additionalLogic) {
        const { validator, additionalVariables } = additionalLogic[element];
        await validator(additionalVariables, req.body);
      }
    } catch (error) {
      return res.status(400).json({ success: false, error });
    }
  }

  try {
    const object = new model(body);
    await object.save();
    return res.status(201).json({
      success: true,
      id: object._id,
      message: `${capitalize(model.collection.name.slice(0, -1))} created.`,
    });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
};

const factoryGetAllEndpoint = (model) => async (_, res) => {
  const modelName = capitalize(model.collection.name);
  try {
    await mongoose.model(modelName).find({}, (error, objects) => {
      if (error) {
        return res.status(400).json({ success: false, error });
      }
      if (!objects.length) {
        return res.status(404).json({
          success: false,
          error: `No ${model.collection.name} found.`,
        });
      }

      return res.status(200).json({ success: true, data: objects });
    });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
};

const factoryGetOneByIdEndpoint = (model) => async (req, res) => {
  try {
    await model.findOne({ _id: req.params.id }, (error, object) => {
      if (error) {
        return res.status(400).json({ success: false, error });
      }
      if (!object) {
        return res.status(404).json({
          success: false,
          error: `${capitalize(model.collection.name)} with this Id not found.`,
        });
      }

      return res.status(200).json({ success: true, data: object });
    });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
};

const factoryUpdateEndpoint = (model, additionalLogic) => async (req, res) => {
  try {
    await model.findOne(
      { _id: req.params.id },
      async (error, objectToUpdate) => {
        if (error) {
          return res.status(400).json({ success: false, error });
        }
        if (!objectToUpdate) {
          return res.status(404).json({
            success: false,
            error: `${capitalize(
              model.collection.name.slice(0, -1)
            )} with this Id not found.`,
          });
        }

        if (additionalLogic) {
          try {
            for (const element in additionalLogic) {
              const { validator, additionalVariables } =
                additionalLogic[element];
              await validator(additionalVariables, req.body);
            }
          } catch (error) {
            return res.status(400).json({ success: false, error });
          }
        }

        const body = req.body;
        for (const [key, value] of Object.entries(body)) {
          await objectToUpdate.update({ [key]: value });
        }

        try {
          objectToUpdate.save();
          return res.status(200).json({ success: true, data: objectToUpdate });
        } catch (error) {
          return res.status(400).json({ success: false, error });
        }
      }
    );
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
};

const factoryDeleteEndpoint = (model, options) => async (req, res) => {
  try {
    await model.deleteOne({ _id: req.params.id }, options, (error) => {
      if (error) return res.status(400).json({ success: false, error });
      return res
        .status(204)
        .json({
          success: true,
          message: "You succesfully deleted this instance.",
        });
    });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
};

module.exports = {
  factoryCreateEndpoint,
  factoryGetAllEndpoint,
  factoryGetOneByIdEndpoint,
  factoryUpdateEndpoint,
  factoryDeleteEndpoint,
};
