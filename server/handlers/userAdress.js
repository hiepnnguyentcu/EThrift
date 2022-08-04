const { UserAddress, validateUserAddress } = require("../models/userAddress");

// add
exports.addUserAddress = async function (req, res) {
  try {
    const addressData = req.body;
    addressData.userHandle = req.user.handle;

    const { error } = validateUserAddress(addressData);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const address = new UserAddress(addressData);
    await address.save();
    return res.status(200).json(address.getBriefData());
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong." });
  }
};

// Get all user addresses
exports.getUserAddresses = async function (req, res) {
  try {
    const handle = req.user.handle;

    const addresses = await UserAddress.find({ userHandle: handle }).exec();

    const responseData = addresses.map((address) => address.getData());

    return res.status(200).json(responseData);
  } catch {
    return res.status(500).json({ message: "Something went wrong." });
  }
};

// edit
exports.editUserAddress = async function (req, res) {
  try {
    const addressData = req.body;
    const addressID = req.params.id;
    const userHandle = req.user.handle;

    const oldAddress = await UserAddress.findById(addressID).exec();

    if (!oldAddress) {
      return res.status(404).json({ message: "User address doesn't exist" });
    }

    if (oldAddress.userHandle != userHandle) {
      return res.status(400).json({ message: "User not allowed" });
    }

    const newAddressData = {
      ...oldAddress.getBriefData(),
      ...addressData,
    };

    const { err } = validateUserAddress(newAddressData);

    if (err) {
      return res.status(400).json({ message: error.details[0].message });
    }

    for (let key in newAddressData) {
      oldAddress[key] = newAddressData[key];
    }

    await oldAddress.save();

    return res.status(200).json(oldAddress.getBriefData());
  } catch {
    return res.status(500).json({ message: "Something went wrong." });
  }
};
