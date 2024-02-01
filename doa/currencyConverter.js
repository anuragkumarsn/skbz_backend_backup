import CC from "currency-converter-lt";
import { constants } from "../constants.js";

const currency = "Currency";

const currencyCoverter = {
  convertCurr: (data, cb) => {
    var { from, to, amt } = data;
    from = from.toUpperCase();
    to = to.toUpperCase();
    if (!from || !to || !amt) {
      return cb(
        true,
        null,
        "please provide currencies and amount in the parameters"
      );
    }
    let currencyConverter = new CC({ from: from, to: to, amount: amt });
    currencyConverter.convert().then((resultAmt) => {
      cb(
        null,
        { from: from, to: to, amt: resultAmt },
        currency + constants.response_messages.get_success
      );
    });
    return currencyConverter;
  },

  currencyRates: (data, cb) => {
    var { from, to } = data;
    console.log(from, to);
    from = from.toUpperCase();
    to = to.toUpperCase();
    if (!from || !to) {
      return cb(true, null, "please provide currencies in the parameters");
    }
    let currencyConverter = new CC({ from: from, to: to });
    currencyConverter.rates().then((resultAmt) => {
      cb(
        null,
        { from: from, to: to, amt: resultAmt },
        currency + constants.response_messages.get_success
      );
    });
    return currencyConverter;
  },
};

export default currencyCoverter;
