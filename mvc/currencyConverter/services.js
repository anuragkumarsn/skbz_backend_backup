import currencyCoverter from "../../doa/currencyConverter.js";

const CurrencyConverterServices = () => {
  const ConvertCurr = (data, cb) => {
    currencyCoverter.convertCurr(data, (err, data, message) => {
      cb({ err, data, message });
    });
  };

  const CurrencyRates = (data, cb) => {
    currencyCoverter.currencyRates(data, (err, data, message) => {
      cb({ err, data, message });
    });
  };
  return {
    ConvertCurr,
    CurrencyRates,
  };
};

export default CurrencyConverterServices();
