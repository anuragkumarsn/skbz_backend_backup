const Random = {
  DocId: (length) => {
    const currentDateTime = new Date().toISOString().replace(/[-:T.]/g, "");
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = currentDateTime;
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      result += characters.charAt(randomIndex);
    }

    return result;
  },
};

export default Random;
