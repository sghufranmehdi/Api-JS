const userService = require("../../service/userService");
module.exports = {
  gettshirt: (req, res) => {
    const data = userService.getUsers("GET ALL USER");
    res.send(data);
    res.status(200).send({
      tshirt: "👕",
      size: "large",
    });
  },

  posttshirt: (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
      res.status(418).send({ message: "We need a logo" });
    }

    const data = userService.posttshirt({
      tshirt: `👕 with your ${logo} and ID of ${id}`,
    });
    res.send(data);
  },
};
